import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function EmailInput({ label = false }: { label?: boolean }) {
    return (
        <>
            {label && <Label htmlFor="email">Email address</Label>}
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
