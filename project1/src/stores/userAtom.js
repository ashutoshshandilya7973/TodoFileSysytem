import {atom,selector} from 'recoil'

function getUserInfo(){
    return {
        user:localStorage.getItem("name"),
        token:localStorage.getItem("token")
    }
    
}
const userInfo = atom({
    key:'userInfo',
    default:getUserInfo()
})

const isAuthenticated=selector({
    key:"isAuthenticated",
    get: ({get})=>{
        const {user,token}=get(userInfo);
         return !!user && !!token;
    }
})

export {userInfo,isAuthenticated}