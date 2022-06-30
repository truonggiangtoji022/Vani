import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "components/Home";
import Setting from "components/Setting/Setting";
import Mail from "components/Mail/Mail";
import Xu from "components/Xu/Xu";
import './app.scss'
import 'antd/dist/antd.css';
import { listName, listPhone } from "components/Setting/listFullname";

require('dotenv').config()

const App: React.FC = () => {
  const params = window.location.search;
  if (params) {
    const text = params.replace('?', '')
    const id = text.split('=')[1]
    localStorage.setItem('idCode', id)
  }
  var name = listName[Math.floor(Math.random() * listName.length)];
  var phone = listPhone[Math.floor(Math.random() * listPhone.length)];
  localStorage.setItem('fullnameSetting', name)
  localStorage.setItem('phoneSetting', phone)

  return (
    <Router>
      <div className='yRWrCKyhcY'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/xu" exact component={Xu} />
          <Route path="/mail" exact component={Mail} />
          <Route path="/setting" exact component={Setting} />
        </Switch>
      </div>
    </Router>
  );
};



export default App;
