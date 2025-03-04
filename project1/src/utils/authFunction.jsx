import { userInfo } from "../stores/userAtom";
import { useRecoilState } from "recoil";

 export const useAuth = () => {
    const [info, setInfo] = useRecoilState(userInfo);

    const logout = () => {
        localStorage.clear();
        setInfo({ name: "", token: "" }); // Reset user info
    };

    return { logout };
};
 