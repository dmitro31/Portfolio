import { FaCode, FaPaintBrush, FaPenNib, FaServer, FaSearch, FaTools } from "react-icons/fa"
import "../Style/Service.css"
import { useState } from "react"

export default function Service() {
    const services = [
        {
            name: "Web Developer",
            text: "Створюю сайти та веб-додатки, які приносять результат: швидке завантаження, адаптивність під всі пристрої та сучасний функціонал. Допоможу реалізувати ідею від дизайну до повноцінного продукту.",
            icon: <FaCode />
        },
        {
            name: "UI/UX Designer",
            text: "Роблю дизайн, який продає. Продуманий інтерфейс допомагає користувачам легко знаходити потрібну інформацію та виконувати цільові дії, що напряму впливає на конверсію.",
            icon: <FaPaintBrush />
        },
        {
            name: "Content Writer",
            text: "Пишу тексти, які утримують увагу та мотивують до дії. Допоможу донести цінність вашого продукту та зробити сайт більш переконливим для клієнтів.",
            icon: <FaPenNib />
        },
        {
            name: "Backend Developer",
            text: "Забезпечую стабільну роботу вашого сервісу: розробка API, обробка даних, інтеграції. Ваш сайт або додаток працюватиме швидко, безпечно та без збоїв.",
            icon: <FaServer />
        },
        {
            name: "SEO Specialist",
            text: "Допоможу вашому сайту займати вищі позиції у пошуку Google. Оптимізую структуру, швидкість і контент, щоб залучати більше клієнтів без реклами.",
            icon: <FaSearch />
        },
        {
            name: "Website Support",
            text: "Підтримую ваш сайт після запуску: оновлення, виправлення помилок, покращення функціоналу. Ви зосереджуєтесь на бізнесі — я забезпечую стабільну роботу сайту.",
            icon: <FaTools />
        },
    ] 


    return(
        <div className="Service-container" id="services">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <div className="Servise">
                    <div className="icon">{service.icon}</div>
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                    </div>
                </div>
                
            ))}
        </div>
    )
}