import JS from "../Photo/js.png"
import HTML from "../Photo/html.png"
import CSS from "../Photo/css-3.png"
import NODEJS from "../Photo/node-js.png"
import MONGODB from "../Photo/database.png"
import GIT from "../Photo/social.png"
import ReactIcon from "../Photo/physics.png"
import TypeScript from "../Photo/typescript.png"
import "../Style/AnimationContact.css"

export default function ContactAnimation() {
 const icons = [
    { src: JS, radius: 120, speed: 20 },
    { src: HTML, radius: 160, speed: 18 },
    { src: CSS, radius: 200, speed: 22 },
    { src: NODEJS, radius: 240, speed: 25 },
    { src: MONGODB, radius: 280, speed: 28 },
    { src: GIT, radius: 320, speed: 30 },
    { src: ReactIcon, radius: 360, speed: 32 },
    { src: TypeScript, radius: 400, speed: 35 }
];

    return (
        <div className="ContactAnim-container">
            <div className="circle-container">
                {icons.map((icon, i) => (
                    <div 
                        key={i} 
                        className="circle-item" 
                        style={{ 
                            '--i': i, 
                            '--radius': `${icon.radius}px`,
                            '--speed': `${icon.speed}s`
                        } as React.CSSProperties}
                    >
                        <img src={icon.src} className="img"/>
                    </div>
                ))}
            </div>
        </div>
    )
}