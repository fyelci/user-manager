
export interface User {
    id: string
    username: string
    userGroup: string
}

export type ContextType = {
    user?: User | null
    errorMessage: string | null
    signin: (username: string, password: string, cb: Function) => void
    signout: (cb: Function) => void
}
