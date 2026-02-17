import "./Skills.css";

export default function Skills() {
  const skills = [

    { name: "Spring", icon: "/spring-svgrepo-com.svg" },
    { name: "MongoDB", icon: "/mongodb-DnU9EL9s.png" },
    { name: "MySQL", icon: "/mysql-logo-svgrepo-com.svg" },
    { name: "Postgres", icon: "/postgresql-svgrepo-com.svg" },
    { name: "node", icon: "/nodejs-svgrepo-com.svg" },
    { name: "Typescript", icon: "/typescript.png" },
    { name: "C++", icon: "/vite.svg" },
    { name: "Tomcat", icon: "/tomcat-svgrepo-com.svg" }
  ];

  const skill_two = [
    { name: "React", icon: "/reactjs-svgrepo-com.svg" },
    { name: "CSS", icon: "/css-3-svgrepo-com.svg" },
    { name: "Html", icon: "/html-5-svgrepo-com.svg" },
    { name: "JavaScript", icon: "/javascript-svgrepo-com.svg" },
    { name: "Java", icon: "/java-svgrepo-com.svg" },
  ]
  return (
    <div className="skill-container" id="skill">
      <div className="skill-text">
        <h1 className="skill-tit">Technical Expertise for
          Impactful Solutions</h1>
      </div>

      <div><h1 id="slogo"></h1></div>

      <div className="skilldetail">
        <div className="skill-box">
          <h1>Frontend</h1>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Java Script</li>
            <li>React</li>
            <li>Vite</li>
            <li>Bootstrap</li>

          </ul>
        </div>
        <div className="skill-box">
          <h1>BackEnd</h1>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Advance Java</li>
            <li>Servlets</li>
          </ul>

        </div>
        <div className="skill-box">
          <h1>DataBase</h1>
          <ul>
            <li>Mongo DB</li>
            <li>My Sql</li>
            <li>Postgresql</li>
          </ul>
        </div>
        <div className="skill-box">
          <h1>Languages</h1>
          <ul>
            <li>Java Core and Advance</li>
            <li>Python Basics</li>
          </ul>
        </div>
        <div className="skill-box">
          <h1>FrameWorks & Library</h1>
          <ul>
            <li> Spring </li>
              <li>Spring Boot</li> 
              <li> Hibernate</li>
              <li> React.js</li>
              <li>Express.js</li> 

          </ul>
          </div>
        <div className="skill-box">
          <h1>UI AND UX</h1>
          <ul>
            <li>Figma</li>
            <li>Sketch</li>
          </ul>
        </div>
      </div>

      <div className="skill-ring-wrapper" >


        <div className="skill-ring outer-ring">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-items outer-item"
              style={{ "--i": index }}
            >
              <img src={`/icons/${skill.icon}`} alt={skill.name} />
              <span className="skill-popup">{skill.name}</span>

            </div>
          ))}
        </div>


        <div className="skill-ring inner-ring">
          {skill_two.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-items inner-item"
              style={{ "--i": index }}
            >
              <img src={`/icons/${skill.icon}`} alt={skill.name} />
              <span className="skill-popup">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="skill-center">
          <img src="/icons/browser.svg" alt="center-logo" />
        </div>

      </div>
      <p id="skill-slogo">Every line of code I write prioritizes scalability, security, and user-centric design - Ensuring your project is future-proof and performance-driven.</p>
    </div>
  );

}
