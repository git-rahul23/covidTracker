import React from 'react';

import './Home.css';

import homeLogo from '../assets/stayHome.png';
import distLogo from '../assets/keepDist.png';
import handsLogo from '../assets/washHands.png';
import coverLogo from '../assets/cover.png';
import helpLogo from '../assets/helpline.png';
import scanApp from '../assets/scan.PNG';
import android from '../assets/googleplay.PNG';
import apple from '../assets/applestore.PNG';


const Home = () => {

    return (
        <div className="maintext">
            <div className="leftHome">
                <h1 className="head-1">WHAT IS COVID ?</h1>
                <p className="head-1-text">
                Coronavirus disease (COVID-19) is an infectious 
                disease caused by
                a newly discovered coronavirus.
                Most people who fall sick with COVID-19 will
                 experience mild to moderate symptoms and recover
                  without special treatment.
                </p>
                <div className="guidelines">
                <h2 className="head-1">Health Guidelines</h2>
                    <div className="guideBlock-1">
                        <div className="guideLogo">
                            <img src={homeLogo} className="logo-guide"/>
                        </div>
                        <div className="guideText">
                            Stay home. Stay safe.
                        </div>

                    </div>
                    <div className="guideBlock">
                        <div className="guideText">
                            Keep distance from sick people
                        </div>
                        <div className="guideLogo">
                        <img src={distLogo} className="logo-guide"/>
                        </div>

                    </div>
                    <div className="guideBlock">
                        <div className="guideLogo">
                        <img src={handsLogo} className="logo-guide"/>
                        </div>
                        <div className="guideText">
                            Wash your hands frequently
                        </div>

                    </div>
                    <div className="guideBlock">
                        <div className="guideText">
                            Cover your mouth while coughing
                        </div>
                        <div className="guideLogo">
                        <img src={coverLogo} className="logo-guide"/>
                        </div>

                    </div>
                    <div className="guideBlock">
                        <div className="guideLogo">
                        <img src={helpLogo} className="logo-guide"/>
                        </div>
                        <div className="guideText">
                            Call the helpline in case of emergency
                        </div>

                    </div>
                </div>
            </div>

            <div className="rightHome">
                    <h2 className="head-1">DOWNLOAD THE AAROGYA SETU APP!</h2>
                    <p className="rightText">Keep a check on people infected in your area</p>

                    <div>
                        <img src={scanApp} className="scanLogo"/>
                    </div>
                    <div  className="oplogoWrapper">
                        <div>
                            <img src={android} className="optionLogo"/>
                        </div>
                        <div >
                            <img src={apple} className="optionLogo"/>
                        </div>

                    </div>

            </div>
        </div>

    )

};



export default Home;