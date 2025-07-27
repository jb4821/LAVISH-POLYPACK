'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Button, IconButton } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const play = () => autoplay.play(true);
    const stop = () => autoplay.stop();

    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  }, [emblaApi, isPlaying]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onSettle = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('settle', onSettle);
    onSettle();

    setIsPlaying(emblaApi.plugins().autoplay.isPlaying());
  }, [emblaApi]);

  return (
    <Box
      sx={{ position: 'relative', overflow: 'hidden', my: 4 }}
      ref={emblaRef}
    >
      <Box sx={{ display: 'flex' }}>
        {slides.map((src, index) => (
          <Box
            sx={{ position: 'relative', flex: '0 0 100%', height: '500px' }}
            key={index}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1rem',
        }}
      >
        {scrollSnaps.map((_, index) => (
          <IconButton key={index} onClick={() => scrollTo(index)} size='small'>
            <CircleIcon
              sx={{
                color:
                  index === selectedIndex ? '#f39c12' : 'common.white',
                fontSize: '12px',
                transition: 'color 0.2s',
              }}
            />
          </IconButton>
        ))}
      </Box>
      {/* <Button
        onClick={toggleAutoplay}
        sx={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
        startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </Button> */}
    </Box>
  );
};

const ImageSlider = () => {
  const slides = ['/image-1.jpg', '/image-2.png', '/image-3.png'];
  const options = { loop: true };

  return <EmblaCarousel slides={slides} options={options} />;
};

export default ImageSlider;
