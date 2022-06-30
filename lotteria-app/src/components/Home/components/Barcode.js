import BarCoderValue from 'components/Common/BarCoderValue';
import { idUser } from 'components/Setting/listFullname';
// import barcodeImage from '../../../assets/images/Home/barcode.png'
import './Barcode.scss'

export default function BarcodeScreen() {
  const id = idUser[Math.floor(Math.random() * idUser.length)];
  return (
    <>
      <div className="vVhHlySzdQ">
        <div className="uDfQGsUneF">Mã vạch của tôi</div>
        <div className="KEOqmXPOQn">Tích điểm tất cả các thương thiệu bằng một mã vạch</div>
        <div className="jLIdcGpFbq">
          <BarCoderValue value={id} />
          {/* <Barcode value={id} /> */}
          {/* <img ref={inputRef} width="100%" /> */}
          {/* <img className="zHPEXINeKE" src={barcodeImage} /> */}
          <div className="UZhFrJueBc">{id}</div>
        </div>
      </div>
    </>
  )
}