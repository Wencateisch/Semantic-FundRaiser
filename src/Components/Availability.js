import React from 'react'
import '../App.css'
import { Button, Container, Grid, GridColumn, Icon, Image, Header, GridRow } from 'semantic-ui-react'
import Images from '../Images/images.jpeg'
import Images2 from '../Images/images.png'

const Availability = () => {
  return (
    <Container>
      <Grid stackable>
        <GridColumn width={5} ><Image className='mobile' src={Images} alt='logo'/></GridColumn>
        <GridColumn width={6}>
          <Header>Download the CREED Giving App<Header.Subheader>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </Header.Subheader></Header>
          <Button color='black'><Icon name='apple' ></Icon>App Store</Button>
          <Button color='black'><Icon name='google play ' ></Icon>Google Play</Button>
        </GridColumn>
        <GridColumn width={2}>
          <Image src={Images2} alt='logo'/>
        </GridColumn>
      </Grid>

    </Container>
  )
}

export default Availability