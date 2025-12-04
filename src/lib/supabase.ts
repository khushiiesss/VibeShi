import { createClient } from '@supabase/supabase-js';
// Use `any` for the Supabase client type in demo mode to avoid strict PostgREST typing
// which can be brittle in small demo projects. This preserves runtime behavior.
// Note: Database types are available in `src/lib/database.types.ts` if needed.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<any>(supabaseUrl, supabaseAnonKey);
