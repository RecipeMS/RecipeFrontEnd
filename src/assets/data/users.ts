import type { User } from "@/types/user.type"

export const userTemp: User = {
  id: 1,
  fullName: 'User',
  email: 'user@gmail.com',
  password: 'user',
  userType: 'user'
}

export const adminTemp: User = {
  id: 2,
  fullName: 'Admin',
  email: 'admin@gmail.com',
  password: 'admin',
  userType: 'admin'
}
