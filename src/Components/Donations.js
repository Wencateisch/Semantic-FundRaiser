/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import phot from '../Images/R.jpeg'
import { Card, CardContent, Container, Grid, } from 'semantic-ui-react'
import { Carousel  } from 'react-responsive-carousel'
import '../App.css'


const extra = (
  <a >
     <hr/>
    <Container>
    <p>loremloremipsumloremipsumloremipsum<br/>sjfdsefjdsjfhjksahfjhf</p>
    <a >$ 3,45,543.68</a>
    </Container>
    
    
  </a>
)
const Phot = (
  <img src={phot} alt='logo'/>
)

const Donations = () => (
    <Container >
      <CardContent><b>Your Donations Make a Difference</b><br/><a>Donation</a><br/><br/></CardContent>
    
  <Carousel className='Car' swipeable>
    <Grid stackable centered>
       <Card.Group >
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
      </Card.Group>
    </Grid>
    <Grid stackable centered>
    <Card.Group >
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
      </Card.Group>
      </Grid>
    <Grid stackable centered>
    <Card.Group>
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
        <Card  image={Phot} header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' extra={extra} />
      </Card.Group>
      </Grid>
  </Carousel>
    
    </Container>
 
)

export default Donations