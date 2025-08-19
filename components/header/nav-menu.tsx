import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { NavMenuPartners } from "./nav-menu-partners";

export function NavMenu() {
    return (
        <NavigationMenu className="pr-4">
            <NavigationMenuList>
                <NavMenuPartners />
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                    >
                        <Link href="/jobs">Jobs</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                    >
                        <Link href="/login">Login</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={
                            navigationMenuTriggerStyle() +
                            " bg-cyan-200/40 text-blue-500 hover:bg-blue-100/80 hover:text-blue-500"
                        }
                    >
                        <Link href="/signup">Sign up</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
