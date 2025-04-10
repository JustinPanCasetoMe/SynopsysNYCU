import '../i18n';
import { useTranslation } from 'react-i18next';
import '../css/slogan.css'

const HomeSlogan = () => {

  // ==================== Language Select ====================
  const { t, i18n } = useTranslation();

  return (
    <div className='sloganContainer xContainer'>
        <div className='textContainer'>
            <h1 className='titleEn'>{t('IC, THE FUTURE')}</h1>
            <h1 className='titleZh'>{t('一顆晶片，看見未來')}</h1>
            <h3>{t('半導體是科技的核心，我們結合業界龍頭 Synopsys 與頂尖學術機構陽明交大，打造全台第一專注於 IC 設計與半導體製程的營隊，讓國高中生學習基礎知識、拓展產業視野，成為引領未來的關鍵人才。')}</h3>
        </div>
        <div className='imgContainer'>
          <img src="/semiconductor-1.png" alt="半導體晶片"/>
        </div>
    </div>
  )
}

export default HomeSlogan