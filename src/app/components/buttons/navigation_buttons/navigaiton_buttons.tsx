"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import NavigationButtonElement from "./navigation_button_element";
import NavigationButtonElementModel from "./link_button_element_model";
import { Menu, X } from "lucide-react";

const elements = [
  new NavigationButtonElementModel("/", "Anasayfa"),
  new NavigationButtonElementModel("/projects", "Çalışmalarımız"),
  new NavigationButtonElementModel("/about", "Hakkımızda"),
  new NavigationButtonElementModel("/content", "Ders İçeriği"),
];

export default function NavigationButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;

    gsap.set(menu, {
      x: -300,
      opacity: 0,
      display: "none",
    });
  }, []);

  const toggleMenu = () => {
    const menu = menuRef.current;

    if (!isOpen) {
      gsap.set(menu, { display: "block" });
      gsap.to(menu, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menu, {
        x: -300,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menu, { display: "none" });
        },
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="fixed top-6 left-6 z-50 p-2 rounded-md bg-zinc-800/90 hover:bg-zinc-700/90 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      <nav ref={menuRef} className="fixed top-0 left-0 h-screen w-64 z-40">
        <div className="h-full backdrop-blur-xl bg-gradient-to-b from-zinc-900/75 to-zinc-900/60 border-r border-zinc-800/50">
          <div className="pt-24 px-6">
            <div className="flex flex-col space-y-6">
              {elements.map((element, index) => (
                <NavigationButtonElement model={element} key={index} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
