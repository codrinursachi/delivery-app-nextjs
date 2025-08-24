import { CITIES } from "@/lib/constants/cities";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export default function CitySelect({ country }: { country: string }) {
    return (
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
    );
}
