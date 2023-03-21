import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { FormEvent } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    
    <html>
      <body>
          
          <h1 style={{ color: 'azure' }}>  Slang to Formal Translator </h1>

          <form action = '/api/form' method = 'post'> 
            <label style={{display: 'block'}} for='sentence'>Enter Sentence:</label>
            <input type='text' id ='sentence' name = 'sentence'></input>
            <button type = 'submit'>Submit</button>
          </form>
          
          <label style={{display: 'block'}} for="textbox">
            Output:
          </label>
          
          <textarea id="textbox" name="textbox" rows="4" cols="50">
            
          </textarea>

        </body>
    </html>
  )
}