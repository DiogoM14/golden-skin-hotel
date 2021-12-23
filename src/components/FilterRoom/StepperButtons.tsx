import { Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack } from "@chakra-ui/react"

interface Props {
  title: string
  defaultValue: number
  min: number
}

export const StepperButtons = ({ title, defaultValue, min }: Props) => {
  return (
    <VStack>
      <Heading fontSize="md">{title}</Heading>
      <NumberInput size='sm' maxW={20} defaultValue={defaultValue} min={min}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </VStack>
  )
}