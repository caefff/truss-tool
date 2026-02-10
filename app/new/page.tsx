"use client";

import Button from "@/app/components/Button";
import Dialog from "@/app/components/Dialog";
import { ArrowLeftIcon, PlusIcon } from "@phosphor-icons/react";
import { useRef } from "react";
import list from "@/public/list.json";

export default function Home() {
  const elementsDialog = useRef(null);

  return (
    <div className="h-screen flex flex-col">
      <nav className="w-full flex p-2">
        <Button title="Go back" icon={ ArrowLeftIcon } path="/" />
      </nav>

      <main className="h-full flex justify-center items-center">
        <Button title="Start your project by adding the first truss" icon={ PlusIcon } onClick={() => elementsDialog.current.showModal()} titleVis={ true } />
        <Dialog title="hello world" ref={ elementsDialog }>
          <div>
            {list.objects.map(obj => (
              <p key={obj.word}>{obj.word}</p>
            ))}
          </div>
        </Dialog>
      </main>
    </div>
  );
}
