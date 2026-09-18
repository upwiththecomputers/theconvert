import { cn } from "@/lib/utils";

export function CrossMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 32"
      className={cn("inline-block", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <rect x="10" y="0" width="4" height="32" rx="0.4" fill="currentColor" />
      <rect x="2" y="8" width="20" height="4" rx="0.4" fill="currentColor" />
    </svg>
  );
}

export function RuleCross({ className }: { className?: string }) {
  return (
    <div className={cn("rule-cross", className)} aria-hidden="true">
      <CrossMark className="h-5 w-4" />
    </div>
  );
}
