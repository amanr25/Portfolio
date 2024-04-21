import React from 'react'
import "./Info.css"
import circle from "../../../Images/circle.png"
import front from "../../../Images/front.png"
import back from "../../../Images/back.png"

const Info = () => {
  return (
    <>
    <div className='main_info_div'>
        <div className="container main_info_flex">
{/* first */}
        <div className='first_box_1' >
            <div className="first_box_inner" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200"  data-aos-easing="ease-in-out-back" 
    data-aos-once="true">

                <div className='py-5 px-12 first_line_box'>
                <img src={circle} alt="web-development" />
                <h3 >Web Developer</h3>

                </div>
            </div>


        </div>
        {/* second */}
        <div className='first_box_1' >
            <div className="first_box_inner"  data-aos="fade-right" data-aos-duration="2000" data-aos-offset="200"  data-aos-easing="ease-in-out-back" 
    data-aos-once="true">

                <div className='py-5 px-12 first_line_box'>
                <img src={front} alt="web-development" />
                <h3 >Front End Developer</h3>

                </div>
            </div>


        </div>
        {/* third */}
        <div className='first_box_1' >
            <div className="first_box_inner" data-aos="fade-right" data-aos-duration="3000" data-aos-offset="200"  data-aos-easing="ease-in-out-back" 
    data-aos-once="true">

                <div className='py-5 px-12 first_line_box'>
                <img src={back} alt="web-development" />
                <h3 >Back End Developer</h3>

                </div>
            </div>


        </div>
        </div>

    </div>
</>
  )
}

export default Info