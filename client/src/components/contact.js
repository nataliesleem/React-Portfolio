import Contactform from "./Contact/index";
import "./Contact/index.css"

function Contact () {
    return (
      <div id="contact">
      <section class="page-section contact" id="contact">
      <h2>Contact Me</h2>
      <section>
        <address>
          <a href="tel:+19253008672">925.300.8672</a>
          <a href="mailto:natalie.sleem@yahoo.com">natalie.sleem@yahoo.com</a>
          <a href="https://github.com/nataliesleem">GitHub</a>
          <a href="https://www.linkedin.com/in/natalie-sleem/" target="_blank">LinkedIn</a>
        <Contactform></Contactform>
        </address>
        
      </section>
      
    </section>
</div>

    )
}

export default Contact;