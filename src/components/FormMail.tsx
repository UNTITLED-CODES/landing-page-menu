"use client";
import React, { useContext, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandOnlyfans,
} from "@tabler/icons-react";


import emailjs from '@emailjs/browser';
import { ModalContext } from "@/context/ModalContext";
import InputMask from "react-input-mask";

import { useRouter } from "next/navigation";
import Link from "next/link";
export function SignupFormDemo() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { turn } = useContext(ModalContext);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const templateParams = {
      message:  `Oi sou ${name} ${lastname} , Quero saber das novidades da Untitled!
      Meu Numero: ${phone} / Meu Email: ${email}`,
      from_name: name,
      last_name: lastname,
      phone: phone,
      email: email
    };

    emailjs.send('service_1wl6ij4', 'template_hxsv93o', templateParams, '-s-najHsddLOzTlC3')
    .then((response) => {
      console.log(response.status, response.text);
     // turn();
      router.push('#modal-sucess');
      setName('');
      setLastName('');
      setEmail('');
      setPhone('');
    }, (err) => {
      console.error(err);
    });
  };

  return (
    <div className="w-full mx-auto rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 id="contact" className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Newsletter
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Stay up to date with untitled news, record your visit here!
      </p>
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer className="w-full md:w-1/2 gap-1">
          <Label htmlFor="firstname">First name</Label>
          <Input  
            name="firstname"
            id="firstname"
            placeholder="Seu Nome Completo"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text" />
        </LabelInputContainer>

        <LabelInputContainer className="w-full md:w-1/2">
          <Label htmlFor="lastname">Last name</Label>
          <Input  
            name="lastname"
            id="lastname"
            placeholder="Seu Sobrenome Completo"
            required
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
            type="text" />
        </LabelInputContainer>
      </div>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="example@example.com" 
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email" />
      </LabelInputContainer>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          placeholder="Phone number"
          required
          maxLength={15}
          onChange={(e) => {
            const phoneValue = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            const maxLength = 11; // Defina o limite máximo de dígitos
            if (phoneValue.length <= maxLength) {
              if (phoneValue.length <= 10) {
                // Máscara para números de telefone com 10 dígitos
                e.target.value = phoneValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
              } else {
                // Máscara para números de telefone com 11 dígitos (com DDD)
                e.target.value = phoneValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
              }
            }
            setPhone(e.target.value);
          }}
          value={phone}
          type="tel"
        />
      </LabelInputContainer>;
      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-purple-600 block dark:bg--800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--purple-800)_inset,0px_-1px_0px_0px_var(--purple-800)_inset]"
        type="submit"
      >
        Subscribe For News &rarr;
        <BottomGradient />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
        <button
          className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full md:w-auto text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <IconBrandGithub className="h-4 w-full text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm w-full">
          <Link className='w-full' href='https://github.com/orgs/UNTITLED-CODES/repositories'> GitHub</Link>
          </span>
          <BottomGradient/>
        
        </button>
        <button
          className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full md:w-auto text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <IconBrandInstagram className="h-4 w-full text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm w-full">
          <Link className='w-full' href='https://www.instagram.com/untitledevs/'> Instagram</Link>
          </span>
          <BottomGradient/>
        
        </button>

        <button
          className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full md:w-auto text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="submit"
        >
          <IconBrandLinkedin className="h-4 w-full text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm w-full">
          <Link className='w-full' href='https://www.linkedin.com/company/untitled-devs/'> Linkedin</Link>
          </span>
          <BottomGradient/>
        </button>
        {/* Adicione mais botões aqui */}
      </div>
    </form>
    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="flex flex-col justify-center items-center">
        <span className="text-gray-800/80 text-center text-base">Todos os direitos reservados © 2024 - UntitledDevs</span>
      </div>
    </div>

  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};