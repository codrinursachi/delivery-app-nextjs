import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import NavMenuItemLogin from "./nav-menu-item-login";
import NavMenuItemSignup from "./nav-menu-item-signup";

export default function NavMenuDiscovery(){
    return (
    <NavigationMenu className="pr-4">
            <NavigationMenuList>
                <NavMenuItemLogin />
                <NavMenuItemSignup />
            </NavigationMenuList>
    </NavigationMenu>
    );
}