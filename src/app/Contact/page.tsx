import Link from "next/link"
import Navbar from "@/app/components/page"
import Image from "next/image"
import twitter from "@/app/assets/twitter.png"
import linkedinicon from "@/app/assets/linkedinicon.svg"
import discord from "@/app/assets/discord.png"
import gmail from "@/app/assets/gmail.svg"
import github from "@/app/assets/github.svg"
import Style from "@/app/style/contact.module.css"

export default function Contact() {
    return (
        <div className={Style.container}>
            <Navbar />
            <br />
            <div className={Style.heading}>
                Connect with me:
                <br />
                <br />
                <hr className={Style.headinghr}/>
                <br />
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
                    <a href="https://www.linkedin.com/in/huma-fatima-363036323/" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedinicon} alt="linkedin Id" width="50" height="50" className={Style.icon}/>
                    </a>
                </div>
                
                <h1 className={Style.title}>Email me at</h1>
                <div className={Style.iconcontainer}>
                    <a href="https://myaccount.google.com/?hl=en&authuser=1&utm_source=OGB&utm_medium=act&gar=WzEyMF0&sl=true" target="_blank" rel="noopener noreferrer">
                        <Image src={gmail} alt="gmail Id" width="50" height="50" className={Style.icon} />
                    </a>
                </div>
                
                <h1 className={Style.title}>Visit my repositories</h1>
                <div className={Style.iconcontainer}>
                    <a href="https://github.com/humaafatima" target="_blank" rel="noopener noreferrer">
                        <Image src={github} alt="github Id" width="50" height="50" className={Style.icon} />
                    </a>
                </div>
            </div>
        </div>
    );
}