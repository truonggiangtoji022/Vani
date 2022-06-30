

import FooterApp from 'components/Common/FooterApp';
import Barcode from './components/Barcode';
import Event from './components/Event';
import MembershipCard from './components/MembershipCard';
import Menu from './components/Menu';
import './Home.scss';

export default function Home() {
  return (
    <>

      <Menu title="" />
      <Barcode />
      <MembershipCard />
      <Event />
      <FooterApp />
    </>
  )
}