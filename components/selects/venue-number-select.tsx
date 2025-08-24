import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export default function VenueNumberSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Number of venues" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="one">I have one venue</SelectItem>
                <SelectItem value="multiple">I have multiple venues</SelectItem>
            </SelectContent>
        </Select>
    );
}
