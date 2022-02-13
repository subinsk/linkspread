import { supabase } from './supabaseclient'


async function register(name, email, password) {
    try {
        const { user, session, error } = supabase.auth
            .signUp({
                email: email,
                password: password,
            }, {
                data: {
                    name: name
                }
            })
            .then((res) => {
                console.log(res)
            })
        if (error) throw error
        alert("error:", error)
    }
    catch (error) {
        alert(error.message)
    }
}

async function login(email, password) {
    const { user, session, error } = await supabase.auth.signIn(
        {
            email: email,
            password: password,
        },
    )
    return { user, session, error }
}

async function loginWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'google',
    })
    console.log(user, session, error)
    return { user, session, error }
}

async function logout() {
    const { error } = await supabase.auth.signOut()
    return error
}

async function getUser() {
    const { user, error } = await supabase.auth.api.getUser(
        'ACCESS_TOKEN_JWT',
    )
    return { user, error }
}
async function getSession() {
    const session = supabase.auth.session()
    return session
}

function setAuthCookie(req, res) {
    console.log(req.body);
    supabase.auth.api.setAuthCookie(req, res);
}

export const AuthService = {
    register,
    login,
    loginWithGoogle,
    logout,
    getUser,
    getSession,
    setAuthCookie
}
