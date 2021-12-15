import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import { Input as ChakraInput, FormLabel, FormControl, FormErrorMessage, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  placeholder: string
  type: string
  error?: FieldError
}

const Finput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error = null, placeholder, type, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <ChakraInput 
        name={type} 
        type={type}
        placeholder={placeholder}
        height='3.5rem'
        bgColor='white'
        borderRadius='lg'
        p='4'
        variant='flushed'
        _focus={{
          borderColor: "#F2BB05",
        }}
        mb='4'
        ref={ref}
        {...rest}
      />

      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
  </FormControl>
  )
}

export const Input = forwardRef(Finput)



