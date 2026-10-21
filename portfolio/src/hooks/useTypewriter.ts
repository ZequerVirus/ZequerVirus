import { useEffect, useState } from "react";

interface Options {
  enabled?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export function useTypewriter(
  words: readonly string[],
  { enabled = true, typeSpeed = 55, deleteSpeed = 28, pause = 1800 }: Options = {},
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const current = words[index];
    const finished = !deleting && text === current;

    const id = window.setTimeout(
      () => {
        if (finished) {
          setDeleting(true);
          return;
        }
        if (deleting && text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      },
      finished ? pause : deleting ? deleteSpeed : typeSpeed,
    );

    return () => window.clearTimeout(id);
  }, [enabled, words, index, text, deleting, typeSpeed, deleteSpeed, pause]);

  return enabled ? text : words[0];
}
