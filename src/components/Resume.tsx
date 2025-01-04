import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";
import Image from "next/image";

export function Resume() {
  const data = [
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>Duy Tan University</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">8/2018 - 8/2023</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              GPA: 3.10/4.0
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Software Engineering program covered foundational and advanced
              topics, including algorithms, data structures, database
              management, web development, and object-oriented programming.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Experiences",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>Fullstack C# Developer</Cover>
            </h4>
            <span className="text-blue-700 my-[15px]">8/2023 - 10/2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              FASTDO Work Management System
            </p>
            <span className="text-blue-400 my-[15px]">Task Description</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Developed and optimized key features for the FASTDO system
              including: <br />- Task management. User role management. <br />-
              System upgrades and bug fixes. <br />- Ensured thorough testing to
              eliminate source code errors.
            </p>
            <span className="text-blue-400 my-[15px]">Technologies Used</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              - Frontend: Blazor, Bluma. <br />
              - Backend: ASP.NET Core, C#. <br />- Tools: Visual Studio, GitHub,
              MongoDB
            </p>
            <span className="text-blue-400 my-[15px]">Results</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              - Delivered a complete ticketing system with a user-friendly
              interface. <br />
              - Successfully integrated MoMo e-wallet payment, ensuring
              transaction security. <br />- Enhanced system performance and
              features to meet user requirements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/fastdo_1.PNG"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/fastdo_2.PNG"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/fastdo_3.PNG"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/fastdo_4.PNG"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>Fullstack Web Developer</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">2023 - 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Web - App Cinemas
            </p>
            <span className="text-blue-400 my-[15px]">Task Description</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Built an upgraded movie ticketing system with features such
              as:Online ticket booking support.Integration of MoMo e-wallet
              payment.
            </p>
            <span className="text-blue-400 my-[15px]">Technologies Used</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              - Frontend: Angular. <br />
              - Backend: Java Spring <br />
              - Methodology: Agile Scrum. <br />
              - Database: SQL Server. <br />- Tools: IntelliJ IDEA, Git,
              PostgreSQL.
            </p>
            <span className="text-blue-400 my-[15px]">Results</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              - Delivered a complete ticketing system with a user-friendly
              interface. <br />
              - Successfully integrated MoMo e-wallet payment, ensuring
              transaction security.
              <br />- Enhanced system performance and features to meet user
              requirements.
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>Web Developer</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">2023 - 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Application Farm
            </p>
            <span className="text-blue-400 my-[15px]">Task Description</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              - Developed an agricultural product sales management system with
              key functions: <br />- Managing agricultural product information.
              <br />- Tracking sales processes and processing orders. <br />-
              Ensuring strict testing to minimize source code errors.
            </p>
            <span className="text-blue-400 my-[15px]">Technologies Used</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              - Frontend: Angular. <br />
              - Database: SQL Server. <br />
              - Backend: Java. <br />- Tools: Visual Studio Code, GitHub,
              Postman.
            </p>
            <span className="text-blue-400 my-[15px]">Results</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              - Delivered a complete agricultural product sales management
              system with stable operation. <br />- Minimized development errors
              through rigorous testing processes. <br />- Designed an intuitive
              interface that effectively meets user requirements.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Certificates",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>DevOps for Freshers</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">12/2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              - Setting up and configuring CI/CD pipelines using Jenkins. <br />
              - Working with Docker: Creating, deploying, and managing
              containers. <br />- Utilizing Linux for system administration and
              DevOps operations. <br />- Implementing monitoring systems with
              tools like Prometheus and Grafana.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/certificate-devops.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>Google Cloud Professional Cloud Architect (GCPCA)</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">
              {" "}
              In preparation, expected completion by February 2025.
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Google Cloud Professional Cloud Architect (GCPCA): Intending to
              pursue the Google Cloud Professional Cloud Architect certification
              to broaden expertise in cloud architecture and Google Cloud
              Platform services.
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>AWS Certified DevOps Engineer - Associate</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">
              Expected completion by June 2025.
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              AWS Certification: Planning to take the AWS certification exam by
              mid-2025 to enhance cloud system expertise.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="resume">
      <Timeline data={data} />
    </div>
  );
}
