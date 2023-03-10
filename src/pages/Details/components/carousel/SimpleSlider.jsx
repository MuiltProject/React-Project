import React, {useState} from "react";
import { Carousel } from 'react-carousel-minimal';
import coat1 from '../../images/coat1.jpg';
import coat2 from '../../images/coat2.jpg';
import coat3 from '../../images/coat3.jpg';
import coat4 from '../../images/coat4.jpg';
import coat5 from '../../images/coat5.jpg';
import coat6 from '../../images/coat6.jpg';
import coat7 from '../../images/coat7.jpg';
import coat8 from '../../images/coat8.jpg';

function SimpleSlider() {
  const data = [
    
     {
      image: coat1,
     },
     {
      image: coat2,
     },
     {
      image: coat3, 
     },
     {
      image: coat4,
     },
     {
      image: coat5,
     },
     {
      image: coat6,
     },
     {
      image: coat7,
     },
     {
      image: coat8,
     }
   ];
 
   return (
     <div className="App">
       <div style={{ textAlign: "center" }}>
         
         <div style={{
           padding: "0 30px"
         }}>
           <Carousel
             data={data}
             time={2000}
              height="500px"
             automatic={true}
             dots={false}
             pauseIconColor="white"
             pauseIconSize="40px"
             slideBackgroundColor="#EDE3D7"
             slideImageFit="cover"
             thumbnails={true}
             thumbnailWidth="100px"
             style={{
               textAlign: "center",
             
               margin: "30px auto",
             }}
           />
         </div>
       </div>
     </div>
   );
 }
 
 export default SimpleSlider;


