export interface User{
    id:number,
    userName : string,
    email : string,
    token : string,
    refreshToken : string
  } 
 
  
  export interface UserLogIn{
    email : string,
    password : string
  }