import { Heading, HStack, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react"
import { useState } from "react"

export const RangeSliderComponent = () => {
  const [sliderValue, setSliderValue] = useState([0, 500])

  function handleChangeSliderValue(e: any) {
    setSliderValue(e)
  }

  return (
    <>
      <Heading fontSize="md" mb="4">Preço</Heading>
      <HStack spacing={4}>
        <Text>{sliderValue[0]}€</Text>
        <RangeSlider
          aria-label={['min', 'max']}
          min={0} max={500} step={10}
          colorScheme="yellow"
          defaultValue={sliderValue}
          onChange={(e) => handleChangeSliderValue(e)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text>{sliderValue[1]}€</Text>
      </HStack>
    </>
  )
}