import { useEffect, useState } from "react"

const sections = ["home", "about", "services", "projects", "contacts"]

export default function NavBar() {
    const [active, setActive] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 80 // 80 = висота хедера
            let current = "home"
            sections.forEach(id => {
                const section = document.getElementById(id)
                if (section && section.offsetTop <= scrollPos) {
                    current = id
                }
            })
            setActive(current)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = id => {
        const el = document.getElementById(id)
        if (el) {
            const top = el.offsetTop - 70 // щоб хедер не перекривав
            window.scrollTo({ top, behavior: "smooth" })
        }
    }

    return (
        <nav className="NavBar">
            {sections.map(id => (
                <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={active === id ? "active" : ""}
                >
                    {id}
                </button>
            ))}
        </nav>
    )
}