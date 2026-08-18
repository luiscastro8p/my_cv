export default function SectionHeading({ id, command, title, intro }) {
  return (
    <header className="section-heading">
      <p className="section-heading__prompt" aria-hidden="true">
        <span className="section-heading__sigil">$</span>
        <span>cat {command}.md</span>
        <span className="section-heading__cursor" />
      </p>
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      <div className="section-heading__rule" />
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </header>
  );
}
