import './Project.css'
import img1 from '../image-pro/smart1.png';
import img2 from '../image-pro/smart2.png';
import img3 from '../image-pro/smart3.png';
import img4 from '../image-pro/smart4.png';
import img5 from '../image-pro/smart5.png';
//passport images
import img6 from '../image-pro/pass1.png';
import img7 from '../image-pro/pass2.png';
import img8 from '../image-pro/pass3.png';
import img9 from '../image-pro/pass4.png';
//book bank 
import img10 from '../image-pro/book1.png';
import img11 from '../image-pro/book2.png';
import img12 from '../image-pro/book3.png';
import img13 from '../image-pro/book4.png';
import img14 from '../image-pro/book5.png';
import img15 from '../image-pro/book6.png';
//img
import farm from './logos/farm.jpeg'
import passport from './logos/passport.jpeg'
import book from './logos/book.jpeg'

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


function Project() {

    const localImages = [img1, img2, img3, img4, img5];
    const localImages1=[img6,img7,img8,img9];
    const localImages2=[img10,img11,img12,img13,img14,img15]
    const images = useRef([]);
    const [current, setCurrent] = useState(0);

    const [glass1, setglass1] = useState(false);
    const [glass2,setglass2]=useState(false);
    const [glass3,setglass3]=useState(false);


    const container_glass1=useRef()
    const container_glass1_second=useRef()

  useGSAP(() => {
    gsap.fromTo(
      container_glass1.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: container_glass1.current,
          start: "top-=400 center",
          end: "bottom 20%",
         
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      container_glass1_second.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: container_glass1_second.current,
          start: "top-=400 center",
          end: "bottom 20%",
        
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".pro-glass2",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".pro-glass2",
          start: "top-=400 center",
          end: "bottom 20%",
          
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

    const updateStack = (index) => {
        const total = images.current.length;
        const newIndex = (index + total) % total;
        setCurrent(newIndex);

        images.current.forEach((img, i) => {
            if (!img) return; // skip if the image DOM element is not rendered
            const offset = i - newIndex;
            gsap.to(img, {
                x: offset * 80,
                scale: offset === 0 ? 1 : 0.85,
                opacity: offset === 0 ? 1 : 0.5,
                zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
                duration: 0.35,
                ease: "power2.out",
            });
        });
    };

    useEffect(() => {
        if (glass1) {
            updateStack(0); // animate only when popup is visible
        }
    }, [glass1]);
    return (
        <div id="projects">
            <div className='project-top'>
            </div>
            <div className='project-container'>
                <h1 className='project-name'>PROJECTS</h1>
                <div className='project-gradient-1'></div>
                <div className='pro-box1'></div>
                <img src={farm} className='pro-box2' alt='not found'></img>
                <div className='pro-glass1' ref={container_glass1} onMouseEnter={() => { setglass1(true) }} onMouseLeave={() => { setglass1(false) }}>
                    <h1 style={{ paddingTop: "20px" }}>Smart Farm X </h1>
                    <p style={{ paddingTop: "10px" }}>Sustainable Agriculture with AI for Crop Yield Prediction</p>
                    {glass1 && <div className='glass1-hidden' style={{ paddingTop: "20px", color: "orange" }}>
                        <p>The "Smart Farm X" project is an integrated web-based
                            platform designed to empower farmers and agricultural
                            stakeholders with intelligent, data-driven tools for modern
                            farming. By leveraging real-time weather data, crop disease
                            detection, soil analysis, market trends, and seasonal planning, the
                            application aims to optimize crop yield, reduce losses, and enhance
                            decision-making in agriculture.</p>
                        <div className="image-stack">
                            {localImages.map((img, i) => (
                                <img
                                    key={i}
                                    ref={(el) => (images.current[i] = el)}
                                    src={img}
                                    alt={`img-${i}`}
                                />
                            ))}
                            <div className="stack-controls">
                                <button className='btn1' onClick={() => updateStack(current - 1)}>&lt;</button>
                                <button className='btn2' onClick={() => updateStack(current + 1)}>&gt;</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                {/* -------------------- */}
                <div className='project-gradient-2'></div>
                <div className='pro-box3'></div>
                <img src={passport} alt='not found' className='pro-box4'></img>
                <div className='pro-glass2' onMouseEnter={() => { setglass2(true) }} onMouseLeave={() => { setglass2(false) }}>
                    <h1 style={{ paddingTop: "10px", paddingLeft: "20px" }}>Passport Automation System </h1>
                    <p style={{ paddingTop: "10px" , paddingLeft: "20px"  }}>Passport Automation System with Multi-Role Verification Workflow</p>
                    {glass2 && <div className='glass1-hidden' style={{ paddingTop: "10px", color: "skyblue" }}>
                        <p>The Passport Automation System is a comprehensive digital platform built with React.js frontend and Node.js/Express backend that streamlines the entire passport application process through a multi-stage verification workflow. The system supports four distinct user roles - applicants who submit applications with document uploads, verifying officers who conduct initial document review, police officers who perform background checks, and administrators who provide final approval and issue passports.</p>
                        <div className="image-stack">
                            {localImages1.map((img, i) => (
                                <img
                                    key={i}
                                    ref={(el) => (images.current[i] = el)}
                                    src={img}
                                    alt={`img-${i}`}
                                />
                            ))}
                            <div className="stack-controls">
                                <button className='btn1' onClick={() => updateStack(current - 1)}>&lt;</button>
                                <button className='btn2' onClick={() => updateStack(current + 1)}>&gt;</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                {/* -------------------------- */}
                <div className='project-gradient-1'></div>
                <div className='pro-box1 box-clone' ></div>
                <img src={book} alt='not found' className='pro-box2 clone-img' ></img>
                <div className='pro-glass1 box-clone2' ref={container_glass1_second}  onMouseEnter={() => { setglass3(true) }} onMouseLeave={() => { setglass3(false) }}>
                    <h1 style={{ paddingTop: "20px" }}>Book Bank Automation </h1>
                    <p style={{ paddingTop: "10px"  }}>Passport Automation System with Multi-Role Verification Workflow</p>
                    {glass3 && <div className='glass1-hidden' style={{ paddingTop: "20px", color: "orange" }}>
                        <p>BookBank is a full-stack library management system built with React frontend and Node.js/Express backend using MongoDB database. The application provides role-based access control where administrators can manage books, members, and transactions through dedicated dashboards, while regular users can browse available books, borrow items, and track their borrowing history.</p>
                        <div className="image-stack">
                            {localImages2.map((img, i) => (
                                <img
                                    key={i}
                                    ref={(el) => (images.current[i] = el)}
                                    src={img}
                                    alt={`img-${i}`}
                                />
                            ))}
                            <div className="stack-controls">
                                <button className='btn1' onClick={() => updateStack(current - 1)}>&lt;</button>
                                <button className='btn2' onClick={() => updateStack(current + 1)}>&gt;</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Project;