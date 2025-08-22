import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function NameInput() {
    return (
        <>
            <Label htmlFor="name">Name</Label>
            <div className="flex gap-4">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="First name (as in passport)"
                />
                <Input
                    type="text"
                    id="last-name"
                    name="last-name"
                    required
                    placeholder="Last name (as in passport)"
                />
            </div>
        </>
    );
}
