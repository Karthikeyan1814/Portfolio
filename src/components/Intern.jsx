import "./Intern.css"
export default function Intern() {
    return (<div className="intern-container" id="exp">
        <div className="intern-title">
            <h5>[ WHAT I HAVE DONE SO FAR ]</h5>
            <h1 id="slogo">Work Experience.</h1>
        </div>
        <div className="intern-line">
            <div className="intern-circle"></div>
     
            <div className="intern-circle"></div>
     
            <div className="intern-circle"></div>
         
            <div className="intern-circle"></div>
            
        </div>
        <div className="intern-card-cont">
            <div className="intern-card">
                <h1>Trainee (Internship)</h1>
                <h3>NoviTech R&D Pvt Ltd, Coimbatore</h3>
                <h3>Feb 2025 - Mar 2025</h3>
                <ul>
                    <li>Developed a full-stack College Transport Management application using React.js, SpringBoot, and postgresql, featuring automated notifications and responsive design.</li>
                    <li>Assisted in backend development, including API integrations and database optimization for high-traffic applications.</li>
                    <li>Modernized UI components and enhanced user workflows for a property management platform, improving usability and client satisfaction.</li>
                </ul>
            </div>
            
            <div className="intern-card">
                <h1>React Development (Internship)</h1>
                <h3>Techvolt Software Pvt Ltd, Coimbatore</h3>
                <h3>Jun 2025 - Jul 2025</h3>
                <ul>
                    <li>Developed a full-stack Passport Automation System using the MERN stack (MongoDB, Express.js, React.js, Node.js) with complete UI/UX integration for seamless user experience.</li>
                    <li>Implemented real-time features including online application tracking, automated status updates, and secure client-server data handling.</li>
                    <li>Designed modern, responsive interfaces and optimized workflows to simplify passport application, verification, and approval processes.</li>
                </ul>
            </div>
           
            <div className="intern-card">
                <h1>Frontend Developement (Internship)</h1>
                <h3>Gravity Ai x FutureX Pvt Ltd, Coimbatore</h3>
                <h3>Dec 2025 - Jan 2026</h3>
                <ul>
                    <li>Developed a full-stack Book Bank Automation System using the MERN stack (MongoDB, Express.js, React.js, Node.js) to manage book inventory, student records, and lending operations efficiently.</li>
                    <li>Implemented features such as online book search, issue/return tracking, automated due-date reminders, and secure role-based authentication.</li>
                    <li>Designed a responsive and user-friendly UI, optimizing workflows to simplify book management processes for administrators and students.</li>
                </ul>
            </div>
          
            <div className="intern-card">
                <h1>Java Full-Stack Developement (Internship)</h1>
                <h3>Besant Technologies,AnnaNagar,Chennai</h3>
                <h3>Jan 2026 - Apr 2026</h3>
                <ul>
                    <li>Developed a full-stack Book Bank Automation System using the MERN stack (MongoDB, Express.js, React.js, Node.js) to manage book inventory, student records, and lending operations efficiently.</li>
                    <li>Implemented features such as online book search, issue/return tracking, automated due-date reminders, and secure role-based authentication.</li>
                    <li>Designed a responsive and user-friendly UI, optimizing workflows to simplify book management processes for administrators and students.</li>
                </ul>
            </div>
            <div className="intern-year-cont">
                <p className="intern-year">[ Feb 2025 - Mar 2025 ]</p>
                <p className="intern-year">[ Jun 2025 - Jul 2025 ]</p>
                <p className="intern-year">[ Dec 2025 - Jan 2026 ]</p>
                <p className="intern-year">[ Jan 2026 - Apr 2026 ] <br /> [ Current ]</p>
            </div>
        </div>
    </div>)
}