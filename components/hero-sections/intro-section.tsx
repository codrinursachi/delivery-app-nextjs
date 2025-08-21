import Link from "next/link";
import { Input } from "../ui/input";

export default function IntroSection() {
    return (
        <section className="flex flex-col items-center justify-center h-screen p-4 text-center bg-cyan-400">
            <Link href="/tazz-is-wolt">
                <div className="p-3 mb-6 text-sm font-semibold transition-colors bg-white/20 hover:bg-white/30 rounded-3xl">
                    Tazz is now Wolt
                </div>
            </Link>
            <h1 className="mb-4 font-bold uppercase text-7xl">
                When cravings hit <br /> now Wolt delivers
            </h1>
            <Input
                placeholder="Enter delivery address"
                className="bg-white h-16 w-1/3 rounded-4xl !text-lg text-black mt-4"
            />
            <Link href="/discovery">
                <h2 className="mt-8 text-lg font-bold">
                    Popular around you right now
                </h2>
            </Link>
        </section>
    );
}
