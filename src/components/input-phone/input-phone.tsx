import React, { useCallback } from "react";
import Input from "../input";

export function containOnlyNumbersAndDashes(text: string) {
  return /^[0-9-]+$/.test(text);
}

export default function InputPhone(props: React.HTMLProps<HTMLInputElement>) {
  // Prevent press any non numeric characters and dashes
  const onKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      console.log("press");
      if (!containOnlyNumbersAndDashes(key)) {
        event.preventDefault();
        console.log("preventDefault");
        return false;
      }
    },
    []
  );

  // Prevent copy paste any non numeric characters and dashes text
  const onPaste = useCallback((event: React.ClipboardEvent) => {
    const text = event.clipboardData.getData("Text");
    if (!containOnlyNumbersAndDashes(text)) {
      event.preventDefault();
    }
  }, []);

  return <Input onKeyPress={onKeyPress} onPaste={onPaste} aria-label="input-phone" {...props} />;
}
