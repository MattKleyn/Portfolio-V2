import HeroSection from "../sections/HeroSection";
import SectionTagline from "../sections/SectionTagline";
import SectionValueProposition from "../sections/SectionValueProposition";
import SectionWorks from "../sections/SectionWorks";
import SectionBuild from "../sections/SectionBuild";
import SectionAbout from "../sections/SectionAbout";

function HomePage() {
    return (
        <div className="home_page">
            <HeroSection />
            <SectionTagline />
            <SectionValueProposition />
            <SectionWorks />
            <SectionBuild />
            <SectionAbout />
        </div>
    )
}

export default HomePage;