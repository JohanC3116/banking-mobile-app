import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

    const SUPABASE_URL = 'https://tctqlythioyhjkisdhbl.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjdHFseXRoaW95aGpraXNkaGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODc1NzYsImV4cCI6MjA3OTc2MzU3Nn0.zAenvnPc_3jK_pyl-pdhnHiMSo5XhHvGmTElexcBkj4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY); 