const FEATURES = [
  {
    icon: "◎",
    title: "Homepage signal, not noise",
    description:
      "Semantic extraction surfaces pricing, positioning, and launch copy — without drowning you in nav chrome and cookie banners.",
  },
  {
    icon: "△",
    title: "Priority-scored changes",
    description:
      "Every diff is classified so founders see enterprise moves and AI launches before footer link shuffles.",
  },
  {
    icon: "◇",
    title: "Built for GTM velocity",
    description:
      "Weekly digests and Slack alerts keep sales and product aligned before demos, launches, and board updates.",
  },
  {
    icon: "◈",
    title: "Founder-friendly setup",
    description:
      "Paste a competitor URL, pick a cadence, and get your first snapshot in minutes — no integrations required.",
  },
  {
    icon: "◉",
    title: "Versioned snapshots",
    description:
      "Hash-based comparison and line diffs show exactly what changed between crawls, with full history in one place.",
  },
  {
    icon: "◐",
    title: "Enterprise-ready later",
    description:
      "SSO, audit logs, and VPC deployment when your team outgrows spreadsheets and manual checks.",
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
      "30-day change history",
      "Community support",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    tagline: "For early-stage teams tracking a small competitive set",
    price: "$19",
    period: "per seat / month",
    cta: "Start Starter",
    variant: "outline" as const,
    features: [
      "Up to 3 tracked competitors",
      "Bi-weekly homepage snapshots",
      "Email change alerts",
      "90-day change history",
      "Priority-scored diffs",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For teams shipping weekly and watching rivals closely",
    price: "$59",
    period: "per seat / month",
    cta: "Start 14-day trial",
    variant: "primary" as const,
    popular: true,
    features: [
      "Up to 10 tracked competitors",
      "Daily homepage crawls",
      "Semantic diffs & priority scoring",
      "Slack & email alerts",
      "Unlimited change history",
      "Export snapshots (CSV)",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For regulated teams and portfolio operators",
    price: "Custom",
    period: "annual contract",
    cta: "Talk to sales",
    variant: "outline" as const,
    features: [
      "Unlimited tracked competitors",
      "Hourly crawls & API access",
      "SSO (SAML) & SCIM provisioning",
      "SOC 2 Type II & audit logs",
      "Dedicated success manager",
      "VPC / private deployment option",
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
            <p className="hero-badge">Now monitoring 2,400+ competitor homepages</p>
            <h1 id="hero-heading">
              Know what rivals <em>ship</em> before your next launch
            </h1>
            <p className="hero-lead">
              Northline helps founders monitor competitor homepages, pricing moves, and GTM shifts —
              with clean signal and zero alert fatigue.
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

        <section id="features" className="section" aria-labelledby="features-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="features-heading">Features built for founders</h2>
              <p>
                Strategic homepage intelligence without the scraper scripts, screenshot folders, or
                weekly manual checks.
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
              <h2 id="pricing-heading">Simple, transparent pricing</h2>
              <p>
                Starter plans for solo founders. Pro for growing teams. Enterprise when you need
                SSO, compliance, and unlimited scale.
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
