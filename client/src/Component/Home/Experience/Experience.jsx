import React from 'react'
import './Experience.css'
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
const Experience = () => {
    return (
        <>
            <div className='main_info_div'>
                <div className="container">
                    <div className='heading_exp'>
                        <p >What I have done so far</p>
                        <h2 >Work Experience.</h2>
                    </div>
                    {/* first */}
                    <div className='experience_line_div mt-20' >
                        <div className='experience_second'>
                            <div className='experience_vertical'>
                                <span className='experience_vertical_span'>

                                    <div className='image_main_div'><img src=" " /></div>

                                </span>
                                <div className='experience_detail_div' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200"  data-aos-easing="ease-in-out-back" 
    data-aos-once="true">
                                    <IoMdArrowDropright className='arrow_icon_right' />
                                    <div className='experence_com_detail'><h3 >Mern Stack Developer</h3><p >Elite Web Technologies</p></div>
                                    <ul className='experience_ul'>
                                        <li >Got the position in the founding team of UdyamWell.</li>
                                        <li >Developing and maintaining web applications using  Mern Stack technology</li>
                                        <li >Single handedly developed frontend of the website and contributed in backend part too.</li></ul>
                                    <span class="present_experiecne_comp">Dec 2023 - Present</span>

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* second */}
                    <div className='experience_line_div mt-20' >
                        <div className='experience_second'>
                            <div className='experience_vertical'>
                                <span className='experience_vertical_span'>

                                    <div className='image_main_div'><img src=" " /></div>

                                </span>

                                <div className='experience_detail_div_right' data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200"  data-aos-easing="ease-in-out-back" 
    data-aos-once="true">
                                    <IoMdArrowDropleft  className='arrow_icon_left' />
                                    <div className='experence_com_detail'><h3 >Front End Developer</h3><p >Elite Web Technologies</p></div>
                                    <ul className='experience_ul'>
                                        <li >Got the position in the founding team of UdyamWell.</li>
                                        <li >Developing and maintaining web applications using  Mern Stack technology</li>
                                        <li >Single handedly developed frontend of the website and contributed in backend part too.</li></ul>
                                    <span class="present_experiecne_comp_left">May 2023 - Nov 2023</span>

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* third */}
                    <div className='experience_line_div mt-20' >
                        <div className='experience_second'>
                            <div className='experience_vertical'>
                                <span className='experience_vertical_span'>

                                    <div className='image_main_div'><img src=" " /></div>

                                </span>
                                <div className='experience_detail_div' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200"  data-aos-easing="ease-in-out-back" 
    data-aos-once="true">
                                    <IoMdArrowDropright className='arrow_icon_right' />
                                    <div className='experence_com_detail'><h3 >React Js Trainee</h3><p >Elite Web Technologies</p></div>
                                    <ul className='experience_ul'>
                                        <li >Got the position in the founding team of UdyamWell.</li>
                                        <li >Developing and maintaining web applications using  Mern Stack technology</li>
                                        <li >Single handedly developed frontend of the website and contributed in backend part too.</li></ul>
                                    <span class="present_experiecne_comp">Dec 2022 - April 2023</span>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience