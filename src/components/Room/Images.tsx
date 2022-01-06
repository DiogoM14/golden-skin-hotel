import { Box, Grid, GridItem, IconButton, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Images = ({ images }: any) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const [slider, setSlider] = useState<Slider | null>(null);

  return (
    <>
        { 
          isWideVersion ? (
            <Grid
              h='446px'
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(4, 1fr)'
              gap={3}
              my='4'
              borderRadius='16px'
            >
              <GridItem rowSpan={2} colSpan={2}>
                <Image
                  borderTopLeftRadius='lg'
                  borderBottomLeftRadius='lg'
                  w='100%'
                  h='100%'
                  src={images[0]}
                  objectFit='cover'
                />
              </GridItem>

              <Image w='100%' h='100%' src={images[1]} objectFit='cover' />

              <Image
                borderTopRightRadius='lg'
                w='100%'
                h='100%'
                src={images[2]}
                objectFit='cover'
              />

              <Image w='100%' h='100%' src={images[3]} objectFit='cover' />

              <Image
                borderBottomRightRadius='lg'
                w='100%'
                h='100%'
                src={images[4]}
                objectFit='cover'
              />
            </Grid>
          ) : (
            <Box
              mt="4"
              position={'relative'}
              height={'300px'}
              width={'full'}
              overflow={'hidden'}
            >
              {/* CSS files for react-slick */}
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {images.map((image: any) => (
                  <Box
                    key={image}
                    height="300px"
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${image})`}
                    objectFit="cover"
                  />
                ))}
              </Slider>
            </Box>
          )
        }
    </>
  );
};

export default Images;
