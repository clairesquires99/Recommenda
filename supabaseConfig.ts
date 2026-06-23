import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://lowzxrazresrbpwhsxbe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_oVHSNtqub7_vMn35kGKn-Q_yFDnR0ZM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
