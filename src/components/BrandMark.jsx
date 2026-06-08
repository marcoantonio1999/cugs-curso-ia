import { siAnthropic, siGoogle, siOpenai } from "simple-icons";

export default function BrandMark({ provider }) {
  const marks = {
    OpenAI: { title: "OpenAI", hex: siOpenai.hex, path: siOpenai.path },
    Google: { title: "Google", hex: siGoogle.hex, path: siGoogle.path },
    Anthropic: { title: "Anthropic", hex: siAnthropic.hex, path: siAnthropic.path },
  };

  if (marks[provider]) {
    const icon = marks[provider];
    return (
      <span className="brand-mark" title={icon.title}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={icon.path} fill={`#${icon.hex}`} />
        </svg>
      </span>
    );
  }

  const fallback = {
    DeepSeek: { glyph: "DS", className: "deepseek" },
    Kimi: { glyph: "K", className: "kimi" },
    GLM: { glyph: "Z", className: "glm" },
  }[provider];

  return (
    <span className={`brand-mark brand-fallback ${fallback.className}`} title={provider}>
      {fallback.glyph}
    </span>
  );
}
