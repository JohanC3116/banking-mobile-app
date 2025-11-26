import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pnwkthenanilunzkycdi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBud2t0aGVuYW5pbHVuemt5Y2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODQ3MTQsImV4cCI6MjA3OTc2MDcxNH0.uta68BswK3lLksoDZUVjEboEJ-N4z2Pb-gvkkwMRwT8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY); 