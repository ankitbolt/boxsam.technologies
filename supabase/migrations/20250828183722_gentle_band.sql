/*
  # Add Sample Data for BOXSAM Technologies

  1. Sample Data
    - Sample blog posts for content demonstration
    - Sample analytics events for dashboard testing
    - Sample newsletter subscribers for testing

  2. Notes
    - This migration adds realistic sample data
    - Blog posts are marked as published
    - All data uses realistic BOXSAM Technologies content
*/

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, published, tags, meta_title, meta_description, published_at) VALUES
(
  'Top 10 Digital Marketing Trends for Delhi NCR Businesses in 2025',
  'digital-marketing-trends-delhi-ncr-2025',
  'The digital marketing landscape in Delhi NCR is evolving rapidly. Here are the top trends that will shape business success in 2025...',
  'Discover the latest digital marketing trends that Delhi NCR businesses need to embrace in 2025 to stay competitive and drive growth.',
  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  true,
  ARRAY['Digital Marketing', 'Trends', 'Delhi NCR', 'SEO'],
  'Top 10 Digital Marketing Trends for Delhi NCR Businesses in 2025 | BOXSAM',
  'Stay ahead with the latest digital marketing trends for Delhi NCR businesses. Expert insights from BOXSAM Technologies.',
  now()
),
(
  'How Local SEO Can Transform Your Delhi Business',
  'local-seo-delhi-business-guide',
  'Local SEO is crucial for Delhi businesses looking to attract nearby customers. Learn how to optimize your online presence...',
  'Master local SEO strategies specifically designed for Delhi businesses. Increase your local visibility and attract more customers.',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  true,
  ARRAY['Local SEO', 'Delhi', 'Business Growth', 'Google My Business'],
  'Local SEO Guide for Delhi Businesses | BOXSAM Technologies',
  'Complete guide to local SEO for Delhi businesses. Boost your local search rankings and attract more customers.',
  now() - interval '2 days'
),
(
  'PPC vs SEO: Which Strategy Works Best for SMEs?',
  'ppc-vs-seo-strategy-smes',
  'Small and medium enterprises often struggle to choose between PPC and SEO. Here''s a comprehensive comparison...',
  'Compare PPC and SEO strategies for SMEs. Learn which approach delivers better ROI for your business goals.',
  'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
  true,
  ARRAY['PPC', 'SEO', 'SME', 'ROI'],
  'PPC vs SEO: Best Strategy for SMEs | BOXSAM Technologies',
  'Expert comparison of PPC and SEO strategies for small and medium enterprises. Make the right choice for your business.',
  now() - interval '5 days'
),
(
  'Social Media Marketing Success Stories from Noida',
  'social-media-marketing-success-noida',
  'Real case studies from Noida businesses that achieved remarkable growth through strategic social media marketing...',
  'Explore real success stories of Noida businesses that transformed their growth through strategic social media marketing.',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
  true,
  ARRAY['Social Media', 'Case Studies', 'Noida', 'Success Stories'],
  'Social Media Marketing Success Stories from Noida | BOXSAM',
  'Real case studies of successful social media marketing campaigns for Noida businesses by BOXSAM Technologies.',
  now() - interval '1 week'
),
(
  'Email Marketing Automation for E-commerce Growth',
  'email-marketing-automation-ecommerce',
  'Discover how email marketing automation can significantly boost your e-commerce sales and customer retention...',
  'Learn how to implement email marketing automation that drives e-commerce growth and improves customer lifetime value.',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  true,
  ARRAY['Email Marketing', 'E-commerce', 'Automation', 'Growth'],
  'Email Marketing Automation for E-commerce Growth | BOXSAM',
  'Complete guide to email marketing automation for e-commerce businesses. Boost sales and customer retention.',
  now() - interval '10 days'
),
(
  'Website Performance Optimization: A Complete Guide',
  'website-performance-optimization-guide',
  'Website speed and performance directly impact your SEO rankings and user experience. Here''s how to optimize...',
  'Complete guide to website performance optimization. Improve your site speed, SEO rankings, and user experience.',
  'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
  true,
  ARRAY['Web Development', 'Performance', 'SEO', 'User Experience'],
  'Website Performance Optimization Guide | BOXSAM Technologies',
  'Expert guide to website performance optimization. Improve speed, SEO, and user experience for better conversions.',
  now() - interval '2 weeks'
);

-- Insert sample analytics events
INSERT INTO analytics_events (event_name, event_data, session_id, page_url, user_agent) VALUES
('page_view', '{"referrer": "https://google.com"}', 'session_1', 'https://boxsam-technologies.com/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
('button_click', '{"button_name": "hero_start_now"}', 'session_1', 'https://boxsam-technologies.com/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
('service_interest', '{"service_name": "SEO & Local Ranking"}', 'session_2', 'https://boxsam-technologies.com/#services', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'),
('form_submission', '{"form_name": "contact_form", "service": "PPC Management"}', 'session_3', 'https://boxsam-technologies.com/#contact', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15'),
('newsletter_signup', '{"email": "test@example.com"}', 'session_4', 'https://boxsam-technologies.com/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

-- Insert sample newsletter subscribers
INSERT INTO newsletter_subscribers (email, status) VALUES
('john.doe@example.com', 'active'),
('sarah.smith@techstart.com', 'active'),
('mike.chen@greenearth.com', 'active'),
('emily.rodriguez@healthfirst.com', 'active'),
('david.thompson@buildright.com', 'active');

-- Insert sample contact submissions
INSERT INTO contact_submissions (name, email, phone, company, service, budget, message, status) VALUES
(
  'John Doe',
  'john.doe@example.com',
  '+91-9876543210',
  'TechStart Solutions',
  'Search Engine Optimization (SEO)',
  '$15,000 - $30,000',
  'We need to improve our organic search rankings for our SaaS platform. Currently struggling with visibility in Delhi NCR market.',
  'contacted'
),
(
  'Sarah Smith',
  'sarah.smith@retailco.com',
  '+91-9876543211',
  'RetailCo India',
  'Social Media Marketing',
  '$5,000 - $15,000',
  'Looking to increase our social media presence and engagement. Need help with Instagram and Facebook marketing.',
  'new'
),
(
  'Mike Chen',
  'mike@greenearth.com',
  '+91-9876543212',
  'GreenEarth Retail',
  'Pay-Per-Click Advertising (PPC)',
  '$30,000 - $50,000',
  'Want to scale our Google Ads campaigns and improve ROI. Currently spending but not seeing desired results.',
  'qualified'
);

-- Insert sample leads
INSERT INTO leads (name, email, phone, company, source, status, score, notes) VALUES
(
  'John Doe',
  'john.doe@example.com',
  '+91-9876543210',
  'TechStart Solutions',
  'website_contact_form',
  'contacted',
  85,
  'High-value lead. SaaS company with good budget. Interested in comprehensive SEO strategy.'
),
(
  'Sarah Smith',
  'sarah.smith@retailco.com',
  '+91-9876543211',
  'RetailCo India',
  'hero_email_form',
  'new',
  65,
  'E-commerce business looking for social media marketing. Good potential for upselling.'
),
(
  'Mike Chen',
  'mike@greenearth.com',
  '+91-9876543212',
  'GreenEarth Retail',
  'website_contact_form',
  'qualified',
  90,
  'Excellent lead. Large budget, immediate need. Ready to start PPC campaigns.'
);