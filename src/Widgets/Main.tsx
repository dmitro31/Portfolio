import { useState, useEffect, useRef } from "react";
import "../Style/Main.css";
import Photo from "../Photo/photo_2026-04-01_21-16-48.jpg";

export default function Main() {
    // Винесено за межі компонента або в useMemo, щоб не перестворювати масив
    const texts = ["Designer", "Developer", "Full Stack Developer"];

    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const currentText = texts[index];
        const typingSpeed = 150;
        const deletingSpeed = 100;
        const pauseTime = 1500; // Трохи збільшимо паузу для читабельності

        let frameId: number;

        function step(timestamp: number) {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const elapsed = timestamp - startTimeRef.current;

            if (!isDeleting) {
                const nextLength = Math.min(
                    Math.floor(elapsed / typingSpeed),
                    currentText.length
                );
                setDisplayedText(currentText.slice(0, nextLength));

                if (nextLength === currentText.length) {
                    // Пауза перед видаленням
                    setTimeout(() => {
                        setIsDeleting(true);
                        startTimeRef.current = null;
                    }, pauseTime);
                } else {
                    frameId = requestAnimationFrame(step);
                }
            } else {
                const nextLength = Math.max(
                    currentText.length - Math.floor(elapsed / deletingSpeed),
                    0
                );
                setDisplayedText(currentText.slice(0, nextLength));

                if (nextLength === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % texts.length);
                    startTimeRef.current = null;
                } else {
                    frameId = requestAnimationFrame(step);
                }
            }
        }

        frameId = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(frameId);
            startTimeRef.current = null;
        };
    }, [index, isDeleting]); // texts краще винести, щоб не додавати сюди

    return (
        <div className="Main-container" id="home">
            <div className="Main">
                <div className="Main-i">
                    <h2 className="Main-title">
                        Hey, I'm <span className="highlight">IJsniper</span>
                    </h2>
                    <h1 className="Change-text">
                        I'm a <span className="displayedText">{displayedText}</span>
                        <span className="cursor">|</span>
                    </h1>
                    <div className="Main-info">
                        <p>Розробник, захоплений створенням інноваційних цифрових рішень.</p>
                        <p>
                            З невеликим досвідом роботи у веб-розробці та дизайні,<br/> але я готовий вивчати багато чого нового,
                            а також допомогти втілити вашу ідею в реальність.
                        </p>
                    </div>
                </div>
                <div className="Main-photo">
                    <img src={Photo} alt="Profile" />
                </div>
            </div>
        </div>
    );
}