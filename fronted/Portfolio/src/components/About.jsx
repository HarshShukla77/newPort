import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    return (
        <div className='flex  overflow-hidden lg:flex-row gap-[180px] '>
            {/* left */}
            <div className='    w-[700px]' >
                <h1 className='text-emerald-600 text-[2rem] font-semibold font-mono ' >WHO I AM ?</h1>
                <div className='text-white mt-4 font-sans text-[0.5rem] ' >
                    <TypeAnimation
                        sequence={[
                            ` My name is Harsh Shukla. I'm a passionate and enthusiastic programmer who genuinely enjoys building software. I’m a quick learner with a strong self-learning mindset, always curious about new technologies and how they can be applied to solve real-world problems. While my main focus is on web development, I also enjoy exploring broader areas of software engineering and have a growing interest in DevOps. I have a strong interest in data structures and algorithms, and I regularly work on improving my problem-solving skills. I'm always excited to take on meaningful projects and open to opportunities that align with my skills and help me grow`,
                            10000, ""
                        ]}
                        speed={30}
                        cursor={true}
                        style={
                            {
                                fontSize: '2em',
                                whiteSpace: 'pre-line',
                                display: "block"
                            }
                        }
                        repeat={Infinity}
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>

            {/* right */}
            <div className=' relative' >
                <img src="/Profile.jpg"   className='w-[200px] h-[326px] rounded-[10px]  ml-[200px]    hidden lg:flex  ' alt="harsh shukla" />
                
                
            </div>
            <div className=' items-center flex-col lg:mt-10 hidden lg:flex sm:hidden ' >
              <div className='flex  items-center rotate-90  py-[10px]  bg-[#1a1443] justify-center  w-[100px]  rounded-[5px] px-[70px]'>
                <span className='text-white font-normal  text-[1.3rem]   ' >About Me</span>
              </div>
              <div className='bg-[#1a1443]  h-[200px]  w-[2px] '>
              </div>
            </div>  
        </div>
    )
}

export default About
