import React from 'react'
import Loog1 from '../Images/OIP.jpeg'
import '../App.css'
import { Container, Grid, GridColumn, Image, Header } from 'semantic-ui-react'

const WhyFund = () => {
  return (
    <Container><br/><center><Header className='why'>Why CREED Giving?</Header></center><br/>
      <Grid stackable>
        <GridColumn width={5}>
          <ul>
            <li><b>A better way to donate</b><p>loremloremipsumloremipsumloremipsum</p></li>
            <li><b>CREED Giving is FREE</b><p>loremloremipsumloremipsumloremipsum</p></li>
            <li><b>A holistic Zakat calculator</b><p>loremloremipsumloremipsumloremipsum</p></li>

          </ul>
        </GridColumn>
        <GridColumn width={5}><Image src={Loog1} alt='logo' /></GridColumn>
        <GridColumn width={5}>
          <ul className='start'>
            <li><b>Discover a cause you care </b><p>loremloremipsumloremipsumloremipsum</p></li>
            <li><b>Track your donations</b><p>loremloremipsumloremipsumloremipsum</p></li>
            <li><b>A strusted platform</b><p>loremloremipsumloremipsumloremipsum</p></li>

          </ul>
        </GridColumn>
      </Grid>
    </Container>
  )
}

export default WhyFund