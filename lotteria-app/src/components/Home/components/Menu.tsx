import { useEffect, useState } from 'react';
import logo from '../../../assets/images/Home/logo.png'

import './Menu.scss'

export default function Menu({ title = '' }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(1 - offset / 100, offset, 'offset / 100')
  return (
    <>
      <div className='NpfLHZuWez'>
        <div className={`VWNDayujsc`}>
          <div className='IGqafBOSef'>
            <img src={logo} alt="" className='OvMUPgOjWo' style={{ opacity: title !== '' ? 1 - offset / 20 : '' }} />
          </div>
          <div className='nAMbDjaVGd'>{offset > 0 ? title : ''}</div>
        </div>
      </div>
    </>
  )
}