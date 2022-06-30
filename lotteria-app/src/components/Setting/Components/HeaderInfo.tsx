import moment from "moment";
import { listName, listPhone } from "../listFullname";
import './HeaderInfo.scss'

export default function HeaderInfo() {
  var name = localStorage.getItem('fullnameSetting');
  var phone =   localStorage.getItem('phoneSetting');
  return (
    <>
      <div className="HhiTFJtLcJ">
        <div className="IjybfPQVZf">
          <div className="BpvftBpifE">{name}</div>
          <div className="qjVFsfygPv">{phone}</div>
          <div className="SpYRSLdnHs">Ngày đăng ký: {moment().format('DD/MM/YYYY')}</div>
        </div>
        <div className="jdwdJWzWCE">Thông tin cá nhân</div>
      </div>
    </>
  )
}