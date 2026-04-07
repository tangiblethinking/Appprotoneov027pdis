/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Senior Product Designer</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 3px;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    .share-link {
      display: block;
      text-align: right;
      font-size: 8.5pt;
      color: var(--blue);
      text-decoration: none;
      font-style: italic;
      margin-top: 16px;
    }
    .share-link:hover { text-decoration: underline; }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }
      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }
      header {
        padding: 20px 18px 14px;
      }
      header h1 {
        font-size: 22pt;
      }
      header .title-line {
        font-size: 9pt;
      }
      header .contact {
        font-size: 9pt;
        gap: 6px;
        row-gap: 4px;
      }
      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }
      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }
      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }
      .section-title {
        font-size: 13pt;
      }
      .sidebar .section-title {
        font-size: 11pt;
      }
      .job ul li {
        font-size: 9pt;
      }
      .job-meta {
        font-size: 8pt;
        gap: 4px;
      }
      .summary-quote {
        font-size: 9pt;
      }
      .tag {
        font-size: 7.5pt;
      }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body {
        padding: 16px 8px;
      }
      .page {
        width: 100%;
      }
      header {
        padding: 22px 24px 14px;
      }
      .main {
        padding: 20px 24px 28px;
      }
      .sidebar {
        padding: 20px 16px 28px;
      }
      .body {
        grid-template-columns: 1fr 200px;
      }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Senior Product Designer | Workflow-Driven Operational Software | Systems Thinking &amp; Visual Craft | Enterprise Platform UX | Research-Led Design</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa24" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <!-- PLEXUS -->
      <div class="job">
        <div class="job-title">Senior Product Designer (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Owned end-to-end design of platform-level enhancements — driving interaction model decisions from problem framing through shipped experience across 3 international operational markets</li>
          <li>Independently framed undefined business problem, architected and shipped AI-assisted behavioral insights platform in 4 months — reversed –17% operating margin to +2%</li>
          <li>Conducted direct user research and behavioral analysis via Power BI to surface operator workflow friction; redesigned multi-step flows cutting abandonment 43%</li>
          <li>Architected design system consolidating 6 fragmented tools into a unified component library — 60–90% org-wide reuse, 50% faster delivery velocity</li>
          <li>Collaborated with engineering to design within technical constraints; produced dev-ready component specifications and coded prototypes adopted in production</li>
          <li>Led LLM-driven AI workflow adoption across 5-person design team — increasing sprint velocity 35%</li>
        </ul>
      </div>

      <!-- FREEPORT -->
      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Designed workflow-driven operational software for regulated industrial environments — data-heavy dashboards and multi-step interfaces for expert operators in high-stakes production environments</li>
          <li>Independently conducted 10+ operator discovery sessions in the field; translated research insights directly into shipped product requirements and validated interfaces</li>
          <li>Designed complex workflows and data-dense operational interfaces within strict regulatory and technical constraints — improving expert operator efficiency 30%</li>
          <li>Built scalable MUI React design system adopted across web, iOS, and Android — component specs and interaction patterns enabling frictionless engineering delivery</li>
          <li>Presented product roadmaps to C-suite executives — secured approval for 5 major operational software releases through data-driven design rationale</li>
        </ul>
      </div>

      <!-- OPENTECH -->
      <div class="job">
        <div class="job-title">Senior Product Designer</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Redesigned operator-facing Point of Sale kiosk workflow — complex multi-step operational interface, boosting task completion rates 75%</li>
          <li>Designed compliant user data capture workflows within regulatory constraints — eliminating legal risk across all compliance-critical operational flows</li>
          <li>Evangelized research-led design practice to C-suite; secured budget for 3 new UX initiatives and elevated platform design maturity org-wide</li>
          <li>Enhanced platform workflow efficiency 25% through data-driven UX optimizations validated by direct user research</li>
        </ul>
      </div>

      <!-- SIEMENS -->
      <div class="job">
        <div class="job-title">UX Design Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led design systems unification across 4 simultaneous product initiatives — establishing shared interaction models and component architecture across fragmented regulated industrial platform</li>
          <li>Designed complex operational UI integrating 3D and AutoCAD data within strict technical constraints — collaborated directly with engineering to define feasible interaction patterns</li>
          <li>Produced dev-ready component specifications and documentation reducing engineering handoff overhead 50%</li>
          <li>Secured executive approval for 2 high-impact platform design initiatives through rigorous design rationale presentation</li>
        </ul>
      </div>

      <!-- GLYNLYON -->
      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG and ADA-compliant inclusive experiences across multi-platform digital products — deeply knowledgeable in iOS and Android platform guidelines</li>
          <li>Drove data-informed design decisions through direct user research and usability testing — roadmapped workflow improvements increasing ease of use 65%</li>
          <li>Clearly communicated complex interaction concepts and technical tradeoffs to engineering and product stakeholders — ensuring feasibility and alignment on shipped product decisions</li>
          <li>Led cross-functional teams through Design Thinking workshops — defining operator needs, surfacing workflow pain points, aligning on product strategy</li>
        </ul>
      </div>

    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Senior product designer who untangles complex operational systems and ships foundational platform experiences — from interaction models and product architecture to visual design craft and research-validated decision-making."</p>
        <ul class="summary-bullets">
          <li>12+ years designing workflow-driven, data-heavy interfaces for expert operators in regulated, high-stakes environments</li>
          <li>Systems thinker and visual craftsman — design systems architecture + high-fidelity execution without compromise</li>
          <li>Research-led practice: independently runs operator discovery, synthesizes behavioral insights, ships validated product improvements</li>
          <li>Engineering-fluent: MUI React, coded prototypes, dev-ready specs, technical constraint design</li>
          <li>Track record of owning ambiguous problems from problem framing through shipped experience</li>
          <li>Fintech-adjacent, enterprise SaaS, and regulated industrial platform experience</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>–17% to +2% margin: AI platform shipped in 4 months</li>
          <li>43% workflow abandonment reduction via research-validated redesign</li>
          <li>60–90% design system adoption; 50% faster delivery</li>
          <li>10+ operator discovery sessions → shipped regulatory-compliant tools</li>
          <li>100% compliance across all operator-facing regulatory flows</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">Systems Thinking</span>
          <span class="tag">Interaction Models</span>
          <span class="tag">Product Architecture</span>
          <span class="tag">Workflow-Driven UX</span>
          <span class="tag">Data-Heavy Interfaces</span>
          <span class="tag">Multi-Step Workflows</span>
          <span class="tag">User Research</span>
          <span class="tag">Usability Testing</span>
          <span class="tag">Problem Framing</span>
          <span class="tag">Figma</span>
          <span class="tag">Design Systems</span>
          <span class="tag">MUI React</span>
          <span class="tag">Coded Prototypes</span>
          <span class="tag">Engineering Collaboration</span>
          <span class="tag">Visual Design Craft</span>
          <span class="tag">WCAG Compliance</span>
          <span class="tag">Agile / Scrum</span>
          <span class="tag">Enterprise Platform UX</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI</h2>
        <div class="tag-list">
          <span class="tag">LLM-Based Workflows</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
          <span class="tag">AI-Assisted Prototyping</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Arts – Media Arts &amp; Animation</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
        <div style="margin-top:8px; font-size:8pt; color:var(--mid); line-height:1.55;">
          NASBA Project Management &amp; Agile (891/1000) · Microsoft Business &amp; Data Analysis (95%) · TestMu AI Test Automation (100%) · CompTIA A+ &amp; Network+
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
