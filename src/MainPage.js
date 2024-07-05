import image from './Assets/myImg4.4.png';
import React, { useState } from 'react';
import IntroContent from "./IntroContent";
import Navbar from "./Navbar";
import Footer from "./Footer";
function MainPage() {

    

  return (
    <div className="findb App bg_neon w-screen h-lvh flex justify-center items-center p-2 "  >
        <div className="findb w-full h-full bg-black" >
            <div className="findb Gradiant flex   z-10 w-full h-full items-end justify-between">
{/* Gradiant ends here  */}

              <div className="Content findr flex justify-between flex-col w-full h-full">
                    <div className=" findg m-3 ">
                        <IntroContent/>
                    </div>
                    <div className=" findg m-3 ">

                    </div>
                    <div className='findr relative m-3  '>
                      <Footer/>
                    </div>

              </div>
              <div className='Image w-2/5 h-full findg flex justify-end items-end '>

                {/* <Navbar/> */}
                <img className="z-10 h-auto w-full relative findb " src={image} alt="porting"/>

              </div>

              
{/* Gradiant ends here  */}
            </div>
        </div>
    </div>
  );
}

export default MainPage;