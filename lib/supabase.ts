import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

  // Keep static page generation independent from deployment secrets. The
  // contact form can report an error if Supabase is not configured.
  if (!supabaseUrl || !supabaseAnonKey) return null;

  supabase ??= createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
}
