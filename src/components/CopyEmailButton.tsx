"use client";

import { useState } from "react";

const EMAIL = "huni00807@pusan.ac.kr";

export default function CopyEmailButton({
  className = "",
}: {
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      // navigator.clipboard가 막힌 환경용 fallback
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    }
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      className={className}
      aria-label="Copy email address"
    >
      {copied ? "Copied!" : EMAIL}
    </button>
  );
}