import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Hero from '../components/Hero'
import Advantage from '../components/Advantage';
import Sales from '../components/Sales';
import Rating from '../components/Rating';
import Services from '../components/Services';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <>
    {/* <Hero/> */}
    <Advantage/>
    <Sales/>
    <Rating/>
    <Services/>
    <Slider/>
    </>
  )
}
