import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zckmhatnekguowsmpjdp.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpja21oYXRuZWtndW93c21wamRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MDkxODMsImV4cCI6MjAzNDM4NTE4M30.3S9RO4nzgc6A-_7AHIrZKLMWwDbfG_eqNFfMqK0SWdM`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
