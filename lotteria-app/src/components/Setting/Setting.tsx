import { RightOutlined } from "@ant-design/icons";
import FooterApp from "components/Common/FooterApp";
import Menu from "components/Home/components/Menu";
import HeaderInfo from "./Components/HeaderInfo";

import icon1 from '../../assets/images/Setting/icon-1.png'
import icon2 from '../../assets/images/Setting/icon-2.png'
import icon3 from '../../assets/images/Setting/icon-3.png'
import icon4 from '../../assets/images/Setting/icon-4.png'

import './Setting.scss'

export default function Setting() {
  const list = [
    {
      header: {
        title: 'Cài đặt thông báo',
        icon: icon1,
        arrow: true,
      },
      listChildren: [
      ]
    },
    {
      header: {
        title: 'Cài đặt bảo mật',
        icon: icon2,
        arrow: false,
      },
      listChildren: [
        { title: 'Thay đổi mật khẩu', arrow: true, },
        { title: 'Cài đặt khóa ứng dụng', type: 'OFF', arrow: true, },
        { title: 'Đăng xuất', arrow: true, }
      ]
    },
    {
      header: {
        title: 'Trung tâm CSKH',
        icon: icon3,
        arrow: false
      },
      listChildren: [
        { title: 'Thông báo', arrow: true },
        { title: 'FAQ', arrow: true },
        { title: 'Hỏi đáp 1:1', arrow: true }
      ]
    },
    {
      header: {
        title: 'Thông báo',
        icon: icon4,
        arrow: false
      },
      listChildren: [
        { title: 'Phiên bản', type: '1.0.11', arrow: false },
        { title: 'Điều khoản dịch vụ', arrow: true },
        { title: 'Giấy phép nguồn mở', arrow: true }
      ]
    }
  ]
  return (
    <>
      <Menu title="Cài đặt" />
      <HeaderInfo />
      <div className="oLxVmeUrca">
        {
          list.map((item, key) => {
            return (
              <div className="uHHnPIVAta" key={key}>
                <div className="VZChztsOhD">
                  <div className="MOkybOBSpD">
                    <img className="oxFwOPBamu" src={item.header.icon} />
                    <span className="WKpmYsjiAi">{item.header.title}</span>
                  </div>
                  <div className="FTeHcuOwxg">
                    {item.header.arrow ? <RightOutlined className="LFxpIfByOQ" /> : null}
                  </div>
                </div>
                <div className="RYUgDWefxU">
                  {
                    item.listChildren.map((item2, key2) => {
                      return (
                        <div className="mgDinYHUYk" key={key2}>
                          <div className="hAxeHAYDTs">
                            <span className="hUHZdVuXoy">{item2.title}</span>
                          </div>
                          <div className="FTeHcuOwxg" key={key2}>
                            {item2.type ? <span className="FiGHGlpDrQ">{item2.type}</span> : null}
                            {item2.arrow ? <RightOutlined className="LFxpIfByOQ" /> : null}
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            )
          })
        }
      </div>
      <FooterApp />
    </>
  )
}