
import React from 'react';
import { Box } from '@mui/material';

// import Swiper core and required modules
import { Navigation } from 'swiper';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import ExerciseCard from './ExerciseCard';
import Bodypart from './Bodypart'
import ExerciseCard from './ExerciseCard'





const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => (
  <Swiper
    modules={[Navigation]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    breakpoints={{
      // when window width is >= 640px
      640: {
        width: 640,
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 3,
      },
      992: {
        width: 992,
        slidesPerView: 4,
      },
    }}>

    {data?.map((item) => (
      <SwiperSlide>
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ?
            <Bodypart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> :
            <ExerciseCard exercise={item} />
          }
        </Box>
      </SwiperSlide>
        ))
    }

  </Swiper>
);

export default HorizontalScrollbar;