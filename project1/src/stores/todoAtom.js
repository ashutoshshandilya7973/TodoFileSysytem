import {atom,selector} from 'recoil';
import { apiClient } from '../utils/axiosInstance';

import { userInfo } from './userAtom';
 const trigger=atom({
    key:"trigger",
    default:0
 })
const getTodoSelector=selector({
    key:"getTdodSelector",
    get: async ({get})=>{
        try {
             const {user} =get(userInfo);
             get(trigger);
             const response = await apiClient.get('/todo/gettodo', {
                params: { user }
            });
                         
             return response.data.todo
        } catch (error) {
            console.log("error fetching the data");
            return []
        }
    }
})

const getTodo=atom({
    key:"gettodo",
    default:getTodoSelector
})

export {getTodo,trigger}