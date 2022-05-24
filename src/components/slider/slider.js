import React from "react";
import './slider.css';
import car from '../../assets/images/car.png';
import car1 from '../../assets/images/car1.png';
import car2 from '../../assets/images/car2.png';
import car3 from '../../assets/images/car3.png';

const Slider = () => {
    return (
        <>
            <div id='main-container'>
                <div className='slides'>
                    <div className='slider'>
                        <input type="radio" name="radio-btn" id='radio1' />
                        <input type="radio" name="radio-btn" id='radio2' />
                        <input type="radio" name="radio-btn" id='radio3' />
                        <input type="radio" name="radio-btn" id='radio4' />

                        <div className='slide first'>
                            <img src={car} alt='' />
                        </div>

                        <div className='slide '>
                            <img src={car1} alt='' />
                        </div>

                        <div className='slide '>
                            <img src={car2} alt='' />
                        </div>

                        <div className='slide '>
                            <img src={car3} alt='' />
                        </div>

                        <div className='navigation-auto'>
                            <div className='auto-btn1'></div>
                            <div className='auto-btn2'></div>
                            <div className='auto-btn3'></div>
                            <div className='auto-btn4'></div>
                        </div>
                    </div>

                    <div className='manual-navigation'>
                        <label for="radio1" className='manual-btn' />
                        <label for="radio2" className='manual-btn' />
                        <label for="radio3" className='manual-btn' />
                        <label for="radio4" className='manual-btn' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;