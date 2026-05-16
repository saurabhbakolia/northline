const FEATURES = [
  {
    icon: "◎",
    title: "Section-aware rival portfolios",
    description:
      "Tag competitors by segment, assign owners per homepage block, and route hero, pricing, or integrations drift to the right pod before the next QBR.",
  },
  {
    icon: "△",
    title: "Diffs without screenshot sprawl",
    description:
      "Structured section timelines surface headline, feature-grid, and pricing-grid changes—built for teams running twice-weekly competitive standups.",
  },
  {
    icon: "◇",
    title: "RevOps-grade escalation paths",
    description:
      "Trigger alerts when rivals add enterprise proof, shuffle packaging tiers, or A/B test CTAs—Slack and email threads keep sales and PM aligned pre-renewal.",
  },
  {
    icon: "◈",
    title: "Baseline in under fifteen minutes",
    description:
      "Northline guides you from first URL to a hashed section snapshot in one session—set crawl cadence, roles, and digest recipients with zero integrations day one.",
  },
  {
    icon: "◉",
    title: "Auditable change lineage",
    description:
      "Each crawl stores section hashes with line-level diffs—replay months of homepage evolution for legal, finance, or the board in a single export.",
  },
  {
    icon: "◐",
    title: "Scale with enterprise controls",
    description:
      "Graduate to SAML SSO, SCIM provisioning, SOC 2 attestations, and optional VPC crawlers when your program tracks dozens of rivals across regions.",
  },
] as const;

const PLANS = [
  {
    id: "free",
    name: "Free",
    tagline: "For solo founders testing section-level monitoring",
    price: "$0",
    period: "forever",
    cta: "Start free",
    variant: "outline" as const,
    features: [
      "1 tracked competitor",
      "Weekly section snapshots (hero + pricing)",
      "Email digest summaries",
      "30-day rolling history",
      "Community support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Seat-based packaging for pods tracking a focused rival set",
    price: "$59",
    period: "per seat / month",
    billingNote: "Annual prepay: $590 / seat / year (save ~17%)",
    cta: "Start Growth",
    variant: "outline" as const,
    features: [
      "Up to 8 tracked competitors",
      "3 seats included (expandable to 10)",
      "Bi-weekly full-page section crawls",
      "Email + in-app change alerts",
      "90-day immutable history",
      "Workspace folders & rival tags",
    ],
  },
  {
    id: "team",
    name: "Team",
    tagline: "Cross-functional squads monitoring multiple homepage blocks",
    price: "$89",
    period: "per seat / month",
    billingNote: "Annual prepay: $890 / seat / year (save ~17%)",
    cta: "Start Team trial",
    variant: "outline" as const,
    features: [
      "Up to 15 tracked competitors",
      "5 seats included (expandable to 15)",
      "Weekly crawls across hero, features, pricing",
      "Section-level diff filters & saved views",
      "180-day immutable history",
      "Slack digest (read-only channel)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Daily intelligence for GTM teams shipping in parallel",
    price: "$139",
    period: "per seat / month",
    billingNote: "Annual prepay: $1,390 / seat / year (2 months free)",
    cta: "Start 14-day trial",
    variant: "primary" as const,
    popular: true,
    features: [
      "Up to 30 tracked competitors",
      "12 seats included with SCIM-ready roles",
      "Daily section crawls + semantic reruns",
      "Northline Sense™ AI summaries on every meaningful diff",
      "Slack, Teams, and email escalation paths",
      "Unlimited change history + CSV export",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For regulated teams and multi-region portfolio operators",
    price: "Custom",
    period: "annual contract (minimum 20 seats)",
    cta: "Talk to sales",
    variant: "outline" as const,
    features: [
      "Unlimited tracked competitors",
      "Hourly crawls, webhooks, and GraphQL API",
      "SSO (SAML) & SCIM seat governance",
      "SOC 2 Type II, audit exports, DPAs",
      "VPC / dedicated crawl workers",
      "Named solutions engineer",
    ],
  },
] as const;

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <a href="#" className="logo" aria-label="Northline home">
            <span className="logo-mark" aria-hidden="true" />
            Northline
          </a>
          <nav className="nav-primary" aria-label="Main">
            <a href="#features">Features</a>
            <a href="#ai">AI</a>
            <a href="#pricing">Pricing</a>
            <a href="#enterprise">Enterprise</a>
          </nav>
          <div className="header-actions">
            <a href="#pricing" className="btn btn-ghost">
              Log in
            </a>
            <a href="#pricing" className="btn btn-primary">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <p className="hero-badge">Now tracking 3,200+ competitor homepage sections</p>
            <h1 id="hero-heading">
              Catch rival hero, pricing, and feature shifts with <em>section-level AI</em>
            </h1>
            <p className="hero-lead">
              Northline hashes each homepage block—hero, features, pricing, CTA—and scores meaningful
              drift so your GTM pod spots packaging tests and narrative pivots days before the board deck,
              not buried in screenshot threads.
            </p>
            <div className="hero-cta">
              <a href="#pricing" className="btn btn-primary">
                Start free
              </a>
              <a href="#pricing" className="btn btn-outline">
                Book a demo
              </a>
            </div>
            <div className="hero-stats" role="list">
              <div className="hero-stat" role="listitem">
                <strong>91%</strong>
                <span>fewer false-positive alerts</span>
              </div>
              <div className="hero-stat" role="listitem">
                <strong>9 min</strong>
                <span>median setup time</span>
              </div>
              <div className="hero-stat" role="listitem">
                <strong>4.8★</strong>
                <span>founder NPS</span>
              </div>
            </div>
          </div>
        </section>

        <section id="ai" className="section section-muted" aria-labelledby="ai-intel-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="ai-intel-heading">Section-scored competitor intelligence</h2>
              <p>
                Sense™ classifies each diff by homepage block—hero, features, pricing—and scores whether
                the move is packaging, product, or narrative before posting a one-line brief to Slack.
                Models flag AI keywords—copilots, agents, autonomous workflows—so your squad catches
                synthetic positioning before rivals ship the press release.
              </p>
            </header>
          </div>
        </section>

        <section id="features" className="section" aria-labelledby="features-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="features-heading">Homepage blocks your GTM pod can operationalize</h2>
              <p>
                Hero headlines, feature grids, and pricing tables each get their own diff stream—so
                product, revops, and competitive intel work from one timeline instead of a PNG folder.
              </p>
            </header>
            <div className="features-grid">
              {FEATURES.map((f) => (
                <article key={f.title} className="feature-card">
                  <div className="feature-icon" aria-hidden="true">
                    {f.icon}
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section" aria-labelledby="pricing-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="pricing-heading">Plans built for section-by-section competitive programs</h2>
              <p>
                New Team tier sits between Growth and Pro—more rivals, weekly section crawls, and Slack
                digests. Annual prepay discounts apply across paid seats; lock pricing before your next
                territory launch.
              </p>
            </header>
            <div className="pricing-grid">
              {PLANS.map((plan) => (
                <article
                  key={plan.id}
                  className={`pricing-card${"popular" in plan && plan.popular ? " featured" : ""}`}
                  aria-labelledby={`plan-${plan.id}`}
                >
                  {"popular" in plan && plan.popular ? (
                    <span className="badge-popular">Most popular</span>
                  ) : null}
                  <h3 id={`plan-${plan.id}`}>{plan.name}</h3>
                  <p className="pricing-tagline">{plan.tagline}</p>
                  <div className="pricing-price">
                    <span className="amount">{plan.price}</span>{" "}
                    <span className="period">{plan.period}</span>
                  </div>
                  {"billingNote" in plan && plan.billingNote ? (
                    <p className="pricing-billing-note">{plan.billingNote}</p>
                  ) : null}
                  <ul className="pricing-features">
                    {plan.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`btn btn-${plan.variant}`}
                    aria-label={`${plan.cta} — ${plan.name} plan`}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="enterprise" className="section">
          <div className="container">
            <div className="cta-band">
              <h2>Ready for enterprise-scale monitoring?</h2>
              <p>
                SOC 2 Type II, SAML SSO, SCIM provisioning, hourly section crawls, and optional VPC
                deployment for regulated teams tracking rival homepages across regions.
              </p>
              <a href="#pricing" className="btn btn-primary">
                Schedule a call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Northline Inc. Section-aware competitor intelligence.
          </p>
          <nav className="footer-links" aria-label="Legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
