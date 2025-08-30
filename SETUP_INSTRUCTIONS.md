# Database Setup Instructions

## The Problem
The website is trying to access database tables that don't exist yet in your Supabase project. You need to run the migration files to create these tables.

## Solution Steps

### 1. Access Your Supabase Dashboard
1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Sign in to your account
3. Select your project (the one with URL: https://gzznxlfnmeiafrxuerxl.supabase.co)

### 2. Run the First Migration
1. In your Supabase dashboard, go to **SQL Editor** (in the left sidebar)
2. Click **New Query**
3. Copy and paste the entire content from `supabase/migrations/20250828183323_lucky_breeze.sql`
4. Click **Run** to execute the migration
5. Wait for it to complete successfully

### 3. Run the Second Migration
1. Create another **New Query** in the SQL Editor
2. Copy and paste the entire content from `supabase/migrations/20250828183722_gentle_band.sql`
3. Click **Run** to execute the migration
4. Wait for it to complete successfully

### 4. Verify Tables Were Created
1. Go to **Database** → **Tables** in your Supabase dashboard
2. You should now see these tables:
   - `users`
   - `contact_submissions`
   - `newsletter_subscribers`
   - `blog_posts`
   - `analytics_events`
   - `leads`

### 5. Check Your Website
After running both migrations, refresh your website. The errors should be resolved and you should see:
- Blog posts loading properly
- Contact forms working
- Analytics tracking functioning
- No more "table not found" errors

## Important Notes
- Run the migrations in order (first `20250828183323_lucky_breeze.sql`, then `20250828183722_gentle_band.sql`)
- Make sure each migration completes successfully before running the next one
- If you get any errors during migration, check the error message and ensure you copied the SQL correctly

## After Setup
Once the database is set up, all website features will be fully functional:
- ✅ Contact form submissions will be stored
- ✅ Newsletter signups will be tracked
- ✅ Blog posts will display
- ✅ Analytics events will be recorded
- ✅ Admin dashboard will show real data