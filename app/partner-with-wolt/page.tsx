import PartnerWithWoltForm from "@/components/forms/partner-with-wolt-form";

export default function PartnerWithWolt() {
    return (
        <main className="flex flex-col">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                For businesses big and small
            </h4>
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Let&apos;s grow together
            </h1>
            <PartnerWithWoltForm />
        </main>
    );
}
