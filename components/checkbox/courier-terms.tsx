import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export default function CourierTerms() {
    return (
        <div className="flex">
            <Checkbox id="terms" />
            <Label htmlFor="terms">
                I have read and agree with the User Terms of Service, and I
                understand that my personal data will be processed in accordance
                with Wolt Courier Partner Privacy Policy.
            </Label>
        </div>
    );
}
