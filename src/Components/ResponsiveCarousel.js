import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import { Container, Image } from 'semantic-ui-react'

const ResponsiveCarousel = () => {
  return (
    <Container>
        <Carousel axis='vertical' width={1150} showIndicators={false} >
                <div>
                    <Image src={'https://picsum.photos/seed/picsum/1200/320'}/>
                
                </div>
                <div>
                    <Image  src={'https://picsum.photos/1200/320'}/>
                    
                </div>
                <div>
                <Image  src={'https://picsum.photos/1200/320'}/>
                    
                </div>
            </Carousel>
    </Container>
  )
}

export default ResponsiveCarousel