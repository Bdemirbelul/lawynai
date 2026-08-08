"use client";

import { type FormEvent, useId, useState } from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormStatus = "idle" | "loading" | "success" | "error";

export function NewsletterSection() {
  const { t } = useLanguage();
  const inputId = useId();
  const messageId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("error");
      setMessage(t.insightsPage.newsletter.invalid);
      return;
    }

    setStatus("loading");
    setMessage("");

    await new Promise((resolve) => {
      window.setTimeout(resolve, 650);
    });

    setStatus("success");
    setMessage(t.insightsPage.newsletter.success);
    setEmail("");
  }

  return (
    <section className="bg-[#E8EDFF]">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center px-5 py-14 text-center md:px-8 md:py-16 lg:py-20">
        <span className="inline-flex size-12 items-center justify-center rounded-full border border-[#3154D5]/30 text-[#3154D5]">
          <Mail className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </span>

        <h2 className="mt-5 font-serif text-[clamp(1.7rem,3vw,2.4rem)] font-medium leading-[1.15] tracking-[-0.015em] text-[#101828]">
          {t.insightsPage.newsletter.heading}
        </h2>
        <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[#475467]">
          {t.insightsPage.newsletter.description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
          noValidate
        >
          <label htmlFor={inputId} className="sr-only">
            {t.insightsPage.newsletter.placeholder}
          </label>
          <input
            id={inputId}
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") {
                setStatus("idle");
                setMessage("");
              }
            }}
            placeholder={t.insightsPage.newsletter.placeholder}
            aria-invalid={status === "error"}
            aria-describedby={message ? messageId : undefined}
            className="h-12 w-full flex-1 rounded-md border border-[#D0D5DD] bg-white px-4 text-[14px] text-[#101828] outline-none transition-[border-color,box-shadow] placeholder:text-[#98A2B3] focus:border-[#3154D5] focus:shadow-[0_0_0_3px_rgba(49,84,213,0.15)]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-[#050505] px-6 text-[13.5px] font-medium text-white transition-colors hover:bg-[#1a1a1a] disabled:cursor-wait disabled:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
          >
            {status === "loading"
              ? t.insightsPage.newsletter.loading
              : t.insightsPage.newsletter.button}
          </button>
        </form>

        {message ? (
          <p
            id={messageId}
            role="status"
            className={`mt-3 text-[13px] ${
              status === "error" ? "text-[#B42318]" : "text-[#027A48]"
            }`}
          >
            {message}
          </p>
        ) : null}

        <p className="mt-4 text-[12px] leading-relaxed text-[#667085]">
          {t.insightsPage.newsletter.notice}
        </p>
      </div>
    </section>
  );
}
