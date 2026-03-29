"use client";

import { useEffect, useState } from "react";

type Skill = {
  name: string;
  slug: string;
  cdn?: "devicon";
};

const DEVICON = "devicon" as const;

const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", slug: "python" },
      { name: "SQL", slug: "microsoftsqlserver", cdn: DEVICON },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Java", slug: "java", cdn: DEVICON },
      { name: "C++", slug: "cplusplus" },
      { name: "Bash", slug: "gnubash" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "LangChain", slug: "langchain" },
      { name: "LangGraph", slug: "langgraph" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "OpenAI", slug: "openai", cdn: DEVICON },
      { name: "Gemini", slug: "googlegemini" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "FastAPI", slug: "fastapi" },
      { name: "Flask", slug: "flask" },
      { name: "Streamlit", slug: "streamlit" },
      { name: "React", slug: "react" },
      { name: "Spring Boot", slug: "spring" },
    ],
  },
  {
    category: "Data & Cloud",
    items: [
      { name: "AWS", slug: "amazonwebservices", cdn: DEVICON },
      { name: "Snowflake", slug: "snowflake" },
      { name: "Databricks", slug: "databricks" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "Google Cloud", slug: "googlecloud" },
      { name: "Azure", slug: "azure", cdn: DEVICON },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
      { name: "Postman", slug: "postman" },
    ],
  },
];

// brand colors for simpleicons: [light-mode, dark-mode]
const brandColors: Record<string, [string, string]> = {
  python: ["3776AB", "4B8BBE"],
  javascript: ["C8A700", "F7DF1E"],
  typescript: ["3178C6", "5A9BD5"],
  cplusplus: ["00599C", "5C9FD4"],
  gnubash: ["2E7D32", "4EAA25"],
  pytorch: ["EE4C2C", "EE4C2C"],
  langchain: ["1C3C3C", "6DB89B"],
  langgraph: ["1C3C3C", "6DB89B"],
  huggingface: ["FF9D00", "FFB833"],
  openai: ["412991", "9B7FD4"],
  googlegemini: ["886FBF", "A68FD8"],
  fastapi: ["009688", "26C6B0"],
  flask: ["44698A", "7EB4D8"],
  streamlit: ["FF4B4B", "FF4B4B"],
  react: ["0088CC", "61DAFB"],
  spring: ["6DB33F", "8FD45F"],
  snowflake: ["29B5E8", "29B5E8"],
  databricks: ["FF3621", "FF5A45"],
  postgresql: ["4169E1", "6B8FED"],
  mysql: ["4479A1", "6CA0C4"],
  googlecloud: ["4285F4", "6BA3F7"],
  git: ["F05032", "F05032"],
  docker: ["2496ED", "2496ED"],
  postman: ["FF6C37", "FF6C37"],
};

export default function Skills() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const check = () => {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr) {
        setDark(attr === "dark");
      } else {
        setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", check);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", check);
    };
  }, []);

  function iconUrl(skill: Skill) {
    if (skill.slug === "openai") {
      return "/icons/openai.svg";
    }
    if (skill.cdn === "devicon") {
      const variant =
        skill.slug === "amazonwebservices"
          ? "amazonwebservices-original-wordmark"
          : `${skill.slug}-original`;
      return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.slug}/${variant}.svg`;
    }
    const colors = brandColors[skill.slug];
    const color = colors ? (dark ? colors[1] : colors[0]) : undefined;
    return `https://cdn.simpleicons.org/${skill.slug}${color ? `/${color}` : ""}`;
  }

  return (
    <div className="skills-section">
      {skills.map((group) => (
        <div key={group.category} className="skills-group">
          <span className="skills-category">{group.category}</span>
          <div className="skills-list">
            {group.items.map((skill) => (
              <span key={skill.name} className="skill-pill">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={iconUrl(skill)}
                  alt=""
                  width={16}
                  height={16}
                  className="skill-icon"
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
