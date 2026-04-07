/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – UX Design Lead</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --green: #00A000;
      --bg-tint: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: #fff;
      width: 680px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.15);
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 20px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 28pt;
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    .title-line {
      font-size: 10pt;
      font-weight: 700;
      color: var(--blue);
      margin: 5px 0 10px;
    }
    .contact {
      font-size: 9pt;
      color: var(--mid);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px 10px;
    }
    .contact .phone { color: #212121; font-weight: 700; }
    .contact .sep   { color: var(--rule); }
    .contact a      { color: var(--blue); text-decoration: none; font-weight: 600; }
    .contact a:hover { text-decoration: underline; }

    /* ── SECTIONS ── */
    .section {
      padding: 22px 36px;
      border-bottom: 1px solid var(--rule);
    }
    .section:last-child { border-bottom: none; }

    .section-title {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    /* ── SUMMARY ── */
    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      font-weight: 700;
      color: #212121;
      line-height: 1.65;
      margin-bottom: 10px;
    }
    .summary-bullets {
      list-style: disc;
      padding-left: 17px;
    }
    .summary-bullets li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    /* ── EXPERIENCE ── */
    .job { margin-bottom: 20px; }
    .job:last-child { margin-bottom: 0; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      display: block;
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 3px 0 7px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 4px;
    }
    .job-meta svg {
      width: 13px;
      height: 13px;
      fill: var(--green);
      flex-shrink: 0;
      position: relative;
      top: -1px;
    }
    .meta-dot { color: var(--rule); margin: 0 2px; }

    .job ul {
      list-style: disc;
      padding-left: 17px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── KEY ACHIEVEMENTS ── */
    .dot-list {
      list-style: disc;
      padding-left: 17px;
    }
    .dot-list li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.65;
    }

    /* ── SKILLS / AI ── */
    .subsection-title {
      font-family: 'DM Serif Display', Georgia, serif;
      font-size: 12pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1px solid var(--rule);
      padding-bottom: 3px;
      margin: 16px 0 10px;
    }
    .subsection-title:first-child { margin-top: 0; }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.09);
      border-radius: 3px;
      padding: 3px 8px;
    }

    /* ── EDUCATION ── */
    .edu-degree { font-size: 10pt; font-weight: 700; color: var(--dark); }
    .edu-school  { font-size: 9.5pt; font-weight: 500; color: var(--blue); margin-top: 2px; }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 5px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 4px;
    }
    .edu-meta svg {
      width: 13px;
      height: 13px;
      fill: var(--green);
      flex-shrink: 0;
      position: relative;
      top: -1px;
    }

    /* ── MOBILE ── */
    @media (max-width: 580px) {
      body { padding: 0; background: #fff; }
      .page { box-shadow: none; }
      header { padding: 20px 18px 16px; }
      header h1 { font-size: 22pt; }
      .title-line { font-size: 9pt; }
      .section { padding: 18px 18px; }
      .section-title { font-size: 13pt; }
      .job ul li, .summary-bullets li, .dot-list li { font-size: 9pt; }
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
    <div class="title-line">UX Design Lead | Clinical &amp; Operational Workflow Design | Healthcare Technology | Design Systems Architecture | Team Leadership</div>
    <div class="contact">
      <span class="phone">480-206-2145</span>
      <span class="sep">|</span>
      <a href="mailto:c.kenreigh@gmail.com">c.kenreigh@gmail.com</a>
      <span class="sep">|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span class="sep">|</span>
      <a href="https://www.uxapex.com/portfolioa25" target="_blank">Portfolio</a>
      <span class="sep">|</span>
      Phoenix, AZ
    </div>
  </header>

  <!-- SUMMARY -->
  <div class="section">
    <h2 class="section-title">Summary</h2>
    <p class="summary-quote">"UX Design Lead with 12+ years delivering end-to-end design for regulated, operationally complex digital platforms — translating intricate workflows, distributed user contexts, and compliance constraints into intuitive, scalable, and outcome-driven user experiences across enterprise and field-facing systems."</p>
    <ul class="summary-bullets">
      <li>12+ years of hands-on UX leadership across regulated industrial, enterprise SaaS, and complex operational environments — directly applicable to clinical and care coordination workflow design</li>
      <li>Expert translating compliance-constrained requirements (HIPAA-adjacent, HITECH, WCAG 2.1 AA) and operational complexity into intuitive, user-centered design systems and workflow solutions</li>
      <li>Proven design system architect — building and evangelizing scalable component libraries adopted at 60–90% org reuse across web, iOS, and Android platforms</li>
      <li>Experienced managing contract and offshore UX design resources — establishing quality standards, critique cadence, and handoff protocols that improve delivery velocity and cost-effectiveness</li>
      <li>Skilled qualitative and quantitative researcher — user interviews, usability testing, ethnographic field observation, A/B testing, and data analytics — translating insights into actionable design recommendations</li>
      <li>Strategic cross-functional partner; aligns Product, Engineering, Operations, and executive stakeholders around user-centered design principles and outcome-driven product roadmaps</li>
      <li>Hands-on with Figma, LLM-driven AI prototyping workflows, emerging UX technologies, and agile sprint delivery in high-growth, fast-paced environments</li>
    </ul>
  </div>

  <!-- EXPERIENCE -->
  <div class="section">
    <h2 class="section-title">Experience</h2>

    <div class="job">
      <div class="job-title">UX Design Lead (Principal)</div>
      <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
      <div class="job-meta">
        <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
        05/2024 – Present
        <span class="meta-dot">·</span>
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        Phoenix, AZ | Office
      </div>
      <ul>
        <li>Set UX vision and directed end-to-end design across complex multi-region operational platforms — leading 5 designers including contract resources — managing quality standards, design critique cadence, and delivery handoffs across distributed teams</li>
        <li>Conducted qualitative user research, ethnographic observation, and stakeholder interviews to translate complex operational workflows into intuitive, compliant user experiences; synthesized behavioral insights via Power BI to drive data-informed design recommendations</li>
        <li>Led operational workflow redesign using information architecture, user flows, and high-fidelity prototyping — reducing task abandonment 43% and improving end-to-end workflow completion across web and mobile platforms serving 200,000+ users</li>
        <li>Facilitated discovery workshops, design sprints, and A/B testing sessions with cross-functional partners (Product, Engineering, Operations, Marketing) to validate complex interaction decisions and refine designs against performance metrics</li>
        <li>Architected and evangelized a scalable design system — consolidating 6 fragmented tools into one unified component library with documented guidelines; adopted at 60–90% org reuse, reducing delivery time 50% across the design team</li>
        <li>Led adoption of LLM-driven AI tools and emerging UX technologies to streamline workflow design and prototyping, increasing sprint delivery velocity 35%; mentored contract designers on AI-assisted prototyping best practices</li>
        <li>Reversed negative operating trajectory — AI-assisted persona platform grounded in behavioral and demographic research moved operating margin from –17% to +2% within four months by enabling precision-targeted engagement strategies</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-title">Senior UX Designer – Regulated Operations &amp; Enterprise Platforms</div>
      <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
      <div class="job-meta">
        <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
        08/2022 – 10/2023
        <span class="meta-dot">·</span>
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        Phoenix, AZ | Hybrid
      </div>
      <ul>
        <li>Led end-to-end UX design for regulated operational digital tools serving distributed field professionals — delivering responsive web and mobile interfaces that improved worker efficiency 30% in high-stakes, compliance-governed environments directly analogous to clinical care delivery workflows</li>
        <li>Applied ethnographic research and contextual inquiry with field teams to surface workflow friction, translating complex operational user needs into actionable product requirements and service design blueprints across 10+ discovery and alignment workshops</li>
        <li>Designed and implemented a scalable MUI React design system adopted across web, iOS, and Android platforms — establishing component governance, documentation, and guidelines enabling engineering teams to build consistently without designer mediation</li>
        <li>Presented product roadmaps, Agile design strategies, and UX-driven outcome metrics to C-suite executives — securing approval and budget for 5 major product releases across distributed, regulated operational environments</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-title">Senior UX Designer – Compliance &amp; Workflow Platforms</div>
      <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
      <div class="job-meta">
        <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
        05/2021 – 08/2022
        <span class="meta-dot">·</span>
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        Phoenix, AZ | Hybrid
      </div>
      <ul>
        <li>Designed compliance-informed user data capture workflows adhering to regulatory requirements — eliminating 100% of identified legal risk across operational user-facing platforms; directly applicable to HIPAA/HITECH-governed healthcare product design</li>
        <li>Evangelized user-centered design to C-suite stakeholders — securing executive approval and budget for 3 new UX initiatives, elevating UX maturity and embedding design thinking into product strategy</li>
        <li>Redesigned Point of Sale kiosk UI applying service design methodologies and interaction design best practices — boosting task completion rates 75% through intuitive workflow simplification</li>
        <li>Enhanced multi-channel digital workflows through data-driven UX research and usability testing — improving operational fulfillment efficiency 25% across distributed service delivery touchpoints</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-title">UX Design Lead – Industrial Systems &amp; Design Systems</div>
      <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
      <div class="job-meta">
        <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
        07/2020 – 05/2021
        <span class="meta-dot">·</span>
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        Phoenix, AZ | Remote
      </div>
      <ul>
        <li>Led cross-functional design system unification across 4 simultaneous regulated industrial product initiatives — establishing consistent interaction patterns, component standards, and design documentation in a fast-paced, compliance-governed environment</li>
        <li>Produced detailed design specifications and interaction guidelines that reduced engineering clarification needs 50% — enabling distributed teams to build complex systems UI without friction or rework</li>
        <li>Managed project planning and stakeholder alignment across product, engineering, and operations — securing executive approval for 2 high-impact design initiatives in a regulated, multi-team environment</li>
        <li>Designed complex 3D and AutoCAD-integrated UI layouts for industrial application interfaces — navigating technical constraints and safety requirements to deliver intuitive, operationally accurate user experiences</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-title">Senior UX Designer – Accessibility &amp; Inclusive Design</div>
      <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
      <div class="job-meta">
        <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
        02/2014 – 04/2019
        <span class="meta-dot">·</span>
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        Phoenix, AZ | Office
      </div>
      <ul>
        <li>Designed WCAG 2.1 AA and ADA-compliant inclusive experiences across multi-platform digital products — establishing accessibility-first design standards for both web and native iOS/Android applications in compliance-sensitive environments</li>
        <li>Drove data-informed design decisions through qualitative user research, usability testing, and behavioral analysis — roadmapping UI improvements that increased task ease-of-use scores 65% across a diverse, multi-context user base</li>
        <li>Communicated complex interaction design concepts and technical constraints to engineering and product stakeholders — bridging design intent and implementation to ensure feasibility across multiple platforms</li>
        <li>Led cross-functional teams through Design Thinking workshops and journey mapping exercises — defining user needs, aligning on product strategy, and translating research findings into actionable design recommendations</li>
      </ul>
    </div>
  </div>

  <!-- KEY ACHIEVEMENTS -->
  <div class="section">
    <h2 class="section-title">Key Achievements</h2>
    <ul class="dot-list">
      <li>43% reduction in workflow task abandonment through end-to-end interaction design redesign and usability testing validation</li>
      <li>Reversed –17% operating margin to +2% via AI-assisted behavioral research platform — enabling precision-targeted operational engagement within four months</li>
      <li>Design system adopted at 60–90% org reuse — 50% faster delivery velocity across a 5-person design team including contract resources</li>
      <li>100% legal risk elimination through compliance-informed user data capture design — directly applicable to HIPAA/HITECH-governed healthcare environments</li>
      <li>Secured executive approval and budget for 10+ major product initiatives through C-suite roadmap presentations across regulated, enterprise, and operational environments</li>
      <li>30% efficiency improvement for distributed field professionals through responsive web and mobile operational tooling in regulated, compliance-governed settings</li>
    </ul>
  </div>

  <!-- SKILLS -->
  <div class="section">
    <h2 class="section-title">Skills</h2>
    <div class="tag-list">
      <span class="tag">UX Design Leadership</span>
      <span class="tag">Clinical &amp; Operational Workflow Design</span>
      <span class="tag">End-to-End Product Design</span>
      <span class="tag">Information Architecture</span>
      <span class="tag">Interaction Design</span>
      <span class="tag">Journey Mapping</span>
      <span class="tag">Service Design</span>
      <span class="tag">User Flows &amp; Wireframes</span>
      <span class="tag">High-Fidelity Prototyping</span>
      <span class="tag">Rapid Prototyping</span>
      <span class="tag">Figma</span>
      <span class="tag">Design Systems</span>
      <span class="tag">Design Tokens</span>
      <span class="tag">Component Governance</span>
      <span class="tag">MUI React</span>
      <span class="tag">Google MD3</span>
      <span class="tag">WCAG 2.1 AA/AAA</span>
      <span class="tag">Accessibility &amp; Inclusive Design</span>
      <span class="tag">HIPAA-Adjacent Compliance Design</span>
      <span class="tag">Qualitative User Research</span>
      <span class="tag">Quantitative Research</span>
      <span class="tag">Usability Testing</span>
      <span class="tag">A/B Testing</span>
      <span class="tag">Ethnographic Research</span>
      <span class="tag">Contract &amp; Offshore Team Management</span>
      <span class="tag">Cross-Functional Leadership</span>
      <span class="tag">Executive Stakeholder Alignment</span>
      <span class="tag">Agile / Scrum</span>
      <span class="tag">Data-Driven Design</span>
      <span class="tag">Outcome-Oriented UX</span>
    </div>
  </div>

  <!-- AI -->
  <div class="section">
    <h2 class="section-title">AI &amp; Emerging Technology</h2>
    <div class="tag-list">
      <span class="tag">LLM-Based Workflows</span>
      <span class="tag">Agentic AI</span>
      <span class="tag">AI-Assisted Prototyping</span>
      <span class="tag">RAG Systems</span>
      <span class="tag">Multimodal AI</span>
      <span class="tag">Emerging UX Technologies</span>
      <span class="tag">Responsible AI / Ethics</span>
    </div>
  </div>

  <!-- EDUCATION -->
  <div class="section">
    <h2 class="section-title">Education &amp; Certifications</h2>
    <div class="edu-degree">Bachelor of Arts – Media Arts &amp; Animation (Information Design &amp; Technology)</div>
    <div class="edu-school">The Art Institute of Phoenix</div>
    <div class="edu-meta">
      <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
      09/2002 – 09/2005
      <span class="meta-dot">·</span>
      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      Phoenix, AZ
    </div>
    <div style="margin-top:12px; font-size:9pt; color:var(--mid); line-height:1.6;">
      <strong style="color:var(--dark);">Additional:</strong> Project Management &amp; Agile Workflows (NASBA, 891/1000) · Microsoft Business, Data Analysis &amp; Software Development (95%) · TestMu AI Test Automation — LambdaTest (100%) · CompTIA A+ &amp; Network+ · LinkedIn Learning: Business Analysis &amp; Communication
    </div>
  </div>

</div>
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
