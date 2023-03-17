import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { FormEvent } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <h1 style={{ color: 'aqua' }}>  Regional Slang Identifier </h1>
      <p>
        Input a sentence with slang and to see what region you are from.
      </p>
      <form action = "/api/form" method = "post">
        <label for ="sentence">Sentence</label>
        <input type = "text" name = "sentence" id = "sentence"/>
        <button type="submit">Submit</button>
      </form>   
    </>
  )
}