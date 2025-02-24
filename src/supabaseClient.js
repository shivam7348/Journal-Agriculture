import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oqmanlrgjdbkrhtuhocp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xbWFubHJnamRia3JodHVob2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMzcwOTMsImV4cCI6MjA1NTkxMzA5M30._Ywk7ct-CNwtIfO1-P2rNlnQfmkZqMMQQjUV36nqb4k';

export const supabase = createClient(supabaseUrl, supabaseKey);