import { NavMenu } from "./nav-menu";

export function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between w-full bg-white p-4">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Wolt
            </h4>
            <NavMenu />
        </header>
    );
}
