import { useState } from "react";

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

const clients = ["Tito's Diner", "Global Bistro", "Bison Insulation", "JJ Trading", "Moon Bounce", "Global Marketing"];
const engagements = ["Jalalive", "spb1.com", "BK8", "dafabet"];
const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=lengkongandrew@gmail.com&su=Portfolio%20Project%20Inquiry";
const linkedInUrl = "https://www.linkedin.com/in/lengkongandreuw/";
const behanceUrl = "https://www.behance.net/andrewlengkong";

const selectedWorks = [
  { title: "Bison Insulation Rebranding", category: "Brand Identity", image: "/work-bison.jpg", href: "https://www.behance.net/gallery/240372477/Bison-Insulation-Rebranding-Project" },
  { title: "Tito's Diner Social Content", category: "Social Media", image: "/work-titos.jpg", href: "https://www.behance.net/gallery/237246055/Titos-Diner-Restaurant-Social-Media-Content-Design" },
  { title: "Synthetix IT Brand Identity", category: "Visual Identity", image: "/work-synthetix.png", href: "https://www.behance.net/gallery/237636239/Synthetix-IT-Brand-Identity-Design" },
  { title: "Mall Social Media Rebranding", category: "Campaign Design", image: "/work-mall.png", href: "https://www.behance.net/gallery/227970645/MALL-SOCIAL-MEDIA-REBRANDING" },
  { title: "Manguni Squad", category: "Character Design", image: "/work-manguni.png", href: "https://www.behance.net/gallery/186364327/Game-Character-Design-Manguni-Squad" },
  { title: "Commodity Feature for News App", category: "UI / Visual Design", image: "/work-uiux.png", href: "https://www.behance.net/gallery/234003485/UIUX-Commodiy-Feature-for-News-App" },
];

const earlierExperience = [
  { role: "Founder & Creative Project Lead", company: "Kustomisasi Kreasi Kreatif Agency", period: "2022–2026", href: "https://www.behance.net/KustomisasiKreasi", label: "Behance team" },
  { role: "Senior UX Designer / Associate Product Manager", company: "NADI Health", period: "2021–2022", href: "https://www.linkedin.com/company/nadihealthapp", label: "LinkedIn" },
  { role: "Lecturer — UI/UX, HCI & Digital Marketing", company: "Universitas Prisma", period: "2017–2026", href: "https://prisma.ac.id/", label: "Website" },
  { role: "Teacher, Graphic Designer & Web Developer", company: "Manado Prisma School", period: "2012–2017", href: "https://manadoprisma.sch.id/", label: "Website" },
];

const certifications = [
  { title: "Graphic Design Essentials", issuer: "Canva", meta: "Issued Aug 2024 · Credential 4ad46b" },
  { title: "Adobe Certified Associate", issuer: "Adobe", meta: "Issued Sep 2019" },
  { title: "Introduction to User Experience Design", issuer: "Coursera", meta: "Issued Jan 2022" },
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

function RoleDetails({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(() => typeof window === "undefined" || !window.matchMedia("(max-width: 700px)").matches);

  return (
    <details className="job-details" open={open} onToggle={event => setOpen(event.currentTarget.open)}>
      <summary><span>View role details</span><b aria-hidden="true">+</b></summary>
      {children}
    </details>
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
          <div className="portfolio-summary"><p>Selected graphic design work spanning brand identity, social media systems, campaigns, character design, and digital interfaces.</p><a href={behanceUrl} target="_blank" rel="noreferrer">View complete Behance portfolio <span>↗</span></a></div>
        </div>
        <div className="work-grid">{selectedWorks.map(work => <WorkCard key={work.title} {...work} />)}</div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-intro">
          <Kicker number="05">Career journey</Kicker>
          <h2 className="display-title">Professional<br />Experience</h2><div className="glow-rule" />
          <p>Leading design, building brands, and crafting digital experiences that drive growth and engagement.</p><span className="giant-number">05</span>
        </div>
        <article className="job-card job-primary">
          <div className="job-head"><span className="job-icon">▣</span><div><h3>Creative &amp; Digital Marketing Lead</h3><p><b>VoxLumedia</b> · Tysons Corner, VA, USA — Remote</p><div className="company-links"><a href="https://voxlumedia.com/" target="_blank" rel="noreferrer">Website ↗</a><a href="https://www.linkedin.com/company/voxlumedia" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.behance.net/VoxlumediaDesign" target="_blank" rel="noreferrer">Behance ↗</a></div></div><time>September 2025–Present</time></div>
          <RoleDetails><div className="job-body"><div className="job-copy"><p>Lead hands-on graphic design and visual direction for VoxLumedia&apos;s brand, website, social media, digital products, and client accounts.</p><p>Improved the company&apos;s visual identity and grew Instagram from under 100 to 4,000+ followers and Facebook from under 100 to 2,000+.</p><p>Redesigned the company website and shaped visual direction for VoxCard, VoxSocial, and VoxAudit.</p></div>
          <aside className="impact-card"><small>Impact & growth</small><p><b>4,000+</b><span>Instagram followers</span></p><p><b>2,000+</b><span>Facebook followers</span></p><p><b>Remote</b><span>USA</span></p></aside></div></RoleDetails>
          <div className="logo-strip"><span>Selected clients</span>{clients.map(client => <b key={client}>{client}</b>)}</div>
        </article>
      </section>

      <section className="experience-section second-job">
        <div className="experience-intro compact"><Kicker number="06">Selected engagement</Kicker><h2 className="display-title">Sports<br />Media</h2><p>Fast, editorial visual systems for matchday campaigns and global sports audiences.</p></div>
        <article className="job-card">
          <div className="job-head"><span className="job-icon">▣</span><div><h3>Freelance Sport Media Designer</h3><p><b>Multiple platforms</b> · Philippines — Remote</p></div><time>July 2024–July 2025<br />Jan–July 2026</time></div>
          <RoleDetails><div className="job-body"><ul className="job-copy"><li>Produce static and animated matchday posters, banners, GIFs, tournament campaigns, and promotional graphics.</li><li>Create Photoshop-based sports compositions with player cutouts, lighting, typography, color grading, and visual effects.</li><li>Adapt high-volume campaign assets across competitions, teams, social media, web, and mobile.</li><li>Own projects from concept development through revisions and final delivery.</li></ul><div className="project-links"><a href="https://www.behance.net/gallery/234660819/Premiere-League-Match-Poster" target="_blank" rel="noreferrer">View Football Matchday Campaigns ↗</a><a href="https://www.behance.net/gallery/249968611/FIFA-World-Cup-2026-Team-Poster-Design" target="_blank" rel="noreferrer">View FIFA World Cup 2026 Campaign ↗</a><a href={behanceUrl} target="_blank" rel="noreferrer">View Sports Publications ↗</a></div></div></RoleDetails>
          <div className="logo-strip"><span>Selected engagement</span>{engagements.map(item => <b key={item}>{item}</b>)}</div>
        </article>
      </section>

      <section className="experience-section added-role">
        <div className="experience-intro compact"><Kicker number="07">Regional impact</Kicker><h2 className="display-title">Digital<br />Strategy</h2><p>Editorial, marketing, and product visuals built for a high-volume regional media environment.</p></div>
        <article className="job-card">
          <div className="job-head"><span className="job-icon">▣</span><div><h3>Visual Content &amp; Business Strategist</h3><p><b>Manado Post / MPMeta</b> · Manado, Indonesia — Hybrid</p><div className="company-links"><a href="https://manadopost.jawapos.com/" target="_blank" rel="noreferrer">Official website ↗</a></div></div><time>March 2024–March 2026</time></div>
          <RoleDetails><div className="job-body"><div className="job-copy"><ul><li>Directed visual and content quality across MPMeta, MPGrow, MPCerita, and MPSekitar.</li><li>Developed content, monetization, and digital user-acquisition strategies for Manado Post platforms and its mobile app.</li><li>Created and curated editorial and social assets aligned with audience, publication, and brand goals.</li><li>Collaborated with editorial, marketing, product, and development teams while using performance insights to refine creative output.</li></ul></div><div className="project-links"><a href="https://www.behance.net/gallery/227970645/MALL-SOCIAL-MEDIA-REBRANDING" target="_blank" rel="noreferrer">Mall Social Media Rebranding ↗</a><a href="https://www.behance.net/gallery/234003485/UIUX-Commodiy-Feature-for-News-App" target="_blank" rel="noreferrer">News App UI/UX ↗</a><a href="https://manadopost.jawapos.com/" target="_blank" rel="noreferrer">Visit Manado Post ↗</a></div></div></RoleDetails>
        </article>
      </section>

      <section className="experience-section added-role studio-role">
        <div className="experience-intro compact"><Kicker number="08">Studio leadership</Kicker><h2 className="display-title">Product &<br />Game Design</h2><p>Original characters, product visuals, and interactive experiences developed from concept through publication.</p></div>
        <article className="job-card">
          <div className="job-head"><span className="job-icon">▣</span><div><h3>Art Director &amp; Design Lead</h3><p><b>Big Dade Interactive / Big Dade Studio</b> · Indonesia — Hybrid</p><div className="company-links"><a href="http://bigdade.id/" target="_blank" rel="noreferrer">Website ↗</a><a href="https://www.linkedin.com/company/bigdade" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><time>2019–2021<br />2022–2025</time></div>
          <RoleDetails><div className="job-body"><ul className="job-copy"><li>Led and produced visual directions, character designs, illustrations, interface graphics, promotional assets, and game publications.</li><li>Produced and supervised 2D and 3D visual assets for mobile games and interactive applications.</li><li>Designed publication materials for product launches, esports tournaments, community events, and social media campaigns.</li><li>Collaborated with developers, artists, and product teams while personally producing major visual deliverables and conducting design reviews.</li></ul><div className="project-links"><a href="https://www.behance.net/gallery/186364327/Game-Character-Design-Manguni-Squad" target="_blank" rel="noreferrer">View Manguni Squad ↗</a><a href="https://www.behance.net/gallery/153824559/Wardeka-Mobile-Shooting-Game" target="_blank" rel="noreferrer">View Wardeka ↗</a></div></div></RoleDetails>
        </article>
      </section>

      <section className="credentials-section" id="credentials">
        <div className="credentials-heading"><Kicker number="09">Career foundation</Kicker><h2 className="display-title">Experience &amp;<br />Credentials</h2><p>Selected earlier roles, qualifications, and cross-disciplinary foundations supporting a graphic-design career.</p></div>
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
