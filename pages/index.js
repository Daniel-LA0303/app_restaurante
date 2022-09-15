import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//components
import Login from '../components/Login'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Login /> 
    </div>
  )
}
