import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function EmailInput() {
    return (
        <>
            <Label htmlFor="email">Email address</Label>
            <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email address"
            />
        </>
    );
}
