import React from "react";

import './timeline.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Tline() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
return(
  <div className="container" id ="timeline">
  <div className="timeline">
    <ul>
      <li>
        <div className="timeline-content">
          <h3 className="date" style={{color : darkMode? '' : 'White'}}>Jan 2022- APRIL 2022</h3>
          <h1>Internship</h1>
          <h5> Company : Highradius</h5>
          <p>
          Designation: Intern
          </p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">2019-2023</h3>
          <h1>Lovely Professional University</h1>
          <p>
          Location: Jalandhar, Punjab <br/>
          Course:Bachelor of Technology<br/>
          Stream: Computer Scienece & Engineering <br/>
          Cgpa 7.8
            
          </p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">20th may, 2019</h3>
          <h1>Saraswati Vidhya Mandir Inter College</h1>
          <p>
          Location: Unnao, UP <br/>
          Course: PCM<br/>
          Percentage: 68%
            
          </p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">20th may, 2017</h3>
          <h1>SSC</h1>
          <h4>Saraswati Vidhya Mandir Inter College.</h4>
          <p>
          
          Location: Unnao, UP <br/>
          
          Percentage: 73.5%
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>

  );
}
export default Tline;
