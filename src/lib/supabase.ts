import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Auth helpers
export const auth = {
  signUp: async (email: string, password: string, userData?: any) => {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
  },
  
  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password
    });
  },
  
  signOut: async () => {
    return await supabase.auth.signOut();
  },
  
  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  }
};

// Database helpers
export const db = {
  // Contact forms
  submitContactForm: async (formData: any) => {
    return await supabase
      .from('contact_submissions')
      .insert([formData]);
  },
  
  // Newsletter
  subscribeNewsletter: async (email: string) => {
    return await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);
  },
  
  // Blog posts
  getBlogPosts: async () => {
    return await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
  },
  
  createBlogPost: async (postData: any) => {
    return await supabase
      .from('blog_posts')
      .insert([postData]);
  },
  
  // Analytics
  trackEvent: async (eventData: any) => {
    return await supabase
      .from('analytics_events')
      .insert([eventData]);
  },
  
  // Leads
  createLead: async (leadData: any) => {
    return await supabase
      .from('leads')
      .insert([leadData]);
  },
  
  getLeads: async () => {
    return await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
  }
};