import { User } from "@/models/User";
import { cookies } from "next/dist/client/components/headers";

const loginUser = (user: User) => {
  if(user){
    const cookieStore = cookies()
    const user = cookieStore.get('user')
    console.log(`Usuário: ${user}`)
    localStorage.setItem('user', JSON.stringify(user))
    readUser()
  }
  else{
    throw new Error('User is not set!')
  }
}

const readUser = () => {
 
}

const logout = () => localStorage.clear()

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginUser,
  logout,
  readUser
}