import home from '../../assets/images/Home/icon-home.svg'
import xu from '../../assets/images/Home/icon-xu.svg'
import mail from '../../assets/images/Home/icon-mail.svg'
import setting from '../../assets/images/Home/icon-setting.svg'

import homeActive from '../../assets/images/Home/icon-home-active.svg'
import xuActive from '../../assets/images/Home/icon-xu-active.svg'
import mailActive from '../../assets/images/Home/icon-mail-active.svg'
import settingActive from '../../assets/images/Home/icon-setting-active.svg'

import './FooterApp.scss'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function FooterApp() {
  const [activeTab, setActive] = useState(window.location.pathname)
  const history = useHistory();

  const changeTab = (tab: string) => {
    setActive(tab)
    history.push(tab)
  }

  return (
    <>
      <div className='WkZBcbBxxO'>
        <div className={`ZrujVIaiXk ${activeTab === '/' ? 'zlWHYpvmdh' : ''}`}>
          <div className='dByUsKocrh' onClick={() => changeTab('/')}>
            <img src={home} alt="" className='PjlGNuJaBF' />
            <img src={homeActive} alt="" className='QhsMDangyM' />
          </div>
          <div className='YYMoWtAduK'>Trang chủ</div>
        </div>
        <div className={`ZrujVIaiXk ${activeTab === '/xu' ? 'zlWHYpvmdh' : ''}`}>
          <div className='dByUsKocrh' onClick={() => changeTab('/xu')}>
            <img src={xu} alt="" className='PjlGNuJaBF' />
            <img src={xuActive} alt="" className='QhsMDangyM' />
          </div>
          <div className='YYMoWtAduK'>Vani xu</div>
        </div>
        <div className={`ZrujVIaiXk ${activeTab === '/mail' ? 'zlWHYpvmdh' : ''}`}>
          <div className='dByUsKocrh' onClick={() => changeTab(`/mail`)}>
            <img src={mail} alt="" className='PjlGNuJaBF' />
            <img src={mailActive} alt="" className='QhsMDangyM' />
          </div>
          <div className='YYMoWtAduK'>Hộp thư</div>
        </div>
        <div className={`ZrujVIaiXk ${activeTab === '/setting' ? 'zlWHYpvmdh' : ''}`}>
          <div className='dByUsKocrh' onClick={() => changeTab('/setting')}>
            <img src={setting} alt="" className='PjlGNuJaBF' />
            <img src={settingActive} alt="" className='QhsMDangyM' />
          </div>
          <div className='YYMoWtAduK'>Cài đặt</div>
        </div>
      </div>
    </>
  )
}