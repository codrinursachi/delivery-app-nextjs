"use client";
import { useState } from "react";
import { Label } from "../ui/label";
import CountrySelect from "./country-select";
import CitySelect from "./city-select";



export default function DeliveryAddressSelect() {
    const [country, setCountry] = useState("");
    return (
        <>
            <Label>Delivery country</Label>
            <CountrySelect value={country} onValueChange={setCountry} />
            <Label>Delivery city</Label>
            <CitySelect country={country} />
        </>
    );
}
