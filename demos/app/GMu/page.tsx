"use client";
import { Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import React, {useEffect, useState} from 'react';
import Video from '../components/Video';
import GMuEmu from '../components/GMuEmu';
import Link from 'next/link';
import { MdArrowBackIos } from 'react-icons/md';

const GMuPage = () => {
  const [run_emu, set_emu] = useState(false);
  return (
    <div>
      <Heading className="text-center SelectedColor pb-10" size="9">GMu</Heading>
      <div className="m-2 TextColor flex items-center justify-center">
        <Card className="w-full md:w-3/6">
          <div className="m-4">
            <Text as="p" className="break-normal whitespace-normal leading-relaxed text-2xl">
              <strong>GMu </strong> is a GameBoy emulator I made in C++. The project started back in September 2022.
              Prior to starting, my programming experience consisted of a few Python and Java classes that 
              I took in high school. Though this was a huge undertaking for someone with so little experience, I was able
              struggle through and gained a lot of experience with low level computer concepts.
            </Text>
            <Heading className="pt-4 pb-4" size="8">Resources</Heading>
            <Text as="p" className="break-normal whitespace-normal leading-relaxed text-2xl">
              Unfortunately, there is not a lot of helpful information online about writing emulators. By far the most useful thing I could find
              was a NES emulator series made by Javidx9. Some concepts may be difficult to understand at first so if you find yourself struggling, I 
              would recommend looking at the book "But how Do it Know?" by J Clark Scott.
            </Text>
            <Text as="p" className="break-normal whitespace-normal leading-relaxed text-2xl pt-4 pb-4">
              This is the first episode of the NES emulator series made by javidx9. Definetly check this out
              as it is one of the only truly deep and complete series on the internet that covers every stage of
              emulation development. 
            </Text>
            <Video id="F8kx56OZQhg" />
            <Text as="p" className="break-normal whitespace-normal leading-relaxed text-2xl pt-4 pb-4">
              You will need to do your own research into the system you are trying to emulate. Common
              advice I have found is to start with a system like the NES or GameBoy as they have the most
              information on the web.
            </Text>
            <Text as="p" className="break-normal whitespace-normal leading-relaxed text-2xl pt-4 pb-4">
              In terms of finding the latest info on the GameBoy specifically, I would recommend looking
              at <a target="_blank" rel="noopener noreferrer" className="SubColor underline" href="https://gbdev.io/pandocs/">gbdev.io</a>.
              This is the largest collection of information on the GameBoy, and has plenty of helpful guides
              to start your journey. If you don't know where to start, I would suggest making a game in assembly. 
              The tutorial I followed can be found <a target="_blank" rel="noopener noreferrer" className="SubColor underline" href="https://gbdev.io/gb-asm-tutorial/">here</a>.
            </Text>
            <Text as="p" className="break-normal whitespace-normal leading-relaxed text-2xl pt-4 pb-4">
              The tutorial has matured a lot since I last looked. Definiately consider checking it out if you want
              to make a GameBoy emulator!
            </Text>
            <Text as="p" className="break-normal whitespace-normal leading-relaxed text-2xl pt-4 pb-4">
              If you are interested in checking out the code for my emulator, you can find it <a target="_blank" rel="noopener noreferrer" className="SubColor underline" href="https://github.com/kaemic3/GMu">here</a>.
              Below, there is a demo that you can try for yourself. Though the code for the emulator is written in C++, there is a nifty project called Emscripten that uses WebAssembly to run C++ code in the browser.
              What is even cooler is the fact that it supports SDL, which is a library that I use for multi-platform support. 
            </Text>
            <Text as="p" className="break-normal whitespace-normal leading-relaxed text-2xl pt-4 pb-4">
              I have not published the specific source code that the demo is using, and there are quite a 
              few differences and limitations at the moment with the demo version of the emulator, such as not being able to upload any ROM files. But the demo runs the game I developed in RGBDS, a popular assembler and 
              linker package for GameBoy ASM. Though I would like to add support for more ROMs to the web version, I am currently looking into doing less web stuff and more games programming, so it will have to go on
              the back burner for now.
            </Text>
          </div>
        </Card>
      </div>
      <Heading className="pt-4 pb-8 text-center" size="9">Emulator Demo</Heading>
      <div className="flex items-center justify-center m-4">
        {
        run_emu ? 
        <GMuEmu></GMuEmu>
         :
        <Card asChild style={{width: 1280/2, height: 720/2}}>
          <a onClick={() => {
            set_emu(true);
          }}>
            <Heading size="9" className="h-full flex items-center justify-center"> Click me for a demo!</Heading>
          </a>
        </Card>
        }
        
      </div>
        <div className="text-center pt-10 ">
          <Heading> Controls:</Heading>
          <Heading>Pause/Unpause = P</Heading>
          <Heading>Movement = WASD</Heading>
          <Heading>Reset = R</Heading>
        </div>
        <Flex justify="center" className="pt-10 pb-10">
            <Button variant="soft" size="3">
                <MdArrowBackIos size={20}/>
                <Link className=" text-2xl" href="/">{"Return to projects"}</Link>
            </Button>
        </Flex>
    </div>
  )
}

export default GMuPage;