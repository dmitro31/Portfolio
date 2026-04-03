import Photo from "../Photo/photo_2026-04-01_21-16-48.jpg"
import "../Style/About.css"

export default function About(){
    return(
        <div className="About-container" id="about">
            <div className="About-Photo">
                <img src={Photo} alt="Моє фото"/>
            </div>
            <div className="About-Info">
                <h1>Про мене</h1>
                <span>
                    Я full-stack розробник із практичним досвідом у створенні сучасних веб-додатків з використанням HTML, CSS, JavaScript, React, Node.js, Express та MongoDB. 
                    Мені цікаво поєднувати функціональність і дизайн, щоб користувачам було зручно і приємно взаємодіяти з продуктом. Я відповідальний, комунікабельний і завжди прагну дізнаватися нове, швидко опановуючи сучасні технології та підходи. Люблю працювати у команді, вирішувати складні завдання та знаходити креативні рішення. Маю добре почуття гумору, що допомагає підтримувати дружню атмосферу під час спільної роботи.
                </span>
            </div>
        </div>
    )
}