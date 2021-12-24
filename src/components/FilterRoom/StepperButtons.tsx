import {
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
} from "@chakra-ui/react";

interface Props {
  handleStepperChange: Function;
  title: string;
  defaultValue: number;
  value: number;
  min: number;
}

export const StepperButtons = ({
  title,
  defaultValue,
  value,
  min,
  handleStepperChange,
}: Props) => {
  return (
    <VStack>
      <Heading fontSize='md'>{title}</Heading>
      <NumberInput
        size='sm'
        maxW={20}
        defaultValue={defaultValue}
        value={value}
        min={min}
        onChange={(e) => {
          handleStepperChange(e);
        }}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </VStack>
  );
};
