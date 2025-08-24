import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const BUSINESS_TYPES = [
    { value: "restaurant", label: "Restaurant" },
    { value: "alcohol", label: "Alcohol" },
    { value: "charity", label: "Charity" },
    { value: "florist", label: "Florist" },
    { value: "general_merchandise", label: "General merchandise" },
    { value: "grocery", label: "Grocery" },
    { value: "health_and_beauty", label: "Health & beauty" },
    { value: "other", label: "Other" },
    { value: "pet_supply", label: "Pet supply" },
    { value: "pharmacy", label: "Pharmacy" }
];

export default function BusinessTypeSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Business Type" />
            </SelectTrigger>
            <SelectContent>
                {BUSINESS_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                        {type.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
