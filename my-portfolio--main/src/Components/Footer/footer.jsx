import React from 'react'
import './Footer.css';
import github from '../../Img/github.png';
import wave from "../../Img/wave.png";
import linkedin from '../../Img/linkedin.png';
import instagram from '../../Img/instagram.png';

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

const Footer = ()=>{
    return(
        <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} /> 
            <div className="f-content">
                <p>kartikdixit37093@gmail.com</p>
                <p>8840196616</p>
              
   
                <div className="f-icons">
                {/* <a href='Github.com'  > <img src={github} alt="" /></a>
                <a href='Linkedin.com'  >     <img src={linkedin} alt="" /></a>
                    <a href='Instagram.com'  >    <img src={instagram} alt="" /></a> */}
                <Insta color = 'white' size  = '3rem' />
                <Facebook color = 'white' size  = '3rem' />
                <Gitub color = 'white' size  = '3rem' />
                    
                </div>
            </div>
        </div>
    )

}

export default Footer;
// import React from "react";
// import "./Footer.css";
// import wave from "../../Img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <img src={wave} alt="" style={{ width: "100%" }} />
//       <div className="f-content">
//         <span>Zainkeepscode@gmail.com</span>
//         <div className="f-icons">
//           <Insta color="white" size={"3rem"} />
//           <Facebook color="white" size={"3rem"} />
//           <Gitub color="white" size={"3rem"} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;