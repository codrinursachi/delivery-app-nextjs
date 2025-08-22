"use client";
import { useState } from "react";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const COUNTRIES = [
    { value: "finland", label: "Finland" },
    { value: "sweden", label: "Sweden" },
    { value: "norway", label: "Norway" },
    { value: "romania", label: "Romania" },
];

const CITIES: Record<string, { value: string; label: string }[]> = {
    romania: [
        { value: "bucharest", label: "Bucharest" },
        { value: "cluj", label: "Cluj" },
        { value: "timisoara", label: "Timisoara" },
        { value: "iasi", label: "Iasi" },
    ],
};

export default function DeliveryAddressSelect() {
    const [country, setCountry] = useState("");
    return (
        <>
            <Label>Delivery country</Label>
            <Select
                name="country"
                required
                value={country}
                onValueChange={setCountry}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                    {COUNTRIES.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                            {country.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Label>Delivery city</Label>
            <Select name="city" required disabled={!country}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                    {(CITIES[country] || []).map((city) => (
                        <SelectItem key={city.value} value={city.value}>
                            {city.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    );
}
