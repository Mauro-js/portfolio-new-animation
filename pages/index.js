import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Button from "../components/ui/Button";
import ChangingContentAnimation from '../components/changingContenAnimation';
import Works from '../components/Works';
import Projects from '../components/Projects';
import MeSection from '../components/MeSection';
import timeCalculator from '../components/timeCalculator';

const Me = ({ backdrop }) => {
    const [years, setYears] = useState(0);
    let classMe = "pt-20 z-40 place-items-center text-center scale-up-top backdrop-blur-sm rounded-lg";
    classMe += backdrop ? " minibackdrop" : "";

    useEffect(() => {
        setYears(timeCalculator().years);
    }, [])

    return (
        <div className={classMe} >
            <ChangingContentAnimation />
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-sans rotate-horizontal-center ">
                Full Stack Developer {years !== 0 && "+" + years + " years"}
            </p>
        </div>
    );
};

export default function IndexPage() {
    const [smallScreen, setSmallScreen] = useState(false);
    const [width, setWidth] = useState(900);
    const [less, setLess] = useState(900);
    const [extraCssText, setExtraCssText] = useState("");
    const [extraCssImage, setExtraCssImage] = useState("");

    const classNameText = 'z-10';
    const classNameImage = "text-center blur-in";

    useEffect(() => {
        const hash = window.location.hash; // Obtén la parte después de '#'
        const idHash = hash.substring(1);

        const handleResize = () => {
            const isSmallScreen = window.innerHeight < 780;

            setSmallScreen(isSmallScreen);
            setWidth(window.innerWidth);

            if (window.innerWidth > window.innerHeight) {

                setLess(isSmallScreen ? window.innerHeight : window.innerHeight - 90);
            } else {
                setLess(isSmallScreen ? window.innerWidth : window.innerWidth - 90);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();


        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const changeToWork = () =>{
        setExtraCssText(" move-text-left");
        setExtraCssImage(" move-to-left ");
    }

    const changeToProject = () => {
        setExtraCssText(" move-text-right");
        setExtraCssImage(" move-to-right");
    }

    const changeToMe = () => {
        setExtraCssText(" move-text-medium");
        setExtraCssImage(" move-to-medium");
    }

    const returnHome = () => {
        if(extraCssText === " move-text-left") {
            setExtraCssText(" home-left-text");
            setExtraCssImage(" home-left-image");
        } else if(extraCssText === " move-text-right"){
            setExtraCssText(" home-right-text");
            setExtraCssImage(" home-right-image");
        } else if (extraCssImage === " move-to-medium"){
            setExtraCssText(" home-medium-text");
            setExtraCssImage(" home-medium-image");
        }
    }

    return (
        <>
            <div className="h-full overflow-hidden">
                {extraCssText != "" || extraCssText.includes("home") ? <Button changeFunction={returnHome} text={"Home"} /> : null}
                <section className="grid gap-2 mx-auto place-items-center">
                    <div className={smallScreen ? classNameText : classNameText + extraCssText}>
                        <Me backdrop={smallScreen} />
                        <div className='flex pt-10'>
                        <Button changeFunction={ changeToProject } text={"Project"} />
                        <Button changeFunction={ changeToMe } text={"Me"} />
                        <Button changeFunction={ changeToWork }  text={"Experience"} />
                        </div>
                    </div>
                    <div className={smallScreen ? classNameImage : classNameImage + extraCssImage + " pt-10 relative"} >
                        <Image
                            className='absolute opacity-10 rounded-lg z-9'
                            src="/ventana4.gif"
                            width={less}
                            height={less}
                            alt="Picture of the author"
                        />
                        <Image
                            src="/watch1.gif"
                            width={less}
                            height={less}
                            alt="Picture of the author"
                        />
                    </div>
                    <Works show={extraCssText === " move-text-left"}/>
                    <Projects show={extraCssText === " move-text-right"} />
                    <MeSection show={extraCssImage === " move-to-medium"} />
                </section>
            </div>
        </>
    );
}
