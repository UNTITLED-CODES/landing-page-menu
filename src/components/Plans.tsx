"use client"
import { BackgroundGradient } from "@/ui/gradient";
import { Check, CheckCircle } from "lucide-react";
import React from "react";

export function Plans() {
  return (
<div className="flex flex-col justify-center items-center gap-4 self-stretch mb-4">

      <div>
          <h3 className="text-white font-thin text-2xl" id="plans">Planos</h3>        
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="w-full items-center gap-2">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-blue-900">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Untitled Menu
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2 items-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              </p>

              <p className="mt-2 flex text-sm text-neutral-600 dark:text-neutral-400 gap-2 items-center">
                <CheckCircle width={15} className="text-purple-600"/> 
                funcionalidade 1
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 2
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 3
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 4
              </p>
              <button className="justify-center rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-purple-700 mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
          <div className="w-full items-center gap-2">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-blue-900">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Untitled Menu Plus
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2 items-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              </p>

              <p className="mt-2 flex text-sm text-neutral-600 dark:text-neutral-400 gap-2 items-center">
                <CheckCircle width={15} className="text-purple-600"/> 
                funcionalidade 1
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 2
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 3
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 4
              </p>
              <button className="justify-center rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-purple-700 mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $200
                </span>
              </button>
            </BackgroundGradient>
          </div>
          <div className="w-full items-center gap-2">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-blue-900">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Untitled Menu Premium
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2 items-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              </p>

              <p className="mt-2 flex text-sm text-neutral-600 dark:text-neutral-400 gap-2 items-center">
                <CheckCircle width={15} className="text-purple-600"/> 
                funcionalidade 1
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 2
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 3
              </p>
              <p className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-2">
                <CheckCircle width={15} className="text-purple-600"/> funcionalidade 4
              </p>
              <button className="justify-center rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-purple-700 mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $300
                </span>
              </button>
            </BackgroundGradient>
          </div>
      </div>
    </div>
  );
}
