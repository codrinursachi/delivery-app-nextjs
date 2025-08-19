import Link from "next/link";
import { Input } from "../ui/input";

export function IntroSection() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-cyan-400 text-center p-4">
            <Link href="/tazz-is-wolt">
                <div className="text-sm font-semibold mb-6 bg-cyan-300 rounded-3xl p-3">
                    Tazz is now Wolt
                </div>
            </Link>
            <h1 className="text-7xl font-bold mb-4 uppercase">
                When cravings hit <br /> now Wolt delivers
            </h1>
            <Input
                placeholder="Enter delivery address"
                className="bg-white h-16 w-1/3 rounded-4xl !text-lg text-black mt-4"
            />
            <Link href="/discovery">
                <h2 className="text-lg font-bold mt-8">Popular around you right now</h2>
            </Link>
        </section>
    );
}
