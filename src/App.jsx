/*import "./App.css";

function App() {
  const skills = {
    Software: [
      "AutoCAD",
      "SolidWorks",
      "PowerPoint",
      "Power BI",
      "Word",
      "Excel",
      "VBA",
      "MATLAB (Simscape/Simulink)",
    ],
    Machines: [
      "CNC (3-axis & 5-axis)",
      "Lathe",
      "Milling",
      "Drill Press",
      "Manual Machining",
      "3D Printing",
      "Assembly",
    ],
    Programming: ["C++", "Arduino", "LabVIEW"],
    Languages: ["English (Fluent)", "French (Beginner)", "Arabic (Native)", "Turkish (Intermediate)"],
    Certifications: ["WHMIS", "HWD", "Driver’s License", "Canadian PR", "CSME", "Space Concordia"],
  };

  const experiences = [
    {
      title: "Teaching Assistant — Mechanical Drawing",
      place: "Concordia University, Montreal, QC",
      date: "Sep 2025 – Dec 2025 | Sep 2023 – Dec 2023",
      points: [
        "Created instructional PowerPoint presentations to guide students in engineering sketching and design.",
        "Explained complex engineering concepts in clear, simple terms to strengthen student fundamentals.",
        "Reviewed and graded assignments based on engineering standards and provided constructive feedback.",
      ],
    },
    {
      title: "Owner & Sales Representative — Ramla Perfumes",
      place: "Self-Owned Brand, Montreal, QC",
      date: "2024 – Present",
      points: [
        "Managed end-to-end perfume business operations including product design, supplier relations, and quality control.",
        "Conducted direct sales and product demonstrations, built customer relationships, and encouraged repeat business.",
      ],
    },
  ];

  const projects = [
    {
      title: "Low-Pressure Cold Spray (LPCS) Gun Design",
      date: "Jul 2025 – Present",
      points: [
        "Designing a cold-spray system with a custom de Laval nozzle, heated flow channel, and embedded sensors.",
        "Developing powder feed and airflow systems to improve particle velocity and coating adhesion.",
      ],
    },
    {
      title: "Anti-Vandalism EV Charging Station",
      date: "Jan 2025 – May 2025",
      points: [
        "Developed an automated cable-retraction concept to reduce vandalism and improve user experience.",
        "Performed SolidWorks simulations for environmental durability and optimized the design for usability.",
      ],
    },
    {
      title: "Electronics for Mechanical Engineering",
      date: "Sep 2024 – Dec 2024",
      points: [
        "Built a red LED circuit system with 4 activation states through component integration and testing.",
        "Programmed EEPROM using NE555 timers, counters, and logic gates for memory-controlled LED patterning.",
      ],
    },
    {
      title: "Engineering Design and Manufacturing Project",
      date: "Sep 2023 – Dec 2023",
      points: [
        "Completed hands-on labs using lathes, milling machines, and CNC systems to build machining experience.",
        "Prepared process plans and SolidWorks drawings while applying tolerancing and manufacturing principles.",
      ],
    },
  ];

  return (
    <div className="app">
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="eyebrow">Mechanical Engineering Portfolio</p>
            <h1>Mahmoud Almassri</h1>
            <p className="hero-description">
              Mechanical Engineering student at Concordia University with experience in design,
              manufacturing, technical instruction, and hands-on engineering projects.
            </p>

            <div className="contact-row">
              <span>Montreal, QC</span>
              <span>M.almassri446@gmail.com</span>
              <span>(514) 705-5255</span>
              <span>
                <a
                  href="https://linkedin.com/in/m-almassri"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </div>

          <div className="hero-card">
            <h3>Quick Overview</h3>
            <p><strong>Degree:</strong> Bachelor of Mechanical Engineering</p>
            <p><strong>University:</strong> Concordia University</p>
            <p><strong>Graduation:</strong> Apr 2026</p>
            <p><strong>Highlights:</strong> Dean’s List (2021–2025), Space Concordia, design and manufacturing experience</p>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <p className="section-tag">About</p>
          <h2>Profile</h2>
          <div className="card">
            <p>
              I am a Mechanical Engineering student with experience in CAD design, manufacturing
              processes, technical presentations, and engineering project development. I enjoy
              working on practical systems, solving engineering problems, and learning through
              hands-on work.
            </p>
          </div>
        </section>

        <section className="section">
          <p className="section-tag">Experience</p>
          <h2>Work Experience</h2>
          <div className="stack">
            {experiences.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="subtext">{item.place}</p>
                  </div>
                  <span className="date">{item.date}</span>
                </div>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-tag">Projects</p>
          <h2>Engineering Projects</h2>
          <div className="grid two-col">
            {projects.map((project, index) => (
              <div className="card" key={index}>
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <span className="date">{project.date}</span>
                </div>
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-tag">Education</p>
          <h2>Education & Leadership</h2>
          <div className="grid two-col">
            <div className="card">
              <h3>Concordia University</h3>
              <p className="subtext">Bachelor of Mechanical Engineering</p>
              <p className="date">Sep 2021 – Apr 2026 | Montreal, QC</p>
              <p>Dean’s List (2021–2025)</p>
              <p>
                <strong>Relevant Coursework:</strong> Manufacturing, Thermodynamics, Machine Design,
                Fluid Mechanics
              </p>
            </div>

            <div className="card">
              <h3>Space Concordia</h3>
              <p className="subtext">Recovery Division Member</p>
              <p className="date">Sep 2024 – Present | Montreal, QC</p>
              <p>
                Designed and modeled rocket recovery components in SolidWorks, selected parachute
                materials, and improved deployment mechanisms to meet safety and durability needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <p className="section-tag">Skills</p>
          <h2>Technical Skills</h2>
          <div className="grid three-col">
            {Object.entries(skills).map(([category, items], index) => (
              <div className="card" key={index}>
                <h3>{category}</h3>
                <div className="badge-wrap">
                  {items.map((item, i) => (
                    <span className="badge" key={i}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
*/
function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Mahmoud Portfolio Test</h1>
      <p>If you can see this, GitHub Pages is working.</p>
    </div>
  );
}

export default App;