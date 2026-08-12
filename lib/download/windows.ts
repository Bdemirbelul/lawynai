const FALLBACK_WINDOWS_DOWNLOAD_URL =
  "https://github.com/Bdemirbelul/lawyn-ai-releases/releases/latest/download/Lawyn-AI-Setup.exe";

export function getWindowsDownloadUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL?.trim();
  return fromEnv || FALLBACK_WINDOWS_DOWNLOAD_URL;
}
