import HeroSection from "../sections/HeroSection";
import SectionTagline from "../sections/SectionTagline";
import SectionValueProposition from "../sections/SectionValueProposition";
import SectionWorks from "../sections/SectionWorks";
import SectionBuild from "../sections/SectionBuild";
import SectionAbout from "../sections/SectionAbout";
import Footer from "../sections/SectionFooter";
import Nav from "../sections/Nav";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({behavior: "smooth"});
            }
        }
    }, [location]);

    return (
        <div className="home_page">
            <Nav />
            <HeroSection />
            <SectionTagline />
            <SectionValueProposition />
            <SectionWorks />
            <SectionBuild />
            <SectionAbout />
            <Footer />
        </div>
    )
}

export default HomePage;