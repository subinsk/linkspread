import { createClient } from "@supabase/supabase-js";
import {
    supabaseURL,
    supabaseAnonKey
} from '../config/index'
console.log('connected')
export const supabase = createClient(supabaseAnonKey, supabaseURL)