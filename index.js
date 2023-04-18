import Head from 'next/head'
import Image from 'next/image'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { FormEvent } from 'react'
import {FaSun, FaMoon, FaGithub} from 'react-icons/fa'
import{GiCancel} from 'react-icons/gi'
import { useState, useEffect } from 'react'
import { FormLabel, Textarea, Text, FormControl, IconButton, Spacer, ChakraProvider } from '@chakra-ui/react'
import { Heading, Button, ButtonGroup, useColorMode, Box ,Flex, VStack } from '@chakra-ui/react'


export default function Home() {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');


  const handleClick = () => {
    setIsLoading(true);
    setTimeout( () => {
      setText(value)
      setIsLoading(false);
    }, '1000' ) 
  };

  const handleGit = () => {
    window.open('https://github.com/Slang-Formal')
  }



  function handleInputChange(event) {
    setValue(event.target.value)
  }

  const{colorMode, toggleColorMode} = useColorMode()
  const isDark = colorMode == 'dark'

  return (
    
    <>
      <VStack p={6} aligntext='center'>
        <Box w='100%' alignItems='center'>
          <Flex w='100%' alignItems='center' justifyContent='center'>
          <Heading 
          size = '4xl'
          stlye={{fontFamily: 'heading'}}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          ml={260}
          lineHeight={1.3}
          textAlign = 'center'>  
          Slang to Formal Translator 
          </Heading>
          <Spacer></Spacer>
          <IconButton ml={2} icon={<FaGithub/>} onClick={handleGit}></IconButton>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
          </Flex>
        </Box>

      </VStack>
     
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
                  borderColor='blue.500'
                  borderWidth='1.5px'
                  style={{ fontSize: '20px' }} 
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
              borderColor='blue.500'
              borderWidth='1.5px'
              style={{ fontSize: '20px' }} 
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
        <Flex alignItems='center' mt={8}>
          <Text fontWeight='semibold' fontSize ='23px' mr={2}>
            Predicted Region:      
          </Text>
          <Text fontSize ='23px'>{value}</Text>
        </Flex>
      </Box>  
      <Box ml={70}>
        <Flex alignItems='center' mt={8}>
          <Text fontWeight='semibold' fontSize ='23px' mr={2}>
            Predicted Age:      
          </Text>
          <Text fontSize ='23px'>{value}</Text>
        </Flex>
      </Box>  
      <Box ml={70}>
        <Flex alignItems='center' mt={8}>
          <Text fontWeight='semibold' fontSize ='23px' mr={2}>
            Percentage of Slang:      
          </Text>
          <Text fontSize ='23px'>{value}</Text>
        </Flex>
      </Box>  

    </>
  )
}

