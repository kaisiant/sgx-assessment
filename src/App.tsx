import { Box, HStack, VStack } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  FormInput,
  Button,
  FormTextArea,
  FormUploadDropZone,
} from 'components/common'

function App() {
  const formDefaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  }

  const formMethods = useForm<typeof formDefaultValues>({
    mode: 'onChange',
    defaultValues: formDefaultValues,
  })

  const handleSubmit = formMethods.handleSubmit((values) => {
    console.log({ values })
  })

  return (
    <Box my="8" mx="auto" maxW="md" p="4">
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <HStack spacing={4} w="full">
              <FormInput name="firstName" label="First Name" isRequired />
              <FormInput name="lastName" label="Last Name" isRequired />
            </HStack>
            <FormInput
              name="email"
              label="Email"
              isRequired
              rules={{
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'is not valid',
                },
              }}
            />
            <FormTextArea name="description" label="Description" />
            <FormUploadDropZone name="images" label="Images" />
            <Button type="submit">Submit</Button>
          </VStack>
        </form>
      </FormProvider>
    </Box>
  )
}

export default App
