type user = {
    name:string,
    lastName:string,
}
type setUser = ( data:any )=>void;

export interface IUser{
    userData: user,
    setUserData: setUser
}