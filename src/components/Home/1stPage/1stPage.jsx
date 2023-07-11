import React from 'react'
import "./1stPage.css"
import "./scrollstyle.css"
import img1st from "../../../image/logo.svg";
import AwesomeSlider from "react-awesome-slider"
import 'react-awesome-slider/dist/styles.css';

import { withNavigationHandlers } from "react-awesome-slider/dist/navigation";

const NavigationSlider = withNavigationHandlers(AwesomeSlider);

function Slider() {
  return (
    <div>            
            <div className='container'>



            {/* <NavigationSlider className="awesome-slider">
            <div className='container1__image'>
                    <img src={img1st} alt='' /> 
                </div>

                <div className='container1__text'>
                    <h4>HEAR IT. FEEL IT</h4>
                    <h2>Move width the music</h2>
                    <div className='container1__price'>
                        <h4>$ 435</h4>
                        <h5>$ 465</h5>
                    </div>
                    <button className="custom-btn btn"><span>BUY NOW</span></button>
                </div>
            </NavigationSlider> */}

            <AwesomeSlider animation="cubeAnimation">
                <div className='container'>
                    <div className='container1__image'>
                        <img src={img1st} alt='' /> 
                    </div>

                    <div className='container1__text'>
                        <h4>HEAR IT. FEEL IT</h4>
                        <h2>Move width the music</h2>
                        <div className='container1__price'>
                            <h4>$ 435</h4>
                            <h5>$ 465</h5>
                        </div>
                        <button className="custom-btn btn"><span>BUY NOW</span></button>
                    </div>
                </div>

                <div className='container'>
                    <div className='container1__image'>
                        <img src={img1st} alt='' /> 
                    </div>

                    <div className='container1__text'>
                        <h4>HEAR IT. FEEL IT</h4>
                        <h2>Move width the music</h2>
                        <div className='container1__price'>
                            <h4>$ 435</h4>
                            <h5>$ 465</h5>
                        </div>
                        <button className="custom-btn btn"><span>BUY NOW</span></button>
                    </div>
                </div>
                <div className='container'>
                    <div className='container1__image'>
                        <img src={img1st} alt='' /> 
                    </div>

                    <div className='container1__text'>
                        <h4>HEAR IT. FEEL IT</h4>
                        <h2>Move width the music</h2>
                        <div className='container1__price'>
                            <h4>$ 435</h4>
                            <h5>$ 465</h5>
                        </div>
                        <button className="custom-btn btn"><span>BUY NOW</span></button>
                    </div>
                </div>
            </AwesomeSlider>
            </div>
    </div>

  )
}

export default Slider;