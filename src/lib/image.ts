/**
 * Ref callback for an <img> that flags it as broken when the load already
 * failed before React attached its onError handler — which is what happens to
 * server-rendered markup during hydration.
 */
export function markMissingIfBroken(setMissing: (v: boolean) => void) {
  return (node: HTMLImageElement | null) => {
    if (node && node.complete && node.naturalWidth === 0) setMissing(true);
  };
}
