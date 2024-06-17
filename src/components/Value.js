import React from 'react'
import './Value.css'; 

function Value() {

      const arr=[

         {
             id:1,
            heading: "Mission oriented",
              p:"Our goal is to empower every person to have access to quality learning. We are deeply committed to making a meaningful impact in the world. It's about aligning our goals, strategies, and resources to our mission, ensuring that every endeavor we do contribute towards that goal."
         },
         {
             id:2,

            heading: "Diversity",
            
              p:"We embrace people from various backgrounds as we believe that through providing access to knowledge we can reduce cultural divides in the world. Together, we stand committed to building a workplace and society where everyone has the opportunity to succeed and thrive."
         },
         {
             id:3,
            heading: "Excellence",

              p:"We strive to provide access to excellent quality education to every person on the earth.isn't merely a word for us; it's a mindset, a culture, and a promise to our customers, employees, and stakeholders. It's about going above and beyond, surpassing expectations, and constantly striving for improvement."
            }

      ]


  return (
    
      <div className="card-container">
            <h2>Our Values</h2> 

            <div className="three-container">
      {
        arr.map((e)=>(
            <div className="text-container" key={e.id}>
               <h3>{e.heading}</h3>                  
               <p>{e.p}</p>
            </div>
        ))
      }
        </div>
           </div>
  )
}

export default Value
