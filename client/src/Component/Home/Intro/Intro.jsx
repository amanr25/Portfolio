import React from 'react'
import "./Intro.css"

const Intro = () => {
    return (
        <>
            <div className="intro_first_main" >
                <div className="container">
                    <div className='intro_div' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200"  data-aos-easing="ease-in-out-back" 
    data-aos-once="true">
                        <div className='intro_first'>
                            <p >Introduction</p>
                            <h2 >Overview.</h2>

                        </div>
                        <p className='intro_p mt-4'>As a MERN stack developer, I possess the skills and expertise to create dynamic and interactive web applications. With a strong foundation in JavaScript and a deep understanding of the MERN (MongoDB, Express.js, React.js, Node.js) stack, I am equipped to build robust and scalable solutions. My passion for front-end development, coupled with my proficiency in back-end technologies, allows me to deliver seamless user experiences while ensuring efficient server-side functionality. I am committed to staying up-to-date with the latest industry trends and best practices, enabling me to create cutting-edge applications that meet the evolving needs of users.
                            <div>
                                <button className='resume_butt mt-2'>Resume</button>
                            </div>
                        </p>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Intro