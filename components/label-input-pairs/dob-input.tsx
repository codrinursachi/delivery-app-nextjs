import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function DateOfBirthInput() {
    return (
        <>
            <Label htmlFor="dob">Date of Birth</Label>
            <div className="flex gap-4">
                <Input type="text" id="dob" name="year" required placeholder="Year (YYYY)" />
                <Input type="text" id="month" name="month" required placeholder="Month (MM)" />
                <Input type="text" id="day" name="day" required placeholder="Day (DD)" />
            </div>
        </>
    );
}
