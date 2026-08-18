/*
# Simplify inquiries table for new contact form

1. Changes
- Add `service` (text, nullable) column to store the selected service type
  (Music Production, Recording, Mixing, Guitar Lessons, Session Guitar, Other).
- The existing `message` column already stores the project description.
- Old columns (phone, location, level, lesson_type, requested_services) remain
  in place for backward compatibility but are no longer used by the new form.

2. Security
- No policy changes. RLS remains enabled.
- The existing anon INSERT policy continues to allow public form submissions.
*/

ALTER TABLE inquiries
ADD COLUMN IF NOT EXISTS service text;
