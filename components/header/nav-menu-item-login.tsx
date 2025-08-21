import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export default function NavMenuItemLogin() {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
            >
                <Link href="/login">Login</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}
