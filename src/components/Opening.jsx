import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeInSection from "../hooks/FadeInSection"; // 引入淡入元件
import "../css/opening.css";

const Opening = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [startTransition, setStartTransition] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false); // 追蹤影片是否已加載
  const [timer, setTimer] = useState(null); // 保存計時器

  useEffect(() => {
    if (videoLoaded) {
      // 當影片加載完成後，延遲顯示內容
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    }

    const newTimer = setTimeout(() => {
      handleEnter();
    }, 10000);

    setTimer(newTimer); // 保存計時器

    return () => clearTimeout(newTimer);

    return () => clearTimeout(timer)
  }, [videoLoaded]);

  const handleEnter = () => {
    if (timer) {
      clearTimeout(timer); // 清除計時器
    }

    setStartTransition(true);

    // 設置已看過開場動畫的標記
    localStorage.setItem("hasSeenOpening", "true");

    // 等待轉場動畫完成後導航
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true); // 當影片加載完成時更新狀態
  };

  return (
    <div
      className={`opening-container ${startTransition ? "fade-out" : ""}`}
      onClick={handleEnter}
    >
      {/* 載入中的互動畫面 */}
      {!videoLoaded && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      {/* 背景視頻 */}
      <video
        className={`background-video ${videoLoaded ? "visible" : "hidden"}`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded} // 監聽影片是否加載完成
      >
        <source src="/homevideo-3.mp4" type="video/mp4" sizes="100vh"/>
      </video>

      {/* 主要內容 */}
      {videoLoaded && (
        <FadeInSection>
          <div className={`content ${showContent ? "visible" : ""} ${startTransition ? "fade-out" : ""}`}>
            <div>
              <h1 className="title">IC, THE FUTURE</h1>
              <div className="enter-button">CLICK TO ENTER</div>
            </div>
          </div>
        </FadeInSection>
      )}
    </div>
  );
};

export default Opening;