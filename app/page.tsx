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

export default function Home() {
  return (
    <main>
      <div className="motion-backdrop" aria-hidden="true"><span /><span /><span /></div>
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Andrew Lengkong — home">AL<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#tools">Tools</a><a href="#experience">Experience</a>
        </nav>
        <a className="nav-cta shine-target" href="mailto:lengkongandrew@gmail.com">Let&apos;s talk <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="ambient ambient-blue" /><div className="ambient ambient-gold" />
        <p className="vertical-copy">DESIGN · STRATEGY · IMPACT</p>
        <div className="hero-copy">
          <p className="eyebrow">Independent creative · Remote worldwide</p>
          <h1>ANDREUW<br /><span>LENGKONG</span></h1>
          <div className="hero-role"><i /><h2>Graphic<br />Designer</h2></div>
          <p className="hero-intro">Helping brands speak visually with clarity, purpose, and impact. Designing across digital, print, and motion with a strategic mindset.</p>
        </div>
        <div className="portrait" aria-hidden="true"><div /></div>
        <aside className="hero-stats" aria-label="Career highlights">
          <div><strong>5+</strong><span>Years professional<br />experience</span></div>
          <div><strong>50+</strong><span>Projects<br />completed</span></div>
          <div><strong>20+</strong><span>Clients<br />worldwide</span></div>
        </aside>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><b>↓</b></a>
        <div className="availability"><small>Available for freelance</small><a className="shine-target" href="mailto:lengkongandrew@gmail.com">Let&apos;s work together <span>↗</span></a></div>
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

      <section className="experience-section" id="experience">
        <div className="experience-intro">
          <Kicker number="04">Career journey</Kicker>
          <h2 className="display-title">Professional<br />Experience</h2><div className="glow-rule" />
          <p>Leading design, building brands, and crafting digital experiences that drive growth and engagement.</p><span className="giant-number">04</span>
        </div>
        <article className="job-card job-primary">
          <div className="job-head"><span className="job-icon">▣</span><div><h3>Creative Lead</h3><p><b>VoxLumedia</b> · Tysons Corner, VA, USA — Remote</p></div><time>September 2025–Present</time></div>
          <div className="job-body"><div className="job-copy"><p>Lead hands-on graphic design and visual direction for VoxLumedia&apos;s brand, website, social media, digital products, and client accounts.</p><p>Improved the company&apos;s visual identity and grew Instagram from under 100 to 4,000+ followers and Facebook from under 100 to 2,000+.</p><p>Redesigned the company website and shaped visual direction for VoxCard, VoxSocial, and VoxAudit.</p></div>
          <aside className="impact-card"><small>Impact & growth</small><p><b>4,000+</b><span>Instagram followers</span></p><p><b>2,000+</b><span>Facebook followers</span></p><p><b>Remote</b><span>USA</span></p></aside></div>
          <div className="logo-strip"><span>Selected clients</span>{clients.map(client => <b key={client}>{client}</b>)}</div>
        </article>
      </section>

      <section className="experience-section second-job">
        <div className="experience-intro compact"><Kicker number="05">Selected engagement</Kicker><h2 className="display-title">Sports<br />Media</h2><p>Fast, editorial visual systems for matchday campaigns and global sports audiences.</p></div>
        <article className="job-card">
          <div className="job-head"><span className="job-icon">▣</span><div><h3>Freelance Sport Media Designer</h3><p><b>Multiple platforms</b> · Philippines — Remote</p></div><time>July 2024–July 2025<br />Jan–July 2026</time></div>
          <div className="job-body"><ul className="job-copy"><li>Produce static and animated matchday posters, banners, GIFs, tournament campaigns, and promotional graphics.</li><li>Create Photoshop-based sports compositions with player cutouts, lighting, typography, color grading, and visual effects.</li><li>Adapt high-volume campaign assets across competitions, teams, social media, web, and mobile.</li><li>Own projects from concept development through revisions and final delivery.</li></ul><div className="project-links"><a href="#contact">View Football Matchday Campaigns ↗</a><a href="#contact">View FIFA World Cup 2026 Campaign ↗</a><a href="#contact">View Sports Betting Publications ↗</a></div></div>
          <div className="logo-strip"><span>Selected engagement</span>{engagements.map(item => <b key={item}>{item}</b>)}</div>
        </article>
      </section>

      <footer id="contact"><p>Have a project in mind?</p><h2>Let&apos;s create<br /><span>something bold.</span></h2><a className="shine-target" href="mailto:lengkongandrew@gmail.com">lengkongandrew@gmail.com <span>↗</span></a><small>© 2026 Andrew Lengkong · Available worldwide</small></footer>
    </main>
  );
}
