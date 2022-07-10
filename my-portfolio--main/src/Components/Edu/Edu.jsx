import React from 'react'
import './Edu.css'
import { themeContext } from "../../Context";
import { useContext } from 'react';



const Edu = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
         
   
        <div className="education " id='Education' style = {{color : darkMode? 'white' : ''}}>
        <h1 style={{color : darkMode? 'white' : ''}}>Education</h1>
        <div className="p-col">
            <div className="col">

                <h2 style={{color : darkMode? 'white' : ''}}>Bachlor of Technologgy</h2>
                <h3>Pursue My Bachelor Of Technology <br />In Computer Science And
                    Engineering From  Lovely  Professional<br /> University With Current CGPA Of 7</h3>
            </div>
            <div className="col">

                <h2 style= {{color : darkMode? 'white' : ''}}>HSC</h2>
                <h3>Completed My 12th In 2019 From Saraswati Vidya Mandir Inter College </h3>
            </div>
            <div className="col">

                <h2>SSC</h2>
                <h3>Completed My 12th In 2017 From Saraswati Vidya Mandir Inter College </h3>
            </div>
        </div>

    </div>

    )
}

export default Edu

