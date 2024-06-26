"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
  const path = usePathname();
  const breadcrumb = path
    .split("/")
    .filter(Boolean)
    .map((path, idx, arr) => ({
      href: `/${arr.slice(0, idx).join("/")}/${path}`.replace(/\/\//g, "/"),
      label: `${arr[idx]}`,
    }));

  return (
    <nav aria-label="breadcrumb">
      <ul>
        {breadcrumb.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} children={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
