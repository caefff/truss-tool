"use client";

import Button from "@/app/components/Button";
import { FilePlusIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <main className="h-full flex flex-col items-center justify-center gap-3">
        <h1>Welcome to Truss Tool</h1>
          
        <Button title="Create a new project" icon={ FilePlusIcon } />
      </main>

      <footer className="w-full text-right p-2">
        <p>
          Made by {" "}
          <a href="https://github.com/caefff/truss-tool" target="_blank" className="text-blue-500">
            caef
          </a>
          {" "} @ Github
        </p>
      </footer>
    </div>
  );
}
