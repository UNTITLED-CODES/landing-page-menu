import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import Desktop from '@/assets/Group 211.svg';
import Image from "next/image";


interface HeroProps {
  ref: React.RefObject<HTMLDivElement>;
}

export function Hero({ ref }: HeroProps) {
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Ajuste os valores conforme necessário para atender às suas necessidades
    const triggerPosition = 600;
    const opacity = Math.min(1, Math.max(0, (triggerPosition - scrollPosition) / triggerPosition));

    controls.start({ opacity: opacity });
  }, [scrollPosition, controls]);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <motion.section className="flex w-full flex-col justify-center items-start gap-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-16 relative w-full">
            <div className="flex justify-center items-center">
                <div className="w-60 md:w-80">
                    <Image src={Desktop} alt={'aparelhos'} width={400} height={400} />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <motion.div
                    className="text-xl text-center"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                >  
                    <div className="p-4 max-w-7xl w-full pt-20 md:pt-0">
                        <h1 className="text-purple-500 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-nowrap">
                            Conheça <br /> a inovação.
                        </h1>
                        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sint quam voluptas numquam voluptate distinctio perspiciatis non eveniet nam.
                        </p>
                    </div>
                </motion.div>
                <motion.a
                    href="#plans"
                    className="px-8 py-[12px] bg-purple-700 rounded-lg hover:bg-purple-400 m-auto text-center"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                >
                    Conheça os planos
                </motion.a>
            </div> 
        </div>
    </motion.section>
  )
}
