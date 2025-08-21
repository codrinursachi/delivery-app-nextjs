import Header from "@/components/header/header";

export default function DiscoveryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header variant="discovery" />
            {children}
        </>
    );
}
