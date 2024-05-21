import Collaboration from "@/components/Collaboration";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

const Home = () => {
    return (
        <main className="mt-20 pt-2.5 w-full">
            <Hero />
            <Features />
            <Collaboration />
        </main> 
    );
}

export default Home;