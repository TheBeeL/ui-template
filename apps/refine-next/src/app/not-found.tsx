"use client";

import { Suspense } from "react";
import { ErrorComponent } from "@refinedev/core";
import { Authenticated } from "@refinedev/core";

export default function NotFound() {
  return (
    <Suspense>
      <Authenticated key="not-found">
        <ErrorComponent />
      </Authenticated>
    </Suspense>
  );
}
