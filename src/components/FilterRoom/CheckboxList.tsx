import { Checkbox, CheckboxGroup, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const CheckboxList = (props: any) => {
  const [checked, setChecked] = useState([] as any);

  useEffect(() => {
    if (props.values) {
      let { amenities } = props.values;
      if (amenities.includes(",")) {
        setChecked(amenities.split(","));
      } else {
        setChecked([amenities]);
      }
    }
  }, [props.values]);

  return (
    <>
      <Heading fontSize='md' mb='4'>
        Comodidades
      </Heading>
      <CheckboxGroup
        colorScheme='yellow'
        value={checked}
        onChange={(e) => props.handleAmntChange(e)}>
        <Stack direction='column'>
          <Checkbox value='wifi'>Wi-fi</Checkbox>
          <Checkbox value='tv'>Televisão</Checkbox>
          <Checkbox value='crib'>Berço</Checkbox>
          <Checkbox value='airConditioning'>Ar condicionado</Checkbox>
          <Checkbox value='iron'>Ferro de engomar</Checkbox>
          <Checkbox value='smokeAlarm'>Alarme de fumo</Checkbox>
        </Stack>
      </CheckboxGroup>
    </>
  );
};
