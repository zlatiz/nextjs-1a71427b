import React from "react";

export default function Button({ href, children }: { href: string; children: React.ReactNode; }): JSX.Element {
  return (
    <a href={href} className="btn-primary whitespace-nowrap inline-block" role="button">
      {children}
    </a>
  );
}
