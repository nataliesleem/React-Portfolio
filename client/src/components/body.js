
function Body() {
    return (
    <div>
       <section class="hero-banner">
    <div>
      <h2>Web Developer Student</h2>
    </div>
  </section>

  <main class="page-wrapper">
    <section class="page-section" id="about">
      <h2>About Me</h2>
      <section>
        <p>
          Hello! My name is Natalie and currently I am a Full Stack Engineer student at UCB Bootcamp. I currently live in the bay area, but received my Bachelor's degree in Business Finance at Cal State Long Beach. I have always had an interest in tech and am excited to be stepping into the field and showcasing my work! </p>
          <p>My hobbies include:
          <ul>
            <li>Traveling</li>
            <li>Fishing</li>
            <li>Going to the beach</li>
            <li>Watching TV</li>
          </ul>
          </p>
      </section>
    </section>
    <section class="page-section" id="work">
      <h2>Portfolio</h2>
      <section class="flex-container">

        <a href="#" class="flex-item surf-report">
          <section>
            <h3>Placeholder</h3>
            <span>MERN Stack</span>
          </section>
        </a>
        
        <a href="#" class="flex-item led-wall">
          <section>
            <h3>Movie Search Project</h3>
            <span>JQuery/Javascript/Bootstrap</span>
          </section>
        </a>
        <a href="https://github.com/ravnishgupta/tech-upwork" target="_blank" class="flex-item react-calc">
          <section>
            <h3>Tech Up Work Project</h3>
            <span>Node/Express/MySQL2/Express-Handlers</span>
          </section>
        </a>

        <a href="#" class="flex-item pastel-puzzles">
          <section>
            <h3>Placeholder</h3>
            <span>MERN Stack</span>
          </section>
        </a>

    
        <a href="#" class="flex-item run-buddy" target="_blank">
          <section>
            <h3>Run Buddy</h3>
            <span>HTML/CSS</span>
          </section>
        </a>

      </section>
    </section>
    </main>
      </div>

    );
  }
  
  export default Body;