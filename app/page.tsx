import Skills from "./components/Skills";
import Walkman from "./components/Walkman";
import ResumeChatbot from "./components/ResumeChatbot";
export default function Home() {
  return (
    <article>
      <h1>Basavraj Chinagundi</h1>
      <p>
        MS Computer Science student at Arizona State University with two years
        of industry experience building AI-powered tooling and data pipelines
        at Deloitte. I gravitate toward backend problems: wiring up LLM
        workflows, writing ETL that doesn&apos;t silently break, and making
        internal tools that people actually use. I also like building things
        fast at hackathons and have two first-place finishes to show for it.
      </p>
      <p>
        I&apos;m{" "}
        <strong>
          actively seeking Summer 2026 internships in SWE/ML/Backend
        </strong>{" "}
        roles.
      </p>
      <a
        className="resume-btn"
        href="https://drive.google.com/file/d/1oEDZULGvbJVLKzB9OdYdIJwJVLMRyo13/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      <hr />
      <h2>Education</h2>
      <h3>M.S. Computer Science - Arizona State University</h3>
      <p>
        <em>Aug 2025 – May 2027</em> &bull; GPA: <strong>4.0 / 4.0</strong>
      </p>
      <p>
        Coursework: Natural Language Processing, Data Processing at Scale, Data
        Mining, Semantic Web Mining, Knowledge Representation.
      </p>
      <h3>B.E. Electronics &amp; Communication - Thapar Institute of Engineering and Technology</h3>
      <p>
        <em>Aug 2019 – July 2023</em> &bull; GPA: <strong>8.62 / 10.0</strong>
      </p>
      <hr />
      <h2>Technical Skills</h2>
      <Skills />
      <hr />
      <h2>Experience</h2>
      <h3>Deloitte - Analyst, AI &amp; Data</h3>
      <p>
        <em>Oct 2023 – July 2025</em>
      </p>
      <p>
        Worked on AI tooling and data engineering for internal teams. Most of my
        work involved using LLMs to automate repetitive processes and writing
        pipelines that moved data across cloud platforms.
      </p>
      <ul>
        <li>
          <strong>RAG Chatbot:</strong> Built a chatbot using Python, Streamlit,
          and GPT-4 over consolidated banking documents with token-aware
          chunking and async API calls to handle large document collections.
        </li>
        <li>
          <strong>Code Generation Pipeline:</strong> Developed an XML-to-SQL
          pipeline using GPT-4.1 to parse Informatica ETL mappings and generate
          executable SQL scripts for legacy system migration.
        </li>
        <li>
          <strong>Data Quality Automation:</strong> Automated rule generation
          using Great Expectations and Gemini 2.0, producing validation rules
          from schema metadata for data engineering pipelines.
        </li>
        <li>
          <strong>ETL Pipelines:</strong> Wrote Python ETL pipelines for
          multi-cloud data extraction from GCP and Azure, loading processed data
          into Snowflake and Databricks.
        </li>
        <li>
          <strong>Agentic Workflow:</strong> Integrated four generative AI tools
          into a unified workflow using LangGraph, routing tasks across services
          based on input type and context.
        </li>
      </ul>
      <hr />
      <h3>Samsung SDS - Software Development Engineer Intern</h3>
      <p>
        <em>Mar 2023 – Jun 2023</em>
      </p>
      <ul>
        <li>
          <strong>Inventory Tracking Tool:</strong> Programmed a full-stack CRUD
          app using Java, Spring Boot, and React with RESTful APIs, replacing
          manual SKU data entry for the operations team.
        </li>
        <li>
          <strong>Demand Forecasting:</strong> Prototyped a forecasting model
          using ARIMA and Prophet in Python, analyzing seasonal trends in
          inventory data to support replenishment planning.
        </li>
      </ul>
      <hr />
      <h2>Projects</h2>
      <Walkman />
      <hr />
      <h2>Connect</h2>
      <p>
        Email: <a href="mailto:bchinagu@asu.edu">bchinagu@asu.edu</a>
        <br />
        LinkedIn:{" "}
        <a href="https://linkedin.com/in/basavrajchinagundi">
          linkedin.com/in/basavrajchinagundi
        </a>
        <br />
        GitHub:{" "}
        <a href="https://github.com/raj-chinagundi">
          github.com/raj-chinagundi
        </a>
      </p>
      <hr />
      <ResumeChatbot />
    </article>
  );
}
