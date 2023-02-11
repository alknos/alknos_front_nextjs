import Head from 'next/head'
import Navbar from "./navbar"
import Atom from "./Atom"
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import React, { Suspense } from "react";
import { CodeIcon, LightningBoltIcon, GlobeIcon } from '@heroicons/react/solid'
import { AnnotationIcon, GlobeAltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
import Footer from "./footer"
import { CheckIcon } from '@heroicons/react/outline'
import Pricing from "./Pricing"

const hobbyFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const scaleFeatures = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
const growthFeatures = [
  'Quia rem est sed impedit magnam',
  'Dolorem vero ratione voluptates',
  'Qui sed ab doloribus voluptatem dolore',
  'Laborum commodi molestiae id et fugiat',
  'Nam ut ipsa nesciunt culpa modi dolor',
]

const features = [
  {
    name: 'Mejora la eficiencia',
    description: 'La IA puede procesar grandes cantidades de imágenes de manera más rápida y precisa que los humanos.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Fácil de usar',
    description:
      'Priorizamos una interfaz amigable, ya que resultará en una aplicación intuitiva y fácil de usar para así mejorar la experiencia del usuario .',
    icon: CodeIcon,
  },
  {
    name: 'Siempre contigo',
    description:'Para usar nuestro proyecto solo necesitas un dispositivo con conexión a internet en cualquier parte del mundo',
    icon: GlobeIcon,
  },
]

const transferFeatures = [
  {
    id: 1,
    name: 'Estequiometría',
    description:
      'Incluye la cantidad de reactivos necesarios para producir una cantidad determinada de producto y más.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'Reacciones Inorgánicas',
    description:
      'Solo ingresa tus reactivos, fácil y rápido.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]



export default function landing() {
    return (
      <div className="bg-black w-full">
        <Navbar/>
        
        <div className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
              </div>
              <div className="mt-6">
                <h1 className="font-raleway text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Misma química.
                </h1>
                <br/>
                <h1 className="font-raleway text-white text-7xl">
                  Mejor ciencia.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Bienvenido a una nueva forma de ver la química.  Impulsado por IA, ofrecemos las mejores herramientas con los mejores resultados.
                </p>
                <div className="mt-8 w-max">
          <div class="p-1 rounded-lg bg-gradient-to-r from-pink-600 to-purple-400">
            <button class="px-6 py-2 rounded-lg bg-black">
              <h1 class="px-6 py-2 rounded-lg text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-raleway">¡Empieza ya!</h1>
            </button>
          </div>
                </div>
              </div>
            </div>
          
              <blockquote>
                <div>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="text-base font-medium text-gray-700"></div>
                  </div>
                </footer>
              </blockquote>
            </div>
         
          <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Canvas camera={{ position: [0, 0, 7] }} className="canvas">
              <Suspense fallback={null}>
        <color attach="background" args={['black']} />
        <Float speed={4} rotationIntensity={0.2} floatIntensity={2}>
                <Atom position={[0, 0, 0]}  r={15} g={2} b={12} rBall = {9} gBall = {2} bBall = {16}/ >
              </Float>

          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={3} radius={0.2} />
          </EffectComposer>
          
        </Suspense>
              </Canvas>
              
            </div>
            
          </div>
        </div>
        
      </div>
<br/>
      <div className="py-12 bg-transparent">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="font-poppins text-transparent text-sm bg-clip-text bg-gradient-to-r from-red-400 to-yellow-600">I A &nbsp; P O W E R E D</h3>
        <h1 className="font-raleway text-5xl text-white">Detección de fórmulas química.</h1> 
<div className="py-5">
<p className="font-raleway text-gray-400 font-bold font-base">Nuestro nuevo sistema de visión artificial permite detectar compuestos tanto inorgánicos como orgánicos</p>
</div>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white  bg-gradient-to-r  from-red-400 to-yellow-600">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="font-poppins mt-5 text-lg leading-6 font-medium text-white">{feature.name}</p>
              </dt>
              <dd className="font-raleway mt-2 text-base text-gray-400">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
      </div>

      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
              </div>
              <div className="mt-6">
              <h3 className="font-poppins text-transparent text-sm bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">A L G O R Y T H M &nbsp; P O W E R E D</h3>
        <h1 className="font-raleway text-5xl text-white">Calculadora de reacciones</h1> 
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
              officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere.
              Totam, velit.
            </p>
            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-400 to-cyan-600 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-100">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
              </div>
            </div>
          
              <blockquote>
                <div>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="text-base font-medium text-gray-700"></div>
                  </div>
                </footer>
              </blockquote>
            </div>
         
          <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Canvas camera={{ position: [0, 0, 7] }} className="canvas">
              <Suspense fallback={null}>
        <color attach="background" args={['black']} />
        <Float speed={4} rotationIntensity={0.2} floatIntensity={2}>
                <Atom position={[0, 0, 0]}  r={2} g={12} b={12} rBall = {2} gBall = {9} bBall = {16}/ >
              </Float>

          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={3} radius={0.2} />
          </EffectComposer>
          
        </Suspense>
              </Canvas>
              
            </div>
            
          </div>
        </div>
        
      </div>


      <div className="bg-gray-900">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            The right price for you, whoever you are
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus
            molestiae voluptatum.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gray-900 pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-zinc-200 px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                          Hobby
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">79</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="."
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                        Growth
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                          <span className="font-extrabold">149</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">/month</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="."
                          className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                          Scale
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span className="font-extrabold">349</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">/month</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="."
                            className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<Pricing/>

      <Footer/>
    </div>
    )
  }
