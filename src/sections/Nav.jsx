import { NavRoot, NavBar, NavMenu, Link, Image } from 'mattkleyn-component-library';
import Logo from '../assets/images/placeholder_logo.svg';

function Nav() {
    return(
        <NavRoot position='sticky' offsetTop='1rem' className='nav_root'>
            <NavBar dock='none' padding='md' maxWidth='75rem' align='center'>
                <NavMenu direction='row' gap='md' align='between' className='max-width-full'>
                    <Image src={Logo} alt='placeholder brand logo'variant='cover' className='logo'/>
                    <Link href='#section_hero' >Home</Link>
                    <Link href='#section_works' >Works</Link>
                    <Link href='#section_build' >Capabilities</Link>
                    <Link href='#about' >About</Link>
                    {/* <Container as='div' direction='inline' className='button_primary_container'>
                        <Paragraph level='md' id='button_primary_text'>Read more</Paragraph>
                    </Container> */}
                </NavMenu>
            </NavBar>
        </NavRoot>
    )
}

export default Nav;