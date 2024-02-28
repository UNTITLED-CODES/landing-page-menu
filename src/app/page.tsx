'use client'
import { MenuBar } from "@/components/Menubar";

import { AnimatedPinDemo } from "@/components/PinPreview";

import CountingNumber from "@/components/CountingNumber";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";

import { FloatingNavDemo } from "@/components/NavBarFlattin";

import { AnimatedTooltipPreview } from "@/components/iconstootltip";

import { SignupFormDemo } from "@/components/FormMail";
import { WavyBackground } from "@/ui/wavy-background";
import { Spotlight } from "@/ui/Spotilght";




export default function Home() {
  
  return (
    
    <main className="flex flex-col justify-center gap-8 lg:gap-16 min-h-screen">
    <FloatingNavDemo/>
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <MenuBar/>
      <Hero ref={undefined}/>    
      <AnimatedPinDemo/>
      <CountingNumber finalNumber={2200} duration={10} />
     
      <Plans/> 
      <AnimatedTooltipPreview/>
      <SignupFormDemo/>
      
    </main>
  );
}
