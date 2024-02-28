import React from "react";
import { PinContainer } from "@/ui/3d-pins";
import CountingNumber from "./CountingNumber";
import { WavyBackground } from "@/ui/wavy-background";
import untitled from '@/assets/untitled.png'
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <WavyBackground className="w-full pb-40">
      <div className="relative">
        <div className="absolute top-0 left-0"> {/* Div para a esquerda */}
          <CountingNumber finalNumber={2200} duration={10} />
        </div>
        <div className="absolute top-0 right-0"> {/* Div para a direita */}
          <PinContainer
          
            title="/ui.aceternity.com"
            href="https://twitter.com/mannupaaji"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[25rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Untitled Devs
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                 Landing Page Customizable Tailwind CSS, Framer Motion & Acertinity UI Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br items-center justify-center">  
                  <Image src={untitled} alt="untitled" width={250} height={20} className="rounded-2xl"/>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
      </WavyBackground>
    </div>
  );
}
