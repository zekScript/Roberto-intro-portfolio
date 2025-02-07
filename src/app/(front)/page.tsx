"use client";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Loader from "@/components/anims/Loader";
import A4Animation from "@/components/anims/TextLayout";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    // Home page
    <div>
      {/* Square */}
      <div className="m-auto flex justify-center">
        <div className="h-[300px] w-[80%] bg-primary-foreground rounded-[2rem]">
          {/* Black and white person picture */}
          <div className="h-full w-full flex justify-center ">
            <Image
              src="/mainpic.png"
              alt="Profile picture"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center flex-col text-center">
      <h1 className="text-7xl font-extrabold z-50">ARMANDAS LATANAUSKAS</h1>
      <p className="text-3xl text-start font-normal">Full-Stack Web Developer</p>
      </div> */}

      <div className="m-auto flex justify-center">
        <div className="h-[300px] w-[80%] rounded-[2rem]">
          <div className="w-full flex justify-center flex-col">
            <h1 className="text-6xl font-extrabold ">ARMANDAS LATANAUSKAS</h1>
            <p className="text-3xl text-start font-normal text-slate-600">
              Full-Stack Web Developer
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto flex justify-center mt-16">
        <div className="h-[300px] w-[90%] bg-primary-foreground rounded-[2rem]">
          <div className="h-full w-full flex justify-center ">
            <div ref={ref}>
              {isInView ? <A4Animation /> : <Loader></Loader>}
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto flex justify-center mt-16">
        <div className="h-[500px] w-[90%] bg-primary-foreground rounded-[2rem] flex">
          <div className="w-full h-full flex items-center">
            <h1 className="text-2xl font-bold ml-20">
              Programming Languages Supported:
            </h1>
          </div>
          {/* Cards */}
          <div className="flex flex-col mt-6 mb-6 mr-20 gap-y-2">
            <div className="flex w-[100%] h-[70%] bg-background">
              <div className="flex w-full h-full items-center text-2xl">
                <ArrowUpRight className="ml-8" size={32} />

                <p className="ml-8">HTML / CSS / Javascript </p>
              </div>
            </div>
            <div className="flex w-[100%] h-[70%] bg-background">
              <div className="flex w-full h-full items-center text-2xl">
                <ArrowUpRight className="ml-8" size={32} />

                <p className="ml-8">React / NextJS / Tailwind </p>
              </div>
            </div>
            <div className="flex w-[100%] h-[70%] bg-background">
              <div className="flex w-full h-full items-center text-2xl">
                <ArrowUpRight className="ml-8" size={32} />

                <p className="ml-8">SASS / Typescript / Prisma </p>
              </div>
            </div>
            <div className="flex w-[100%] h-[70%] bg-background">
              <div className="flex w-full h-full items-center text-2xl">
                <ArrowUpRight className="ml-8" size={32} />

                <p className="ml-8">Libraries and Frameworks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto flex justify-center mt-16">
        <div className="h-[500px] w-[90%] bg-primary-foreground rounded-[2rem] flex">
          <div className="w-full h-full flex items-center justify-end">
            <h1 className="text-2xl font-bold ml-28">
              I&apos;ve Practised Programming:{" "}
            </h1>
          </div>
          {/* Cards */}
          <div className="flex w-full h-full items-center justify-end mr-20">
            <img
              className="h-[250px] w-[250] bg-primary-foreground"
              src="/RoundedSQPic.png"
            ></img>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-48">
        <h1 className="text-8xl font-extrabold ">LATEST WORK</h1>
      </div>

      {/* Carousel */}

      <div className="w-full flex justify-center mt-20">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full" // Wider carousel
        >
          <CarouselContent>
            {[
              { src: "/Showcase1.png", link: "/blog/cms" },
              { src: "/Showcase2.png", link: "/blog/maiden-clicker" },
              { src: "/Showcase3.png", link: "/blog/origin-portfolio" },
              { src: "/Showcase4.png", link: "/blog/refined-dot-tf" },
            ].map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Link href={item.link} passHref>
                    <Card className="shadow-lg">
                      <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                        <img
                          src={item.src}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-full mt-96">
        <h1 className="text-9xl font-extrabold">LET&apos;S GET TO WORK</h1>
      </div>
    </div>
  );
};

export default Home;
