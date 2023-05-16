import axios from 'axios'
import { type User } from '@/types/user.type'
import { Api } from '@/enums/api.enum'

const url = Api.USERS

export const getUsers = async () => {
  const response = await axios.get(url)
  return response.data
}

export const getUserById = async (id: number) => {
  const response = await axios.get(`${url}${id}`)
  return response.data
}

export const getUserByEmail = async (email: string) => {
  const response = await axios.get(`${url}?email=${email}`)
  return response.data
}

export const createUser = async (newUser: User) => {
  const response = await axios.post(url, newUser)
  return response.data
}

export const updateUser = async (id: number, updatedUser: User) => {
  const response = await axios.patch(`${url}${id}`, updatedUser)
  return response.data
}

export const deleteUser = async (id: number) => {
  await axios.delete(`${url}${id}`)
}

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${url}login`, { email, password })
  return response.data
}

export const logout = async () => {
  await axios.post(`${url}logout`)
}

