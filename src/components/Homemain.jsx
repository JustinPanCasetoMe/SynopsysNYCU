import React, { useEffect, useState } from 'react'
import { FaApple, FaMicrochip } from "react-icons/fa";
import '../css/homemain.css'

const Homemain = () => {

    const [bgColor, setBgColor] = useState("transparent")
    const [iconPosition, setIconPosition] = useState("center")
    const [showSlogan, setShowSlogan] = useState(false)
    const [showText, setShowText] = useState(false)
    const [showMask, setShowMask] = useState(false)

    // let vid = document.getElementById("openingVideo");
    // vid.playbackRate = 0.5;

    useEffect(() => {
        // Change background color after 2 seconds
        const bgTimer = setTimeout(() => {
            setBgColor("grey")
            setIconPosition("top-left");
        }, 2000);

        // Show slogan after 2.5 seconds
        const sloganTimer = setTimeout(() => {
            setShowSlogan(true);
            setShowText(true);
        }, 3800);
        
        const maskTimer = setTimeout(() => {
            setShowMask(true);
        }, 3500)

        return () => {
            clearTimeout(bgTimer);
            clearTimeout(sloganTimer);
            clearTimeout(maskTimer);
        }
    }, [])

  return (
    <div
        style={{
            width:"100%",
            height:"100vh",
            transition:"background-color 0.5s ease" //smooth transition for background color
        }}
    >
        {/* <div
            className='OpeningLogo'
            style={{
                position: "absolute",
                top: iconPosition === "top-left" ? '0px' : '',
                left: iconPosition === "top-left" ? '0px' : '',
                transform: iconPosition === "top-left" ? 'translate(-40%, -30%)' : '',
                transition: iconPosition === "top-left" ? 'all 1.5s ease-in-out' : '',
                zIndex:45
            }}
        >
            <FaMicrochip
                size={72}
                color='var(--openingLogo)'
              
            />
        </div> */}

        {/* {showSlogan && (
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "10%",
                    fontSize: "24px",
                    color: "#fff",
                    zIndex:45,
                    transition: 'all 0.5s ease-in-out'
                }}
            >
                <h1 style={{fontSize:"50px", fontWeight:"400"}}>IC, THE FUTURE</h1>
            </div>
        )} */}

        {/* {showText && (
            <div
                style={{
                    position: "absolute",
                    top: "45%",
                    left: "10%",
                    width:"800px",
                    padding:"0 10% 0 0",
                    fontSize: "24px",
                    color: "#fff",
                    zIndex:45,
                    transition: 'all 1s ease'
                }}
            >
                <h1 className='mg-b-20'>一顆晶片，看見未來</h1>
                <p>半導體是科技的核心，我們結合業界龍頭 Synopsys 與頂尖學術機構陽明交大，打造全台第一專注於 IC 設計與半導體製程的營隊，讓國高中生學習基礎知識、拓展產業視野，成為引領未來的關鍵人才</p>
            </div>
        )} */}

        <div className="OpeningBG">
            <div
                style={{
                    // width:"100%",
                    // height:"100%",
                    overflow:"hidden",
                    // backgroundColor: showMask ? 'var(--openingBG-mask)' : '',
                    // backgroundColor:{`${showMask ? 'var(--openingBG-mask)' : ''}`},
                    transition:"all 1s ease-in-out"
                }}>
                    {/* <video style={{width:"100%"}} autoPlay muted loop className='openingVideo'>
                        <source src='/homevideo.mp4' type='video/mp4' style={{width:"100%"}}/>
                    </video> */}
            </div>
        </div>
    </div>
  )
}

export default Homemain