import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export default function CourierReferralInput() {
    return (
        <>
            <Label htmlFor="referral">Courier partner referral code</Label>
            <Input
                id="referral"
                name="referral"
                placeholder="Example: CP1234567"
            />
        </>
    );
}
