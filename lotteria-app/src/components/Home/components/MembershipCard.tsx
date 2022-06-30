import { RightOutlined } from '@ant-design/icons'

import lpoint from '../../../assets/images/Home/icon-lpoint.png'
import innisfree from '../../../assets/images/Home/icon-Innisfree.png'
import tourlesjours from '../../../assets/images/Home/icon-tourlesjours.png'
import laneige from '../../../assets/images/Home/icon-laneige.png'

import './MembershipCard.scss'

export default function MembershipCard() {
  return (
    <>
      <div className='DlKsbBbSLF'>
        <div className="uDfQGsUneF">Thẻ thành viên của tôi</div>
        <div className="KEOqmXPOQn">Thêm thẻ thành viên</div>
        <div className='OBBMNKGepY'>
          <div className='BsFnCdlugb WiakbewBdC'>
            <div className='hFrLTvqAiR'><img src={lpoint} className="RtRlPWkGHG" /></div>
            <div className='swBGDdVIlJ'><span className='UVzDQSjQqz'>0</span> <RightOutlined /></div>
          </div>
          <div className='BsFnCdlugb'>
            <div className='hFrLTvqAiR'><img src={innisfree} className="RtRlPWkGHG" /></div>
            <div className='swBGDdVIlJ'><span className='UVzDQSjQqz'>Liên kết</span> <RightOutlined /></div>
          </div>
          <div className='BsFnCdlugb'>
            <div className='hFrLTvqAiR'><img src={tourlesjours} className="RtRlPWkGHG" /></div>
            <div className='swBGDdVIlJ'><span className='UVzDQSjQqz'>Liên kết</span> <RightOutlined /></div>
          </div>
          <div className='BsFnCdlugb'>
            <div className='hFrLTvqAiR'><img src={laneige} className="RtRlPWkGHG" /></div>
            <div className='swBGDdVIlJ'><span className='UVzDQSjQqz'>Liên kết</span> <RightOutlined /></div>
          </div>
        </div>
      </div>


    </>
  )
}