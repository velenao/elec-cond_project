import React from "react";
import './style.css'
import {useLocation} from 'react-router'

import socket from '../../../assets/electricAssets/elecImg/socket.jpg'
import cond from '../../../assets/conditionersAssets/condImg/cond.jpg'

export const HeaderImg = () => {
const location = useLocation()
const currentLocation = location.pathname

return (
    <div className="headerImg">
    {(currentLocation === '/electric') && (
          <img src={socket} alt="" />
    )}
    {(currentLocation === '/conditioners') && (
          <img src={cond} alt="" />
    )}
    </div>
)
}