import { createClient } from "@supabase/supabase-js";
import {
    supabaseURL,
    supabaseAnonKey
} from '../config/index'

export const supabase = createClient(supabaseURL, supabaseAnonKey)