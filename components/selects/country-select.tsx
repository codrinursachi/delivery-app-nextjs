import { COUNTRIES } from "@/lib/constants/countries";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export default function CountrySelect({ ...props }) {
    return (
        <Select {...props}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
                {COUNTRIES.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                        {country.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
