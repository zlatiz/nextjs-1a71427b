import React from "react";
import Image from "next/image";

export default function Header(): JSX.Element {
  const logo = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeSrc = encodeURI(logo);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" aria-label="Home">
          <Image src={safeSrc} alt="Garber Bros logo" width={180} height={60} unoptimized />
        </a>
        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex gap-6 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/lock-status">Lock Status</a></li>
            <li><a href="/vessels">Vessels</a></li>
            <li><a href="/barges">Barges</a></li>
            <li><a href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="md:hidden text-sm">
          <a href="/vessels" className="btn-primary">Fleet</a>
        </div>
      </div>
    </header>
  );
}
