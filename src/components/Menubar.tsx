'use client'

import Image from "next/image";

import {MenuIcon, X} from 'lucide-react'
import logo from '@/assets/logo.png'
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "@/context/menucontext";


export function MenuBar () {
  
  const {open, turn} = useContext(MenuContext)

  useEffect(() => {
 
  }, [open])
  return (
    <>
    <div className="hidden md:flex w-full flex-row items-center justify-between">
   
      <a href="/">
        <Image alt="Logo da Untitled Devs" src={logo} className="w-[343px] h-[60px] block" />
      </a>
      <nav className="flex flex-row items-center justify-between gap-4">

        <a href="#creators" className="hover:text-purple-500"><span>QUEM SOMOS</span></a>
        <span className="pointer-events-none">|</span>
        <a href="#plans" className="hover:text-purple-500"><span>PLANOS</span></a>
        <span className="pointer-events-none">|</span>
        <a href="#contact" className="hover:text-purple-500"><span>CONTATO</span></a>
      </nav>
    </div>
    <div className="flex md:hidden justify-between items-center top-0 ">
      <a href="/">
        <Image className="w-[221px] h-8 block lg:hidden" priority={true} alt="Logo da Untitled Devs" src={logo} />
      </a>
      <button onClick={()=> {turn()}}><MenuIcon size={32}/></button>
    </div>

    <div className={open?'absolute top-0 left-0 w-full h-full bg-[rgba(14,14,14,0.6)] flex':'hidden'} >
      <nav className="flex flex-col items-center justify-center text-3xl gap-16 w-full p-16 h-max bg-zinc-800 mt-4">
        <button onClick={()=> {turn()}} className="hover:text-gray-300"><X size={32}/></button>
         <a href="#about" onClick={()=> {turn()}} className="hover:text-purple-500 focus:outline-none"><span>SOBRE NÓS</span></a>
        <a href="#services" onClick={()=> {turn()}} className="hover:text-purple-500 focus:outline-none"><span>SERVIÇOS</span></a>
        <a href="/contact" onClick={()=> {turn()}} className="hover:text-purple-500 focus:outline-none"><span>CONTATO</span></a>
      </nav>
    </div>
    </>
  )
}