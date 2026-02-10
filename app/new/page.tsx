"use client";

import Button from "@/app/components/Button";
import { ArrowLeftIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <nav className="flex p-2">
        <Button title="Go back" icon={ ArrowLeftIcon } path="/" titleVis={ false } />
      </nav>

      <main />
    </div>
  );
}
