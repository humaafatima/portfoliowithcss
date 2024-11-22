import Navbar from "@/components/Navbar"
import Image from "next/image"
import twitter from "@/assets/twitter.png"
import linkedinicon from "@/assets/linkedinicon.svg"
import discord from "@/assets/discord.png"
import gmail from "@/assets/gmail.svg"
import github from "@/assets/github.svg"
import Style from "@/app/style/contact.module.css"

export default function Contact() {
    return (
        <div className={Style.container}>
            <Navbar />
            <br />
            <div className={Style.heading}>
                Connect with me:
            
                <hr className={Style.headinghr}/>
        
            </div>
            <div className={Style.section}>
                <h1 className={Style.title}>Follow me on Twitter</h1>
                <div className={Style.iconcontainer}>
                    <Image src={twitter} alt="twitterId" width="50" height="50" className={Style.icon} />
                </div>
                
                <h1 className={Style.title}>Follow me on Discord</h1>
                <div className={Style.iconcontainer}>
                    <Image src={discord} alt="discord Id" width="50" height="50" className={Style.icon} />
                </div>
                
                <h1 className={Style.title}>Connect with me on Linkedin</h1>
                <div className={Style.iconcontainer}>
                    <a href="https://www.linkedin.com/in/huma-fatima-363036323/" target="_blank">
                        <Image src={linkedinicon} alt="linkedin Id" width="50" height="50" className={Style.icon}/>
                    </a>
                </div>
                
                <h1 className={Style.title}>Email me at</h1>
                <div className={Style.iconcontainer}>
                    <a href="https://myaccount.google.com/?hl=en&authuser=1&utm_source=OGB&utm_medium=act&gar=WzEyMF0&sl=true" target="_blank">
                        <Image src={gmail} alt="gmail Id" width="50" height="50" className={Style.icon} />
                    </a>
                </div>
                
                <h1 className={Style.title}>Visit my repositories</h1>
                <div className={Style.iconcontainer}>
                    <a href="https://github.com/humaafatima" target="_blank">
                        <Image src={github} alt="github Id" width="50" height="50" className={Style.icon} />
                    </a>
                </div>
            </div>
        </div>
    );
}
