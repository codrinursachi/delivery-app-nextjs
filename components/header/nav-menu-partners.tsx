import Link from "next/link";
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "../ui/navigation-menu";

export function NavMenuPartners() {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
            <NavigationMenuContent className="text-nowrap">
                <NavigationMenuLink asChild>
                    <Link href="/couriers">For couriers</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                    <Link href="/merchants">For merchants</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                    <Link href="/wolt-for-work">For companies</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                    <Link href="/wolt-drive">Wolt Drive</Link>
                </NavigationMenuLink>
            </NavigationMenuContent>
        </NavigationMenuItem>
    );
}
