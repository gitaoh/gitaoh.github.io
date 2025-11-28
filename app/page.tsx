// "use client"

// import {useRef} from 'react';

// import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';
//
// gsap.registerPlugin(useGSAP);


export default function Home() {
    // const container = useRef(null);
    //
    // useGSAP(() => {
    //     gsap.to('.box', {rotation: 180});
    // }, {scope: container});
    return (
        <div className="flex min-h-screen items-center justify-center bg-white font-sans">
            <h1 className={"text-9xl font-extrabold text-cyan-900"}>
                HELLO WORLD
            </h1>
        </div>
    );
}
