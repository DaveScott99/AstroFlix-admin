import * as ToastUI from "@radix-ui/react-toast";
import React from "react";
import "./styles.css";

import {
  CheckCircledIcon,
  CrossCircledIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

interface ToastProps {
  title: string;
  description: any;
  status: string;
}

export function Toast({ title, description, status }: ToastProps) {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    const apperToast = () => {
      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        eventDateRef.current = oneWeekAway();
        setOpen(true);
      }, 100);
    };

    apperToast();

    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastUI.Provider swipeDirection="right">
      <ToastUI.Root
        className={`ToastRoot bg-zinc-50 dark:bg-zinc-950 border ${
          status === "success"
            ? "border-green-400"
            : status === "error"
            ? "border-red-400"
            : "border-yellow-400"
        } p-2 rounded-lg flex items-center gap-3`}
        open={open}
        onOpenChange={setOpen}
      >
        {status === "success" ? (
          <div className="rounded-lg p-2 bg-toastSucess">
            <CheckCircledIcon width="30px" height="30px" />
          </div>
        ) : status === "error" ? (
          <div className="rounded-lg p-2 bg-toastError">
            <CrossCircledIcon width="30px" height="30px" />
          </div>
        ) : (
          <div className="rounded-lg p-2 bg-toastMessage">
            <InfoCircledIcon width="30px" height="30px" />
          </div>
        )}

        <div>
          <ToastUI.Title className="font-bold text-sm">{title}</ToastUI.Title>

          <ToastUI.Description asChild>
            <span className="text-sm">{description}</span>
          </ToastUI.Description>
        </div>
      </ToastUI.Root>
      <ToastUI.Viewport className="ToastViewport" />
    </ToastUI.Provider>
  );
}

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}
