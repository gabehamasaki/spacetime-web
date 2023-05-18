import React from 'react'
import Image from 'next/image'
import nlwLogo from '../assets/logo.svg'

export default function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="nlw Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-5xl font-bold text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p>
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        className="font-alt inline-block rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇAS
      </a>
    </div>
  )
}
