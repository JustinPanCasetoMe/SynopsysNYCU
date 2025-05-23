import React from 'react'
import { Link } from 'react-router-dom'
import '../i18n'
import { useTranslation } from 'react-i18next'
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp, IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import '../css/contact.css'

const Contacts = () => {

  const { t, i18n } = useTranslation()

  const ScreenWidth = window.innerWidth
  const locationLink = 'https://maps.app.goo.gl/YuKrLBgWdcw2Y8L69'
  const instagramLink = 'https://www.instagram.com/sawago88/'
  const facebookLink = 'https://www.facebook.com/NCTU Alumni.SYNOPSYS.SEMICONDUCTOR.ICDESIGN/'
  const youtubeLink = 'https://www.youtube.com/@NCTU Alumni_synopsys_semi'

  return (
    <div className='Container'>
      <h1 className='fw-b' style={{marginBottom:'20px'}}>{t('聯繫我們')}</h1>
      <h1 className='fw-b' style={{marginBottom:'80px'}}>{t('歡迎合作邀約')}</h1>
      <div style={{marginBottom:'80px'}}>
        <h3 className='mg-b-20'>{t('聯絡人：謝沅祐先生、高湘琪小姐')}</h3>
        <h3 className='mg-b-20'>{t('主辦單位：台灣新思科技股份有限公司、台灣交通大學校友總會、半導體與晶片設計科普夏令營籌備團隊')}</h3>
        <h3 className='mg-b-20'>{t('聯絡電話：謝沅祐先生 0955739565')}</h3>
        <h3 className='mg-b-20'>{t('營隊地址：新竹市東區大學路1001號 國立陽明交通大學')}</h3>
        <h3 className='mg-b-20'>{t('EMAIL：NCTU Alumnixsynopsys.semi@gmail.com')}</h3>
      </div>

      <>
        {/* <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}`}>
          <ul className='df'>
            <a href='https://maps.app.goo.gl/YuKrLBgWdcw2Y8L69' className='outerLink mg-r-30' target='_blank'><li>{t('地址')}</li></a>
            <a href='https://www.youtube.com/@NCTU Alumni_synopsys_semi' className='outerLink mg-r-30' target='_blank'><li>{t('線上課程')}</li></a>
            <a href='https://www.facebook.com/NCTU Alumni.SYNOPSYS.SEMICONDUCTOR.ICDESIGN/' className='outerLink mg-r-30' target='_blank'><li>{t('臉書')}</li></a>
          </ul>
        </div> */}
        <div>
          <ul className='df'>
            <a href={locationLink} className='mediaLink' target='_blank'><li><IoLocationSharp size={20}/></li></a>
            {/* <a href={instagramLink} className='mediaLink' target='_blank'><li><IoLogoInstagram size={20}/></li></a> */}
            <a href={facebookLink} className='mediaLink' target='_blank'><li><IoLogoFacebook size={20}/></li></a>
            <a href={youtubeLink} className='mediaLink' target='_blank'><li><IoLogoYoutube size={20}/></li></a>
          </ul>
        </div>

        {/* <div className={`${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}`}>
          <ul className='df txt-aln-c'>
            <a href='https://maps.app.goo.gl/bR5LAyeQiwJNsrxx8' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>地址</li></a>
            <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>IG</li></a>
            <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>FB</li></a>
            <a href='https://www.youtube.com/@NCTU Alumni_synopsys_semi/videos' style={{width:'100%'}} className='outerLink mg-r-30 mg-b-20 db' target='_blank'><li>紀錄片</li></a>
          </ul>
        </div> */}

        {/* <div className={`${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}`}>
          <ul className='txt-aln-c'>
            <a href='https://maps.app.goo.gl/bR5LAyeQiwJNsrxx8' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>地址</li></a>
            <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>IG</li></a>
            <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>FB</li></a>
            <a href='https://www.youtube.com/@NCTU Alumni_synopsys_semi/videos' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>紀錄片</li></a>
          </ul>
        </div> */}

        {/* <div className={`${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}`}>
          <ul className='txt-aln-c'>
            <a href='https://maps.app.goo.gl/bR5LAyeQiwJNsrxx8' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>地址</li></a>
            <a href='https://www.instagram.com/sawago88/' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>IG</li></a>
            <a href='https://www.facebook.com/chc888' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>FB</li></a>
            <a href='https://www.youtube.com/@NCTU Alumni_synopsys_semi/videos' style={{width:'100%'}} className='outerLink mg-b-20 db' target='_blank'><li>紀錄片</li></a>
          </ul>
        </div> */}
      </>

    </div>
  )
}

export default Contacts