import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { FormEvent } from 'react'
import { useState, useEffect } from 'react'
import { FormLabel, Textarea, Text, FormControl } from '@chakra-ui/react'
import { Heading, Button, ButtonGroup, useColorMode, Box ,Flex } from '@chakra-ui/react'


export default function Home() {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')


  const handleClick = () => {
    setIsLoading(true);
    setTimeout( () => {
      setText(value)
      setIsLoading(false);
    }, '1000' ) 
  };



  function handleInputChange(event) {
    setValue(event.target.value)
  }

  return (
    
    <>
      <Box marginY="20px">
        <Heading 
        size = '4xl'
        textAlign = 'center'>  
        Slang to Formal Translator 
        </Heading>
      </Box>
     
      <Box position='relative' align='center'>
          <Flex justify="center">
            <FormControl mr={8}>
              <FormLabel htmlFor="textarea" fontWeight = 'bold' fontSize ='30px' align='center' mb ='0px' width='80%'>
                Input:
              </FormLabel>
              <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder='Enter a sentence here'
                size='sm'
                id='textarea'
                name='textarea'
                padding="10px"
                margin="10px"
                width="80%"
                height="200px"
                align="center"
              />
            </FormControl>
            
          <FormControl ml={8}>
            <FormLabel  htmlFor="textbox" fontWeight = 'bold' fontSize ='30px' mb = '0px' width='80%'>
              Output:
            </FormLabel>
            <Textarea
              value ={text}
              size='sm'
              id='textbox'
              name='textbox'
              padding="10px"
              margin="10px"
              width="80%"
              height="200px"
              isReadOnly
            />
          </FormControl>   
          
          </Flex> 
          <Flex mt={8}>
            <Button 
            colorScheme='gray' 
            size='md'
            textAlign= 'left' 
            isLoading = {isLoading}
            onClick ={handleClick}
            loadingText='Translating'
            ml={70}
            >{isLoading? 'Translating':'Translate'}</Button>
          </Flex>
      </Box>

      <Box ml={70}>
        <Flex alignItems='cetner' mt={8}>
          <Text fontWeight='bold' fontSize ='20px'>
            Predicted Region:      
          </Text>
          <Text fontSize ='20px'>{value}</Text>
        </Flex>
      </Box>  

    </>
  )
}

