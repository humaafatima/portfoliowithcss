import Link from "next/link"
import Navbar from "@/app/components/page"
import Style from "@/app/style/about.module.css"

export default function About() {
    return ( <div className={Style.fullscreenbackground}>
     
        <Navbar/>
        <h1 className={Style.heading}>
  A brief introduction about myself
</h1>
<p className={Style.paragraph}>
I am a student at Governor House, IT initiative (GIAIC). I have gained expertise 
    <br></br>
  in HTML, CSS, Javascript and Typescript languages. 
  <br></br>
 Currently, I am studying Nextjs and Tailwindcss and honing my skills as a web developer.
 <br></br>
 With my zeal, I am moving forward in my journey of software and web development. 
</p>
    </div>
    
    )
}