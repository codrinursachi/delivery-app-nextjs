import Link from "next/link";
import Image from "next/image";

export function DiscoverSection() {
    return (
        <div className="pt-20 -mt-20 bg-white rounded-3xl">
            <Link href="/discovery">
                <div className="relative z-10">
                    <Image
                        src="https://images.ctfassets.net/23u853certza/4pf5ISjACI7i5Eh85FL8AS/f6ee89ad1487ce09b7f393a470bbdb36/webbanner-2.png?w=1920&q=90&fm=webp"
                        alt="Web banner showing Tazz now on Wolt"
                        width={1920}
                        height={560}
                        className="m-auto rounded-4xl object-cover w-[95vw] h-[85vh]"
                    />
                    <section className="flex flex-col items-center justify-center w-[90vw] h-[85vh] text-center p-4 absolute top-0">
                        <h2 className="mb-8 text-3xl font-bold">
                            Everything you love about Tazz. Now on Wolt
                        </h2>
                        <h1 className="mb-4 font-bold uppercase text-7xl">
                            A new experience
                            <br /> awaits you
                        </h1>

                        <div className="p-4 mt-8 text-lg font-bold transition-colors bg-white/20 rounded-3xl hover:bg-white/30">
                            Discover Wolt
                        </div>
                    </section>
                </div>
            </Link>
        </div>
    );
}
