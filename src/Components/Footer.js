import React from 'react'
import { Button, Container, Grid, GridColumn, GridRow, Header } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Container>
      <Grid stackable>
        <GridColumn width={3}></GridColumn>
        <GridColumn width={2}>
          <GridRow>
            <Header>Get To Know Us</Header>
            <p>About Us</p>
            <p>Career</p>
            <p>Blog</p>
            <p>Legal</p>
          </GridRow>
        </GridColumn>
        <GridColumn width={2}>
        <GridRow>
            <Header>Get To Know Us</Header>
            <p>About Us</p>
            <p>Career</p>
            <p>Blog</p>
            <p>Legal</p>
          </GridRow>
        </GridColumn>
        <GridColumn width={2}>
        <GridRow>
            <Header>Get To Know Us</Header>
            <p>About Us</p>
            <p>Career</p>
            <p>Blog</p>
            <p>Legal</p>
          </GridRow>
        </GridColumn>
        <GridColumn width={2}>
        <GridRow>
            <Header>Get To Know Us</Header>
            <p>About Us</p>
            <p>Career</p>
            <p>Blog</p>
            <p>Legal</p>
          </GridRow>
        </GridColumn>
        <GridColumn width={3}><Button>START & FUNDRAISER</Button></GridColumn>
      </Grid>
    </Container>
  )
}

export default Footer