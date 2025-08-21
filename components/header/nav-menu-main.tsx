import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import NavMenuPartners from "./nav-menu-partners";
import NavMenuItemLogin from "./nav-menu-item-login";
import NavMenuItemSignup from "./nav-menu-item-signup";

export default function NavMenuMain() {
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
                <NavMenuItemLogin />
                <NavMenuItemSignup />
            </NavigationMenuList>
        </NavigationMenu>
    );
}
