import { NavRoot, NavBar, NavMenu, Image, Container, Paragraph, Button, NavToggle, NavOverlay, GridContainer, GridItem, Link, Portal, ImageWrapper } from '@mattkleyn/component-library';
import Logo from '../assets/images/placeholder_logo.svg';
import { useNavigate } from "react-router-dom";
import useNavController from "../utils/useNavController";
import me from '../data/me.json';

function Nav({isOpen, toggleContactModal}) {
    const navigate = useNavigate();

    const {
        scrollDirection,
        isAtTop,
        isPastThreshold,
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
    } = useNavController();

    function goToSection(sectionId) {
        navigate("/", {state: {scrollTo: sectionId}});
    }

    function handleContactFromOverlay(event) {
        event.stopPropagation();
        toggleContactModal();
        closeMenu();
        console.log("ismenueopen", isMenuOpen, "isopen", isOpen);
    }

    return(
        <NavRoot position='fixed' offsetTop='0rem' className='nav_root'>
            <NavBar direction='row' dock={`${isPastThreshold ? "right" : "none"}`} padding='none' maxWidth='md' className='nav_bar'>
                <ImageWrapper className={`nav_logo_wrapper ${isPastThreshold ? "nav_logo--hidden-on-scroll" : ""}`}>
                    <Image src={Logo} alt='placeholder brand logo'variant='cover' 
                        className='logo'/>
                </ImageWrapper>
                <NavMenu direction='row' padding='none' gap='lg'
                className={`nav_menu 
                ${isPastThreshold ? "nav_menu--hidden-on-scroll" : ""}`}>
                    <Button as="button" onClick={() => goToSection("section_hero")} className='nav_link'>Home</Button>
                    <Button as="button" onClick={() => goToSection("section_works")} className='nav_link'>Works</Button>
                    <Button as="button" onClick={() => goToSection("section_build")} className='nav_link'>Capabilities</Button>
                    <Button as="button" onClick={() => goToSection("section_about")} className='nav_link'>About</Button>
                    <Button as="button" className='nav_link nav_contact_button' onClick={toggleContactModal}>Get in touch</Button>
                </NavMenu>
                <NavToggle onClick={toggleMenu} className={`${isPastThreshold ? "nav_toggle--visible" : "nav_toggle--hidden"}`}>
                    <Paragraph level='md' className='nav_toggle_text--open'>Menu</Paragraph>
                </NavToggle>
                {isMenuOpen && (
                    <Portal>
                        <NavOverlay onClick={closeMenu} className='nav_overlay'>
                            <GridContainer as='div' columns='repeat(12, 1fr)' rows='repeat(6, 1fr)' gap='lg' className='nav_overlay_grid'>
                                <GridItem onClick={closeMenu} as='div' col='10 / span 1' row='1 / span 1' className='nav_overlay_close_container'>
                                    {isMenuOpen && (<Button as='button' className='nav_close_toggle'>Close</Button>)}
                                </GridItem>
                                <GridItem as='div' col='3 / span 3' row='2 / span 4' className='nav_overlay_heading_wrapper'>
                                    <NavMenu direction='column' padding='sm' >
                                        <Button as="button" onClick={() => goToSection("section_hero")} className='nav_overlay_section_heading'>Home</Button>
                                        <Button as="button" onClick={() => goToSection("section_works")} className='nav_overlay_section_heading'>Works</Button>
                                        <Button as="button" onClick={() => goToSection("section_build")} className='nav_overlay_section_heading'>Capabilities</Button>
                                        <Button as="button" onClick={() => goToSection("section_about")} className='nav_overlay_section_heading'>About</Button>
                                        <Button as="button" className='nav_overlay_section_heading' onClick={handleContactFromOverlay}>Get in touch</Button>
                                    </NavMenu>
                                </GridItem>
                                <GridItem as='div' col='3 / span 1' row='1 / span 1' className='nav_overlay_image_wrapper'>
                                    <ImageWrapper>
                                        <Image src={Logo} alt='Brand Logo inverted' className='nav_menu_overlay_logo'/>
                                    </ImageWrapper>
                                </GridItem>
                                <GridItem as='div' col='10 / span 1' row='4 / span 2' className='nav_overlay_links_wrapper'>
                                    <Container as='div' direction='column' maxWidth='full' className='nav_overlay_links_container'>
                                        {Object.entries(me[6].links).map(([name, link]) => (
                                            <Link href={link} target='_blank' className='nav_overlay_link'>{name}</Link>
                                        ))}
                                    </Container>
                                </GridItem>
                            </GridContainer>
                        </NavOverlay>
                    </Portal>
                )}
            </NavBar>
        </NavRoot>
    )
}

export default Nav;