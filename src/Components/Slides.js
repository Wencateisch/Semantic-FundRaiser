import React from 'react'
import { Image } from 'semantic-ui-react'

import Photo2 from '../Images/R.jpeg'
import Photo3 from '../Images/daylight-forest-glossy-443446.jpg'



const Slides = () => {
  return (
    <div>
        <div class="ui modal">
            <div class="header">Header</div>
            <div class="scrolling content">
                <Image src={Photo2} alt='logo'></Image>
                <img src={Photo3} alt='logo'/>
            </div>
        </div>
    </div>
  )
}

export default Slides