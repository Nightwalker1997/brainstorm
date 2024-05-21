import Collaboration from "@/components/Collaboration";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Home = () => {
    return (
        <main className="mt-20 pt-2.5 w-full">
            <Hero />
            <Features />
            <Collaboration />
            <Services />
        </main> 
    );
}

export default Home;