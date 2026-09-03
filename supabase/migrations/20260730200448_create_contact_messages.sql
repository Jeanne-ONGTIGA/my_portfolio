/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email for replies
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — whether the owner has read the message
  - `created_at` (timestamptz, default now()) — when the message was submitted

2. Security
- Enable RLS on `contact_messages`.
- This is a public portfolio with no sign-in screen, so the frontend talks to Supabase as the `anon` role.
- Allow anon + authenticated to INSERT (visitors can submit contact messages).
- Allow anon + authenticated SELECT/UPDATE/DELETE (single-tenant shared data, owner reads messages via the dashboard).

3. Indexes
- `contact_messages_created_at_idx` on `created_at DESC` for listing newest messages first.
- `contact_messages_read_idx` on `read` for filtering unread messages.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages"
ON contact_messages FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_contact_messages" ON contact_messages;
CREATE POLICY "anon_update_contact_messages"
ON contact_messages FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_messages" ON contact_messages;
CREATE POLICY "anon_delete_contact_messages"
ON contact_messages FOR DELETE
TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS contact_messages_read_idx ON contact_messages (read);