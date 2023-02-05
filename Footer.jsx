import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';



export const Footer = () => {
  return (
    <div className="footer-container">
       <p> 2023 FastBuy Furnitures All Rights Reserved 
       </p>
       <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}
