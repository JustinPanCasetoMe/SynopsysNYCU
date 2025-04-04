import React from 'react'

const HomeSlogan = () => {
  return (
    <div className='xContainer df jc-sb aln-itm-c' style={{width:"100%", height:"100%"}}>
        <div>
            <h1 style={{fontSize:"50px", fontWeight:"800", marginBottom:"30px"}}>IC, THE FUTURE</h1>
            <h1 className='mg-b-20'>一顆晶片，看見未來</h1>
            <h3>半導體是科技的核心，我們結合業界龍頭 Synopsys 與頂尖學術機構陽明交大，打造全台第一專注於 IC 設計與半導體製程的營隊，讓國高中生學習基礎知識、拓展產業視野，成為引領未來的關鍵人才</h3>
        </div>
        <div style={{width:"100%"}}>
          <img src="/semiconductor-1.png" alt=""  style={{width:"100%", marginLeft:"10px"}}/>
        </div>
    </div>
  )
}

export default HomeSlogan