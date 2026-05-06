import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hhwnljvbpzgluvrxcnvj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhod25sanZicHpnbHV2cnhjbnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNjc0NzMsImV4cCI6MjA5MzY0MzQ3M30.47asYBr4klho6BWiftuqy701I4u7_HHUgACMD7pJrZY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);