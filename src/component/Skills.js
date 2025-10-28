import './Skills.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Skills(){

    const skill_container=useRef();

    useGSAP(()=>{

        const skill_img=gsap.utils.toArray(".skill-img");
        const skill_details=gsap.utils.toArray(".skdetails");
        
        // Check if mobile device
        const isMobile = window.innerWidth <= 768;
        
        // Set initial state for all devices
        gsap.set(skill_img, { x: 0, rotation: 0 });
        
        if (!isMobile) {
            const t1=gsap.timeline({
                scrollTrigger:{
                    trigger:skill_container.current,
                    start:"top-=100 center",
                    end:"+=10",
                    scrub:4.5,
                }
            });
        // t1.to(skill_img[0],{x:150,rotation:360,duration:3})
        //     .to(skill_img[1],{x:-150,rotation:360,duration:3},"<")
        //     .to(skill_img[2],{x:0,rotation:360,duration:3},"<")
        //     .to(skill_img[3],{x:300,rotation:360,duration:3},"<")
        //     .to(skill_img[4],{x:-300,rotation:360,duration:3},"<")
        //     .to(skill_img[5],{x:450,rotation:360,duration:3},"<")
        //     .to(skill_img[6],{x:-450,rotation:360,duration:3},"<")
        //     .to(skill_img[7],{x:150,rotation:360,duration:3},"<")
        //     .to(skill_img[8],{x:-150,rotation:360,duration:3},"<")
        //     .to(skill_img[9],{x:0,rotation:360,duration:3},"<")
        //     .to(skill_img[10],{x:300,rotation:360,duration:3},"<")
        //     .to(skill_img[11],{x:-300,rotation:360,duration:3},"<")
        //     .to(skill_img[12],{x:450,rotation:360,duration:3},"<")
        //     .to(skill_img[13],{x:-450,rotation:360,duration:3},"<");

            t1.to(skill_img[0], { x: "10vw", rotation: 360, duration: 3 })
              .to(skill_img[1], { x: "-10vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[2], { x: "0vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[3], { x: "20vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[4], { x: "-30vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[5], { x: "30vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[6], { x: "-20vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[7], { x: "10vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[8], { x: "-10vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[9], { x: "0vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[10], { x: "20vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[11], { x: "-20vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[12], { x: "30vw", rotation: 360, duration: 3 }, "<")
              .to(skill_img[13], { x: "-30vw", rotation: 360, duration: 3 }, "<");
        }

              gsap.fromTo(skill_details,{x:-100,opacity:0},{
                x:0,opacity:1,duration:2,stagger:0.3,
                scrollTrigger:{
                    trigger:".skill-detail",
                    start:"top-=350 center",
                    end:"+=1000",
                    
                    toggleActions:"play none none none",
                    onLeave:()=>gsap.to(skill_details,{x:-100,opacity:0,duration:0}),
                    onEnterBack:()=>gsap.to(skill_details,{x:0,opacity:1,duration:0.5})
                }
            })
        
            
        
    },{scope:skill_container})

    return(
            <div id="skills" className='skill-block'>
                <h1 className='skill-name'>SKILLS </h1>
                <div ref={skill_container} className='skill-container'>
                    <div className='skill-detail'>
                        <p className='skdetails'>💡 “I’m an IT student who loves blending logic and creativity from coding full-stack apps to crafting sleek UI experiences.”</p>
                        <p className='skdetails'>⚙️ “Skilled in Java, Python, C++ ,React and more, I bring ideas to life through clean, responsive, and dynamic web solutions.”</p>
                        <p className='skdetails'>🚀 “Passionate about innovation, teamwork, and building tech that actually makes an impact.”</p>
                    </div>
                    <div className='skill-row-1'>
                            <img src='/images/html.jpeg' alt='not' className='skill-img row1'></img>
                            <img src='/images/css.jpeg' alt='not-found' className='skill-img row1'></img>
                            <img src='/images/js.jpeg' alt='not-found' className='skill-img row1'></img>
                            <img src='/images/c++.jpeg' alt='not-found' className='skill-img row1'></img>
                            <img src='/images/hybernate.jpeg' alt='not-found' className='skill-img row1'></img>
                            <img src='/images/java.jpeg' alt='not-found' className='skill-img row1'></img>
                            <img src='/images/spring.jpeg' alt='not-found' className='skill-img row1'></img>
                    </div>
                    <div className='skill-row-2'>
                            <img src='/images/mongodb.jpeg' alt='not found' className='skill-img row2'></img>
                            <img src='/images/mysql.jpeg' alt='not found' className='skill-img row2'></img>
                            <img src='/images/nodejs.jpeg' alt='not found' className='skill-img row2'></img>
                            <img src='/images/postgresql.jpeg' alt='not found' className='skill-img row2'></img>
                            <img src='/images/react.jpeg' alt='not found' className='skill-img row2'></img>
                            <img src='/images/tomcate.png' alt='not found' className='skill-img row2'></img>
                            <img src='/images/vite.jpeg' alt='not found' className='skill-img row2'></img>
                    </div>
             </div>
            </div>
    )
}
export default Skills;