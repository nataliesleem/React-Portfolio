import resume from "../images/Resume.docx"
function Header() {
  return (
    <div>
      <header>
    <h1>Natalie Sleem</h1>
    <nav>
      <a href="#about">About Me</a>
      <a href="#work">Portfolio</a>
      <a href="#contact">Contact Me</a>
      <a href={resume} attributes-list download>Resume</a>
    </nav>
  </header>
    </div>
  );
}

export default Header;
