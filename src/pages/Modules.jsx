import React from 'react'
import '../index.css'
import module1_girl from '../assets/module1_girl.png'
import module1_boy from '../assets/module1_boy.png'
import module2_girl from '../assets/module2_girl.png'
import module2_boy from '../assets/module2_boy.png'
import module3_girl from '../assets/module3_girl.png'
import module3_boy from '../assets/module3_boy.png'
import module4_girl from '../assets/module4_girl.png'
import module4_boy from '../assets/module4_boy.png'
import module5_girl from '../assets/module5_girl.png'
import module5_boy from '../assets/module5_boy.png'

export const Modules = () => {
  return (
    <div className="card-container">
      <div className="card-body">
        <h1 className="card-title-left">SAVING</h1>
        <p className="card-description-left">Learn why saving is important and how to start saving for your future goals.</p> 
        <p className="card-description-left">Get practical tips to build a strong financial base.</p>
        <img src={module1_girl} alt="Module 1" className='card-image-right' />
        <img src={module1_boy} alt="Module 1" className='card-image-right' />
        <div className="blur-right"/>
      </div> 

      <div className="card-body">
        <h1 className="card-title-right">BUDGETING</h1>
        <p className="card-description-right">Master budgeting to manage your money wisely.</p>
        <p className="card-description-right">Create a budget that works for you and take control of your finances.</p>
        <img src={module2_girl} alt="Module 1" className='card-image-left' />
        <img src={module2_boy} alt="Module 1" className='card-image-left' />
        <div className="blur-left"/>
      </div> 

      <div className="card-body">
        <h1 className="card-title-3">INTEREST AND</h1>
        <h1 className="card-title-3-1">DEBT MANAGEMENT</h1>
        <p className="card-description-3">Understand how interest and debt affect your finances.</p>
        <p className="card-description-3">Learn to manage debt responsibly and make smart borrowing choices.</p>
        <img src={module3_girl} alt="Module 3" className='card-image-right-3' />
        <img src={module3_boy} alt="Module 3" className='card-image-right-3' />
        <div className="blur-right"/>
      </div> 

      <div className="card-body">
        <h1 className="card-title-right">INVESTING</h1>
        <p className="card-description-right">Learn the basics of investing for your financial future.</p>
        <p className="card-description-right">Explore different investment options and strategies to grow your wealth over time.</p>
        <img src={module4_girl} alt="Module 1" className='card-image-left' />
        <img src={module4_boy} alt="Module 1" className='card-image-left' />
        <div className="blur-left"/>
      </div> 

      <div className="card-body">
        <h1 className="card-title-3">RETIREMENT</h1>
        <h1 className="card-title-3-1">PLANNING</h1>
        <p className="card-description-left">Prepare for a secure retirement.</p>
        <p className="card-description-left">Explore saving options and strategies to reach your retirement goals.</p>
        <img src={module5_girl} alt="Module 1" className='card-image-right' />
        <img src={module5_boy} alt="Module 1" className='card-image-right' />
        <div className="blur-right"/>
      </div> 
    </div>    
  );
};
