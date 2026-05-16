const FEATURES = [
  {
    icon: "◎",
    title: "Workspace playbooks per rival",
    description:
      "Group competitors into portfolios, attach owner notes, and route homepage drift to the right GTM pod—so launches and pricing shifts never land in a void.",
  },
  {
    icon: "△",
    title: "Playbooks over raw screenshots",
    description:
      "Structured timelines highlight hero, pricing, and integrations deltas without storing brittle screenshots—rebuilt for teams running weekly competitive reviews.",
  },
  {
    icon: "◇",
    title: "Revenue ops–aware alerting",
    description:
      "Escalate when rivals tease enterprise proof, new packaging, or pricing experiments—bi-directional Slack threads keep sales and PMs in lockstep before renewals.",
  },
  {
    icon: "◈",
    title: "Guided onboarding rails",
    description:
      "Northline walks you from first URL to baseline snapshot in one sitting—pick crawl cadence, seat roles, and digest recipients without wiring integrations on day one.",
  },
  {
    icon: "◉",
    title: "Immutable baseline history",
    description:
      "Every crawl stores hashed homepage sections with line-accurate diffs—roll back months to show legal, finance, or the board exactly how a narrative evolved.",
  },
  {
    icon: "◐",
    title: "Enterprise trust when you scale",
    description:
      "When you graduate from spreadsheets, unlock SAML SSO, SCIM seats, SOC 2 readouts, and dedicated VPC crawlers for the firms watching dozens of rivals.",
  },
] as const;

const PLANS = [
  {
    id: "free",
    name: "Free",
    tagline: "For solo founders validating the workflow",
    price: "$0",
    period: "forever",
    cta: "Start free",
    variant: "outline" as const,
    features: [
      "1 tracked competitor",
      "Weekly homepage snapshots",
      "Email digest summaries",
      "45-day rolling history (extended pilot)",
      "Community support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Seat-based packaging for small pods chasing a focused rival set",
    price: "$49",
    period: "per seat / month",
    billingNote: "Annual prepay: $470 / seat / year (save ~20%)",
    cta: "Start Growth",
    variant: "outline" as const,
    features: [
      "Up to 5 tracked competitors",
      "3 seats included (expandable to 8)",
      "Bi-weekly homepage snapshots",
      "Email + in-app change alerts",
      "120-day immutable history",
      "Workspace folders & rival tags",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Daily intelligence for GTM teams running parallel launches",
    price: "$119",
    period: "per seat / month",
    billingNote: "Annual prepay: $1,140 / seat / year (2 months free)",
    cta: "Start 14-day trial",
    variant: "primary" as const,
    popular: true,
    features: [
      "Up to 25 tracked competitors",
      "10 seats included with SCIM-ready roles",
      "Daily homepage crawls + semantic reruns",
      "Northline Sense™ AI summaries on every meaningful diff",
      "Slack, Teams, and email escalation paths",
      "Unlimited change history + CSV export",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For regulated teams and portfolio operators",
    price: "Custom",
    period: "annual contract (minimum 25 seats)",
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
            <p className="hero-badge">Now monitoring 2,600+ competitor homepages</p>
            <h1 id="hero-heading">
              Northline Sense™ ranks rival homepage drift with <em>semantic AI</em>
            </h1>
            <p className="hero-lead">
              Pair structured crawls with GPT-scored explanations so your team sees packaging
              experiments, AI narrative pivots, and roadmap teasers before the next board readout—not
              another noisy screenshot inbox.
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
                <strong>94%</strong>
                <span>fewer false-positive alerts</span>
              </div>
              <div className="hero-stat" role="listitem">
                <strong>12 min</strong>
                <span>median setup time</span>
              </div>
              <div className="hero-stat" role="listitem">
                <strong>4.9★</strong>
                <span>founder NPS</span>
              </div>
            </div>
          </div>
        </section>

        <section id="ai" className="section section-muted" aria-labelledby="ai-intel-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="ai-intel-heading">AI-native competitor intelligence</h2>
              <p>
                Northline Sense™ reads each semantic diff bundle, scores whether the move is
                packaging, product, or narrative, and pushes a one-line founder brief to Slack. Large
                language models highlight AI keywords—copilots, agents, LLM workflows—so your squad
                spots synthetic positioning before the press release drops.
              </p>
            </header>
          </div>
        </section>

        <section id="features" className="section" aria-labelledby="features-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="features-heading">Product signals your GTM pod can act on</h2>
              <p>
                From hero swaps to pricing grids, Northline sections the page so product, revops,
                and competitive intel share one operational layer—not a shared drive of PNGs.
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
              <h2 id="pricing-heading">Packaging tuned for seat-based competitive programs</h2>
              <p>
                Growth replaces our retired Starter bundle with higher limits, prepaid annual paths,
                and AI summary credits bundled into Pro—lock in crawl depth before your next territory
                rollout.
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
              <h2>Enterprise ready when you are</h2>
              <p>
                SOC 2 Type II, SAML SSO, SCIM provisioning, and optional VPC deployment for
                regulated teams monitoring dozens of rivals.
              </p>
              <a href="#pricing" className="btn btn-primary">
                Contact sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Northline Inc. All rights reserved.</p>
          <nav className="footer-links" aria-label="Legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
