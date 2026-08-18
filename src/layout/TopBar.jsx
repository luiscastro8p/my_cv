import LangSwitch from './LangSwitch';
import ThemeToggle from './ThemeToggle';
import './TopBar.css';

export default function TopBar() {
  return (
    <header className="topbar">
      <LangSwitch />
      <ThemeToggle />
    </header>
  );
}
