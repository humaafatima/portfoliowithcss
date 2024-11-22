"use client"
import Image from "next/image"
import callcenter from "@/assets/callcenter.jpg"
import vegetation from "@/assets/vegetation.jpg"
import Navbar from "@/components/Navbar"
import Style from "@/app/style/blog.module.css"

export default function blog() {
    return (
        <div className={Style.container}>
            <Navbar />
            <br />
            <h1 className={Style.heading}>Blogs</h1>
            <br />
            <p className={Style.description}>
                I have written articles and blogs for different newspapers and magazines. Here are some links to my blogs:
            </p>
            <br />
            <div className={Style.linkscontainer}>
                <div className={Style.item}>
                    <a href="http://tribune.com.pk/story/14739/the-call-centre-culture/" target="_blank">
                        <Image src={callcenter} alt="Call Center Culture" width="500" height="500" className={Style.imageborder} />
                        Call Center Culture
                    </a>
                </div>
                <div className={Style.item}>
                    <a href="http://tribune.com.pk/story/25331/add-some-iron-to-your-diet/" target="_blank">
                        <Image src={vegetation} alt="Vegetation from Sewerage Water" width="500" height="500" className={Style.imageborder} />
                        Vegetation from Sewerage Water
                    </a>
                </div>
            </div>
        </div>
    );
}
