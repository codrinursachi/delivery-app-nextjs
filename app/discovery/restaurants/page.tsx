import DiscoveryAllRestaurants from "@/components/hero-sections/discovery-all-restaurants";
import DiscoveryRestaurantCategories from "@/components/hero-sections/discovery-restaurant-categories";

export default function RestaurantsPage() {
    return (
        <main className="flex flex-col gap-12 px-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                Restaurants near me
            </h1>
            <DiscoveryRestaurantCategories />
            <DiscoveryAllRestaurants />
        </main>
    );
}
