import React from 'react'
import log from '../Images/fundraising.jpg'
import { Card, Container, Image, Grid, Header, Button } from 'semantic-ui-react'
import '../App.css'

const HowFund = () => {
  return (
    <div className='fund'>
      <Container ><Header textAlign='center'>How to start a Fundraiser</Header>
      <Card.Header>
        <Grid stackable>
          <Grid.Column width={5}>
            <Image src={log} size='large'/>
            <Button style={{backgroundColor:'rgba(3, 94, 95)'}}>START & FUNDRAISER</Button>
          </Grid.Column>
          <Grid.Column width={6} floated='right'>
            <ol>
              <li>
                <h4>Discover a charity or cause</h4>
                <p>some random text comes here</p>
              </li>
              <li>
                <h4>Discover a charity or cause</h4>
                <p>some random text comes here</p>
              </li><li>
                <h4>Discover a charity or cause</h4>
                <p>some random text comes here</p>
              </li><li>
                <h4>Discover a charity or cause</h4>
                <p>some random text comes here</p>
              </li><li>
                <h4>Discover a charity or cause</h4>
                <p>some random text comes here</p>
              </li>
            </ol>
          </Grid.Column>
        </Grid>
      </Card.Header>
      </Container>
    </div>
  )
}

export default HowFund