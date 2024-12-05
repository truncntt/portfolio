import React from "react";
import { Skills } from "@/components/blocks/skills";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Hoc Nguyen",
    designation: "PM",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Thang Luong",
    designation: "Leader Web",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Hau Dang",
    designation: "Leader Mobile",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Van Huy",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Cong Nam",
    designation: "App Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Bin An",
    designation: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const MainSection = () => {
  return (
    <div>
      <div className="w-full overflow-x-hidden-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px] ">
        <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
          <a href="/">
            <Image
              src="/images/logo.png"
              width={120}
              height={80}
              className="max-h-[80px] h-full object-contain object-center"
              alt="logo"
            ></Image>
          </a>
          <div className="flex flex-col justify-center h-[80%]">
            <span className="text-[#4e69e0] font-[600]">Its Me</span>
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Trun Coder,
              <br /> <Cover>Web Developer</Cover>
            </h2>
            <a
              href="#"
              className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]"
            >
              Hire Me &rarr;
            </a>

            <div className="flex flex-row mt-[60px]">
              <AnimatedTooltip items={people}></AnimatedTooltip>
            </div>
            <p className="max-w-xl text-[1rem] md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[10px]">
              Our Team Members
            </p>
          </div>
        </div>

        <div className="w-full h-full flex items-center">
          <Image
            src="/images/avata_2.jpg"
            width={800}
            height={1200}
            className="w-full max-h-[90vh] object-contain object-bottom rounded-2xl"
            alt="model"
          ></Image>
        </div>

        <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
          <a
            className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-1 border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px] bg-blue-700"
            href="/template/CV_DEV_NET_NGUYENDUCTHAO.pdf"
            download="CV_DEV_NET_NGUYENDUCTHAO.pdf"
          >
            Download CV
          </a>

          <h2 className="bg-clip-text mt-[100px] mr-auto text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
            About Me
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
            With over 1.5 years of experience in software development, I am
            passionate about applying my expertise in .NET and C# to real-world
            projects. I focus on improving and optimizing systems while
            continuously striving for personal and professional growth.
            Currently, I aim to achieve international certifications such as AWS
            and GCPCA to enhance my skills and professional value.
          </p>

          <Skills />
        </div>

        <ShootingStars className="z-[-1]" />
        <StarsBackground className="z-[-1]" />
      </div>
    </div>
  );
};

export default MainSection;
