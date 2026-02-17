import "./About.css"
function About() {
    return (
        <div className="abt-container" id="about">
            <center>
                <h1 id="name1">Driven By Passion <br></br>
                    Guided By Purpose!</h1>
                <h2 id="slogo" className="yellow" style={{ marginTop: "20px", color: "yellow" }}>Transforming Complexity into Seamless Experience</h2>
            </center>
            <div className="abt-line">
                <h1 className="about-tit" >About Me</h1>
                <p>I’m Karthikeyan M, a Java & MERN Stack Developer and final-year IT student from Mahendra College of Engineering. I’ve completed internships at Techvolt Solutions (React + Spring Boot) and Gravity AI, Coimbatore (Frontend Developer), gaining real-world experience building responsive, scalable web applications. With strong fundamentals in Java, Spring Boot, and the MERN stack, I’m ready to contribute, learn fast, and deliver impact as part of your team.</p>
                   <div className="about-cards">
                <div className="card" id="card1">
                    <h3> 🌐 Web Development</h3>
                    <p>
                        Building scalable full-stack web applications using Java,
                        Spring Boot, React, and the MERN stack with a strong backend focus.
                    </p>
                </div>

                <div className="card" >
                    <h3> 🎨 UI / UX Design</h3>
                    <p>
                        Designing clean, responsive, and user-friendly interfaces
                        with attention to usability, layout, and smooth interactions.
                    </p>
                </div>
            </div>
            </div>
         
        </div>
    )
}
export default About;