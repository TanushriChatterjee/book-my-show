import React from 'react';
import Slider from "react-slick";

//component
import Poster from '../Poster/poster.component';

//configs
import PosterCarouselSettings from '../../config/PosterCarousel.config';
import PremierImages from '../../config/TempPosters.config';

 const Premiere = () => {

      return (
        <>
        <div className="flex flex-col items-start">
          <h3 className="text-white text-xl font-bold">Premiers</h3>
          <p className="text-white text-sm" >Brand new release every friday</p>
        </div>
          <Slider {...PosterCarouselSettings}>
              {PremierImages.map((image)=>(<Poster {...image} />))}
          </Slider>  
        </>
    );
};

export default Premiere;