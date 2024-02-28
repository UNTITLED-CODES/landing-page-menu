"use client";
import React from "react";
import { AnimatedTooltip } from "@/ui/tooltip";
import Image from "next/image";

import people1 from '@/assets/foto1.png'
import people2 from '@/assets/foto2.png'
import people3 from '@/assets/foto3.png'
import people4 from '@/assets/foto4.png'
const people = [
  {
    id: 1,
    name: "Vitor Sotto",
    designation: "CEO",
    image:
      people2,
  },
  {
    id: 2,
    name: "Igor Moraes",
    designation: "CTO",
    image:
      people3,
  },
  {
    id: 3,
    name: "Rafael Silva",
    designation: "COO",
    image:
    people4,
  },
  {
    id: 4,
    name: "Otavio Baroni",
    designation: "CMO & COO",
    image:
      people1,
  },

];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-col items-center  mb-10 w-full p-2">
        <h3 className="text-white font-thin text-2xl mb-2" id="creators">Creators</h3>
          <div className="flex flex-r text-purple-600">
            <AnimatedTooltip items={people}/>
          </div>
    </div>
  );
}
