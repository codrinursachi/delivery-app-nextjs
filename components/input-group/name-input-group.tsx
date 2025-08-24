import { Input } from "../ui/input";

export default function NameInputGroup({
    asInPassport = false,
}: {
    asInPassport?: boolean;
}) {
    return (
        <div className="flex gap-4">
            <Input
                type="text"
                id="name"
                name="name"
                required
                placeholder={`First name${
                    asInPassport ? " (as in passport)" : ""
                }`}
            />
            <Input
                type="text"
                id="last-name"
                name="last-name"
                required
                placeholder={`Last name${
                    asInPassport ? " (as in passport)" : ""
                }`}
            />
        </div>
    );
}
