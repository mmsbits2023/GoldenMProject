import React, { useState } from 'react';
import { Menu } from "antd";
import {
    RadarChartOutlined,
    UserOutlined,
    UserAddOutlined,
} from "@ant-design/icons";

import { Link } from 'react-router-dom';

const {Item} = Menu;
const Header = () => {
    const [current, setCurrent] = useState('home');
    
    const handleClick = (e) => { 
    console.log(e.key)    
    setCurrent(e.key)
    }
  return (
    <div>
          <Menu onClick={handleClick} selectekeys={[current]} mode='horizontal' className='bg-dark text-white'>
              
              <Item key="home" icon={<RadarChartOutlined />}>
                  <Link to='/' >GoldenM</Link>
              </Item>

              <Item key="register" icon={<UserAddOutlined/>}className='ms-auto '>
                  <Link to='/register'>Register</Link>
              </Item>

              <Item key="login" icon={<UserOutlined/>}className='float-right'>
                  <Link to='/login'>Login</Link>
              </Item>
              <Item key="logout" icon={<UserOutlined/>}className='float-right'>
                  <Link to='/logout'>Logout</Link>
              </Item>
                     
                        
                 
             </Menu>
    </div>
  )
}

export default Header

