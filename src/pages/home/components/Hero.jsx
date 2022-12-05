import React from 'react';
import Button from '../../../components/reusableComponents/Button';
import '../styles/Hero.scss';
import { FaStar } from 'react-icons/fa';
import {BsStarHalf} from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import { FaAmazon } from 'react-icons/fa';
const Hero = () => {
  return (
    <div className="hero_main">
        <div className='hero_main_first'>
            <div className='hero_main_second'>
                <p className='first_p'>
                    Turn your product into something that sticks forever
                </p>
                <p className="second_p">We offer a beautiful, high-end product that hooks your audience mutiplying your engagements and expression</p>
                <div className='hero_btn'>
                    <Button
                    name="Get Started"
                    width='60%'
                    height='70px'
                    borderTop='0px'
                    borderRight='16px'
                    borderBottom='0px'
                    borderLeft='16px'
                    color='white'
                    bgColor='rgb(236, 80, 45)'
                    border='none'  
                    margin='1rem' 
                    padding='1rem 3rem'                
                    
                    />
                    <Button 
                    name="Our pricing"
                    width='40%'
                    height='70px'
                    borderTop='0px'
                    borderRight='16px'
                    borderBottom='0px'
                    borderLeft='16px'
                    color='black'
                    bgColor='white'
                    border='none'  
                    padding='1 3rem'             
                                       
                    />
                </div>     
                <div className="third_container">
                    <div className='third_container_1'>
                        <div className='star'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <BsStarHalf />
                        </div>
                        <p>4.4/5 --- from 206 reviews</p>
                        <FcGoogle size='40px'/>
                    </div>
                    <div className='third_container_2'>
                        <div className='star'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <BsStarHalf />
                        </div>
                        <p>4.6/5 --- from 198 reviews</p>
                        <FaAmazon size='40px' color='rgb(236, 80, 45)' />
                    </div>                   
                </div>           
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Hero