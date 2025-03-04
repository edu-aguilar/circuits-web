"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface ClientHeaderProps {
  authActions: JSX.Element;
  user: KindeUser<Record<string, unknown>> | null;
}

export const ClientHeader = ({ authActions, user }: ClientHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-6 md:px-10 py-4 flex items-center shadow-xl justify-between">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image className="rounded-full" src="/favicon-180x180.png" width={48} height={48} alt="pitbike-image" />
        </Link>
        {user && <span>Hola, {user.given_name}</span>}
      </div>

      <nav className="hidden md:flex gap-4 items-center">
        {authActions}
        <Link href="/circuitos">Circuitos</Link>
      </nav>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 md:hidden">
          {authActions}
          <Link href="/circuitos" onClick={() => setMenuOpen(false)}>
            Circuitos
          </Link>
        </div>
      )}
    </header>
  );
};
