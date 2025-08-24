import RestaurantItem from "../items/restaurant-item";

const RESTAURANTS = [
    {
        image: "https://imageproxy.wolt.com/assets/683d5dba2c97c6c5c80d070a",
        title: "Restaurant 1",
        description: "Description 1",
        deliveryTime: "30-40 min",
        deliveryPrice: 5,
        priceRange: 3,
        rating: 4,
    },
    {
        image: "https://imageproxy.wolt.com/assets/683d5dba2c97c6c5c80d070a",
        title: "Restaurant 2",
        description: "Description 2",
        deliveryTime: "20-30 min",
        deliveryPrice: 3,
        priceRange: 2,
        rating: 5,
    },
    {
        image: "https://imageproxy.wolt.com/assets/683d5dba2c97c6c5c80d070a",
        title: "Restaurant 3",
        description: "Description 3",
        deliveryTime: "40-50 min",
        deliveryPrice: 7,
        priceRange: 4,
        rating: 3,
    },
    {
        image: "https://imageproxy.wolt.com/assets/683d5dba2c97c6c5c80d070a",
        title: "Restaurant 4",
        description: "Description 4",
        deliveryTime: "10-20 min",
        deliveryPrice: 2,
        priceRange: 1,
        rating: 5,
    },
    {
        image: "https://imageproxy.wolt.com/assets/683d5dba2c97c6c5c80d070a",
        title: "Restaurant 5",
        description: "Description 5",
        deliveryTime: "30-40 min",
        deliveryPrice: 5,
        priceRange: 3,
        rating: 4,
    },
    {
        image: "https://imageproxy.wolt.com/assets/683d5dba2c97c6c5c80d070a",
        title: "Restaurant 6",
        description: "Description 6",
        deliveryTime: "20-30 min",
        deliveryPrice: 3,
        priceRange: 2,
        rating: 5,
    },
];

export default function DiscoveryAllRestaurants() {
    return (
        <section>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
                All Restaurants
            </h2>
            <div className="flex gap-4 flex-wrap">
                {RESTAURANTS.map((restaurant) => (
                    <RestaurantItem key={restaurant.title} {...restaurant} />
                ))}
            </div>
        </section>
    );
}
