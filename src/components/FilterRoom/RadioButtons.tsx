import { Heading, Radio, Stack } from "@chakra-ui/react"

interface Props {
  title: string
  radioName: string[]
}

export const RadioButtons = ({ title, radioName }: Props) => {
  return (
    <Stack>
      <Heading fontSize="md">{title}</Heading>
      <Radio value='1'>{radioName[0]}</Radio>
      <Radio value='2'>{radioName[1]}</Radio>
    </Stack>
  )
}