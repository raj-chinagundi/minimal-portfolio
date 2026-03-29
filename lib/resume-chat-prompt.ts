const RESUME_CONTEXT_SENTINEL = `PASTE_YOUR_RESUME_TEXT_HERE`;

export const RESUME_CONTEXT_PLACEHOLDER = `{
  "candidate_profile": {
    "full_name": "Basavraj Chinagundi",
    "current_location": {
      "city": "Tempe",
      "state": "AZ",
      "country": "USA"
    },
    "contact": {
      "phone": "602-386-8557",
      "email": "bchinagu@asu.edu"
    },
    "professional_links": {
      "google_scholar": "https://scholar.google.com/citations?user=C7rx36kAAAAJ&hl=en",
      "linkedin": "linkedin.com/in/basavrajchinagundi",
      "github": "github.com/raj-chinagundi",
      "portfolio": "basavraj-chinagundi.vercel.app"
    },
    "summary": "Basavraj Chinagundi is a Computer Science graduate student at Arizona State University with prior experience as an AI Software Engineer at Deloitte and as a Software Development Engineer Intern at Samsung SDS. His background spans backend engineering, AI/LLM systems, data engineering, cloud platforms, distributed systems, full-stack development, and machine learning. He combines strong academic performance, production engineering impact, and hackathon-winning project work."
  },
  "education": [
    {
      "institution": "Arizona State University",
      "location": "Tempe, AZ, USA",
      "degree": "Master of Science",
      "major": "Computer Science",
      "gpa": "4.0/4.0",
      "start_date": "Aug 2025",
      "end_date": "May 2027",
      "status": "Graduate program",
      "relevant_coursework": [
        "Data Structures & Algorithms",
        "NLP",
        "Distributed Systems",
        "Data Processing",
        "Data Mining"
      ],
      "context": "This degree shows advanced academic preparation in computer science, especially in algorithms, language technologies, scalable systems, and data-focused computing."
    },
    {
      "institution": "Thapar Institute of Engineering and Technology",
      "location": "Patiala, India",
      "degree": "Bachelor of Engineering",
      "major": "Electronics and Communication",
      "gpa": "8.62/10.0",
      "start_date": "Aug 2019",
      "end_date": "Jul 2023",
      "status": "Completed",
      "context": "This undergraduate degree provided an engineering foundation and precedes his transition into software engineering, AI, and computer science."
    }
  ],
  "technical_skills": {
    "languages": [
      "Java",
      "Python",
      "SQL",
      "C++",
      "JavaScript",
      "TypeScript",
      "Bash"
    ],
    "frameworks_and_libraries": [
      "Spring Boot",
      "FastAPI",
      "Flask",
      "React",
      "PyTorch",
      "LangChain",
      "Streamlit"
    ],
    "cloud_and_data": [
      "AWS",
      "AWS EC2",
      "AWS S3",
      "Azure",
      "GCP",
      "PostgreSQL",
      "MySQL",
      "Snowflake",
      "Databricks",
      "Docker"
    ],
    "engineering_topics": [
      "Microservices",
      "Distributed Systems",
      "CI/CD",
      "REST APIs",
      "Unit Testing",
      "Agile",
      "SDLC",
      "Design Patterns"
    ],
    "skills_context": {
      "backend": [
        "Java",
        "Python",
        "Spring Boot",
        "FastAPI",
        "Flask",
        "REST APIs",
        "Microservices"
      ],
      "frontend": [
        "React",
        "JavaScript",
        "TypeScript"
      ],
      "ai_ml": [
        "PyTorch",
        "LangChain",
        "NLP",
        "LLM systems"
      ],
      "data_engineering": [
        "SQL",
        "PostgreSQL",
        "MySQL",
        "Snowflake",
        "Databricks",
        "Data Processing",
        "Data Mining"
      ],
      "cloud_devops": [
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "CI/CD",
        "Unit Testing"
      ]
    }
  },
  "experience": [
    {
      "company": "Deloitte",
      "role": "AI Software Engineer",
      "start_date": "Oct 2023",
      "end_date": "Jul 2025",
      "location": null,
      "responsibilities_and_impact": [
        {
          "title": "RAG microservice over PDF data",
          "description": "Architected an asynchronous FastAPI microservice powering retrieval-augmented generation over unstructured PDF data.",
          "technologies": [
            "FastAPI",
            "Asynchronous backend systems",
            "RAG",
            "Vector chunking",
            "PDF processing"
          ],
          "details": {
            "data_type": "Unstructured PDF data",
            "optimization": "Custom vector chunking",
            "impact_metric": "Reduced P99 query latency by 40%",
            "business_context": "Used for internal research tools"
          },
          "interpretation": "Shows strong backend architecture, AI retrieval workflow design, and performance optimization for enterprise use cases."
        },
        {
          "title": "Legacy ETL modernization",
          "description": "Synthesized SQL logic from XML Informatica mappings by scripting a Python automation utility.",
          "technologies": [
            "Python",
            "SQL",
            "XML",
            "Informatica",
            "ETL"
          ],
          "details": {
            "scale": "200+ legacy ETL workflows",
            "impact_metric": "Reduced migration time by 90%"
          },
          "interpretation": "Demonstrates enterprise automation, legacy system modernization, and large-scale workflow migration."
        },
        {
          "title": "Testing and CI/CD reliability improvements",
          "description": "Fortified release stability by embedding Pytest suites and Azure DevOps CI/CD pipelines.",
          "technologies": [
            "Pytest",
            "Azure DevOps",
            "CI/CD"
          ],
          "details": {
            "code_coverage": "85%",
            "impact_metric": "Reduced production hotfixes by 60%"
          },
          "interpretation": "Shows software quality ownership, automated testing, and reliable deployment practices."
        },
        {
          "title": "Automated data validation",
          "description": "Configured automated data validation pipelines using Great Expectations and programmatically generated validation rules from schema metadata.",
          "technologies": [
            "Great Expectations",
            "Schema metadata",
            "Data validation pipelines"
          ],
          "details": {
            "impact_metric": "Eliminated 15+ hours per week of manual rule authoring"
          },
          "interpretation": "Shows data quality engineering and automation of repetitive validation tasks."
        },
        {
          "title": "Workflow orchestration with LangGraph",
          "description": "Orchestrated complex state management across internal tools using LangGraph and built a multi-step workflow router.",
          "technologies": [
            "LangGraph",
            "Workflow routing",
            "State management"
          ],
          "details": {
            "impact_metric": "Reduced inter-service data handoff friction by 30%"
          },
          "interpretation": "Demonstrates orchestration of multi-step workflows and coordination across internal services."
        },
        {
          "title": "Cross-cloud data ingestion stabilization",
          "description": "Stabilized high-volume data ingestion from GCP and Azure into Snowflake and Databricks by adding rigorous schema validation.",
          "technologies": [
            "GCP",
            "Azure",
            "Snowflake",
            "Databricks",
            "Schema validation"
          ],
          "details": {
            "impact_metric": "Reduced pipeline failure rates from 15% to 1%"
          },
          "interpretation": "Shows reliability engineering across modern data platforms and multi-cloud environments."
        },
        {
          "title": "Observability and incident resolution",
          "description": "Instrumented microservices with comprehensive failure logging and monitoring.",
          "technologies": [
            "Microservices",
            "Logging",
            "Monitoring",
            "Observability"
          ],
          "details": {
            "impact_metric": "Reduced Mean Time to Resolve (MTTR) by 50%"
          },
          "interpretation": "Shows operational excellence, root cause analysis improvement, and better production support."
        }
      ],
      "overall_context": "This role positions him as a production-focused AI software engineer with strong experience in backend services, retrieval systems, ETL modernization, data validation, workflow orchestration, cloud data pipelines, CI/CD, and observability."
    },
    {
      "company": "Samsung SDS",
      "role": "Software Development Engineer Intern",
      "start_date": "Mar 2023",
      "end_date": "Jun 2023",
      "location": null,
      "responsibilities_and_impact": [
        {
          "title": "Full-stack inventory management system",
          "description": "Constructed a full-stack inventory management system using Java Spring Boot and React, designing RESTful APIs to manage 1,000+ SKUs.",
          "technologies": [
            "Java",
            "Spring Boot",
            "React",
            "REST APIs"
          ],
          "details": {
            "scale": "1,000+ SKUs",
            "impact_metric": "Reduced manual data entry errors by 90%"
          },
          "interpretation": "Shows full-stack engineering ability, API design, and practical business system implementation."
        },
        {
          "title": "Database and query optimization",
          "description": "Optimized MySQL database schema and query performance via indexing.",
          "technologies": [
            "MySQL",
            "Database schema design",
            "Indexing",
            "Query optimization"
          ],
          "details": {
            "impact_metric": "Sustained sub-200ms API response times under high-concurrency internal usage"
          },
          "interpretation": "Shows database performance tuning and ability to support responsive backend systems."
        },
        {
          "title": "Demand forecasting",
          "description": "Modeled demand forecasting trends using Python with ARIMA and Prophet to analyze historical signals.",
          "technologies": [
            "Python",
            "ARIMA",
            "Prophet",
            "Time-series forecasting"
          ],
          "details": {
            "impact_metric": "Improved seasonal replenishment accuracy by approximately 30%"
          },
          "interpretation": "Adds analytics and forecasting capability to his software engineering profile."
        },
        {
          "title": "Team development workflow participation",
          "description": "Upheld codebase maintainability standards by actively participating in pull-request-based workflows and incorporating peer feedback.",
          "technologies": [
            "PR workflows",
            "Code reviews",
            "SDLC"
          ],
          "details": {},
          "interpretation": "Shows collaborative development habits and familiarity with team engineering processes."
        }
      ],
      "overall_context": "This internship demonstrates strong foundations in full-stack development, API design, database performance tuning, demand forecasting, and collaborative engineering workflows."
    }
  ],
  "projects": [
    {
      "name": "auto-meet",
      "tech_stack": [
        "Python",
        "Langgraph",
        "Webhooks"
      ],
      "links": {
        "code_link_available": true
      },
      "recognition": {
        "award": "Winner (1st Place)",
        "event": "Devhacks 2026"
      },
      "description": "Developed an agentic workflow that turns a meeting transcript into reviewed action items, Jira tickets, GitHub branches for engineering work, and Slack updates.",
      "impact": {
        "claimed_result": "Reduced workplace friction by 80%"
      },
      "interpretation": "This project shows workflow automation, agentic systems thinking, and integration with collaboration and developer tooling such as Jira, GitHub, and Slack."
    },
    {
      "name": "ShadowSearch",
      "tech_stack": [
        "JavaScript",
        "Cloudflare Workers",
        "Llama 3.1"
      ],
      "links": {
        "code_link_available": true
      },
      "recognition": {
        "award": "Winner (1st Place)",
        "event": "Sunhacks 2025"
      },
      "description": "Engineered a serverless backend on Cloudflare Workers to parse active tab content, enabling real-time contextual question answering and semantic recommendations via Llama 3.1.",
      "impact": {
        "performance": "Sub-100ms latency"
      },
      "interpretation": "This project highlights real-time contextual AI assistance, serverless architecture, edge performance focus, and practical LLM integration."
    },
    {
      "name": "Slapp-AI",
      "tech_stack": [
        "Python",
        "Vector DB",
        "Streamlit"
      ],
      "links": {
        "code_link_available": true
      },
      "recognition": {
        "github_stars": "30+",
        "x_bookmarks": "400+"
      },
      "description": "Designed a multimodal recommendation engine indexing 5,800+ items and using vector similarity search to rank results based on user preference graphs.",
      "impact": {
        "indexed_items": "5,800+"
      },
      "interpretation": "This project shows recommendation systems work, semantic retrieval, multimodal indexing, and public traction."
    },
    {
      "name": "STaR: Self-Taught Reasoner",
      "tech_stack": [
        "Python",
        "PyTorch",
        "Hugging Face"
      ],
      "links": {
        "code_link_available": true
      },
      "description": "Reproduced a complete LLM training pipeline to fine-tune Llama 3.2-3B on GSM8k while adhering to the Self-Taught Reasoner methodology.",
      "impact": {
        "benchmark": "GSM8k",
        "model": "Llama 3.2-3B",
        "accuracy": "73.8%"
      },
      "interpretation": "This project demonstrates research-oriented LLM training, reasoning benchmark evaluation, and faithful reproduction of a known reasoning methodology."
    }
  ],
  "candidate_strengths": [
    "Strong academic performance, including a perfect 4.0 GPA in a Computer Science master's program",
    "Professional experience in production AI and backend systems",
    "Experience modernizing legacy ETL workflows at scale",
    "Hands-on work with RAG, PDF retrieval, vector chunking, and agentic workflows",
    "Strong software quality practices including testing, CI/CD, and observability",
    "Experience across multi-cloud and modern data platforms",
    "Full-stack engineering capability with backend, frontend, and databases",
    "Project portfolio includes hackathon-winning builds and publicly visible technical work",
    "Experience with LLM fine-tuning, semantic retrieval, recommendation systems, and workflow automation"
  ],
  "candidate_tags": [
    "AI Software Engineer",
    "Backend Engineer",
    "LLM Engineer",
    "Data Engineer",
    "Full-Stack Developer",
    "Cloud Engineer",
    "Graduate CS Student",
    "Hackathon Winner"
  ],
  "llm_ready_notes": {
    "best_use_as_context": "Use this candidate context when generating resumes, cover letters, recruiter summaries, interview answers, behavioral stories, technical introductions, project explanations, or candidate-job fit analyses.",
    "tone_guidance": "The profile should be framed as high-impact, technically strong, metrics-driven, and oriented toward AI systems, backend engineering, data platforms, and production software.",
    "avoid_assumptions": [
      "Do not assume publications unless explicitly verified from Google Scholar.",
      "Do not assume U.S. work authorization details because they are not stated in the resume.",
      "Do not assume exact project links because only 'Code Link' labels are shown in the resume.",
      "Do not assume company locations for the work experiences because they are not specified in the resume body."
    ]
  }
}`;

export const RESUME_CONTEXT = `
${RESUME_CONTEXT_PLACEHOLDER}
`.trim();

export function hasResumeContext() {
  return RESUME_CONTEXT !== RESUME_CONTEXT_SENTINEL;
}

export function buildResumeChatSystemPrompt() {
  return `
You are CuriBot, a helpful assistant for Basavraj Chinagundi's portfolio website.

Answer questions using only the information below.

Rules:
- Use only facts that are explicitly present in the information below.
- Do not infer, invent, embellish, or guess missing details.
- Never say "resume context", "provided context", "source material", or similar phrasing unless the user explicitly asks where the answer came from.
- If the answer is not fully supported, say something natural like "I don't have that detail here" or "I can only confirm what's listed here."
- Do not claim personal knowledge, hidden knowledge, or outside knowledge.
- Keep answers concise, polished, and direct.
- For serious questions, answer clearly and straightforwardly.
- For casual or clearly non-serious questions, you may use light, playful humor.
- Keep humor dry, friendly, and non-offensive. Never insult or belittle the user.
- If a non-serious question is unrelated to the information below, give a short witty reply and gently steer back to topics you can help with.
- For off-topic joke or gossip questions, prefer a witty redirect over the plain fallback line "I don't have that detail here."
- For obviously personal gossip or joke questions that are not covered here, do not answer them in a dry or formal way.
- Example style for an unrelated gossip question like "Who is his girlfriend?":
  "CuriBot is not licensed for campus gossip. I can help with his projects, experience, skills, or education though."
- Example style for an unrelated casual question like "What's his favorite movie?":
  "That detail never made it into the official file. I can help with his projects, experience, skills, or education instead."
- Use plain text only.
- Do not use markdown, bold text, headings, bullet points, or numbered lists unless the user explicitly asks for that format.
- Prefer a short natural-sounding paragraph over list formatting.
- If asked to compare, summarize, or explain, do so only using the information below.
- If the user asks for contact details, dates, metrics, tools, or experience that are not explicitly listed, say that you do not have that detail here.

Resume context:
${RESUME_CONTEXT}
`.trim();
}
