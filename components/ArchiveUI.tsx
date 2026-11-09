import React, { useEffect, useRef, useState } from "react";
import { Product } from "../types";

export function Arrow() {
  return (
    <svg
      className="arrow-icon"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}
export function Picture({
  product,
  eager = false,
}: {
  product: Product;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return failed || !product.imageUrl ? (
    <div
      className="image-fallback"
      role="img"
      aria-label={`${product.name}: ${failed ? "image unavailable" : "photo not yet catalogued"}`}
    >
      <span aria-hidden="true">▧</span>
      <small>
        {product.name}
        <br />
        {failed ? "Image unavailable" : "Photo not yet catalogued"}
      </small>
    </div>
  ) : (
    <img
      src={product.imageUrl}
      alt={product.name}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}
export function Modal({
  title,
  children,
  onClose,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  wide?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef(document.activeElement as HTMLElement);
  useEffect(() => {
    const previous = triggerRef.current;
    const node = ref.current;
    ref.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      node?.close();
      queueMicrotask(() => previous?.focus());
    };
  }, []);
  return (
    <dialog
      ref={ref}
      onKeyDown={(e) => {
        if (e.key !== "Tab") return;
        const elements = ref.current?.querySelectorAll<HTMLElement>(
          'button:not(:disabled), a[href], input, select, textarea, [tabindex="0"]',
        );
        if (!elements?.length) return;
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }}
      className={wide ? "wide" : ""}
      aria-label={title}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) {
          const r = ref.current!.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      <div className="dialog-heading">
        <span className="eyebrow">THE HARDWARE ARCHIVE</span>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}
