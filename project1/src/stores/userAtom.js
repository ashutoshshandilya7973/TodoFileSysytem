import {atom,selector} from 'recoil'
import {useEffect} from 'react'

const userInfo = atom({
    key:'userInfo',
    default:{user:null,token:null}
})

const isAuthenticated=selector({
    key:"isAuthenticated",
    get: ({get})=>{
        const {user,token}=get(userInfo);
         return !!user && !!token;
    }
})

export {userInfo,isAuthenticated}