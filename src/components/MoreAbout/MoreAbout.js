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
                            <p>2020</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image2} alt="Picture of Me" />
                    </div>

                    <div className="gallery" >
                        <div className="galleryOverlay">
                            <h1>Braves Game</h1>
                            <p>2020</p>
                        </div>
                        <motion.img
                            variants={item}
                            src={image1} alt="Picture of Me" />
                    </div>

                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>Graduation</h1>
                            <p>2019</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image3} alt="Picture of Me" />
                    </div>
                    
                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>Harbour Island</h1>
                            <p>2021</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image4} alt="Picture of Me" />
                    </div>

                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>Napa Wedding</h1>
                            <p>2021</p>
                        </div>
                        <motion.img 
                            variants={item}
                            src={image5} alt="Picture of Me" />
                    </div>

                    <div className="gallery">
                        <div className="galleryOverlay">
                            <h1>War Eagle</h1>
                            <p>2021</p>
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
