import { createClient } from "@supabase/supabase-js";

// Ambil URL project Supabase dari .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// Ambil Anon Key dari .env
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// console.log("URL:", supabaseUrl);
// console.log("KEY:", supabaseAnonKey);

// Membuat koneksi ke Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
