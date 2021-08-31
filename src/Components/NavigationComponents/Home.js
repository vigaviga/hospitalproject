import React from 'react';
import '../../Styles/Home.css';

const Home = () => {
  return (
    <div className = "HomeContainer">
        <b>Mission Statement</b>
        <p><b>The OSCAR Program</b> of Carl J. Shapiro Department of Orthopaedic Surgery provides the expertise and resources 
        to support our clinical investigators from scientific discovery to extraordinary healthcare.</p>  
       
        <p>As a Harvard-affiliated teaching hospital, BIDMC’s world-class patient care is built on the foundation of high-quality,
             empirically-driven clinical research.  In partnership with our investigators, <b>The OSCAR Program facilitates</b>, 
             fosters and operationalizes transformative research from bench to bedside.</p>
        
        <p><b>High Level Summary of Services</b></p>

        <ul>
            <li>
                Provides solutions for development and conduct of clinical trials,
                such as data collection, document creation, database design, subject 
                recruitment, and IRB and regulatory navigation
            </li>
            <li>
                Offers advanced biostatistics and informatics expertise, including
                conceptualization of hypothesis and experimental design, data analysis, 
                interpretation, presentation, and manuscript write-up and submission
            </li>
            <li>
                Assists with grant and manuscript development, preparation, and submission
            </li>
            <li>
                Identifies channels, partners, and best practices for novel scientific and clinical pathway innovation
            </li>
            <li>
                Liaises with all clinical research-related internal and external stakeholders as 
                needed, such as Technology Ventures Office, Clinical Trials Office, FDA, or biotechnology or philanthropic partners
            </li>
        </ul>
        <p>
            <b>The OSCAR Program</b> policy is to assist our faculty researchers in any way that facilitates their research productivity, 
            and provide excellent mentorship to emerging physician-scientists.  
        </p>
    </div>
  );
};

export default Home;