import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function PhoneInput() {
    return (
        <>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" name="phone" required placeholder="0712 034 567" />
        </>
    );
}
