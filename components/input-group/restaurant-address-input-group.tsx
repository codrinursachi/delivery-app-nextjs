import EmailInput from "../label-input-pairs/email-input";
import PhoneInput from "../label-input-pairs/phone-input";
import CitySelect from "../selects/city-select";
import { Input } from "../ui/input";
import NameInputGroup from "./name-input-group";

export default function RestaurantAddressInputGroup({
    country = "",
}: {
    country?: string;
}) {
    return (
        <>
            <Input name="locationName" placeholder="Location name" />
            <Input name="streetAddress" placeholder="Street address" />
            <div className="flex gap-4">
                <Input name="postalCode" placeholder="Postal Code" />
                <CitySelect country={country} />
            </div>
            <NameInputGroup />
            <PhoneInput />
            <EmailInput />
        </>
    );
}
