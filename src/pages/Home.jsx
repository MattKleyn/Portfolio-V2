import HeroSection from "../sections/HeroSection";
import SectionTagline from "../sections/SectionTagline";
import SectionValueProposition from "../sections/SectionValueProposition";

function HomePage() {
    return (
        <div className="home_page">
            <HeroSection />
            <SectionTagline />
            <SectionValueProposition />
        </div>
    )
}

export default HomePage;