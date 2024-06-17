import React from 'react';
import './WelcomeSection.css'; // Import the CSS file

const WelcomeSection = () => {
  return (
    <div className="welcome-section">

      <div className="p1">
      <h1>Welcome</h1>
      <p>
        We offer semester exam preparation guides for LL.B. students at Delhi University. 
        We simplify the exam preparation journey by offering interactive video lectures which are specific to exams and previous year question papers, concise case summaries and lecture notes, and sample answers to previous year exam questions.
      </p>

      <p>
        We provide top-tier education in an accessible format, ensuring that learning is both enriching and enjoyable. 
        Our dedicated instructors are deeply committed to empowering students to thrive academically.
      </p>
      </div>
     

      <a href="#courses" className="courses-button">Our Courses</a>
    </div>
  );
};

export default WelcomeSection;
