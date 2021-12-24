import {
  Heading,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const RangeSliderComponent = (props: any) => {
  const [sliderValue, setSliderValue] = useState([0, 500]);

  useEffect(() => {
    if (props.value) {
      setSliderValue(props.value);
    }
  }, [props.value]);

  return (
    <>
      <Heading fontSize='md' mb='4'>
        Preço
      </Heading>
      <HStack spacing={4}>
        <Text>{sliderValue[0]}€</Text>
        <RangeSlider
          aria-label={["min", "max"]}
          min={0}
          max={500}
          step={10}
          colorScheme='yellow'
          value={sliderValue}
          defaultValue={[0, 500]}
          onChange={(e) => {
            props.handleChangeSliderValue(e);
          }}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text>{sliderValue[1]}€</Text>
      </HStack>
    </>
  );
};
