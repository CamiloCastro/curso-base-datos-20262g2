"use client";

import { useEffect, useState } from "react";

const items = [
  ["informacion", "Información"],
  ["evaluacion", "Evaluación"],
  ["proyecto", "Proyecto"],
  ["temario", "Temario"],
  ["bibliografia", "Bibliografía"],
  ["notas", "Notas"],
] as const;

export function SiteNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = items
      .map(([id]) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-84px 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Navegación principal">
      <ul>
        {items.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
