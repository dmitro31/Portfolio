import ContactAnimation from "../Component/ContactAnimation";
import "../Style/Contact.css"

export default function Contact(){

    return(
        <div className="Contact-container" >
            <div className="Animation">
                <ContactAnimation/>
            </div>
            <h1>Контакти</h1>
            <div className="Contact" id = "contacts">
                <p>Email: ijsniper1@gmail.com</p>
                <p>Telegram: @IJSniper</p>
                <p>Phone number: 0962572026</p>
                <a href="https://github.com/dmitro31">GitHub</a>
            </div>
            
        </div>
    )
}