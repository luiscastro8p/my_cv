export default function TerminalFrame({ title, children, className = '' }) {
  return (
    <div className={`terminal ${className}`.trim()}>
      <div className="terminal__bar">
        <span className="terminal__dots" aria-hidden="true">
          <span className="terminal__dot" />
          <span className="terminal__dot" />
          <span className="terminal__dot" />
        </span>
        <span className="terminal__title">{title}</span>
      </div>
      <div className="terminal__body">{children}</div>
    </div>
  );
}
