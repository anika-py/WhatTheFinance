import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css"; // Import your CSS file

export const Home = () => {
    const handleNextClick = () => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    };

    const handlePrevClick = () => {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    useEffect(() => {
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        next.addEventListener('click', handleNextClick);
        prev.addEventListener('click', handlePrevClick);

        // Add overflow-hidden class to body when component mounts
        document.body.classList.add('overflow-hidden');

        // Cleanup function to remove the class when component unmounts
        return () => {
            next.removeEventListener('click', handleNextClick);
            prev.removeEventListener('click', handlePrevClick);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div className="container">
            <div className="slide">
                <div className="item" style={{ backgroundColor: '#F1F7ED' }}>
                    <div className="content">
                        <div className="name">Switzerland</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className="home-btn">Take a Quiz</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundColor: '#F1F7ED' }}>
                    <div className="content">
                        <div className="name">What the Finance ?</div>
                        <div className="des">At WTF, we're dedicated to making financial education accessible to all. We aim to empower individuals with the knowledge and tools needed to achieve financial well-being.</div>
                        <Link to='/ContactUs'>
                        <button className="home-btn">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div className="item" style={{ backgroundColor: '#F1F7ED' }}>
                    <div className="content">
                        <div className="name">Iceland</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className="home-btn">See More</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundColor: '#F1F7ED' }}>
                    <div className="content">
                        <div className="name">Explore Our Modules</div>
                        <div className="des">Discover our engaging modules, covering key topics like investing, budgeting, and saving, to enhance your financial knowledge and skills.</div>
                        <Link to='/Modules'>
                            <button className="home-btn">See More</button>
                        </Link>
                    </div>
                </div>
                <div className="item" style={{ backgroundColor: '#F1F7ED' }}>
                    <div className="content">
                        <div className="name">Netherland</div>
                        <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className="home-btn">See More</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundColor: '#F1F7ED' }}>
                    <div className="content">
                        <div className="name">Take Our Quiz</div>
                        <div className="des">Don't know where to start? Take our quick quiz to find out your financial literacy level. Get personalized recommendations on where to start your learning journey.</div>
                        <button className="home-btn">Start</button>
                    </div>
                </div>
            </div>
            <div className="button">
                <button className="prev" onClick={handlePrevClick}><FaArrowLeft/></button>
                <button className="next" onClick={handleNextClick}><FaArrowRight/></button>
            </div>
        </div>
    );
}