import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://oqcnvldpdrfbydtzhrkz.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xY252bGRwZHJmYnlkdHpocmt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwMjY4MjgsImV4cCI6MjAyODYwMjgyOH0._ZuAFkhTmdNoYs-8PxY35c3ORbWUv1pH7PIgj7EN-ic";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
