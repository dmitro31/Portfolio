import "../Style/Header.css"

export default function Header(){

    return(
        <div className="Header-container"> 
             <h2 className="title">IJsniper<span>Dev</span></h2>
            <ul className="link">
                <li><a href="#">Головна</a></li>
                <li><a href="/about">Про мене</a></li>
                <li><a href="/service">Послуги</a></li>
                <li><a href="/project">Проекти</a></li>
                <li><a href="/kontack">Контакти</a></li>
            </ul>
        </div>
    )
}