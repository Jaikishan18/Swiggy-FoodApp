import { useState} from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = ()=>{



  const[btnName,setBtnName] = useState("Login")
  const onlineStatus = useOnlineStatus()
    return(
      <div className="flex justify-between bg-pink-100 shadow-slate-100">
        <div className="Logo-container">
          <img className="w-56" src={LOGO_URL}></img>

        </div>

        <div className="Nav-items">

          <ul className="flex m-7 p-5">
             <li className="p-3">{onlineStatus ? "Online:✅" : "Offline❌"}</li>
            <li className="p-3"><Link to={"/"}>Home</Link></li>
            <li className="p-3"><Link to={"/about"}>About</Link></li>
            <li className="p-3"><Link to={"/contact"}>Contact</Link></li>
            <li className="p-3"><Link to={"/cart"}>Cart</Link></li>
            {/* <li className="p-3 font-medium border border-gray-500 rounded-full m-1">{name}🟢</li> */}
 
           
            <button className="login bg-slate-300 px-3 rounded-md" onClick={()=> 
              btnName=== "Login"? setBtnName("LogOut") : setBtnName("Login")}>{btnName}</button>

          </ul>

        </div>
      </div>
    )
   }
   export default Header