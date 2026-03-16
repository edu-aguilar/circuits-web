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
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[var(--color-sand)] px-6 py-4 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              className="rounded-xl border border-black/10"
              src="/favicon-180x180.png"
              width={48}
              height={48}
              alt="pitbike-image"
            />
          </Link>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-black/50">todopitbike</span>
            {user && <span className="text-sm text-black/70">Hola, {user.given_name}</span>}
          </div>
        </div>

        <nav className="hidden items-center gap-4 md:flex">
          <Link href="/circuitos" className="text-sm text-black/70 transition hover:text-black">
            Circuitos
          </Link>
          {authActions}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70"
          >
            {menuOpen ? "Cerrar" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute right-6 top-[72px] w-[240px] rounded-2xl border border-black/10 bg-white p-4 shadow-[var(--shadow-soft)] md:hidden">
            <div className="flex flex-col gap-3">
              <Link
                href="/circuitos"
                className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/80"
                onClick={() => setMenuOpen(false)}
              >
                Circuitos
              </Link>
              {authActions}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
