import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="logo">FlexRate Converter</h1>
        <ThemeToggle />
      </div>

      <p className="tagline">
        Convert currencies in real time with ease. Access live exchange rates
        and convert between hundreds of world currencies instantly.
      </p>
    </header>
  );
}

export default Header;
