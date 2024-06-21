import React from 'react';
import './Section3.css'; // Import the CSS file

const Section3 = () => {
    const features = [
        {
            id: 1,
            heading: "Video Lectures",
            paragraph: "10-12 hours of easy to learn Video lectures which are designed specifically for LL.B. semester exams to help student excel academically.",
        },
        {
            id: 2,
            heading: "Topic Notes",
            paragraph: "Comprehensive and clear topic notes for effortless learning.",
        },
        {
            id: 3,
            heading: "Case Summaries",
            paragraph: "Concise summaries of cases essential for final exams.",
        },
        {
            id: 4,
            heading: "Sample Answers",
            paragraph: "Sample answers guide for the past five years of question papers",
        }
    ]

    return (
        <div className="section3">
            <h2>In Our Courses, we will provide</h2>
            <p>We offer exam preparation guide for LLB students of Delhi University</p>
          
            <div className='featureContainer'>
            {features.map((feature) => (
                <div className="feature" key={feature.id}>
                    <h3>{feature.heading}</h3> 
                 <p>{feature.paragraph}</p> 
                 </div>
            ))}
            </div>
            <a href="#courses" className="courses-button">Course Offered</a>
        </div>
    );
};

export default Section3;
