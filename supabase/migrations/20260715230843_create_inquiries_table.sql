/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `inquiry_type` (text, not null) — either 'guitar_lesson' or 'general'
  - `name` (text, not null) — first and last name
  - `email` (text, not null) — email address
  - `phone` (text, not null) — phone number
  - `location` (text, not null) — city, state
  - `level` (text, nullable) — beginner/intermediate/advanced (guitar lesson only)
  - `lesson_type` (text, nullable) — in-person/virtual/both (guitar lesson only)
  - `requested_services` (text[], nullable) — multi-select for general inquiry
  - `message` (text, nullable) — optional additional details
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `inquiries`.
- Allow anon + authenticated INSERT only (public form submissions).
- No SELECT/UPDATE/DELETE for anon — only Eyobed (service role) can read inquiries.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_type text NOT NULL CHECK (inquiry_type IN ('guitar_lesson', 'general')),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  level text,
  lesson_type text,
  requested_services text[],
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
