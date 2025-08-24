import NameInputGroup from "../input-group/name-input-group";
import { Label } from "../ui/label";

export default function NameInput() {
    return (
        <>
            <Label htmlFor="name">Name</Label>
            <NameInputGroup asInPassport />
        </>
    );
}
