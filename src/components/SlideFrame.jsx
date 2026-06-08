import { accentText } from "../utils/accentText";

export default function SlideFrame({ kicker, title, subtitle, children, scrollable = false, variant }) {
  const shellClassName = variant ? `slide-shell slide-shell-${variant}` : "slide-shell";

  return (
    <div className={shellClassName}>
      <div className="slide-kicker">{accentText(kicker)}</div>
      <div className="slide-header">
        <h2 className="slide-title">{accentText(title)}</h2>
        {subtitle ? <p className="lead">{accentText(subtitle)}</p> : null}
      </div>
      <div className={`slide-body ${scrollable ? "slide-body-scrollable" : ""}`}>{children}</div>
    </div>
  );
}
