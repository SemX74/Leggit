import { FC } from "react";
import { AiOutlinePlus,AiOutlineMessage } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { useNavigate } from "react-router-dom";


interface RegisteredNavsProps {
    
}
 
const RegisteredNavs: FC<RegisteredNavsProps> = () => {
    const navigate = useNavigate()
    return ( 
        <nav className="RegisteredNav">
            <AiOutlinePlus onClick={() => navigate("AddPost")}/>
            <MdNotificationsNone />
            <AiOutlineMessage onClick={() => navigate("chat")} />
        </nav>  
     );
}
 
export default RegisteredNavs;