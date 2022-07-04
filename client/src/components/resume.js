import resume from "./Resume.pdf"

function Resume () {
    return (
        <div id="resume">
           <iframe style={{width:"100vw", height: "300px"}}src={resume}></iframe>
        </div>

    )
}

export default Resume;