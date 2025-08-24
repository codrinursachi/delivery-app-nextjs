import CourierTerms from "../checkbox/courier-terms";
import CourierReferralInput from "../label-input-pairs/courier-referral-input";
import DateOfBirthInput from "../label-input-pairs/dob-input";
import EmailInput from "../label-input-pairs/email-input";
import NameInput from "../label-input-pairs/name-input";
import PhoneInput from "../label-input-pairs/phone-input";
import DeliveryAddressSelect from "../selects/delivery-address-select";
import DeliveryVehicle from "../selects/delivery-vehicle";
import LanguageSelect from "../selects/language-select";
import { Button } from "../ui/button";

export default function ApplyForm() {
    return (
        <div className="w-1/2 mx-auto">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Ready to become a Wolt courier partner?
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Before we get you started as a Wolt courier partner, we just
                need a few details from you. Fill out the quick application
                below, and we&apos;ll get the ball rolling!
            </p>
            <form className="mt-8 flex flex-col gap-4">
                <NameInput/>
                <EmailInput label />
                <LanguageSelect />
                <DateOfBirthInput />
                <PhoneInput label />
                <DeliveryAddressSelect />
                <DeliveryVehicle />
                <CourierReferralInput />
                <CourierTerms />
                <Button type="submit">Send Application</Button>
            </form>
        </div>
    );
}
