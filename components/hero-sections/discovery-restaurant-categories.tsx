import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function DiscoveryRestaurantCategories() {
    return (
        <section>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
                Categories <FontAwesomeIcon icon={faCircleInfo} />
            </h2>
            <div className="flex gap-4"></div>
        </section>
    );
}
