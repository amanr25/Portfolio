import React, { useEffect } from 'react'
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            <div className='banner_back'>
                <div className='first_box'>
                    <div className='first_line_div'>
                        <div className='line_circle_top'>
                        </div>
                        <div className='straight_line_bottom'>
                        </div>
                    </div>
                  


                    <div className='second_box' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="200"  data-aos-easing="ease-in-out-back" 
    data-aos-once="true"
    >
                        <h1 className='mt-2'>
                            Hi, I'm <span >Aman Rajput</span>
                        </h1>
                        <p className='mt-2'>Building Modern Web Experiences with  <br />  MERN Stack Mastery</p></div>
                </div>

            </div >

        </>
    )
}


export default Banner