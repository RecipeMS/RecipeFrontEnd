export type User = {
  id: number
  fullName: string
  email: string
  password: string
  userType: 'user' | 'admin'
}
