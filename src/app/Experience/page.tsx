
import Navbar from "@/components/Navbar"
import Style from "@/app/style/experience.module.css"

export default function Experience() {
        return (
            <div className={Style.container}>
                <Navbar/>
                <div className={Style.flex}>
                    <div className={Style.column}>
                        <h1 className={Style.heading}>Professional Experience:</h1>
                        <ol className={Style.list}>
                            <li>July 26th, 2024 till date <br /> Teaching English in BTKes School</li>
                            <li>Feb 1, 2021 till 15th June, 2024 <br /> Teaching English to Class 4 and 5 in Roots Millennium School</li>
                            <li>Jan 1, 2020 to Jan 28th, 2021 <br /> Taught English, Social Studies to class 6 in PECHS Girls School</li>
                            <li>Nov 25, 2013 to October 2019 <br /> Worked as Copy Editor/Producer at International desk in Dawn news channel</li>
                            <li>Aug 10, 2012 to 12 Nov, 2013 <br /> Worked as Sub editor at Express news website (www.express.pk)</li>
                            <li>Feb 22, 2010 till April 30, 2011 <br /> Worked as Translator in The Express Tribune newspaper</li>
                            <li>June 2008 to Feb 2010 <br /> Worked as Sub-editor at The Financial Daily newspaper</li>
                        </ol>
                    </div>
                    
                    <div className={Style.column}>
                        <h1 className={Style.heading}>Qualification:</h1>
                        <ol className={Style.list}>
                            <li>MBA in Media Management from CBM University in 2009</li>
                            <li>B-Com from Karachi University in 2006</li>
                            <li>Done MFTL course from Roots Millennium School</li>
                        </ol>
                    </div>
                    
                    <div className={Style.column}>
                        <h1 className={Style.heading}>Achievements:</h1>
                        <ol className={Style.list}>
                            <li>Received Best Teacher award from Roots Millennium School</li>
                            <li>Passed GIAIC Quarter 1-Typescript with 83 percentile, A grade</li>
                            <li>Received Microsoft Innovative Education Expert award from Microsoft</li>
                            <li>Scored 490 CEFR B2 Upper Intermediate level in British Council English Test</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
