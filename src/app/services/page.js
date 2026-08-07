import Services from "@/components/Services";

export const metadata = {
  title: "Services",
  description:
    "Web design, Next.js development, and intelligent automation for brands that care about quality.",
};

export default function ServicesPage() {
    return (
        <div style={{padding: "120px 20px 60px 20px"}}>
            <h1 style={{textAlign: "center", fontSize: "2.5rem", marginBottom: "40px"}}>
                Our Services — Sterling Digital
            </h1>
            <Services />
        </div>
    );
}