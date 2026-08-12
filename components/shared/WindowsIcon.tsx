type WindowsIconProps = {
  className?: string;
};

/** Simple Windows mark for download CTAs (not a Lucide brand icon). */
export function WindowsIcon({ className }: WindowsIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 5.5 11.2 4.3v7.2H3V5.5Zm8.8 7.4v7.3L3 18.8v-5.9h8.8ZM12.8 4.1 21 3v8.5h-8.2V4.1Zm8.2 9.1V21l-8.2-1.2v-6.6H21Z" />
    </svg>
  );
}
