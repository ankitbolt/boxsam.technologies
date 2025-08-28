import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface AnalyticsEvent {
  event_name: string;
  event_data?: any;
  page_url?: string;
}

export const useAnalytics = () => {
  // Generate session ID
  const getSessionId = () => {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  };

  const trackEvent = async ({ event_name, event_data = {}, page_url }: AnalyticsEvent) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      await supabase.from('analytics_events').insert({
        event_name,
        event_data,
        user_id: user?.id || null,
        session_id: getSessionId(),
        page_url: page_url || window.location.href,
        user_agent: navigator.userAgent
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackPageView = (page_url?: string) => {
    trackEvent({
      event_name: 'page_view',
      event_data: {
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      },
      page_url
    });
  };

  const trackButtonClick = (button_name: string, additional_data?: any) => {
    trackEvent({
      event_name: 'button_click',
      event_data: {
        button_name,
        ...additional_data
      }
    });
  };

  const trackFormSubmission = (form_name: string, form_data?: any) => {
    trackEvent({
      event_name: 'form_submission',
      event_data: {
        form_name,
        ...form_data
      }
    });
  };

  const trackServiceInterest = (service_name: string) => {
    trackEvent({
      event_name: 'service_interest',
      event_data: {
        service_name
      }
    });
  };

  // Auto-track page views
  useEffect(() => {
    trackPageView();
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackServiceInterest
  };
};