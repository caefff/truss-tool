"use client";

import { Icon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { createElement } from "react";

export default function Button({ title, icon, path, titleVis }: { title: string, icon: Icon, path: string, titleVis: boolean }) {
  const router = useRouter();

  return (
    <div className={"flex flex-col items-center gap-2"}>
      <button 
        className={"w-16 h-16 bg-[var(--gray)] rounded-lg flex items-center justify-center"} 
        onClick={() => router.push(path)}
        title={ title }>
          { createElement(icon, { size: 32 }) }
      </button>
      
      { titleVis && <span>{ title }</span> }
    </div> 
  ); 
}