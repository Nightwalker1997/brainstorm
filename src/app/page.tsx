import Collaboration from "@/components/Collaboration";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import RoadMap from "@/components/Roadamp";
import Services from "@/components/Services";

const Home = () => {
    return (
        <main className="mt-20 pt-2.5 w-full">
            <Hero />
            <Features />
            <Collaboration />
            <Services />
            <Pricing />
            <RoadMap />
        </main> 
    );
}

export default Home;