import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tgsprkslbyurnviesfcf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnc3Bya3NsYnl1cm52aWVzZmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MzkwNzQsImV4cCI6MjA1OTExNTA3NH0.nEKze-mSiedvUKVIC5mayth_VSzNIegHEvlIBRfEGZU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
