import { User } from "@/models/User";

const loginUser = (user: User) => {
  if(user){
    localStorage.setItem('user', JSON.stringify(user))
  }
  else{
    throw new Error('User is not set!')
  }
}

const logout = () => localStorage.clear()

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginUser,
  logout
}