import { useEffect, useRef, useState } from "react";

const services = [
  "Social Media Design",
  "Campaign Key Visuals",
  "Brand Visual Development",
  "Print & Publication Design",
  "Motion Graphics",
  "Photo Manipulation & Compositing",
  "Presentation Design",
  "UI Visual Design",
];

const capabilities = [
  "Photo Retouching",
  "Digital Compositing",
  "Animated GIF Production",
  "Interactive Prototyping",
  "Design Systems",
  "AI-supported Production with Manual Finishing",
];

const tools = [
  { mark: "Ps", name: "Photoshop", type: "Image editing", tone: "ps" },
  { mark: "C", name: "Canva", type: "Visual design", tone: "canva" },
  { mark: "✂", name: "CapCut", type: "Video editing", tone: "capcut" },
  { mark: "Pr", name: "Premiere Pro", type: "Video editing", tone: "premiere" },
  { mark: "Ai", name: "Illustrator", type: "Vector design", tone: "illustrator" },
  { mark: "F", name: "Figma", type: "UI / UX design", tone: "figma" },
];

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=lengkongandrew@gmail.com&su=Portfolio%20Project%20Inquiry";
const linkedInUrl = "https://www.linkedin.com/in/lengkongandreuw/";
const behanceUrl = "https://www.behance.net/andrewlengkong";

const selectedWorks = [
  { title: "FIFA World Cup 2026 Team Poster Design", category: "Sports Campaign", image: "/work-fifa.png", href: "https://www.behance.net/gallery/249968611/FIFA-World-Cup-2026-Team-Poster-Design" },
  { title: "Warbiasa Esport Tournament", category: "Publication Design", image: "/work-warbiasa.jpg", href: "https://www.behance.net/gallery/249763725/Warbiasa-Esport-Tournament-Publication-Design" },
  { title: "NADI My Doctor", category: "Healthcare UX / UI", image: "/work-nadi.jpg", href: "https://www.behance.net/gallery/250701473/NADI-My-Doctor-Telemedicine-UXUI-Case-Study" },
  { title: "Save the Forrest Campaign", category: "Campaign Visual", image: "/work-forest.png", href: "https://www.behance.net/gallery/253177443/Save-the-Forrest-Campaign" },
  { title: "Bison Insulation Rebranding", category: "Brand Identity", image: "/work-bison.jpg", href: "https://www.behance.net/gallery/240372477/Bison-Insulation-Rebranding-Project" },
  { title: "Tito's Diner Social Content", category: "Social Media", image: "/work-titos.jpg", href: "https://www.behance.net/gallery/237246055/Titos-Diner-Restaurant-Social-Media-Content-Design" },
];

const earlierExperience = [
  { role: "Founder & Creative Project Lead", company: "Kustomisasi Kreasi Kreatif Agency", period: "2022–2026", href: "https://www.behance.net/KustomisasiKreasi", label: "Behance team" },
  { role: "Lecturer — UI/UX, HCI & Digital Marketing", company: "Universitas Prisma", period: "2017–2026", href: "https://prisma.ac.id/", label: "Website" },
  { role: "Teacher, Graphic Designer & Web Developer", company: "Manado Prisma School", period: "2012–2017", href: "https://manadoprisma.sch.id/", label: "Website" },
];

const certifications = [
  { title: "Graphic Design Essentials", issuer: "Canva", meta: "Issued Aug 2024 · Credential 4ad46b" },
  { title: "Adobe Certified Associate", issuer: "Adobe", meta: "Issued Sep 2019" },
  { title: "Introduction to User Experience Design", issuer: "Coursera", meta: "Issued Jan 2022" },
];

const journeyExperiences = [
  {
    id: "usa",
    mapLabel: "Tysons Corner",
    location: "Virginia, USA",
    x: 28.55,
    y: 28.38,
    role: "Creative & Digital Marketing Lead",
    company: "VoxLumedia",
    mode: "Remote from Indonesia",
    period: "Sep 2025–Present",
    summary: "Creative direction and hands-on design for a US-based digital agency, its products, and international client accounts.",
    bullets: [
      "Lead brand, website, campaign, social media, and digital-product visual direction.",
      "Built scalable creative systems supporting content growth and consistent cross-channel output.",
      "Shaped the visual language of VoxCard, VoxSocial, and VoxAudit.",
    ],
    metrics: ["4,000+ Instagram", "2,000+ Facebook", "USA · Remote"],
    links: [
      { label: "Website", href: "https://voxlumedia.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/voxlumedia" },
      { label: "Behance team", href: "https://www.behance.net/VoxlumediaDesign" },
    ],
    highlightClients: [
      {
        name: "Bison Insulation",
        location: "Ottawa, Canada",
        summary: "Brand redefinition, a repeatable social media kit, and a refreshed digital presence for an insulation company.",
        services: ["Rebranding", "Social media kit", "Web redesign"],
        links: [
          { label: "Brand case study", href: "https://www.behance.net/gallery/240372477/Bison-Insulation-Rebranding-Project" },
          { label: "Social media kit", href: "https://www.behance.net/gallery/251893479/Bison-Insulation-Sosial-Media-Design" },
          { label: "Website", href: "https://bisoninsulation.ca/" },
          { label: "Instagram", href: "https://www.instagram.com/bison.insulation/" },
        ],
      },
      {
        name: "Global Marketing LLC",
        location: "Dubai, UAE",
        summary: "Rebranding and a cohesive social content direction for a Dubai-based marketing and e-learning company.",
        services: ["Rebranding", "Social content", "Visual direction"],
        links: [
          { label: "Website", href: "https://globalmarketingdubai.com/" },
          { label: "Instagram", href: "https://www.instagram.com/globalmarketing.llc" },
        ],
      },
    ],
  },
  {
    id: "philippines",
    mapLabel: "Philippines",
    location: "Philippines",
    x: 83.61,
    y: 41.9,
    role: "Freelance Sport Media Designer",
    company: "Multiple sports platforms",
    mode: "Remote",
    period: "Jul 2024–Jul 2025 · Jan–Jul 2026",
    summary: "High-volume sports visual production for matchday campaigns, tournaments, betting publications, and global football audiences.",
    bullets: [
      "Produced static and animated matchday posters, banners, GIFs, and tournament campaigns.",
      "Created Photoshop composites with player cutouts, lighting, typography, and color grading.",
      "Adapted campaign systems across social, web, mobile, and competition formats.",
    ],
    metrics: ["Matchday systems", "Static + motion", "Multi-platform"],
    links: [
      { label: "Premier League", href: "https://www.behance.net/gallery/234660819/Premiere-League-Match-Poster" },
      { label: "FIFA World Cup", href: "https://www.behance.net/gallery/249968611/FIFA-World-Cup-2026-Team-Poster-Design" },
      { label: "Sports portfolio", href: behanceUrl },
    ],
    highlightClients: [],
  },
  {
    id: "manado",
    mapLabel: "Manado",
    location: "Manado, Indonesia",
    x: 84.68,
    y: 49.17,
    role: "Visual Content & Business Strategist",
    company: "Manado Post / MPMeta",
    mode: "Hybrid",
    period: "Mar 2024–Mar 2026",
    summary: "Editorial, marketing, and product visuals created inside a fast-moving regional media and digital-publication environment.",
    bullets: [
      "Directed visual quality across MPMeta, MPGrow, MPCerita, and MPSekitar.",
      "Developed content and user-acquisition strategies for digital platforms and the mobile app.",
      "Connected editorial, marketing, product, and development teams through shared visual systems.",
    ],
    metrics: ["Editorial design", "Mobile product", "Regional media"],
    links: [
      { label: "Official website", href: "https://manadopost.jawapos.com/" },
      { label: "Mall rebranding", href: "https://www.behance.net/gallery/227970645/MALL-SOCIAL-MEDIA-REBRANDING" },
      { label: "News app UI", href: "https://www.behance.net/gallery/234003485/UIUX-Commodiy-Feature-for-News-App" },
    ],
    highlightClients: [],
  },
  {
    id: "indonesia",
    mapLabel: "Indonesia",
    location: "Indonesia",
    x: 78.5,
    y: 55.5,
    role: "Art Director & Design Lead",
    company: "Big Dade Interactive / Studio",
    mode: "Hybrid",
    period: "2019–2021 · 2022–2025",
    summary: "Visual direction for original game characters, interactive products, esports publications, and community-facing creative campaigns.",
    bullets: [
      "Led character design, illustration, interface graphics, promotional assets, and game publications.",
      "Produced and supervised 2D and 3D visual assets for mobile games and interactive applications.",
      "Collaborated with developers and artists from concept through design review and release.",
    ],
    metrics: ["Art direction", "Game visuals", "2D + 3D"],
    links: [
      { label: "Website", href: "http://bigdade.id/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/bigdade" },
      { label: "Manguni Squad", href: "https://www.behance.net/gallery/186364327/Game-Character-Design-Manguni-Squad" },
      { label: "Wardeka", href: "https://www.behance.net/gallery/153824559/Wardeka-Mobile-Shooting-Game" },
    ],
    highlightClients: [],
  },
  {
    id: "malaysia",
    mapLabel: "Kuala Lumpur",
    location: "Kuala Lumpur, Malaysia",
    x: 78.25,
    y: 48.26,
    role: "Associate Product Manager & Sr. UX Designer",
    company: "NADI Health",
    mode: "Full-time · Hybrid",
    period: "Dec 2021–Nov 2022",
    summary: "Product management and end-to-end UX leadership for a healthcare super-app connecting patients, doctors, clinics, content, and health events.",
    bullets: [
      "Owned personas, scenarios, wireframes, UX standards, flow diagrams, and moderated usability testing across mobile and desktop products.",
      "Managed requirements, product documents, design-team delivery, module plans, and timelines with product owners, engineers, business analysts, and the CTO.",
      "Led My Doctor's chat, video consultation, clinic booking, dashboard, and professional-access experience, while contributing to My Happiness and the global super-app module.",
    ],
    metrics: ["Healthcare product", "UX strategy", "Product management"],
    links: [
      { label: "My Doctor case study", href: "https://www.behance.net/gallery/250701473/NADI-My-Doctor-Telemedicine-UXUI-Case-Study" },
      { label: "NADI Health", href: "https://www.linkedin.com/company/nadihealthapp" },
    ],
    highlightClients: [],
  },
];

const highlightedClientLocations = [
  { id: "bison", label: "Bison · Ottawa", x: 28.97, y: 24.77 },
  { id: "global-marketing", label: "Global Marketing · Dubai", x: 65.35, y: 36 },
];

function Kicker({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="kicker">
      <span>{number}</span><i aria-hidden="true" /> <p>{children}</p>
    </div>
  );
}

function ToolCard({ mark, name, type, tone }: (typeof tools)[number]) {
  return (
    <article className="tool-card">
      <div className={`tool-mark ${tone}`}>{mark}</div>
      <div><strong>{name}</strong><small>{type}</small></div>
    </article>
  );
}

function WorkCard({ title, category, image, href }: (typeof selectedWorks)[number]) {
  return (
    <a className="work-card" href={href} target="_blank" rel="noreferrer">
      <img src={`${import.meta.env.BASE_URL}${image.replace(/^\//, "")}`} alt={`${title} project thumbnail`} loading="lazy" />
      <span className="work-card-overlay"><small>{category}</small><strong>{title}</strong><b aria-hidden="true">↗</b></span>
    </a>
  );
}

function ExperienceJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const activeExperience = journeyExperiences[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveIndex(Number((visible.target as HTMLElement).dataset.journeyIndex));
    }, { rootMargin: "-28% 0px -38% 0px", threshold: [0, .2, .45, .7] });

    stepRefs.current.forEach(step => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const goToExperience = (index: number) => {
    setActiveIndex(index);
    stepRefs.current[index]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  return (
    <section className="journey-section" id="experience">
      <header className="journey-heading">
        <div><Kicker number="05">Career journey</Kicker><h2 className="display-title">Experience<br />Across Borders</h2></div>
        <p>Scroll through the locations that shaped my work—from agency and client work across the US, Canada, and Dubai to sports media in the Philippines, healthcare products in Malaysia, and design leadership in Indonesia.</p>
      </header>

      <div className="journey-shell">
        <div className="journey-map-column">
          <div className="journey-map" aria-label={`Interactive career map. Active location: ${activeExperience.location}`}>
            <div className="map-grid" aria-hidden="true" />
            <img src={`${import.meta.env.BASE_URL}world-map.svg`} alt="Equirectangular world map" />
            <svg className="journey-route" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
              <path className={`route-leg route-leg-1 ${activeIndex >= 1 ? "is-reached" : ""}`} d="M285 142 C155 108 66 130 0 188 M1000 188 C930 184 874 194 836 210" />
              <path className={`route-leg route-leg-2 ${activeIndex >= 2 ? "is-reached" : ""}`} d="M836 210 C842 224 846 238 847 246" />
              <path className={`route-leg route-leg-3 ${activeIndex >= 3 ? "is-reached" : ""}`} d="M847 246 C831 255 807 267 785 278" />
              <path className={`route-leg route-leg-4 ${activeIndex >= 4 ? "is-reached" : ""}`} d="M785 278 C791 264 790 249 783 241" />
              <path className={`client-route ${activeIndex === 0 ? "is-visible" : ""}`} d="M285 142 C286 134 288 128 290 124" />
              <path className={`client-route ${activeIndex === 0 ? "is-visible" : ""}`} d="M285 142 C394 115 522 137 654 180" />
            </svg>
            {journeyExperiences.map((experience, index) => (
              <button
                className={`map-marker ${index === activeIndex ? "is-active" : ""} ${index < activeIndex ? "is-reached" : ""}`}
                style={{ left: `${experience.x}%`, top: `${experience.y}%` }}
                type="button"
                key={experience.id}
                aria-label={`Go to ${experience.role} in ${experience.location}`}
                aria-current={index === activeIndex ? "step" : undefined}
                onClick={() => goToExperience(index)}
              ><span aria-hidden="true" /><b>0{index + 1}</b><em>{experience.mapLabel}</em></button>
            ))}
            {highlightedClientLocations.map((client, index) => (
              <a
                className={`client-marker ${activeIndex === 0 ? "is-visible" : ""}`}
                style={{ left: `${client.x}%`, top: `${client.y}%` }}
                href={index === 0 ? "https://www.behance.net/gallery/240372477/Bison-Insulation-Rebranding-Project" : "https://globalmarketingdubai.com/"}
                target="_blank"
                rel="noreferrer"
                key={client.id}
                aria-label={`Open highlighted client work: ${client.label}`}
              ><span aria-hidden="true" /><em>{client.label}</em></a>
            ))}
            <div className="map-status" aria-live="polite"><small>Now viewing</small><strong>{activeExperience.location}</strong><span>{activeExperience.company}</span></div>
            <div className="map-stepper" aria-label="Experience locations">{journeyExperiences.map((experience, index) => <button key={experience.id} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => goToExperience(index)} aria-label={`${index + 1} of ${journeyExperiences.length}: ${experience.location}`}><span>0{index + 1}</span></button>)}</div>
            <a className="map-credit" href="https://commons.wikimedia.org/wiki/File:Equirectangular_projection_world_map_without_borders.svg" target="_blank" rel="noreferrer">Map: Ebrahim / Wikimedia Commons · CC BY-SA 4.0</a>
          </div>
        </div>

        <div className="journey-steps">
          {journeyExperiences.map((experience, index) => (
            <article className={`journey-step ${index === activeIndex ? "is-active" : ""} ${experience.highlightClients.length ? "has-client-highlights" : ""}`} key={experience.id} data-journey-index={index} ref={element => { stepRefs.current[index] = element; }}>
              <div className="journey-step-meta"><span>Stop 0{index + 1}</span><time>{experience.period}</time></div>
              <p className="journey-location"><span aria-hidden="true">⌖</span>{experience.location} · {experience.mode}</p>
              <h3>{experience.role}</h3><p className="journey-company">{experience.company}</p>
              <p className="journey-summary">{experience.summary}</p>
              <ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
              <div className="journey-metrics">{experience.metrics.map(metric => <span key={metric}>{metric}</span>)}</div>
              <div className="journey-links">{experience.links.map(link => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} ↗</a>)}</div>
              {experience.highlightClients.length > 0 && (
                <div className="journey-client-work">
                  <p className="journey-client-label">Highlighted client work</p>
                  <div className="journey-client-grid">
                    {experience.highlightClients.map(client => (
                      <article className="journey-client-card" key={client.name}>
                        <div><span>{client.location}</span><h4>{client.name}</h4></div>
                        <p>{client.summary}</p>
                        <div className="journey-client-services">{client.services.map(service => <span key={service}>{service}</span>)}</div>
                        <div className="journey-client-links">{client.links.map(link => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} ↗</a>)}</div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <div className="motion-backdrop" aria-hidden="true"><span /><span /><span /></div>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Andrew Lengkong — home">AL<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a>
        </nav>
        <a className="nav-cta shine-target" href={gmailComposeUrl} target="_blank" rel="noreferrer">Let&apos;s talk <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="ambient ambient-blue" /><div className="ambient ambient-gold" />
        <p className="vertical-copy">DESIGN · STRATEGY · IMPACT</p>
        <div className="hero-copy">
          <p className="eyebrow">Independent creative · Remote worldwide</p>
          <h1>ANDREUW<br /><span>LENGKONG</span></h1>
          <div className="hero-role"><i /><h2>Graphic<br />Designer</h2></div>
          <p className="hero-intro">Graphic designer and visual strategist creating brand identities, campaign systems, sports graphics, publications, motion, and digital product visuals.</p>
          <div className="hero-links"><a href={behanceUrl} target="_blank" rel="noreferrer">Behance ↗</a><a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="portrait" aria-hidden="true"><div /></div>
        <aside className="hero-stats" aria-label="Career highlights">
          <div><strong>10+</strong><span>Years creative<br />experience</span></div>
          <div><strong>50+</strong><span>Projects<br />completed</span></div>
          <div><strong>20+</strong><span>Clients<br />worldwide</span></div>
        </aside>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><b>↓</b></a>
        <div className="availability"><small>Available for freelance</small><a className="shine-target" href={gmailComposeUrl} target="_blank" rel="noreferrer">Let&apos;s work together <span>↗</span></a></div>
      </section>

      <section className="split-section" id="about">
        <div className="section-panel snapshot">
          <Kicker number="01">About me</Kicker>
          <h2 className="display-title">Snapshot</h2>
          <div className="glow-rule" />
          <div className="profile-list">
            <p><strong>International Remote Experience</strong><span>Working with global clients and teams remotely since 2021.</span></p>
            <p><strong>10+ Years of Photoshop Expertise</strong><span>More than a decade of hands-on experience delivering high-quality visual solutions.</span></p>
            <p><strong>Versatile Creative Skillset</strong><span>Social media, campaign visuals, publications, motion, brand development, sports graphics, and UI assets.</span></p>
            <p><strong>End-to-End Collaboration</strong><span>Independent or multidisciplinary work from concept through revisions, adaptation, and delivery.</span></p>
          </div>
          <div className="mini-metrics"><p><b>Remote</b><span>Since 2021</span></p><p><b>10+ years</b><span>Photoshop</span></p><p><b>Adobe-based</b><span>Workflow</span></p><p><b>Independent +</b><span>Team collaboration</span></p></div>
        </div>
        <div className="section-panel services">
          <Kicker number="02">What I do</Kicker>
          <h2 className="display-title">Creative<br />Capabilities</h2>
          <div className="card-grid service-grid">
            {services.map((service, index) => <article key={service}><span>{service}</span><b>0{index + 1}</b></article>)}
          </div>
        </div>
      </section>

      <section className="tools-section" id="tools">
        <div className="tools-main">
          <Kicker number="03">Tool stack</Kicker>
          <h2 className="display-title">Tools</h2><div className="glow-rule" />
          <div className="featured-tools">
            <article><div className="tool-mark ps">Ps</div><div><small>Adobe Photoshop</small><h3>Expert — used<br />since 2008</h3><p>✓ Certified workflow<br />✓ Verification available</p></div></article>
            <article><div className="tool-mark canva">C</div><div><small>Canva</small><h3>Advanced</h3><p>✓ Certified Aug 2024<br />✓ Credential available</p></div></article>
          </div>
          <div className="tool-row">{tools.slice(2).map(tool => <ToolCard key={tool.name} {...tool} />)}</div>
        </div>
        <div className="capabilities-panel">
          <p className="overline">Additional</p><h2 className="display-title">Capabilities</h2>
          <div className="card-grid capability-grid">{capabilities.map((capability, index) => <article key={capability}><span>{capability}</span><b>0{index + 1}</b></article>)}</div>
        </div>
        <div className="proof-strip"><p>Photoshop <b>Since 2008</b></p><p>Canva <b>Certified 2024</b></p><p>Adobe + Figma <b>Workflow</b></p><p>Manual <b>Quality control</b></p></div>
      </section>

      <section className="portfolio-section" id="work">
        <div className="portfolio-heading">
          <div><Kicker number="04">Selected work</Kicker><h2 className="display-title">Visual<br />Portfolio</h2></div>
          <div className="portfolio-summary"><p>A focused selection spanning sports and esports graphics, campaign storytelling, healthcare UX/UI, brand identity, and social content systems.</p><a href={behanceUrl} target="_blank" rel="noreferrer">View complete Behance portfolio <span>↗</span></a></div>
        </div>
        <div className="work-grid">{selectedWorks.map(work => <WorkCard key={work.title} {...work} />)}</div>
      </section>

      <ExperienceJourney />

      <section className="credentials-section" id="credentials">
        <div className="credentials-heading"><Kicker number="06">Career foundation</Kicker><h2 className="display-title">Experience &amp;<br />Credentials</h2><p>Selected earlier roles, qualifications, and cross-disciplinary foundations supporting a graphic-design career.</p></div>
        <div className="credentials-grid">
          <article className="credential-card career-card"><p className="overline">Earlier relevant experience</p><div className="timeline-list">{earlierExperience.map(item => <div className="timeline-item" key={item.company}><time>{item.period}</time><div><h3>{item.role}</h3><p>{item.company}</p><a href={item.href} target="_blank" rel="noreferrer">{item.label} ↗</a></div></div>)}</div></article>
          <article className="credential-card"><p className="overline">Certifications</p><div className="credential-list">{certifications.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.issuer}</p><small>{item.meta}</small></div>)}</div></article>
          <article className="credential-card"><p className="overline">Education &amp; languages</p><div className="credential-list"><div><h3>Master in Management</h3><p>Marketing · Universitas Klabat</p><small>2014–2016</small></div><div><h3>BSc Informatics</h3><p>Universitas Klabat</p><small>2007–2011</small></div><div><h3>Languages</h3><p>Indonesian · English</p><small>Professional collaboration</small></div></div><a className="institution-link" href="https://www.unklab.ac.id/" target="_blank" rel="noreferrer">University website ↗</a></article>
        </div>
      </section>

      <footer id="contact"><p>Have a project in mind?</p><h2>Let&apos;s create<br /><span>something bold.</span></h2><a className="shine-target" href={gmailComposeUrl} target="_blank" rel="noreferrer">lengkongandrew@gmail.com <span>↗</span></a><div className="social-links"><a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a><a href={behanceUrl} target="_blank" rel="noreferrer">Behance</a><a href="https://dribbble.com/lengkongandrew" target="_blank" rel="noreferrer">Dribbble</a><a href="https://instagram.com/lengkongandrew" target="_blank" rel="noreferrer">Instagram</a></div><small>© 2026 Andrew Lengkong · Graphic Designer · Available worldwide</small></footer>
    </main>
  );
}
