import { useEffect } from "react";

const quickStats = [
  { value: "4+", label: "Years of experience" },
  { value: "45%", label: "Lower dashboard latency" },
  { value: "40%", label: "Fewer reporting defects" },
  { value: "95%", label: "ML model accuracy" },
];

const specialties = [
  "Data Engineering",
  "Analytics Engineering",
  "Databricks",
  "Snowflake",
  "SQL & Python",
  "Data Quality",
];

const experience = [
  {
    role: "Data Analytics Engineer",
    company: "Wesco International",
    period: "Jan 2025 - Present",
    highlight: "40%",
    highlightLabel: "Query Performance Boost",
    points: [
      "Designed and developed scalable ETL pipelines using Azure Databricks (PySpark, Scala), Azure Data Factory (ADF), and AWS Glue to process large-scale telemetry, manufacturing, and supply chain data into Azure Data Lake Storage (ADLS) and AWS S3, improving data reliability and analytics efficiency.",
      "Built real-time streaming pipelines using Azure Event Hubs, Stream Analytics, Azure Functions, and AWS Kinesis + Lambda to capture operational metrics, enabling near real-time visibility and predictive monitoring.",
      "Architected a multi-cloud data lake integrating ADF, Synapse Analytics, Snowflake, and AWS Redshift, supporting product performance analytics, yield optimization, and anomaly detection.",
      "Automated workflows using Apache Airflow, ADF Pipelines, and AWS Step Functions, streamlining data ingestion and transformation from IoT and manufacturing systems.",
      "Implemented data security and compliance using Azure RBAC, Managed Identities, ADLS Encryption, and AWS IAM + S3 Encryption.",
      "Developed validation frameworks with Python and Great Expectations, integrated into Azure DevOps and AWS CodePipeline/Terraform, ensuring data integrity across environments.",
    ],
    tags: ["Azure", "Databricks", "AWS", "Airflow", "ADF", "Terraform", "Snowflake", "Redshift"],
  },
  {
    role: "Data Engineer / Data Analyst",
    company: "Persistent Systems, India",
    period: "Jan 2022 - Dec 2023",
    highlight: "30%",
    highlightLabel: "Faster Processing",
    points: [
      "Designed and developed end-to-end ETL pipelines using Azure Databricks (PySpark, Scala), Azure Data Factory (ADF), and AWS Glue to process large-scale financial and transactional data, improving data accessibility and analytics readiness.",
      "Built real-time streaming pipelines with Azure Event Hubs, Stream Analytics, and AWS Kinesis for regulatory dashboards and risk monitoring.",
      "Integrated a multi-cloud data lake (ADLS + S3) with Snowflake and Synapse Analytics, supporting unified financial reporting and self-service BI.",
      "Collaborated with analysts and data scientists to model datasets aligned with financial KPIs, powering insights through Power BI and Tableau dashboards.",
      "Automated CI/CD data workflows using Airflow, Azure DevOps, and Terraform, enhancing deployment reliability and scalability.",
    ],
    tags: ["Azure", "Databricks", "ADF", "AWS Glue", "Snowflake", "Power BI", "Terraform"],
  },
  {
    role: "Junior Data Engineer",
    company: "Tata Consulting Services",
    period: "June 2021 - Dec 2022",
    highlight: "30%",
    highlightLabel: "Efficiency Increase",
    points: [
      "Developed ETL pipelines using Azure Databricks (PySpark, Scala), Azure Data Factory, and AWS Glue to process large-scale telemetry and operational data into ADLS and AWS S3, increasing efficiency by 30%.",
      "Built real-time streaming pipelines using Azure Event Hubs, Stream Analytics, and AWS Kinesis + Lambda to monitor production line data and detect anomalies.",
      "Modeled and optimized data warehouses in Azure Synapse, Snowflake, and AWS Redshift using Star/Snowflake schemas for predictive reporting and efficiency tracking.",
      "Automated CI/CD and workflow orchestration using Airflow, Terraform, and Azure DevOps, ensuring reliable deployments across environments.",
    ],
    tags: ["Databricks", "Azure Synapse", "Snowflake", "AWS Redshift", "Airflow", "Azure DevOps"],
  },
];

const education = [
  {
    school: "Clark University",
    location: "Worcester, Massachusetts",
    degree: "Master of Science in Data Analytics",
    period: "Jan 2024 - Dec 2025",
    detail:
      "Focused on statistical modeling, machine learning, data engineering, and business intelligence with coursework aligned to modern analytics and cloud data workflows.",
  },
  {
    school: "Sir Padampat Singhania University",
    location: "Udaipur, Rajasthan",
    degree: "Bachelor's in Computer Science",
    period: "Jun 2018 - Jun 2022",
    detail:
      "Built a strong foundation in programming, databases, software engineering, and analytical problem-solving that later shaped my work in data engineering and analytics.",
  },
];

const credentials = [
  {
    label: "Publication",
    title: "Predicting and Enhancing the Fluctuations of Cryptocurrency using algorithms",
    description:
      "Research publication focused on cryptocurrency fluctuation analysis and predictive modeling.",
    href: "https://www.ijaresm.com/uploaded_files/document_file/Ayush_RaizadawDFH.pdf",
    linkText: "Open publication",
  },
  {
    label: "Certification",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    description:
      "Microsoft credential validating cloud concepts, Azure services, pricing, governance, and foundational platform knowledge.",
    href: "https://www.credly.com/badges/0428f7df-3bd6-413e-b886-c774c373623e/public_url",
    linkText: "View credential",
  },
];

const projects = [
  {
    title: "Customer Complaints Resolution Dashboard",
    period: "Jan 2025 - May 2025",
    text: "Developed an ML-powered issue classification workflow and Power BI dashboard to improve service visibility, reduce escalations, and support faster resolution decisions.",
    meta: "95% Accuracy",
    stack: ["Python", "Power BI", "DAX", "ML"],
  },
  {
    title: "Predicting Heart Disease Risk",
    period: "May 2024 - Jul 2024",
    text: "Built predictive models using feature engineering, Logistic Regression, and SVC to improve heart disease risk classification on imbalanced healthcare data.",
    meta: "ML Modeling",
    stack: ["Python", "Logistic Regression", "SVC", "Sklearn"],
  },
  {
    title: "Cardiovascular & Sleep Health Analysis",
    period: "Jan 2024 - May 2024",
    text: "Analyzed health and sleep datasets to identify relationships between physical activity, sleep quality, and cardiovascular indicators through EDA and visualization.",
    meta: "EDA + Insights",
    stack: ["Python", "SQL", "EDA", "Visualization"],
  },
  {
    title: "Short-Term Electrical Load Forecasting",
    period: "Dec 2022 - Jun 2023",
    text: "Built an ANN-based forecasting model to support energy planning and achieve 3.14% MAPE for short-term electrical load prediction.",
    meta: "3.14% MAPE",
    stack: ["MATLAB", "ANN", "Forecasting"],
  },
];

const skillGroups = [
  {
    title: "Engineering",
    items: ["SQL", "Python", "ETL / ELT", "Airflow", "dbt-style transformations", "Data modeling"],
  },
  {
    title: "Platforms",
    items: ["Databricks", "Snowflake", "Azure Synapse", "AWS Redshift", "Azure SQL", "AWS"],
  },
  {
    title: "Quality",
    items: ["Great Expectations", "Validation frameworks", "Anomaly detection", "QA rules", "Documentation", "Data lineage"],
  },
  {
    title: "Analytics",
    items: ["Power BI", "Tableau", "Forecasting", "Experimentation", "Marketing analytics", "Excel"],
  },
];

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    nodes.forEach((node, index) => {
      node.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          {"<Bhargav.data/>"}
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Data Engineer • Analytics Engineer • Databricks • Snowflake</p>
            <h1>
              I build scalable data systems for <span>clean analytics</span> and better decisions.
            </h1>
            <p className="hero-text">
              I’m Bhargav Kodaru, a data engineer focused on ETL pipelines, analytics
              engineering, cloud data platforms, and QA-first workflows that help teams trust
              their reporting, forecasting, and business insights.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                Explore Experience
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-wrap">
              <img
                className="portrait"
                src={`${import.meta.env.BASE_URL}bhargav-kodaru-profile.png`}
                alt="Bhargav Kodaru portrait"
              />
            </div>
          </div>
        </section>

        <section className="stats-band reveal">
          {quickStats.map((item) => (
            <article className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading reveal compact-heading">
            <p className="section-label">About</p>
            <h2>Modern data engineering grounded in reliability, performance, and business impact.</h2>
          </div>

          <div className="about-layout">
            <article className="about-card reveal">
              <p>
                Hello! I&apos;m Bhargav Kodaru, a Data Engineer and Data Analyst with 4+ years of
                experience building scalable data pipelines and analytics solutions. I specialize in
                SQL, Python, Databricks, and cloud platforms like AWS, Azure, and Snowflake, with
                strong expertise in ETL/ELT workflows, data quality frameworks, and analytics
                engineering.
              </p>
              <p>
                I have hands-on experience working with healthcare and enterprise datasets,
                developing reliable data models that support analytics and decision-making. I also
                work at the intersection of data engineering and AI, building solutions using Large
                Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to enable
                intelligent data access and automation.
              </p>
              <p>
                I focus on transforming raw data into high-quality, analytics-ready datasets while
                optimizing performance, ensuring data reliability, and enabling scalable,
                future-ready data platforms.
              </p>
              <div className="pill-row">
                {specialties.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="section-label">Experience</p>
            <h2>Professional journey focused on <span>data platforms</span>, analytics, and quality.</h2>
          </div>

          <div className="experience-list detailed-list">
            {experience.map((item) => (
              <article className="experience-card detailed-card reveal" key={`${item.company}-${item.role}`}>
                <div className="experience-copy">
                  <h3>{item.role}</h3>
                  <p className="experience-meta colorful-meta">
                    <span className="company-name">{item.company}</span>, <span>{item.period}</span>
                  </p>
                  <div className="experience-points">
                    {item.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                  <div className="pill-row small-gap">
                    {item.tags.map((tag) => (
                      <span className="pill muted-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <aside className="experience-aside">
                  <strong>{item.highlight}</strong>
                  <span>{item.highlightLabel}</span>
                </aside>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading reveal">
            <p className="section-label">Education</p>
            <h2>Academic foundation in analytics, engineering, and modern data systems.</h2>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card reveal" key={`${item.school}-${item.degree}`}>
                <h3>{item.school}</h3>
                <p className="education-location">{item.location}</p>
                <p className="education-degree">{item.degree}</p>
                <p className="education-period">{item.period}</p>
                <p className="education-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="section-label">Projects</p>
            <h2>Selected work across BI, machine learning, healthcare analytics, and forecasting.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-top">
                  <span className="project-badge">Featured Project</span>
                  <span className="project-period">{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="pill-row small-gap">
                  {project.stack.map((item) => (
                    <span className="pill muted-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-meta">{project.meta}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading reveal">
            <p className="section-label">Skills</p>
            <h2>Technical capabilities across engineering, quality, warehousing, and business analytics.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="pill-row small-gap">
                  {group.items.map((item) => (
                    <span className="pill muted-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="credentials">
          <div className="section-heading reveal">
            <p className="section-label">Credentials</p>
            <h2>Publications and certifications that support my data and cloud engineering profile.</h2>
          </div>

          <div className="credentials-grid">
            {credentials.map((item) => (
              <article className="credential-card reveal" key={item.title}>
                <p className="section-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.linkText}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-card reveal" id="contact">
          <p className="section-label">Contact</p>
          <h2>Open to data engineering and analytics engineering opportunities.</h2>
          <p>
            If you’re hiring for roles in ETL, analytics engineering, BI, cloud data platforms,
            or data quality, I’d be glad to connect.
          </p>
          <div className="hero-actions centered-actions">
            <a className="button button-primary" href="mailto:bhargav.kodaru@gmail.com">
              bhargav.kodaru@gmail.com
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/bhargav-kodaru"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/kodarubhargav"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
