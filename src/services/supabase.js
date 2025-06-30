import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://jbebosfknqlipbctfuwj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZWJvc2ZrbnFsaXBiY3RmdXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTg2NDMsImV4cCI6MjA2Njg3NDY0M30.FP2fEa-X9brUbqBk5m8H0vCk-qrknaDoWz7BN8YStqc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
