import { NavRoot, NavBar, NavMenu, Image, Container, Paragraph } from 'mattkleyn-component-library';
import Logo from '../assets/images/placeholder_logo.svg';
import { Link as RouterLink } from "react-router-dom";

function Nav() {
    return(
        <NavRoot position='fixed' offsetTop='0rem' className='nav_root'>
            <NavBar direction='row' dock='none' padding='md' maxWidth='md' className='nav_bar'>
                <Image src={Logo} alt='placeholder brand logo'variant='cover' className='logo'/>
                <NavMenu direction='row' padding='sm' className='nav_menu'>
                    <RouterLink to='/#section_hero' >Home</RouterLink>
                    <RouterLink to='/#section_works' >Works</RouterLink>
                    <RouterLink to='/#section_build' >Capabilities</RouterLink>
                    <RouterLink to='/#about' >About</RouterLink>
                    <Container as='div' direction='inline' className='button_secondary_container'>
                        <Paragraph level='md' id='button_secondary_text'>Contact Me</Paragraph>
                    </Container>
                </NavMenu>
            </NavBar>
        </NavRoot>
    )
}

export default Nav;