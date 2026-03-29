"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const tracks = [
  {
    id: "auto-meet",
    title: "Auto-Meet",
    award: "1st Place · DevHacks 2026",
    desc: "Turns meeting transcripts into Jira tickets, GitHub branches, and Slack updates, automated end to end.",
    tech: ["Python", "LangGraph", "OpenAI", "Jira API", "Slack API"],
    github: "https://github.com/raj-chinagundi/devhacks26",
    img: "/images/auto-meet.png",
  },
  {
    id: "shadowsearch",
    title: "ShadowSearch",
    award: "1st Place · Sunhacks 2025",
    desc: "Chrome extension that turns any live webpage into an interactive knowledge base with real-time Q&A.",
    tech: ["JavaScript", "Cloudflare Workers", "Llama 3.1"],
    github: "https://github.com/raj-chinagundi/shadowsearch",
    img: "/images/shadowsearch.png",
  },
  {
    id: "slapp",
    title: "Slapp-AI",
    award: null,
    desc: "Multimodal recommendation engine indexing 5,800+ items via vector similarity and evolving preference graphs.",
    tech: ["Python", "Vector DBs", "Streamlit"],
    github: "https://github.com/raj-chinagundi/Slapp",
    img: "/images/snapp.png",
  },
  {
    id: "star",
    title: "STaR",
    award: null,
    desc: "Fine-tuned Llama 3.2-3B on GSM8k to 73.8% accuracy. Validates chain-of-thought bootstrapping from scratch.",
    tech: ["Python", "PyTorch", "Llama 3.2-3B"],
    github: "https://github.com/raj-chinagundi/STaR-Self-Taught-Reasoner",
    img: "/images/star-project.jpeg",
  },
];

export default function Walkman() {
  const [idx, setIdx] = useState(0);
  const [view, setView] = useState<"menu" | "play">("menu");
  const [pressed, setPressed] = useState<string | null>(null);

  const tap = (key: string, fn: () => void) => {
    setPressed(key);
    fn();
    setTimeout(() => setPressed(null), 140);
  };

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + tracks.length) % tracks.length);
    setView("play");
  }, []);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % tracks.length);
    setView("play");
  }, []);

  const play = useCallback(() => setView("play"), []);
  const stop = useCallback(() => setView("menu"), []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  { e.preventDefault(); prev(); }
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      if (e.key === "ArrowUp")    { e.preventDefault(); setView("menu"); setIdx((i) => (i - 1 + tracks.length) % tracks.length); }
      if (e.key === "ArrowDown")  { e.preventDefault(); setView("menu"); setIdx((i) => (i + 1) % tracks.length); }
      if (e.key === "Enter")  play();
      if (e.key === "Escape") stop();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [prev, next, play, stop]);

  const t = tracks[idx];
  const progress = ((idx + 1) / tracks.length) * 100;

  return (
    <div className="wkm">
      {/* Top bar */}
      <div className="wkm-top">
        <div className="wkm-led" />
      </div>

      {/* Cassette window */}
      <div className="wkm-mount">
        <div className="wkm-window" key={`${view}-${idx}`}>
          {view === "menu" ? (
            /* ── PLAYLIST VIEW ── */
            <div className="wkm-playlist">
              <div className="wkm-pl-hdr">
                <span className="wkm-pl-label">PROJECTS</span>
                <span className="wkm-pl-sub">{tracks.length} TRACKS</span>
              </div>
              <ul className="wkm-pl-list">
                {tracks.map((tr, i) => (
                  <li
                    key={tr.id}
                    className={`wkm-pl-row${i === idx ? " wkm-pl-on" : ""}`}
                    onClick={() => { setIdx(i); setView("play"); }}
                  >
                    <span className="wkm-pl-num">
                      {i === idx ? "▶" : String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="wkm-pl-name">{tr.title}</span>
                    {tr.award && <span className="wkm-pl-star">★</span>}
                  </li>
                ))}
              </ul>
              <div className="wkm-pl-footer">
                ↑↓ navigate · ENTER to load
              </div>
            </div>
          ) : (
            /* ── NOW PLAYING VIEW ── */
            <div className="wkm-np">
              <Image
                src={t.img}
                alt={t.title}
                fill
                sizes="(max-width: 700px) 100vw, 460px"
                className="wkm-np-img"
              />
              <div className="wkm-np-scan" />
              <div className="wkm-np-info">
                <span className="wkm-np-name">{t.title}</span>
                {t.award && <span className="wkm-np-award">{t.award}</span>}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Track info below the window */}
      <div className="wkm-info">
        {view === "play" ? (
          <>
            <div className="wkm-progress-row">
              <span className="wkm-trk-num">{String(idx + 1).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}</span>
              <div className="wkm-bar">
                <div className="wkm-bar-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <p className="wkm-desc">{t.desc}</p>
            <div className="wkm-chips">
              {t.tech.map((tag) => (
                <span key={tag} className="wkm-chip">{tag}</span>
              ))}
            </div>
            <a href={t.github} className="wkm-gh" target="_blank" rel="noopener noreferrer">
              github.com ↗
            </a>
          </>
        ) : (
          <p className="wkm-hint">
            Select a track and press <span className="wkm-hint-play">▶</span> to load
          </p>
        )}
      </div>

      {/* Transport controls */}
      <div className="wkm-transport">
        <button
          className={`wkm-btn${pressed === "prev" ? " wkm-pressed" : ""}`}
          onClick={() => tap("prev", prev)}
          aria-label="Previous"
          title="Previous (←)"
        >⏮</button>
        <button
          className={`wkm-btn${pressed === "stop" ? " wkm-pressed" : ""}`}
          onClick={() => tap("stop", stop)}
          aria-label="Menu"
          title="Back to menu (Esc)"
        >■</button>
        <button
          className={`wkm-btn wkm-btn-play${pressed === "play" ? " wkm-pressed" : ""}`}
          onClick={() => tap("play", play)}
          aria-label="Play"
          title="Play (Enter)"
        >▶</button>
        <button
          className={`wkm-btn${pressed === "next" ? " wkm-pressed" : ""}`}
          onClick={() => tap("next", next)}
          aria-label="Next"
          title="Next (→)"
        >⏭</button>
      </div>

      {/* Bottom bar */}
      <div className="wkm-bottom">
        <span className="wkm-wlogo">walkman</span>
      </div>
    </div>
  );
}
