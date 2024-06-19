'use client'
import Image from "next/image";
import Link from "next/link";
import { ImageSlider } from "@/components/ImageSlider";
import classes from './page.module.css'
export default function Home() {
  return (
  <div className={classes['home-inner-container']}>

    <div id={classes['photo-slider']}>
    <ImageSlider/>

    </div>
    <div id={classes['slogan']}>
<span>Explore India</span>
<h3>Explore Fauna And Flaura of India</h3>
    </div>

  </div>
  );
}
