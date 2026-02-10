"use client";

import { Icon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { createElement } from "react";

export default function Button(
  { title, icon, onClick, path, titleVis }: { title: string, icon: Icon, onClick?: () => void, path?: string, titleVis?: boolean }) {
  const router = useRouter();

  const handleClick = () => onClick ? onClick() : path ? router.push(path) : undefined;

  return (
    <div className={"flex flex-col items-center gap-2"}>
      <button 
        className={"w-16 h-16 bg-[var(--gray)] rounded-lg flex items-center justify-center"} 
        onClick={ handleClick }
        title={ title }>
          { createElement(icon, { size: 32 }) }
      </button>
      
      { titleVis && <span>{ title }</span> }
    </div> 
  ); 
}