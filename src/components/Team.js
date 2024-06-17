
import React from 'react'
import './Profile.css'; // Import the CSS file


const Profile = ({src,name,faculity}) => {
  return (
    <div className="profile-card">
      <img src={src} alt="Garima Singh" />
      <p className="profile-name">{name}</p>
      <p className="profile-role">{faculity}</p>
    </div>
    
  );
};



function Team() {
  return (
    <div className="team">
    <h2 className="section-title">Team</h2>
    <div className="picture">
     
      <div className="profile-row1">
        <Profile src="https://lumin-website-9279.web.app/static/media/beauty.e27f66ae44e763214b04.jpeg" name="Beauty Gupta" faculity="National Law University, Delhi" />
        <Profile src="https://lumin-website-9279.web.app/static/media/eshan.8720c4ef5f53d42babc3.jpeg" name="Eshan Singh" faculity="Backend Developer" />
        <Profile src="https://lumin-website-9279.web.app/static/media/garima.40317ad41bcf24e67031.jpg" name="Garima Singh" faculity="Faculty of Law, University of Delhi" />
        <Profile src="https://lumin-website-9279.web.app/static/media/medovisienuo.ab3a93dcce0a23454bfa.jpg" name="Medovisienuo Dahou" faculity="National Law University" />
      </div>
      
      <div className="profile-row2">
        <Profile src="https://lumin-website-9279.web.app/static/media/pankaj.4d39126c33b8686390bc.jpeg" name="Pankaj Singh" faculity="Founder & CEO" />
        <Profile src="https://lumin-website-9279.web.app/static/media/ritesh.f5a184ece74298298bf3.JPG" name="Ritesh Gupta"faculity="Frontend Developer"/>
        <Profile src="https://lumin-website-9279.web.app/static/media/yash.a624778bbab541f92dac.jpeg" name="Yash Gautam" faculity="National law University,Delhi" />
      </div>
    </div>
  </div>
  )
}

export default Team
