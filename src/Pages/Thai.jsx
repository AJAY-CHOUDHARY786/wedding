import React from 'react'
import "../Style/Thai.css"
import thaiimg from "../Component/Images/thailand-1.webp"
const Thai = () => {
  return (
    <div>
      <div className="thai-container">
        <div className="thai-main-container">
            <div className="head1">
                <h1> International Destination Wedding in Thailand  </h1>
            </div>
            <div className="thai-img">
                <img src={thaiimg}  style={{width:"100%", height:"100%"}} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Thai
