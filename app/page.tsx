import Header from "@/components/header/header";
import HeroSections from "@/components/hero-sections/hero-sections";

export default function Home() {
    return (
        <>
            <Header />
            <main className="text-white">
                <HeroSections />
            </main>
        </>
    );
}
