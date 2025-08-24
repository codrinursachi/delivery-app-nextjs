"use client";
import { useState } from "react";
import RestaurantAddressInputGroup from "../input-group/restaurant-address-input-group";
import BusinessTypeSelect from "../selects/business-type-select";
import CountrySelect from "../selects/country-select";
import VenueNumberSelect from "../selects/venue-number-select";
import PartnerWithWoltDisclaimer from "../disclaimers/partner-with-wolt-disclaimer";
import { Button } from "../ui/button";

export default function PartnerWithWoltForm() {
    const [country, setCountry] = useState("");
    return (
        <form className="flex flex-col gap-4">
            <CountrySelect value={country} onChange={setCountry} />
            <BusinessTypeSelect />
            <VenueNumberSelect />
            <RestaurantAddressInputGroup country={country} />
            <PartnerWithWoltDisclaimer />
            <Button type="submit">Begin</Button>
        </form>
    );
}
