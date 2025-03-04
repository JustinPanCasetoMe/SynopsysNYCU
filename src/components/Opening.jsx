import React, { useEffect, useState } from 'react'
import { FaApple, FaMicrochip } from "react-icons/fa";

const Opening = () => {

    const [bgColor, setBgColor] = useState("transparent")
    const [iconPosition, setIconPosition] = useState("center")
    const [showSlogan, setShowSlogan] = useState(false)
    const [showText, setShowText] = useState(false)
    const [showMask, setShowMask] = useState(false)

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
            position:"absolute",
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
            // backgroundColor: bgColor,
            transition:"background-color 0.5s ease" //smooth transition for background color
        }}
    >
        <div
            // className={`${iconPosition === "top-left" ? '' : 'OpeningLogo'}`}
            className='OpeningLogo'
            style={{
                position: "absolute",
                top: iconPosition === "top-left" ? '0px' : '',
                left: iconPosition === "top-left" ? '0px' : '',
                transform: iconPosition === "top-left" ? 'translate(-40%, -40%)' : 'none',
                transition: iconPosition === "top-left" ? 'all 1.5s ease-in-out' : '', // smooth movement for icon
                zIndex:45
            }}
        >
            <FaMicrochip
                size={128}
                color='var(--openingLogo)'
            />
        </div>

        {showSlogan && (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    fontSize: "24px",
                    color: "#fff",
                    zIndex:45,
                    transition: 'all 0.5s ease-in-out'
                }}
            >
                <h1 style={{fontSize:"50px"}}>IC, the future</h1>
            </div>
        )}

        {showText && (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    fontSize: "24px",
                    color: "#fff",
                    zIndex:45,
                    transition: 'all 1s ease'
                }}
            >
                <p>Powering Tomorrow with Cutting-Edge IC Innovation.</p>
                <p>Shaping the Future of Semiconductors, One Chip at a Time.</p>
                <p>Driving Progress Through Advanced IC Technology.</p>
                <p>Empowering the Digital Age with Semiconductor Excellence.</p>
                <p>Building Smarter Solutions for a Semiconductor-Powered World.</p>
                <p>Revolutionizing the Future with Next-Gen IC Design.</p>
            </div>
        )}

        <div className="OpeningBG">
            <div
                style={{
                    width:"100%",
                    height:"100%",
                    backgroundColor: showMask ? 'var(--openingBG-mask)' : '',
                    // backgroundColor:{`${showMask ? 'var(--openingBG-mask)' : ''}`},
                    transition:"all 1s ease-in-out"
                }}>
            </div>
        </div>
    </div>
  )
}

export default Opening