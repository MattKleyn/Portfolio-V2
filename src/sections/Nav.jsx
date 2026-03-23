import { NavRoot, NavBar, NavMenu, Link, Image, Container, Paragraph } from 'mattkleyn-component-library';
import Logo from '../assets/images/placeholder_logo.svg';

function Nav() {
    return(
        <NavRoot position='fixed' offsetTop='0rem' className='nav_root'>
            <NavBar direction='row' dock='none' padding='md' maxWidth='md' className='nav_bar'>
                <Image src={Logo} alt='placeholder brand logo'variant='cover' className='logo'/>
                <NavMenu direction='row' padding='sm' className='nav_menu'>
                    <Link href='#section_hero' >Home</Link>
                    <Link href='#section_works' >Works</Link>
                    <Link href='#section_build' >Capabilities</Link>
                    <Link href='#about' >About</Link>
                    <Container as='div' direction='inline' className='button_secondary_container'>
                        <Paragraph level='md' id='button_secondary_text'>Contact Me</Paragraph>
                    </Container>
                </NavMenu>
            </NavBar>
        </NavRoot>
    )
}

export default Nav;