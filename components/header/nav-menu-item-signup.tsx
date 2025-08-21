import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";

export default function NavMenuItemSignup() {
    return (
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
    );
}
