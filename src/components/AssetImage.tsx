import { useState } from "react";

import { markMissingIfBroken } from "@/lib/image";
import { cn } from "@/lib/utils";

type AssetImageProps = {
  /** Path under /public, e.g. "/Assets/induction.jpg" */
  src: string;
  alt: string;
  className?: string;
  /** Shown inside the placeholder box while the real file is missing. */
  hint?: string;
  rounded?: string;
};

/**
 * Renders an image from /public. Until the real file is dropped in, it reserves
 * exactly the same space and shows a dashed slot naming the file it expects —
 * so the layout never shifts once the assets are copied over.
 */
export function AssetImage({
  src,
  alt,
  className,
  hint,
  rounded = "rounded-2xl",
}: AssetImageProps) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div
        role="img"
        aria-label={`${alt} (image not added yet)`}
        className={cn(
          "grid place-items-center border border-dashed border-primary/35 bg-secondary/50 p-3 text-center",
          rounded,
          className,
        )}
      >
        <span className="text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-muted-foreground">
          Add image
          <span className="mt-1 block break-all font-normal normal-case tracking-normal opacity-70">
            {hint ?? src}
          </span>
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setMissing(true)}
      // The server-rendered <img> can finish failing before React attaches
      // onError, so also check the already-settled state on mount.
      ref={markMissingIfBroken(setMissing)}
      className={cn("object-cover", rounded, className)}
    />
  );
}
