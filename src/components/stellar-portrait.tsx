import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  captionClassName?: string;
  priority?: boolean;
} & HTMLAttributes<HTMLElement>;

export function StellarPortrait({
  src,
  alt,
  caption,
  className,
  imgClassName,
  captionClassName,
  priority,
  ...rest
}: Props) {
  return (
    <figure className={cn("relative", className)} {...rest}>
      <div className="relative overflow-hidden bg-cream">
        <img
          src={src}
          alt={alt}
          width={1200}
          height={1600}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "block h-full w-full object-cover outline outline-1 -outline-offset-1 outline-ink/15",
            imgClassName,
          )}
        />
      </div>
      {caption ? (
        <figcaption
          className={cn(
            "mt-3 font-display text-[0.68rem] uppercase tracking-[0.22em] text-muted",
            captionClassName,
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
