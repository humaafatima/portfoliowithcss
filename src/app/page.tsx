"use client"
import Image from "next/image"
import profilepic from "@/assets/profilepic.jpg"
import Navbar from "@/components/Navbar"
import Style from "@/app/style/home.module.css"
export default function Home() {
  return (
    <div className={Style.container}>
      <Navbar />
      <div className={Style.maincontent}>
        <div className={Style.leftsection}>
          <h1 className={Style.mainheading}>HELLO and WELCOME</h1>
          <p className={Style.description}>
            I am Huma Fatima, an English Teacher
            <br />
            by profession.
            <br />
            A freelance programmer and a web developer
            <br />
            by choice.
          </p>
        </div>
        <div className={Style.rightsection}>
          <Image
            src={profilepic}
            alt="profile"
            width="500"
            height="500"
            className={Style.profileimage}
          />
        </div>
      </div>
    </div>
  );
}
