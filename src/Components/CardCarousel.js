import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Container, Grid, GridColumn, Card, Icon } from 'semantic-ui-react'

const CardCarousel = () => {
  return (
    
        <Container>
            <h3>Testimonials <Icon className='control-arrow control-prev' name='left arrow'></Icon><Icon name='right arrow'></Icon></h3>
            <Carousel>
            <Grid stackable centered >
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
            </Grid>
            <Grid stackable centered >
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
            </Grid>
            <Grid stackable centered >
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
                <GridColumn width={4}><Card header='Elliot Baker' meta='Friend' description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.' /></GridColumn>
            </Grid>
            </Carousel>
        </Container>
  )
}

export default CardCarousel