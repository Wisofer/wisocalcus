import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://chqcjdglmqtdeekkayvr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNocWNqZGdsbXF0ZGVla2theXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNjIwMTcsImV4cCI6MjAxMzczODAxN30.oLtBZ1C2ur6Txw6hgAD0LuizHVxlNPW7PVJwshfgXJY"
);
