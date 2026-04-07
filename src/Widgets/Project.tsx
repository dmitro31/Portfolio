import Photo from "../Photo/photo_2026-04-01_21-16-48.jpg"
import "../Style/Project.css"

const projects = [
    {
        name: "Web-Shop",
        text: "Інтернет-магазин з повним функціоналом: каталог товарів, кошик, фільтрація та оформлення замовлення.",
        photo: Photo,
        src: "https://github.com/dmitro31/VebShop",
        prochent: "100%"
    },
    {
        name: "Cinema",
        text: "Веб-додаток для перегляду фільмів з розкладом сеансів, трейлерами та можливістю вибору місць.",
        photo: Photo,
        src: "https://github.com/dmitro31/cinema",
        prochent: "67%"
    },
    {
        name: "Portfolio",
        text: "Особистий сайт-портфоліо з інформацією про мене, мої навички та реалізовані проєкти.",
        photo: Photo,
        src: "https://github.com/dmitro31/Portfolio",
        prochent: "100%"
    },
    {
        name: "",
        text: "",
        photo: "",
        src: "",
        prochent: "",
    },
    {
        name: "",
        text: "",
        photo: "",
        src: "",
        prochent: "",
    },
    {
        name: "",
        text: "",
        photo: "",
        src: "",
        prochent: "",
    }
]

export default function Project(){
    return(
        <div className="Project-container" id = "projects">
            {projects.map((p , index) => (
    <div key={index} className="Project-cart">
        <div className="Project-Photo">
            {p.photo && <img src={p.photo} />}
        </div>

        {(p.name || p.prochent) && (
            <h2 className="Project-name">
                {p.name}
                {p.prochent && ` | ${p.prochent}`}
            </h2>
        )}

        {p.text && <p>{p.text}</p>}

        {p.src && (
            <div className="Project-href">
                <a href={p.src}>GitHub</a> 
            </div>
        )}
    </div>
))}
        </div>
    )
}