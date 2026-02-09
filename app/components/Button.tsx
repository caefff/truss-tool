"use client";

import { Icon } from "@phosphor-icons/react";
import { createElement } from "react";

export default function Button({ title, icon }: { title: string, icon: Icon }) {
  return (
    <div className={"flex flex-col items-center gap-2"}>
      <button className={"w-16 h-16 bg-[var(--gray)] rounded-lg flex items-center justify-center"}>
        { createElement(icon, { size: 32 }) }
      </button>
      
      <span>{ title }</span>
    </div> 
  ); 
}