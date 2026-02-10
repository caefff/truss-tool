import { forwardRef, ForwardedRef } from "react";
import Button from "@/app/components/Button";
import { XIcon } from "@phosphor-icons/react";

interface DialogProps {
  title: string,
  children?: React.ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ title, children }, ref: ForwardedRef<HTMLDialogElement>) => {
    return (
      <dialog ref={ ref } className="w-3/5 h-3/4 bg-[var(--gray)] rounded-xl p-4 text-white">
        <div className="flex justify-between">
          <h1>{ title }</h1>
          <Button title="Close menu" icon={ XIcon } onClick={() => ref.current.close()} />
        </div>

        { children }
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

export default Dialog;