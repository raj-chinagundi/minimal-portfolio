import Skills from "./components/Skills";
import Walkman from "./components/Walkman";
import ResumeChatbot from "./components/ResumeChatbot";

export default function Home() {
  return (
    <article>
      <h1>Basavraj Chinagundi</h1>

      <p>
        I like messy backends. I specialize in taking fragile, duct-taped
        workflows and refactoring them into systems that actually survive
        production. Whether it&apos;s optimizing slow SQL queries or wrangling
        unpredictable LLM outputs, I focus on building infrastructure that is
        boring, reliable, and hard to break.
      </p>

      <p>
        I&apos;m <strong>actively seeking Summer 2026 internships in SWE/ML/Backend</strong> roles.
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
        <em>Aug 2025 – May 2027</em> &bull; GPA: <strong>4.11 / 4.0</strong>
      </p>
      <p>Previously: B.E. Electronics &amp; Communication, Thapar University (2019–2023).</p>

      <hr />

      <h2>Technical Skills</h2>

      <Skills />

      <hr />

      <h2>Experience</h2>

      <h3>Deloitte - AI Software Engineer</h3>
      <p><em>Oct 2023 – July 2025</em></p>
      <p>
        I focused on <strong>modernization and automation</strong>, effectively
        automating myself out of the boring parts of the job.
      </p>
      <ul>
        <li>
          <strong>The &ldquo;Transpiler&rdquo; Project:</strong> Wrote a Python
          utility that parsed XML mappings and auto-generated optimized SQL
          logic. It handled a migration of 200+ workflows and killed 90% of the
          manual grunt work.
        </li>
        <li>
          <strong>Vector Search at Scale:</strong> Architected a FastAPI
          microservice for semantic search over unstructured docs. Used custom
          chunking to slash P99 latency by 40%.
        </li>
        <li>
          <strong>Agentic Workflows:</strong> Orchestrated multi-step AI agents
          using <strong>LangGraph</strong>, handling state management and
          conditional branching so the bots didn&apos;t get lost in loops.
        </li>
        <li>
          <strong>Quality Gates:</strong> Introduced a strict testing culture
          with Pytest and Azure DevOps, because I hate waking up for hotfixes.
        </li>
      </ul>

      <hr />

      <h3>Samsung SDS - Software Engineer Intern</h3>
      <p><em>Mar 2023 – Jun 2023</em></p>
      <ul>
        <li>
          <strong>Full-Stack Inventory:</strong> Built a Spring Boot + React
          system to manage 1,000+ SKUs, killing a legacy spreadsheet process.
        </li>
        <li>
          <strong>Performance Engineering:</strong> Tuned MySQL schemas and
          indexes to sustain <strong>sub-200ms</strong> response times under high
          concurrency.
        </li>
        <li>
          <strong>Forecasting:</strong> Implemented ARIMA and Prophet models to
          help the business predict demand rather than guess at it.
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
