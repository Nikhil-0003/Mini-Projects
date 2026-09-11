import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const{user}= useContext(UserContext) // take value back from setUser that why we use user here
    if(!user) return <div>Please Login</div>
    return <div>Welcome! {user.username} </div>
}

export default Profile
