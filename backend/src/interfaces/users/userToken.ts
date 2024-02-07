export interface USERTOKEN {
    username: string
    password: string
    role: 'student' | 'mentor' | 'reviewer'
}