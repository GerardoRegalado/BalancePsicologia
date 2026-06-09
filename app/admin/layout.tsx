import Link from "next/link";
import type { ReactNode } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="border-b border-white/10 bg-white/5 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-xs tracking-[0.3em] text-emerald-300 uppercase">
              Admin Placeholder
            </p>
            <h1 className="text-lg font-semibold">Repo Base Admin</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-emerald-300 hover:text-emerald-200"
          >
            Volver al sitio
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
