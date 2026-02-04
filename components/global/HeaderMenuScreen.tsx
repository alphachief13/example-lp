"use client";

import clsx from "clsx";
import {
  ChevronRight,
  type LucideIcon,
  Package,
  Phone,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { useGlobal } from "@/store/global";
import { scrollWindow } from "@/utils/window-functions";

interface MenuScreenOptionParams {
  item: OpcaoMenu;
}

interface OpcaoMenu {
  title: string;
  icon?: LucideIcon | IconType;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function MenuScreenOption({ item }: MenuScreenOptionParams) {
  const Icon = item.icon;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    item.onClick?.(e);
  };

  return (
    <Link
      className={clsx(
        "flex w-full cursor-pointer items-center justify-center gap-3 border-border border-b py-4 transition-colors duration-300",
        "hover:bg-[#00000017]"
      )}
      href={item.href ?? "#"}
      onClick={handleClick}
    >
      {Icon ? (
        <Icon className="text-background" />
      ) : (
        <ChevronRight className="text-background" />
      )}
      <h1
        className={clsx(
          "w-5/6 self-center font-semibold text-2xl text-background"
        )}
      >
        {item.title}
      </h1>
    </Link>
  );
}

export default function HeaderMenuScreen() {
  const { isHeaderMenuOpen, setIsHeaderMenuOpen } = useGlobal();

  const opcoesMenu: OpcaoMenu[] = [
    {
      title: "About",
      icon: ThumbsUp,
      href: "#sobre",
      onClick: () => {
        setIsHeaderMenuOpen(false);
        scrollWindow("bottom", "smooth", "sobre");
      },
    },
    {
      title: "Projects",
      icon: Package,
      href: "#projetos",
      onClick: () => {
        setIsHeaderMenuOpen(false);
        scrollWindow("bottom", "smooth", "projetos");
      },
    },
    {
      title: "Contact",
      icon: Phone,
      href: "#contato",
      onClick: () => {
        setIsHeaderMenuOpen(false);
        scrollWindow("bottom", "smooth", "contato");
      },
    },
  ];

  return (
    <div
      className={clsx(
        "fixed top-20 left-0 z-40 flex h-full w-full flex-col border-t border-t-border bg-primary/95 backdrop-blur-sm transition-transform duration-500 ease-in-out",
        {
          "translate-x-full": !isHeaderMenuOpen,
          "translate-x-0": isHeaderMenuOpen,
        }
      )}
    >
      <div className="flex flex-col">
        {opcoesMenu.map((opcao) => (
          <MenuScreenOption item={opcao} key={opcao.title} />
        ))}
      </div>
    </div>
  );
}
