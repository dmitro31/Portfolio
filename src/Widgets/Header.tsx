
import NavBar from "../Component/NavBar"
import "../Style/Header.css"

export default function Header(){

    return(
        <div className="Header-container"> 
             <h2 className="title">IJsniper<span>Dev</span></h2>
             <div className="NavBar">
                <NavBar/>
             </div>
        </div>
    )
}