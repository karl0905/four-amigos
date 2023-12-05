import React from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Kontakt", href: "#", current: false },
  { name: "Bestil", href: "/bestil", current: false },
];

export default function NavBar() {
  return (
    <div className="flex items-center justify-between w-screen h-20 bg-light-orange jost">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Four Amigos Logo"
          height={200}
          width={200}
          className="pl-2 cursor-pointer"
        />
      </Link>
      <div className="flex text-xl mr-4 gap-6">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
