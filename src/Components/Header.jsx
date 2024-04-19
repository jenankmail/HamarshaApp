import React from 'react'
import { Menu } from 'antd'
import { HomeOutlined } from '@mui/icons-material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FeedIcon from '@mui/icons-material/Feed';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import { Routes ,Route ,Link, Navigate } from 'react-router-dom';
import HomeApp from './HomeApp';

function Header() {  
  return (
    <div style={{backgroundColor:"#FF5F1F",padding:"10px"}}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jzFMjcftLndYoyHksZBw0dYZ-VGfQoM-ny89YZSaIQ&s' alt='images' style={{width:80,borderRadius:30,padding:15}}/>
       <Menu style={{backgroundColor:"#FF5F1F" ,height:1000}}>
        <Menu.Item key="home" icon={<HomeOutlined style={{ }} />}>
      
        <Link to="/home" style={{width:"bold",fontSize:"80"}}  >
               
              home
              </Link>
        </Menu.Item>
        <Menu.Item key="contactUs" icon={<ContactMailIcon/>}>
        contactUs
        </Menu.Item>
        <Menu.Item key="report" icon={<FeedIcon/>}>
        reports
        </Menu.Item>
        <Menu.Item key="products" icon={<ShoppingCartIcon/>}>
        products
        </Menu.Item>
        <Menu.Item key="team" icon={<GroupIcon/>}>
        team
        </Menu.Item>
       </Menu>
       
      </div>
  );
}

export default Header