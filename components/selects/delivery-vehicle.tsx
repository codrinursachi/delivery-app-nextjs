import { Label } from "@radix-ui/react-label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const VEHICLE_TYPES = [
    { value: "bike", label: "Bike" },
    { value: "car", label: "Car" },
    { value: "electric_bicycle", label: "Electric bicycle" },
    { value: "electric_car", label: "Electric car" },
    { value: "electric_motorcycle", label: "Electric motorcycle" },
    { value: "electric_scooter", label: "Electric scooter" },
    { value: "motorcycle", label: "Motorcycle" },
];

export default function DeliveryVehicle() {
    return (
        <>
            <Label>Delivery vehicle</Label>
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
                {VEHICLE_TYPES.map((vehicle) => (
                    <SelectItem key={vehicle.value} value={vehicle.value}>
                        {vehicle.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
                </>
    );
}
