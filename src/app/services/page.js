import Services from "@/components/Services";

export const metadata = {
  title: "Capabilities",
  description:
    "The tools and disciplines we work with: interface design, front-end engineering with React and Next.js, and automation tooling.",
};

export default function CapabilitiesPage() {
  return (
    <main className="legal-page">
      <h1>What We Work With</h1>
      <p className="blog-intro">
        A closer look at the disciplines behind the projects in our portfolio.
      </p>
      <Services />
    </main>
  );
}
