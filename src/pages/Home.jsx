import HeroSection from "../sections/HeroSection";
import SectionTagline from "../sections/SectionTagline";
import SectionValueProposition from "../sections/SectionValueProposition";
import SectionWorks from "../sections/SectionWorks";
import SectionBuild from "../sections/SectionBuild";
import SectionAbout from "../sections/SectionAbout";
import Footer from "../sections/SectionFooter";
import Nav from "../sections/Nav";

function HomePage() {
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