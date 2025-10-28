import './Name.css'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
 //import { type } from '@testing-library/user-event/dist/type';
gsap.registerPlugin(SplitText);

function Name(){

    useEffect(()=>{
        const split=new SplitText(".para",{type:"lines"});
         gsap.from(split.lines, {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            delay:3,   
            duration: 2,
            ease: "back.out(1.7)"
    });
    },[])

    return(
        <div>
            <div className="name-container">
            <div><h1 className="dash">|</h1></div>
            <div><h1 className="name1" style={{color:"yellow",letterSpacing:"5px"}}><font color="red">Hello ,</font> I AM KARTHIKEYAN</h1>
            <h4 className="name1" style={{paddingTop:"0px" ,fontSize:"20px",color:"skyblue",letterSpacing:"3px"}}> Full Stack Devloper And UI & UX Designer</h4></div>
        </div>
        <div className='details-container'>
            <p className='para'> I am Full-stack developer and UI & UX designer passionate about creating clean and efficient web solutions .</p>
            <p className='para'>I craft seamless experiences using frontend, backend, and databases.</p>
            <p className='para'>Ready to bring my skills and energy to your team and build something amazing.</p>
        </div>
            
        </div>
    )
}
export default Name;