import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { FormEvent } from 'react'
import { useState, useEffect } from 'react'
import { FormLabel, Textarea, Text } from '@chakra-ui/react'
import { Heading, Button, ButtonGroup, useColorMode, Box } from '@chakra-ui/react'


export default function Home() {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')
  const { colorMode, toggleColorMode } = useColorMode();
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["red.200", "green.200", "blue.200"];
  const ColorCycle = colors[colorIndex];
const [hue, setHue] = useState(200);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setHue(hue => (hue + 1) % 360);
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  
    const gradient = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${(hue + 120) % 360}, 100%, 50%), hsl(${(hue + 240) % 360}, 100%, 50%))`;
  


  const handleClick = () => {
    setIsLoading(true);
    setTimeout( () => {
      setText(value)
      setIsLoading(false);
    }, '1000' ) 
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex) => (colorIndex + 1) % colors.length);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);


  function handleInputChange(event) {
    setValue(event.target.value)
  }

  return (
    
    <>
      <Heading 
      size = '4xl'
      bg={gradient}
      backgroundClip="text"
      textFillColor="transparent"
      _hover={{ bg: gradient, textFillColor: "white" }}
      transition="background 0.3s ease-in-out, text-fill-color 0.3s ease-in-out"
      textAlign = 'center'>  
      Slang to Formal Translator 
      </Heading>
      <div>
      <FormLabel htmlFor="textarea" fontWeight = 'bold' fontSize ='30px' textAlign= 'left' marginLeft='7' mb ='0px'>
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
        marginLeft='7'
      />
      </div>


      <div>
      <Button 
      colorScheme='gray' 
      size='md'
      textAlign= 'left' 
      marginLeft='7'
      isLoading = {isLoading}
      onClick ={handleClick}
      loadingText='Translating'
      >{isLoading? 'Translating':'Translate'}</Button>
      </div>
      
          
      <FormLabel  htmlFor="textbox" fontWeight = 'bold' fontSize ='30px' marginLeft='7' mb = '0px'>
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
        marginLeft='7'
        isReadOnly
      />
          
    </>
  )
}

