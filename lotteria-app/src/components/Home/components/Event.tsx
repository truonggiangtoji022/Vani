import image1 from '../../../assets/images/Home/image-1.png'
import image2 from '../../../assets/images/Home/image-2.png'
import image3 from '../../../assets/images/Home/image-3.png'

import './Event.scss'

const data = [
  {
    image: image1,
    code: 'D-3',
    title: 'vani là gì?',
    date: '01/06/2022 ~ 30/06/2022'
  },
  {
    image: image2,
    code: 'D-3',
    title: 'Ice Cream?',
    date: '01/06/2022 ~ 30/06/2022'
  },
  {
    image: image3,
    code: 'D-3',
    title: 'Dynamite?',
    date: '01/06/2022 ~ 30/06/2022'
  },
]

export default function Event() {
  return (
    <>
      <div className='nDmsLeQZWY'>
        <div className="uDfQGsUneF">Sự kiện</div>
        <div className="KEOqmXPOQn">Xem tất cả các ưu đãi dành cho bạn</div>
        <div className='pfkCNNwWTK'>
          {
            data.map((item, key) => {
              return (
                <div className='JLspkUIiFi' key={key}>
                  <div className='ZcrichZcgz'><img src={item?.image} alt='' className='QxlGSsMZxo' /></div>
                  <div className='LKgaKggKcg'>
                    <div className='VwSnGrJVsj'>{item.code}</div>
                    <div className='KOowDHrYrj'>{item.title}</div>
                    <div className='BSShVmitZl'>{item.date}</div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}