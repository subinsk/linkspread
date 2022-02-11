import { supabase } from './supabaseclient'

export async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'google',
    })
    return { user, session, error }
}

export async function signout() {
    const { error } = await supabase.auth.signOut()
    return { error }
}

