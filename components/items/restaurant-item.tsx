import { currentCurrency } from "@/lib/config/currency";
import { faPersonBiking, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function RestaurantItem({
    image,
    title,
    description,
    deliveryTime,
    deliveryPrice,
    priceRange,
    rating,
}: {
    image: string;
    title: string;
    description: string;
    deliveryTime: string;
    deliveryPrice: number;
    priceRange: number;
    rating: number;
}) {
    return (
        <div className="w-[calc(33.333%-24px)] h-64 rounded-md border border-gray-200 hover:scale-105 transition-transform cursor-pointer">
            <div className="relative h-7/12 w-full rounded-md overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex h-3/12 justify-between p-3">
                <div className="flex flex-col gap-0.5">
                    <div>{title}</div>
                    <div className="font-light text-gray-500 text-sm">
                        {description}
                    </div>
                </div>
                <div className="bg-blue-100 text-blue-500 rounded-md px-4 w-18 text-sm text-center">
                    {deliveryTime}
                </div>
            </div>
            <hr className="border-dashed" />
            <div className="p-2 text-gray-500">
                <FontAwesomeIcon icon={faPersonBiking} />
                {currentCurrency}
                {deliveryPrice} &#183; {"$".repeat(priceRange)}
                <span className="text-gray-300">
                    {"$".repeat(4 - priceRange)}&#183;{" "}
                    <FontAwesomeIcon icon={faSmile} /> {rating}
                </span>
            </div>
        </div>
    );
}
