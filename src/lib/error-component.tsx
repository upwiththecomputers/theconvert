import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-cream px-6 text-center text-ink">
      <p className="font-display text-[0.68rem] uppercase tracking-[0.28em] text-gold-ink">
        Error
      </p>
      <h1 className="font-display text-2xl tracking-[0.08em]">
        Something went wrong
      </h1>
      <p className="max-w-md text-base break-words text-muted">
        {errorMessage(error)}
      </p>
    </main>
  );
}
