import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { FormEvent } from 'react'
import { useState } from 'react'
import { FormLabel, Textarea, Text } from '@chakra-ui/react'
import { Heading, Button, ButtonGroup } from '@chakra-ui/react'


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
      <Heading style={{ color: 'black' }} size = '4xl' textAlign = 'center'>  Slang to Formal Translator </Heading>

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
      <Button 
      colorScheme='gray' 
      size='md'
      textAlign= 'left' 
      marginLeft='7'
      isLoading = {isLoading}
      onClick ={handleClick}
      loadingText='Translating'
      >{isLoading? 'Translating':'Translate'}</Button>
          
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

