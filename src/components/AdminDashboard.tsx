import React, { useState, useEffect } from 'react';
import { Users, Mail, FileText, BarChart3, TrendingUp, Eye, MessageSquare, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface DashboardStats {
  totalContacts: number;
  totalSubscribers: number;
  totalPosts: number;
  totalLeads: number;
  recentContacts: any[];
  recentSubscribers: any[];
  topEvents: any[];
}

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    totalSubscribers: 0,
    totalPosts: 0,
    totalLeads: 0,
    recentContacts: [],
    recentSubscribers: [],
    topEvents: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      const [
        { count: contactCount },
        { count: subscriberCount },
        { count: postCount },
        { count: leadCount },
        { data: recentContacts },
        { data: recentSubscribers },
        { data: topEvents }
      ] = await Promise.all([
        supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
        supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('leads').select('*', { count: 'exact', head: true }),
        supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }).limit(5),
        supabase.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false }).limit(5),
        supabase.from('analytics_events').select('event_name, count(*) as count').group('event_name').order('count', { ascending: false }).limit(5)
      ]);

      setStats({
        totalContacts: contactCount || 0,
        totalSubscribers: subscriberCount || 0,
        totalPosts: postCount || 0,
        totalLeads: leadCount || 0,
        recentContacts: recentContacts || [],
        recentSubscribers: recentSubscribers || [],
        topEvents: topEvents || []
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="loading-skeleton h-8 w-64 mb-8 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="loading-skeleton h-12 w-12 mb-4 rounded"></div>
                <div className="loading-skeleton h-6 w-20 mb-2 rounded"></div>
                <div className="loading-skeleton h-4 w-16 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{stats.totalContacts}</div>
                <div className="text-gray-600">Contact Forms</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{stats.totalSubscribers}</div>
                <div className="text-gray-600">Newsletter Subscribers</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{stats.totalPosts}</div>
                <div className="text-gray-600">Blog Posts</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{stats.totalLeads}</div>
                <div className="text-gray-600">Total Leads</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Contacts */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Contact Submissions</h3>
            </div>
            <div className="p-6">
              {stats.recentContacts.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No contact submissions yet.</p>
              ) : (
                <div className="space-y-4">
                  {stats.recentContacts.map((contact) => (
                    <div key={contact.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{contact.name}</div>
                        <div className="text-sm text-gray-600">{contact.email}</div>
                        <div className="text-xs text-gray-500">{contact.service}</div>
                      </div>
                      <div className="text-right">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          contact.status === 'new' ? 'bg-yellow-100 text-yellow-700' :
                          contact.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {contact.status}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Analytics Overview */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Top Events</h3>
            </div>
            <div className="p-6">
              {stats.topEvents.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No analytics data yet.</p>
              ) : (
                <div className="space-y-4">
                  {stats.topEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BarChart3 className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="font-medium text-gray-900">{event.event_name}</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{event.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;