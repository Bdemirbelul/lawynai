"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { DemoSuccessDialog } from "@/components/contact/DemoSuccessDialog";
import { LegalNoticeDialog } from "@/components/contact/LegalNoticeDialog";
import {
  contactMethodValues,
  createDemoRequestSchema,
  demoSchemaMessages,
  solutionInterestValues,
  teamSizeValues,
  type DemoRequestPayload,
} from "@/lib/contact/demoRequestSchema";
import { submitDemoRequest } from "@/lib/contact/submitDemoRequest";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const fieldClass =
  "h-11 w-full border-0 border-b border-[#D0D5DD] bg-transparent px-0 text-[14px] text-[#101828] outline-none transition-[border-color] placeholder:text-[#98A2B3] focus:border-[#3154D5]";

const labelClass =
  "mb-1.5 block text-[11px] font-semibold tracking-[0.08em] text-[#667085] uppercase";

type FormValues = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  teamSize: string;
  solutionInterest: string;
  message: string;
  preferredContact: string;
  consent: boolean;
};

export function DemoRequestForm() {
  const { locale, t } = useLanguage();
  const [dialog, setDialog] = useState<"notice" | "policy" | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [formStartedAt] = useState(() => Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  const schema = useMemo(
    () => createDemoRequestSchema(demoSchemaMessages[locale]),
    [locale],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<FormValues, unknown, DemoRequestPayload>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      teamSize: "",
      solutionInterest: "",
      message: "",
      preferredContact: "",
      consent: false,
    },
  });

  useEffect(() => {
    const order: (keyof FormValues)[] = [
      "fullName",
      "company",
      "email",
      "phone",
      "teamSize",
      "solutionInterest",
      "message",
      "preferredContact",
      "consent",
    ];
    const firstError = order.find((key) => errors[key]);
    if (firstError) setFocus(firstError);
  }, [errors, setFocus]);

  async function onSubmit(values: DemoRequestPayload) {
    setStatusMessage(null);
    const result = await submitDemoRequest({
      ...values,
      locale,
      website: honeypotRef.current?.value ?? "",
      formStartedAt,
    });

    if (!result.ok) {
      if (result.code === "rate_limited") {
        setStatusMessage(t.contactPage.rateLimited);
      } else if (result.code === "spam_detected") {
        setStatusMessage(t.contactPage.spamDetected);
      } else {
        setStatusMessage(t.contactPage.error);
      }
      return;
    }

    reset();
    if (honeypotRef.current) honeypotRef.current.value = "";
    setSuccessOpen(true);
  }

  return (
    <>
      <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-[0_24px_48px_-28px_rgba(16,24,40,0.35)] sm:p-8 lg:p-10">
        <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2rem)] font-medium text-[#101828]">
          {t.contactPage.formTitle}
        </h2>
        <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-[#667085]">
          {t.contactPage.formDescription}
        </p>

        <form
          className="relative mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Honeypot — leave empty; hidden from users, filled by many bots */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
          >
            <label htmlFor="website">Website</label>
            <input
              ref={honeypotRef}
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              id="fullName"
              label={t.contactPage.fields.fullName}
              error={errors.fullName?.message}
            >
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                className={fieldClass}
                aria-invalid={Boolean(errors.fullName)}
                {...register("fullName")}
              />
            </Field>

            <Field
              id="company"
              label={t.contactPage.fields.company}
              error={errors.company?.message}
            >
              <input
                id="company"
                type="text"
                autoComplete="organization"
                className={fieldClass}
                aria-invalid={Boolean(errors.company)}
                {...register("company")}
              />
            </Field>

            <Field
              id="email"
              label={t.contactPage.fields.email}
              error={errors.email?.message}
            >
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={fieldClass}
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
            </Field>

            <Field
              id="phone"
              label={t.contactPage.fields.phone}
              error={errors.phone?.message}
            >
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                className={fieldClass}
                aria-invalid={Boolean(errors.phone)}
                {...register("phone")}
              />
            </Field>

            <Field
              id="teamSize"
              label={t.contactPage.fields.teamSize}
              error={errors.teamSize?.message}
            >
              <select
                id="teamSize"
                className={`${fieldClass} appearance-none pr-6`}
                aria-invalid={Boolean(errors.teamSize)}
                {...register("teamSize")}
              >
                <option value="">{t.contactPage.fields.teamSizePlaceholder}</option>
                {teamSizeValues.map((value) => (
                  <option key={value} value={value}>
                    {t.contactPage.teamSizes[value]}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              id="solutionInterest"
              label={t.contactPage.fields.solutionInterest}
              error={errors.solutionInterest?.message}
            >
              <select
                id="solutionInterest"
                className={`${fieldClass} appearance-none pr-6`}
                aria-invalid={Boolean(errors.solutionInterest)}
                {...register("solutionInterest")}
              >
                <option value="">
                  {t.contactPage.fields.solutionPlaceholder}
                </option>
                {solutionInterestValues.map((value) => (
                  <option key={value} value={value}>
                    {t.contactPage.solutions[value]}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            id="message"
            label={t.contactPage.fields.message}
            error={errors.message?.message}
            hint={t.contactPage.messageHint}
          >
            <textarea
              id="message"
              rows={3}
              className="min-h-[88px] w-full resize-y border-0 border-b border-[#D0D5DD] bg-transparent px-0 py-2 text-[14px] text-[#101828] outline-none transition-[border-color] placeholder:text-[#98A2B3] focus:border-[#3154D5]"
              aria-invalid={Boolean(errors.message)}
              {...register("message")}
            />
          </Field>

          <Field
            id="preferredContact"
            label={t.contactPage.fields.preferredContact}
            error={errors.preferredContact?.message}
          >
            <select
              id="preferredContact"
              className={`${fieldClass} appearance-none pr-6`}
              aria-invalid={Boolean(errors.preferredContact)}
              {...register("preferredContact")}
            >
              <option value="">
                {t.contactPage.fields.preferredContact}
              </option>
              {contactMethodValues.map((value) => (
                <option key={value} value={value}>
                  {t.contactPage.contactMethods[value]}
                </option>
              ))}
            </select>
          </Field>

          <div>
            <label className="flex items-start gap-3 text-[13px] leading-relaxed text-[#475467]">
              <input
                type="checkbox"
                className="mt-1 size-4 rounded border-[#D0D5DD] text-[#3154D5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                aria-invalid={Boolean(errors.consent)}
                {...register("consent")}
              />
              <span>
                {locale === "tr" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setDialog("notice")}
                      className="font-medium text-[#3154D5] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                    >
                      {t.contactPage.fields.privacyNotice}
                    </button>
                    {t.contactPage.fields.noticeParticle}
                    {` ${t.contactPage.fields.and} `}
                    <button
                      type="button"
                      onClick={() => setDialog("policy")}
                      className="font-medium text-[#3154D5] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                    >
                      {t.contactPage.fields.privacyPolicy}
                    </button>
                    {t.contactPage.fields.consentSuffix}
                  </>
                ) : (
                  <>
                    {`${t.contactPage.fields.consentPrefix} `}
                    <button
                      type="button"
                      onClick={() => setDialog("notice")}
                      className="font-medium text-[#3154D5] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                    >
                      {t.contactPage.fields.privacyNotice}
                    </button>
                    {` ${t.contactPage.fields.and} `}
                    <button
                      type="button"
                      onClick={() => setDialog("policy")}
                      className="font-medium text-[#3154D5] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5]"
                    >
                      {t.contactPage.fields.privacyPolicy}
                    </button>{" "}
                    {t.contactPage.fields.consentSuffix}
                  </>
                )}
              </span>
            </label>
            {errors.consent?.message ? (
              <p className="mt-2 text-[12px] text-[#B42318]" role="alert">
                {errors.consent.message}
              </p>
            ) : null}
          </div>

          {statusMessage ? (
            <p
              role="alert"
              className="rounded-lg bg-[#FEF3F2] px-3 py-2.5 text-[13px] leading-relaxed text-[#B42318]"
            >
              {statusMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#050505] px-6 text-[13.5px] font-medium text-white transition-colors hover:bg-[#1a1a1a] disabled:cursor-wait disabled:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                {t.contactPage.submitting}
              </>
            ) : (
              <>
                {t.contactPage.submit}
                <ArrowRight className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      </div>

      <LegalNoticeDialog
        open={dialog !== null}
        kind={dialog ?? "notice"}
        onClose={() => setDialog(null)}
      />
      <DemoSuccessDialog
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div
        aria-describedby={[error ? errorId : null, hint ? hintId : null]
          .filter(Boolean)
          .join(" ") || undefined}
      >
        {children}
      </div>
      {hint ? (
        <p id={hintId} className="mt-1.5 text-[11px] text-[#98A2B3]">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-1.5 text-[12px] text-[#B42318]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
