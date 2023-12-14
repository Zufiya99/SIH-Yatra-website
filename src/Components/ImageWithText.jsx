import React, { useEffect } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const ImageWithText = () => {
  useEffect(() => {
    const typed = new Typed('#welcome-line', {
      strings: ["Explore", "Dream", "Experience", "Discover"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    ScrollReveal({
      reset: true,
      distance: '100px',
      duration: 2500,
      delay: 100
    });

    ScrollReveal().reveal('.welcome', { origin: 'left' });
    ScrollReveal().reveal('.welcome-para', { origin: 'bottom' });
    ScrollReveal().reveal('.image', { origin: 'left' });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="image-container">
      <div className="text-overlay">
        <h1 className='welcome'>Embark on Your Next Adventure: <span id='welcome-line'></span></h1>
        <p className='welcome-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nesciunt reiciendis, modi voluptates ullam neque atque magni? Maxime quibusdam et a rerum tempora, autem tenetur ut cupiditate ad, libero quasi dolores. Aperiam sapiente porro ipsam, dolores tempora, recusandae aspernatur, voluptatem omnis doloribus illo expedita laudantium reprehenderit voluptates exercitationem aliquid neque dicta quo quae placeat iusto itaque odit aut architecto non. Inventore aliquam ipsa autem reprehenderit, quisquam commodi ut mollitia delectus praesentium animi aut eum labore est blanditiis voluptas maiores deleniti in incidunt officiis sunt provident. Itaque suscipit hic error debitis, quasi neque dolorum? Fuga obcaecati ratione expedita reprehenderit numquam dolorem?</p>
      </div>
      <img
        src="https://static6.depositphotos.com/1006568/627/i/450/depositphotos_6274141-stock-photo-travel-%E2%80%93-collection-of-the.jpg"
        alt="Image"
        className="image"
      />
    </div>
  );
};

export default ImageWithText;
