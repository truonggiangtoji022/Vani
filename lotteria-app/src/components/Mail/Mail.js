import { Modal } from 'antd'
import FooterApp from "components/Common/FooterApp";
import Menu from "components/Home/components/Menu";

import icon1 from '../../assets/images/Mail/icon-1.svg'
import icon2 from '../../assets/images/Mail/icon-2.svg'
import icon3 from '../../assets/images/Mail/icon-3.svg'
import icon4 from '../../assets/images/Mail/icon-4.svg'

import icon1Active from '../../assets/images/Mail/icon-1-active.svg'
import icon2Active from '../../assets/images/Mail/icon-2-active.svg'
import icon3Active from '../../assets/images/Mail/icon-3-active.svg'
import icon4Active from '../../assets/images/Mail/icon-4-active.svg'

import logoLpoint from '../../assets/images/Mail/logo-lpoint.png'
import logoVani from '../../assets/images/Mail/logo-vani.png'
import image1 from '../../assets/images/Mail/image-1.png'
// import barcodeImage from '../../assets/images/Home/barcode.png'

import './Mail.scss'
import { useEffect, useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import BarCoderValue from 'components/Common/BarCoderValue';

export default function Mail() {
  const [tabFilter, setTabFilter] = useState('all')
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState('')
  const [detail, setDetail] = useState(false)
  const [firstLoad, setFirstLoad] = useState(false)
  const idCode = localStorage.getItem('idCode')

  const list = [
    {
      image: logoLpoint,
      title: 'L.POINT',
      date: 'Ngày 10 tháng 5',
      content: `🎉 Coupon cho thành viên mới!
  
      [Mã coupon ${idCode}]
      Phiếu giảm giá này có thể đổi lấy Set gà rán của Lotteria`,
      timeOut: false,
      code: '1111',
      imageVoucher: image1,
      type: 'coupon',
      detail: '',
    },
    {
      image: logoVani,
      title: 'vani',
      date: 'Ngày 18 tháng 6',
      content: `Sử dụng Mã vạch Vani, tích lũy Ice Cream, nhận Xu
      
      🎁 Nếu bạn tích/ sử dụng điểm bằng Mã vạch Vani tại cửa hàng của đối tác, bạn sẽ
  nhận được Ice Cream(tối đa 15 chiếc mỗi tháng)! Nhấn vào Ice Cream để nhận Vani Xu ngẫu
  nhiên.`,
      timeOut: false,
      imageVoucher: null,
      type: 'noti',
      detail: 'Xem Ice Cream',
    },
    {
      image: logoVani,
      title: 'vani',
      date: 'Ngày 18 tháng 6',
      content: `<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/32/1f525.png" width="14" /> 90k Vani Xy dành cho bạn <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/32/1f525.png" width="14" />
      
      Chơi Dynamite <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3e/1/32/1f9e8.png" width="14" /> ngay
      Nhận tới 90K Vani Xu`,
      timeOut: false,
      imageVoucher: null,
      type: 'noti',
      detail: 'Xem Dynamite',
    },
    {
      image: logoVani,
      title: 'vani',
      date: 'Ngày 9 tháng 6',
      content: `<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/32/1f525.png" width="14" /> 90k Vani Xy dành cho bạn <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/32/1f525.png" width="14" />
      
      Chơi Dynamite <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3e/1/32/1f9e8.png" width="14" /> ngay
      Nhận tới 90K Vani Xu <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1/32/1f4b8.png" width="14" />`,
      timeOut: false,
      imageVoucher: null,
      type: 'noti',
      detail: 'Xem Dynamite',
    },
    {
      image: logoVani,
      title: 'vani',
      date: 'Ngày 9 tháng 6',
      content: `<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/32/1f525.png" width="14" /> 90k Vani Xy dành cho bạn <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/32/1f525.png" width="14" />
      
      Chơi Dynamite <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3e/1/32/1f9e8.png" width="14" /> ngay
      Nhận tới 90K Vani Xu <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1/32/1f4b8.png" width="14" />`,
      timeOut: false,
      imageVoucher: null,
      type: 'noti',
      detail: 'Xem Dynamite',
    },
    {
      image: logoVani,
      title: 'vani',
      date: 'Ngày 9 tháng 6',
      content: `<img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/32/1f525.png" width="14" /> 90k Vani Xy dành cho bạn <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1/32/1f525.png" width="14" />
      
      Chơi Dynamite <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3e/1/32/1f9e8.png" width="14" /> ngay
      Nhận tới 90K Vani Xu <img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1/32/1f4b8.png" width="14" />`,
      timeOut: false,
      imageVoucher: null,
      type: 'vani',
      detail: 'Xem Dynamite',
    },
  ]

  const showModal = (code) => {
    setIsModalVisible(true);
    setId(code)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeFilter = (tab) => {
    setTabFilter(tab);
  }

  useEffect(() => {
    const listCode = localStorage.getItem('list_code')
    if (listCode) {
      const parseList = JSON.parse(listCode);
      if (parseList.indexOf(id) > -1) {
        setFirstLoad(true)
      }
    }
  }, [id])

  const handleCheckCode = (code) => {
    const listCode = localStorage.getItem('list_code')
    if (listCode) {
      const parseList = JSON.parse(listCode);
      if (parseList.indexOf(code) === -1) {
        parseList.push(code)
        localStorage.setItem('list_code', JSON.stringify(parseList))
      }
    } else {
      const listNew = [code];
      localStorage.setItem('list_code', JSON.stringify(listNew))
    }
    setDetail(true);
  }

  return (
    <>
      <Menu title="Hộp thư" />
      <div className="jLpGAkOhpg">
        <div onClick={() => changeFilter('all')} className={`vUSsMGjhzK ${tabFilter === 'all' ? 'AQDWddeVDi' : ''}`}>
          <div className="DRJTyGXTNJ">
            <img className="wUweBQvYUy" src={icon1} alt="" />
            <img className="xXWrnAJUMO" src={icon1Active} alt="" />
          </div>
          <div className="WzCOeEoVSC">Tất cả</div>
        </div>
        <div onClick={() => changeFilter('vani')} className={`vUSsMGjhzK ${tabFilter === 'vani' ? 'AQDWddeVDi' : ''}`}>
          <div className="DRJTyGXTNJ">
            <img className="wUweBQvYUy" src={icon2} alt="" />
            <img className="xXWrnAJUMO" src={icon2Active} alt="" />
          </div>
          <div className="WzCOeEoVSC">vani</div>
        </div>
        <div onClick={() => changeFilter('coupon')} className={`vUSsMGjhzK ${tabFilter === 'coupon' ? 'AQDWddeVDi' : ''}`}>
          <div className="DRJTyGXTNJ">
            <img className="wUweBQvYUy" src={icon3} alt="" />
            <img className="xXWrnAJUMO" src={icon3Active} alt="" />
          </div>

          <div className="WzCOeEoVSC">Coupon</div>
        </div>
        <div onClick={() => changeFilter('noti')} className={`vUSsMGjhzK ${tabFilter === 'noti' ? 'AQDWddeVDi' : ''}`}>
          <div className="DRJTyGXTNJ">
            <img className="wUweBQvYUy" src={icon4} alt="" />
            <img className="xXWrnAJUMO" src={icon4Active} alt="" />
          </div>

          <div className="WzCOeEoVSC">Thông <br />báo</div>
        </div>
      </div>
      <div className="bIgNSlTmur"></div>
      <div className="OAjKkqcBHI">
        {
          list.map((item, key) => {
            if (tabFilter !== 'all' && item.type !== tabFilter) {
              return null
            }
            return (
              <div className="LLibffLWNO" key={key}>
                <div className="CwXkUdevWL">
                  <div className="cmbZrRcIqL"><img className="IhlWQCQEao" alt="" src={item.image} /></div>
                  <div className="nWunNdgyQi">
                    <div className="bJcWukmocm">{item.title}</div>
                    <div className="OnHkPdpsOU">{item.date}</div>
                  </div>
                </div>
                {item?.timeOut ? <div className="PtASFGfQWd">Đã hết hạn</div> : null}
                <div className="tmbECgZhkl" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                {item.imageVoucher ? <div className="zTVvqoVYQM" onClick={() => showModal(item.code)}>
                  <img className="LTkbFojqxp" alt="" src={item.imageVoucher} />
                </div> : null}
                {item.detail ? <div className="JvufvtYICo">{item.detail}</div> : null}
              </div>
            )
          })
        }

      </div>
      <Modal title="" closable={false} footer={false}
        visible={firstLoad} className="wixWTKmJDe"
        onOk={handleOk} onCancel={handleCancel}>
        <CloseOutlined className='cZQRRYgquC' onClick={() => handleCancel()} />
        <div className='zyEEaODMLn'>vani</div>
        <div className='MhjiyfoLvH'>Phiếu thưởng Người dùng đã hết hạn.</div>
        <div className='rQUmxLeVoh' onClick={() => handleCancel()}>Đóng</div>
      </Modal>
      <Modal title="" closable={false} footer={false}
        visible={isModalVisible} className="wixWTKmJDe"
        onOk={handleOk} onCancel={handleCancel}>
        <CloseOutlined className='cZQRRYgquC' onClick={() => handleCancel()} />
        <div className='GSpmMlZYSK'>Set Gà Rán Lotteria</div>
        <div className='uVrYlXQNvW'>Hết hạn ngày 31/07/2022</div>
        <div className='dEzJAPFeCI'>
          <BarCoderValue value={idCode} />
          {/* <img ref={inputRef} width="100%" /> */}
        </div>
        {/* <div className='wuJJwcCQsf'><img className='gtJHqfYjbH' src={barcodeImage} /></div> */}
        <div className='iYHEZnRfMV'>{idCode}</div>
        <div className='usnFjtGXDQ'>
          <span className='xYcVpKXnYq'>Nút [Nhân viên xác nhận]</span>
          sẽ được sử dụng khi nhân viên phải xác nhận việc sử dụng coupon tại cửa hàng.
        </div>
        <div className={`tVSDOGuixp ${detail ? 'eFkPBmolVG' : ''}`} onClick={() => handleCheckCode(id)}>
          {detail ? 'Đã sử dụng' : 'Nhân viên xác nhận'}
        </div>
      </Modal>
      <FooterApp />
    </>
  )
}