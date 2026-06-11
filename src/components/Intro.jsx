import "./Intro.css"
import myPic from "../assets/karthi.png";
import { useState,useEffect } from "react";
function Intro(){
    
    
   const words = [
    "Java Full Stack Developer",
    "Web Designer"
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      // When word fully typed
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      // When word fully erased
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);


    return(
        <div className="details" id="home">
         {/* <h4 id="name1">Hi ,<span id="greetings">{greeting}</span> !!</h4> */}
        <div className="intro-text">
          <h1 id="name">Hey, I Am Karthikeyan</h1>
           <h2 id="name1">
      {text}
      <span className="cursor">|</span>
    </h2>
          <h2 id="slogo">Turning pixels into performance 🚀</h2>
          <button className="grab-resume" id="grab1"><a href="/Updated _Karthikeyan_Resume.pdf" download style={{textDecoration:"none",color:"white"}}>Grab My Resume</a></button>
        </div>
        <div className="ring">
             <img src={myPic} id="mypic"/>
        </div>
    </div>
    )
}
export default Intro;
