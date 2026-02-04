"use client";

import clsx from "clsx";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { PanelTopIcon } from "@/components/animate-ui/icons/panel-top";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import useIsMobile, { BREAKPOINTS } from "@/hooks/useMobile";

interface ExampleItem {
  title: string;
  description: string;
  src: string;
  icon?: JSX.Element;
  tags?: string[];
  href: string;
}

export default function ExampleSection() {
  const isTablet = useIsMobile(BREAKPOINTS.tablet);

  // Mesmo ordem do slider do Hero: img-2, img-1, img-3, img-4
  const examples: ExampleItem[] = [
    {
      title: "Projeto 1",
      src: "/img-2.png",
      description: "Descrição do projeto.",
      icon: <PanelTopIcon />,
      tags: ["React", "TypeScript"],
      href: "#",
    },
    {
      title: "Projeto 2",
      src: "/img-1.png",
      description: "Descrição do projeto.",
      icon: <PanelTopIcon />,
      tags: ["React", "TypeScript"],
      href: "#",
    },
    {
      title: "Projeto 3",
      src: "/img-3.png",
      description: "Descrição do projeto.",
      icon: <PanelTopIcon />,
      tags: ["React", "TypeScript"],
      href: "#",
    },
    {
      title: "Projeto 4",
      src: "/img-4.png",
      description: "Descrição do projeto.",
      icon: <PanelTopIcon />,
      tags: ["React", "TypeScript"],
      href: "#",
    },
  ];

  return (
    <div
      className={clsx("flex w-full flex-col", isTablet ? "pt-16" : "pt-32")}
      id="example-section"
    >
      <h2
        className={clsx(
          "text-center font-semibold text-4xl",
          isTablet ? "mb-10" : "mb-20"
        )}
      >
        Projetos
      </h2>
      {examples.map((item, index) => {
        return (
          <FadeInWhenVisible
            className={clsx(
              "flex w-full pb-28",
              isTablet ? "flex-col gap-10" : "flex-row items-center gap-20"
            )}
            delay={0.1 * index}
            key={item.title}
            id={item.title}
          >
            <Link
              className={clsx(
                "flex cursor-pointer items-center justify-center bg-surface p-5 shadow duration-300 hover:scale-105 hover:brightness-105",
                isTablet ? "w-full" : "flex-1"
              )}
              href={item.href}
              target="_blank"
            >
              <Image
                alt={`Site ${item.title}`}
                height={9999}
                objectFit="contain"
                src={item.src}
                width={999}
              />
            </Link>
            <div className="flex flex-1 flex-col gap-5">
              {item.icon && (
                <div className="mb-3 flex flex-row items-center gap-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary p-2 shadow-md">
                    <AnimateIcon
                      animateOnView
                      animation="path-loop"
                      className="text-background"
                      loop
                      loopDelay={500}
                      transition={{ duration: 1.2 }}
                    >
                      {item.icon}
                    </AnimateIcon>
                  </div>
                  <p className="font-medium text-primary text-xl">
                    Case {index + 1}
                  </p>
                </div>
              )}
              <h3 className="flex cursor-pointer items-center gap-2 font-bold text-2xl text-foreground duration-300 hover:-translate-y-1 hover:text-primary hover:underline">
                <LinkIcon />
                <Link href={item.href} target="_blank">
                  {item.title}
                </Link>
              </h3>
              <p className="text-muted">{item.description}</p>

              <div className="flex flex-row flex-wrap gap-2">
                {item.tags?.map((tag) => (
                  <div
                    className={clsx(
                      "rounded-full bg-primary py-1 text-background text-sm shadow-sm",
                      isTablet
                        ? "flex items-center justify-center px-2 text-xs"
                        : "px-5"
                    )}
                    key={tag}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        );
      })}
    </div>
  );
}
