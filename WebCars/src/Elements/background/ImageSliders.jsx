import React, { useState, useEffect } from 'react';
import './ImageSliders.css';
import image1 from '../../assets/img-1.jpg';
import image2 from '../../assets/img-2.jpg';
import image3 from '../../assets/img-3.jpg';
import image4 from '../../assets/img-4.jpg';
// import shadow from '../../assets/gradient.png';



const images = [
    { src: image1, title: ' The Enchanted Forest', description: ' Dive into a world of magic and mystery in "The Enchanted Forest," where every tree has a story to tell.' },
    { src: image2, title: 'The Chronicles of Andaria', description: ' Journey through the epic tales of heroism and adventure in the mystical land of Andaria.' },
    { src: image3, title: 'Secrets of the Lost City', description: 'Uncover hidden secrets and ancient mysteries in this thrilling archaeological adventure.' },
    { src: image4, title: 'The Time Travelers Diary', description: 'Follow the captivating journey through time in this gripping tale of love and destiny.' }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const moveSlide = (step) => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex + step;
            if (newIndex >= images.length) return 0;
            if (newIndex < 0) return images.length - 1;
            return newIndex;
        });
    };

    return (
        <div className="slider">
                  
                <img src={images[currentIndex].src} alt={images[currentIndex].title} />
              
                    <h3>{images[currentIndex].title}</h3>
                    <p>{images[currentIndex].description}</p>
                

            
            <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
        </div>
    );
};

export default Slider;
