import React, { useState } from 'react';
import Navbar from './Navbar';
function IntroContent() {
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (
        <div className="IntroContent">
            <h1 className=" happy-monkey text-center font-extrabold text-8xl  p-2 pb-0 mb-0 ml-10 flex justify-center items-center ">Portfoli
                {/* clickable div  */}
                <div className=" inline-block " onClick={toggleNavbar}>
                    {showNavbar && 
                        <div className="NavBtn borderNeone w-20 h-20 rounded-full text-center justify-center flex  "></div> 
                    }
                    {!showNavbar && 
                        <div className="NavBtn borderNeone w-14 h-14 rounded-full text-center justify-center flex mt-4 mb-0 pb-0 mr-7 "></div>
                        
                    }
                </div>
            </h1>

            <h1 className=" happy-monkey text-center font-extrabold text-5xl m-1 mt-0 color-neone italic">Devesh &nbsp;Suthar</h1>
                    {showNavbar && <Navbar/>}
            <h1 className=" happy-monkey text-center font-small text-xl m-1 mt-0 tracking-wider ">Code your dreams. Fly your ideas.</h1>
            <div className="mainContent find m-6 p-4">
                <h2 className="roboto font-bold   text-4xl m-3 ml-5 color-neone">Hi there!</h2>
                <h2 className="roboto font-medium text-2xl m-3"> I specialize in crafting dynamic web experiences with &nbsp;
                    <b className="font-bold find color-neone">React.js</b> and&nbsp; 
                    <b className="font-bold find color-neone">Node.js</b>, alongside creating cutting-edge Android applications using&nbsp; 
                    <b className="font-bold find color-neone">Kotlin Jetpack Compose</b>. 
                </h2>
                <h2 className=" ml-4 inline-block font-bold text-2xl ga-maamli color-lightblue"># Web Development </h2>
                <h2 className=" ml-4 inline-block font-bold text-2xl ga-maamli color-lightblue"># Android Apps </h2>
                <h2 className=" ml-4 inline-block font-bold text-2xl ga-maamli color-lightblue"># Aeromodelling </h2>
                <h2 className=" ml-4 inline-block font-bold text-2xl ga-maamli color-lightblue"># Automation </h2>
                <h2 className=" ml-4 inline-block font-bold text-2xl ga-maamli color-lightblue"># Sketching </h2>
                <h2 className=" ml-4 inline-block font-bold text-2xl ga-maamli color-lightblue"># Blogging </h2>
                <h2 className=" ml-4 inline-block font-bold text-2xl ga-maamli color-lightblue"># miscellaneous </h2>
            </div>
      </div>
    );
  }
  
export default IntroContent;