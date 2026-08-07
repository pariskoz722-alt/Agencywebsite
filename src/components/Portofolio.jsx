"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { trackSpotlight } from "./spotlight";

// GoClosed pipeline preview — a simplified mock of the app's signature Kanban board.
// When the showcase scrolls into view, the Marea Sushi card "closes the deal":
// it lifts out of Pitched and springs over to Closed, counts updating with it.
const movingCard = { name: "Marea Sushi", value: "€3.1k" };

const staticBoard = [
  {
    stage: "Research",
    count: 4,
    cards: [{ name: "Kάβα Nikos", value: "€1.2k" }],
  },
  {
    stage: "Demo Built",
    count: 3,
    cards: [{ name: "Olive & Co.", value: "€2.4k" }],
  },
];

const goclosedHighlights = [
  "6-stage Kanban pipeline",
  "One-click outreach",
  "⌘K command palette",
  "Pitch template vault",
  "Next.js + TypeScript",
];

const miniProjects = [
  {
    label: "2026 · Web App · Quiz Platform",
    title: "PanelQuiz.gr",
    desc: "Still buttoning its shirt. We're wiring up the buzzers, polishing the questions, and teaching it to keep score without cheating. Big-brain energy, dropping soon.",
    status: "Under construction",
    bg: "linear-gradient(135deg, #123D2B 0%, #0C2A1E 100%)",
  },
  {
    label: "2026 · Restaurant & Beach Bar",
    title: "Theros by the Sea",
    desc: "A sun-soaked site for a seaside restaurant & beach bar in Anavyssos — warm imagery, an easy menu, and a direct path to reservations.",
    href: "https://therosbythesea.com",
    bg: "linear-gradient(rgba(8, 28, 19, 0.15), rgba(8, 28, 19, 0.5)), url(/theros.jpg) center 65% / cover",
  },
];

function KanbanCard({ card, won, layoutId }) {
  return (
    <motion.div
      className={`gc-card ${won ? "gc-card-won" : ""}`}
      layoutId={layoutId}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
    >
      <span className="gc-card-name">{card.name}</span>
      <span className="gc-card-value">{card.value}</span>
    </motion.div>
  );
}

export default function Portofolio() {
  const [dealClosed, setDealClosed] = useState(false);

  const board = [
    ...staticBoard,
    {
      stage: "Pitched",
      count: dealClosed ? 1 : 2,
      cards: dealClosed ? [] : [movingCard],
    },
    {
      stage: "Closed",
      count: dealClosed ? 6 : 5,
      cards: dealClosed
        ? [{ name: "Theros Bar", value: "€4.8k" }, movingCard]
        : [{ name: "Theros Bar", value: "€4.8k" }],
      won: true,
    },
  ];

  return (
    <section id="portfolio" className="featured-project-section">
      <div className="portfolio-container-premium">

        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="portfolio-tag">Case Study</span>
          <h2 className="portfolio-main-title">Featured Work</h2>
        </motion.div>

        <motion.div
          className="main-project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onViewportEnter={() => setTimeout(() => setDealClosed(true), 1400)}
        >
          <div className="project-image-wrapper gc-showcase">
            <span className="mini-project-badge gc-badge">
              <span className="badge-dot" aria-hidden="true" />
              In development
            </span>
            <div className="gc-browser">
              <div className="gc-browser-bar">
                <div className="gc-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="gc-url">goclosed.app</div>
              </div>
              <div className="gc-board">
                {board.map((col) => (
                  <div className="gc-col" key={col.stage}>
                    <div className="gc-col-head">
                      <span>{col.stage}</span>
                      <span className="gc-col-count">{col.count}</span>
                    </div>
                    {col.cards.map((card) => (
                      <KanbanCard
                        key={card.name}
                        card={card}
                        won={col.won}
                        layoutId={card.name === movingCard.name ? "gc-deal-card" : undefined}
                      />
                    ))}
                    <div className="gc-ghost"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="project-info-premium">
            <div className="project-meta">
              <span className="project-year">2026</span>
              <span className="meta-dot">·</span>
              <span className="project-category">SaaS Product · CRM for Freelancers</span>
            </div>
            <h3 className="project-title-premium">GoClosed</h3>
            <p className="project-tagline">Turn cold outreach into closed deals.</p>
            <p className="project-desc-premium">
              A lightweight CRM built for freelancers and small agencies who win clients
              through demo-first cold outreach. Instead of the bloat of enterprise tools,
              GoClosed maps to the real flow — research a business, build a demo, pitch,
              follow up, close — with a drag-and-drop pipeline, one-click email, DM and call
              from every card, and a reusable pitch-template vault. Built in Next.js,
              TypeScript, and Tailwind.
            </p>
            <ul className="project-highlights">
              {goclosedHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <span className="project-status-pill">
              <span className="badge-dot" aria-hidden="true" />
              In active development · launching at goclosed.app
            </span>
          </div>
        </motion.div>

        <div className="portfolio-projects-grid">
          {miniProjects.map((project, i) => {
            const CardTag = project.href ? motion.a : motion.div;
            const linkProps = project.href
              ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <CardTag
                className="mini-project-card spotlight-card"
                key={i}
                onMouseMove={trackSpotlight}
                {...linkProps}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className="mini-project-image"
                  style={{ background: project.bg }}
                >
                  {project.status && (
                    <span className="mini-project-badge">
                      <span className="badge-dot" aria-hidden="true" />
                      {project.status}
                    </span>
                  )}
                  <span className="mini-project-visual-label">{project.title}</span>
                </div>
                <div className="mini-project-info">
                  <p className="mini-project-meta">{project.label}</p>
                  <h4 className="mini-project-title">{project.title}</h4>
                  {project.desc && (
                    <p className="mini-project-desc">{project.desc}</p>
                  )}
                </div>
              </CardTag>
            );
          })}
        </div>

      </div>
    </section>
  );
}
