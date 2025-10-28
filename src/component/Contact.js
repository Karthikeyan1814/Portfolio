import './Contact.css'
import emailIcon from './logos/mail-logo.png';
import linked from './logos/linkedin-logo.png';
import github from './logos/git.png';
import phone from './logos/phone.png';
import { useState } from 'react';
function Contact(){
    const [passed,setpassed]=useState(false);
    return(
        <div>
            <div id="contact" className='content-top'>
                 <h1 style={{ letterSpacing: "3px", fontSize: "45px", color: "yellow", paddingTop: '350px', paddingLeft: "150px" }}>Contact</h1>
                 <div className='contact-btn'>
                    <img className='funck' src={emailIcon} style={{background:"transparent"}} alt='not found' onClick={() => window.open('mailto:km3974808@gmail.com')}></img>
                    <img className='funck' onClick={() => window.open('https://github.com/Karthikeyan1814')} src={github} alt='not found' style={{height:"40px",width:'60px',marginTop:'18px',filter:"brightness(0) invert(1)"}}></img>
                        <img className='funck' onClick={() => window.open('https://www.linkedin.com/in/karthikeyan-m-ba49252a4/')} src={linked} style={{height:"50px",filter:"brightness(0) invert(1)",marginTop:'12px',marginLeft:"5px",width:"50px", paddingLeft:"-10px"}} alt='not found'></img>
                    <img  src={phone} alt='not found' onMouseEnter={()=>setpassed(true)} onMouseLeave={()=>setpassed(false)}></img>
                    {passed &&<div className='contact-glass'><p style={{color:"skyblue"}}>+91-8825750992</p></div>}
                    <div className='down-container'>
                        <h1 style={{ letterSpacing: "3px", fontSize: "40px", color: "yellow"}} className='down'>Download Resume</h1>
                        
                        <button className='down-btn'
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/project/files/Updated Karthi Resume.pdf";
                                link.download = "Kathikeyan-M Resume .pdf";
                                link.click();
                            }} >ClickHere</button>
                        
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Contact;