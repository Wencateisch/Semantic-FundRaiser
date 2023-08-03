import React, { useState } from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'
import '../App.css'
import Image from '../Images/Logo4.jpg'

function Navbar(){
 const [state, setState] = useState({ activeItem: 'null' });

  const handleItemClick = (e, { name }) => setState({ activeItem: name })
    const { activeItem } = state

    return (
      <Menu size='small' secondary stackable>
        <img src={Image} alt='logo2'/>
        <Menu.Item
          name='Make a Donation'
          active={activeItem === 'Make a Donation'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Calculate'
          active={activeItem === 'Calculate'}
          onClick={handleItemClick}
        />
         <Menu.Item
          name='Start a foundation'
          active={activeItem === 'Start a foundation'}
          onClick={handleItemClick}
        />
         <Menu.Item
          name='About Us'
          active={activeItem === 'About Us'}
          onClick={handleItemClick}
        />

        <Menu.Menu position='right'>
        <Button basic color='#27585a'>Download</Button>
          <Icon name='search' size='large'/>
        <Menu.Item>
          <Icon name='user'/>
            
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}
export default Navbar;
