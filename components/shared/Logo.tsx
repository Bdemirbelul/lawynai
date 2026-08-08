import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3154D5] ${className}`}
      aria-label="Lawyn AI"
    >
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-[9px] shadow-[0_1px_2px_rgba(16,24,40,0.18)] ${
          isLight ? "bg-white text-[#0B1220]" : "bg-[#0B1220] text-white"
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[14px]"
        >
          <path
            d="M12 3.75v2.1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7.25 8.1h9.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M8.2 8.1c0 2.55-1.2 4.55-2.7 5.35-.25.15-.4.4-.4.7v.35c0 .4.3.7.7.7h3.4"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8 8.1c0 2.55 1.2 4.55 2.7 5.35.25.15.4.4.4.7v.35c0 .4-.3.7-.7.7h-3.4"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2 15.2h3.6c.55 0 1 .45 1 1v1.15c0 .55-.45 1-1 1h-3.6c-.55 0-1-.45-1-1V16.2c0-.55.45-1 1-1Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span
        className={`font-serif text-[15px] font-semibold uppercase leading-none tracking-[0.06em] transition-colors ${
          isLight
            ? "text-white group-hover:text-[#C7D2FE]"
            : "text-[#101828] group-hover:text-[#3154D5]"
        }`}
      >
        Lawyn AI
      </span>
    </Link>
  );
}
