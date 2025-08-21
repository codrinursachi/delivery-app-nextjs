import NavMenuDiscovery from "./nav-menu-discovery";
import NavMenuMain from "./nav-menu-main";

export default function Header({
    variant = "main",
}: {
    variant?: "main" | "discovery";
}) {
    return (
        <header className="sticky top-0 flex items-center justify-between w-full bg-white p-4 z-20">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Wolt
            </h4>
            {variant === "main" && <NavMenuMain />}
            {variant === "discovery" && <NavMenuDiscovery />}
        </header>
    );
}
