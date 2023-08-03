import React from 'react'
import '../App.css'
import { Button, Container, Header, Icon } from 'semantic-ui-react'

const Contact = () => {
  return (
    <Container fluid className='contact'>
      <Header className='ui center aligned'>Need help to raise funds? &nbsp; <Button className='phone'><Icon name='phone volume'></Icon>REQUEST A CALL</Button></Header>
    </Container>
  )
}

export default Contact