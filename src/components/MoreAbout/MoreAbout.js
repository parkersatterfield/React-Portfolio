import './MoreAbout.css';
import {motion, useAnimation} from 'framer-motion';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/image5.JPG';
import image6 from '../../images/image6.jpg';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function MoreAbout() {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
    }, [controls, inView]);

    const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.3
          }
        }
    }
        
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    }

    return (
        <motion.div
            ref={ref} 
            variants={container}
            className="container"
            initial="hidden"
            animate={controls}
            exit="exit"
            transition={transition}>
            <div className="flexContainer">
                <div className="galleryContainer">

                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>Fam in Seaside</h1>
                            <p>Here we are standing in front of the chapel that we were supposed to get married in before COVID shut us down the week of. We ended up getting married in our apartment in Alpharetta a few months later.</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image2} alt="Picture of Me" />
                    </div>

                    <div className="gallery" >
                        <div className="galleryOverlay">
                            <h1>Braves Game</h1>
                            <p>This was my first week living in Atlanta, so I immediately became a bandwagon Braves Fan. Fun fact: the man in the REI shirt is my co-founder at Dibs.</p>
                        </div>
                        <motion.img
                            variants={item}
                            src={image1} alt="Picture of Me" />
                    </div>

                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>Graduation</h1>
                            <p>Now that I am an official AU Alum, this is probably one of my favorite pictures. I miss living in Auburn and living the student life every now and then. War Eagle.</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image3} alt="Picture of Me" />
                    </div>
                    
                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>Harbour Island</h1>
                            <p>My family used to come to Harbour Island before there was anything on the island. Now, about 30 years later, the island has a few resorts, marinas, and restaurants. It is still one of the less-developed tourist islands in the Bahamas.</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image4} alt="Picture of Me" />
                    </div>

                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>Napa Wedding</h1>
                            <p>Here is wife and I at my buddy's wedding in Napa. This was a really fun trip. Congrats Matt and Suze!</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image5} alt="Picture of Me" />
                    </div>

                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>War Eagle</h1>
                            <p>The halftime show at one of the 2021 football games. This was my first time not sitting in the student section, but we still managed to have a great time.</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image6} alt="Picture of Me" />
                    </div>

                </div>
            </div>
          
        </motion.div>
    )
}

export default MoreAbout;
