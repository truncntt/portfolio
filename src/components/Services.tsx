import { cn } from "@/lib/utils";
import {
  IconBook,
  IconCurrencyDollar,
  IconDatabase,
  IconEaseInOut,
  IconHelp,
  IconSettings,
  IconTerminal2,
  IconUvIndex,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";

export function Services() {
  const features = [
    {
      title: "Font-End",
      description:
        "Technologies: HTML5, CSS3, SCSS, Angular, Blazor, Bootstrap.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Back-End",
      description: "Technologies: C#, Java Spring, ASP.NET Core.",
      icon: <IconEaseInOut />,
    },
    {
      title: "DevOps",
      description:
        "Skills: Linux System Administration, Docker, Jenkins, CI/CD Pipelines.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Libraries",
      description:
        "Frontend: Bulma, SCSS, jQuery. Backend: LINQ, Entity Framework, Spring Boot.",
      icon: <IconBook />,
    },
    {
      title: "Database",
      description: "Technologies: SQL Server, MongoDB, MySQL.",
      icon: <IconDatabase />,
    },
    {
      title: "Tools",
      description:
        "Development Tools: Visual Studio, IntelliJ IDEA, Visual Studio Code, Postman.",
      icon: <IconSettings />,
    },
    {
      title: "Design",
      description: "Tools & Technologies: Figma, Adobe XD, SCSS, Bulma.",
      icon: <IconUvIndex />,
    },
    {
      title: "Other Skills",
      description:
        "Version Control: Proficient in Git, GitHub, and GitLab for collaboration and source control.",
      icon: <IconHelp />,
    },
  ];
  return (
    <div className="mt-[150px] flex flex-col" id="services">
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>Our Services</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          We Provide You Quality Of Services
        </p>
      </div>
      (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      )
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
