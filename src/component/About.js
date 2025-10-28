import './About.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About(){
    const aboutRef = useRef(null)
    const titleRef = useRef(null)
    const paragraphsRef = useRef([])

    useEffect(() => {
        // Animate about section entrance
        gsap.fromTo(aboutRef.current, 
            { opacity: 0, y: 100 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animate title with bounce effect
        gsap.fromTo(titleRef.current,
            { opacity: 0, x: -100, scale: 0.8 },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        // Animate paragraphs with stagger effect
        paragraphsRef.current.forEach((para, index) => {
            if (para) {
                gsap.fromTo(para,
                    { opacity: 0, x: -50, rotation: -5 },
                    {
                        opacity: 1,
                        x: 0,
                        rotation: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        delay: index * 0.2,
                        scrollTrigger: {
                            trigger: aboutRef.current,
                            start: "top 60%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )

                // Add hover effects to paragraphs
                para.addEventListener('mouseenter', () => {
                    gsap.to(para, {
                        scale: 1.02,
                        color: 'yellow',
                        textShadow: '0 0 10px rgb(0, 0, 0)',
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })

                para.addEventListener('mouseleave', () => {
                    gsap.to(para, {
                        scale: 1,
                        color: index === paragraphsRef.current.length - 1 ? '#ffff00' : '#ffffff',
                        textShadow: index === paragraphsRef.current.length - 1 ? '0 0 10px #ffff00' : 'none',
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            }
        })
    }, [])

    return(
        <div id="about" ref={aboutRef}>
            <div className='about-top'></div>
            <div className='about-container'>
                <h1 ref={titleRef} className='about-title'>About Me</h1>
                
                <p ref={el => paragraphsRef.current[0] = el} style={{marginTop:"20px"}}>⚡ Hey there! I'm Karthikeyan M, a passionate Information Technology student (2022–2026) from Mahendra College of Engineering, affiliated with Anna University, Chennai.</p><br></br>
                <p ref={el => paragraphsRef.current[1] = el}>⚡ I'm all about building smart, scalable, and creative tech solutions. With a strong foundation in Java, Python, and C++, I specialize in Full Stack Web Development using React, Node.js, HTML, CSS, JavaScript, and Vite.</p><br></br>
                <p ref={el => paragraphsRef.current[2] = el}>⚡ On the backend side, I've got hands-on experience with Spring Boot, Hibernate, Servlets, and JDBC, plus databases like MongoDB, PostgreSQL, and MySQL.</p><br></br>
                <p ref={el => paragraphsRef.current[3] = el}>⚡ I've worked on projects like Smart Farm X (a smart farming automation system) and Dual Communication System for the Deaf and Blind, which even bagged me a Gold Shield award 🏆.</p>
                <br></br>
                <p ref={el => paragraphsRef.current[4] = el} style={{color:"yellow", textShadow: "0 0 10px yellow"}}>I'm eager to bring my skills and creativity into the professional world — collaborating, learning, and building the next big thing in tech.</p>
            </div>
        </div>
    )
}
export default About;