import Header from "@/components/header/header";
import Stepper from "@/components/stepper/stepper";
import Image from "next/image";

const STEPS = [
    "Apply",
    "Verify Account",
    "Introduction",
    "Download app",
    "Contract",
    "Gear",
];

export default function ApplyPage() {
    return (
        <>
            <Header variant="apply" />
            <main>
                <Image
                    src="https://cdn.wolt.com/wolt-mural-1680.jpg"
                    alt="Wolt courier"
                    width={1680}
                    height={1120}
                    className="object-cover w-full h-96"
                />
                <Stepper steps={STEPS} activeStep={0} />
            </main>
        </>
    );
}
