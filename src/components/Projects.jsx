import { useRef, useState, useEffect } from "react";
import "./Project.css";

export default function Project() {
    const sliderRef = useRef(null);
    const [active, setActive] = useState(0);

    const projects = [
        {
            title: "Passport Automation System",
            points: [
                "Developed a complete digital passport processing platform allowing users to submit applications, upload documents securely, and validate details through automated form checks, reducing manual paperwork and processing delays.",
                "Implemented a role-based authentication system supporting applicants, verifying officers, and administrators, enabling secure login, controlled access, and a structured multi-stage verification and approval workflow.",
                "Integrated real-time application tracking with database updates and notification handling so applicants receive confirmation messages once verification, approval, and passport issuance are completed."
            ],
            tech: ` ReactJS  #NodeJs
   # ExpressJs #MongoDB`
        },
        {
            title: "Book Bank Automation System",
            points: [
                "Designed a centralized web-based book management system that stores academic inventory digitally, helping students easily search books by title, subject, or availability without manual record checking.",
                "Built request, issue, and return workflows that automatically update book status, maintain borrowing history, and monitor deadlines to prevent loss and improve transparency in book distribution.",
                "Created an administrative dashboard for managing stock levels, approving student requests, tracking overdue books, and generating reports to streamline library-style operations."
            ],
            tech: "ReactJS  #NodeJs # ExpressJs #MongoDB"
        },
        {
            title: "Transport Management Application for college",
            points: [
                "Developed a transport automation system that assigns students to buses based on routes, stops, and seat capacity, ensuring optimized scheduling and minimizing manual allocation errors.",
                "Implemented modules to manage driver information, vehicle records, and route updates so administrators can modify schedules or transport assignments dynamically from a central interface.",
                "Provided a unified platform where students and staff can view bus timings, routes, and assigned transport details, improving coordination and reducing confusion."
            ],
            tech: "ReactJs #NodeJs #ExpressJs #SpringBoot # Postgressql"
        },
        {
            title: "E-Commerce Website",
            points: [
                "Built a complete online shopping platform supporting product browsing, category filtering, keyword search, and responsive product display for smooth user experience.",
                "Implemented secure authentication, session handling, and shopping cart functionality enabling users to add products, update quantities, and proceed through checkout securely.",
                "Integrated order management features including purchase confirmation, simulated payment flow, and order tracking to replicate real-world ecommerce workflows."
            ],
            tech: "ReactJs #NodeJs #ExpressJs #SpringBoot #Postgresql"
        },
        {
            title: "Emotion Aware Smart Street Light System",
            points: [
                "Built an AI-powered smart lighting solution using camera input to detect pedestrian presence, behavior, or emotional context, helping improve safety in low-light public areas.",
                "Used edge AI inference with optimized CNN/TFLite models to process visual data locally and automatically adjust street light brightness via hardware control mechanisms.",
                "Developed a central monitoring dashboard that streams alerts, stores snapshots, and visualizes analytics for authorities to monitor lighting behavior and system performance."
            ],
            tech: "Python # FastAPI # Edge AI # CNN/TFLite # ReactJs"
        },
        {
            title: "Smart Farm X",
            points: [
                "Created an AI-based agricultural advisory system that analyzes environmental conditions such as soil quality, season, and weather data to recommend suitable crops for cultivation.",
                "Integrated image-processing models allowing farmers to upload plant photos and detect diseases or pests early, helping reduce crop damage and improve productivity.",
                "Implemented notification features delivering weather alerts, crop suggestions, and farming insights through a user-friendly mobile-focused interface."
            ],
            tech: "ReactJs #AI/ML(CNN) # NodeJs #ExpressJs #MongoDB"
        },
        {
            title: "Wheather Prediction System",
            points: [
                "Developed a machine learning weather forecasting model trained on historical climate datasets to predict rainfall, temperature variation, and atmospheric trends.",
                "Designed the system to support agricultural planning by providing early environmental predictions that help farmers prepare irrigation, sowing, or harvesting schedules.",
                "Built an interactive web interface where users input location or environmental parameters and receive instant prediction results generated by the ML model."
            ],
            tech: "ReactJs #RandomForest # NodeJs #ExpressJs #MongoDB"
        },
        {
            title: "Crop Yeild Prediction System",
            points: [
                "Implemented a predictive analytics system that estimates crop yield using machine learning trained on soil nutrients, rainfall levels, seasonal conditions, and historical farming data.",
                "Helps farmers and planners make informed cultivation decisions by forecasting productivity before planting, reducing uncertainty and improving resource planning.",
                "Created a responsive web application allowing users to enter agricultural parameters and immediately view predicted yield values along with model-based insights."
            ],
            tech:"ReactJs #AI/ML(RandomForest) # Python #MongoDB"
        },
        {
            title: "Ocular Disease Identification System",
            points: [
                "Developed a deep learning–based medical imaging system that analyzes retinal or ocular images to identify potential eye diseases automatically.",
                "Used convolutional neural networks to detect abnormal visual patterns and generate prediction results with confidence scores to assist early medical screening.",
                "Built a simple web interface allowing users or clinicians to upload images and receive quick diagnostic feedback for preliminary analysis."
            ],
            tech: "#Python #CNN #Deep Learning # Image Processing"
        },
        
    ];


    const centerCard = (index) => {
        const slider = sliderRef.current;
        const cards = slider.children;
        const card = cards[index];

        const containerWidth = slider.offsetWidth;
        const cardWidth = card.offsetWidth;

        const scrollPosition =
            card.offsetLeft - (containerWidth / 2 - cardWidth / 2);

        slider.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });

        setActive(index);
    };

    useEffect(() => {
        centerCard(0);
    }, []);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    return (
        <div className="project-container" id="project">
            <div className="section-title">
                <h5 style={{fontFamily:" Montserrat Alternates, sans-serif"}}>[ My Projects ]</h5>
                <h1 id="slogo">Where Creativity Meets <br /> Strategy & Innovation</h1>
            </div>

            <div className="project-card-cont" ref={sliderRef}>
                {projects.map((proj, index) => (
                    <div
                        key={index}
                        className={`project-card ${active === index ? "active" : ""}`}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h3>{proj.title}</h3>

                        <ul className="project-points">
                            {proj.points.map((pt, i) => (
                                <li key={i} style={{fontFamily:" Playwrite DE Grund,cursive"}}>{pt}</li>
                            ))}
                        </ul>

                        {/* tech stack always at bottom */}
                        <p className="tech-stack">
                            #{proj.tech}
                        </p>
                    </div>
                ))}
            </div>

            <div className="dots">
                {projects.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${active === index ? "active" : ""}`}
                        onClick={() => centerCard(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
