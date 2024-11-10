"use client"
import Link from "next/link"
import Style from "@/app/style/navbar.module.css"
export default function Navbar() {
  return (
    <div>
      <nav className={Style.navbarcontainer}>
        <ul className={Style.navbarmenu}>
          <li>
            <Link href="/" className={Style.navbarlink}>Home</Link>
          </li>
          <li>
            <Link href="/Experience" className={Style.navbarlink}>Experience</Link>
          </li>
          <li>
            <Link href="/About" className={Style.navbarlink}>About</Link>
          </li>
          <li>
            <Link href="/Blog" className={Style.navbarlink}>Blog</Link>
          </li>
          <li>
            <Link href="/Contact" className={Style.navbarlink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
