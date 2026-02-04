"use client";

import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import useIsMobile, { BREAKPOINTS } from "@/hooks/useMobile";
import linkToWhats from "@/utils/linkToWhats";
import { scrollWindow } from "@/utils/window-functions";
import GlowingText from "../animations/GlowingText";

interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function Footer() {
  const isTablet = useIsMobile(BREAKPOINTS.tablet);

  const navigationLinks: FooterLink[] = [
    { label: "Home", href: "" },
    { label: "About", href: "sobre" },
    { label: "Projects", href: "projetos" },
    { label: "Contact", href: "contato" },
  ];

  const socialLinks = [
    { icon: BsWhatsapp, href: linkToWhats(), label: "WhatsApp" },
    {
      icon: BsInstagram,
      href: "https://www.instagram.com/victorcordeiro/",
      label: "Instagram",
    },
  ];

  const contactInfo = {
    phone: "(XX) XXXXX-XXXX",
    email: "contato@victorcordeiro.dev",
    whatsappMessage: "Olá! Vim pelo seu portfólio.",
  };

  return (
    <footer className="relative flex w-full flex-col bg-surface" id="contato">
      {/* Seção Principal do Footer */}
      <div className="mx-auto flex w-full max-w-[1920px] flex-col px-4 py-16 md:px-10 lg:px-32">
        <div
          className={clsx(
            "flex w-full",
            isTablet ? "flex-col gap-12" : "flex-row gap-20"
          )}
        >
          {/* Coluna 1: Logo e Descrição */}
          <div className={clsx("flex flex-col", isTablet ? "w-2/3" : "flex-1")}>
            <button
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg p-2"
              onClick={() => {
                scrollWindow("top", "smooth");
              }}
              type="button"
            >
              <p
                className={clsx(
                  "font-mono font-semibold text-primary",
                  isTablet ? "text-xl" : "text-xl"
                )}
              >
                <GlowingText>Victor Cordeiro</GlowingText>
              </p>
            </button>
            <p className="text-center text-muted text-sm">
              Frontend developer — React, TypeScript and modern interfaces.
              Building digital experiences with a focus on performance and
              accessibility.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div
            className={clsx("flex flex-col", isTablet ? "w-full" : "flex-1")}
          >
            <h3 className="mb-4 font-bold text-foreground text-lg">
              Navigation
            </h3>
            <nav className="flex flex-col items-start gap-5">
              {navigationLinks.map((link) => {
                return (
                  <button
                    key={link.label}
                    onClick={() => {
                      scrollWindow("top", "smooth", link.href ?? undefined);
                    }}
                    className="cursor-pointer text-muted text-sm transition-colors hover:text-primary"
                    type="button"
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div
            className={clsx("flex flex-col", isTablet ? "w-full" : "flex-1")}
          >
            <h3 className="mb-4 font-bold text-foreground text-lg">Contact</h3>
            <div className="flex flex-col gap-4">
              <Link
                className="text-muted text-sm transition-colors hover:text-primary"
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              >
                {contactInfo.phone}
              </Link>
              <Link
                className="text-muted text-sm transition-colors hover:text-primary"
                href={`mailto:${contactInfo.email}`}
              >
                {contactInfo.email}
              </Link>
              <Link
                className="flex items-center gap-2 text-muted text-sm transition-colors hover:text-primary"
                href={linkToWhats(contactInfo.whatsappMessage)}
                target="_blank"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* Redes Sociais */}
              <div className="mt-2 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-background"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior - Copyright e Links Legais */}
      {/* <div className="border-border border-t">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-10 lg:px-32">
          <p className="text-muted text-sm">
            Victor Cordeiro © All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              className="text-muted text-sm transition-colors hover:text-primary"
              href="/politica-privacidade"
            >
              Privacy policy
            </Link>
            <Link
              className="text-muted text-sm transition-colors hover:text-primary"
              href="/termos-uso"
            >
              Terms of use
            </Link>
          </div>
        </div>
      </div> */}

      <div className="absolute bottom-2 left-2 flex flex-row items-center gap-2 text-sm">
        <GlowingText fromColor="#00ff88" viaColor="#39d353" toColor="#00d4aa">
          <Link href="#">Landing page test</Link>
        </GlowingText>
      </div>
    </footer>
  );
}
