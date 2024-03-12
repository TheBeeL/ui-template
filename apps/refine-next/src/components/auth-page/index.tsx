"use client";
import { Button } from "@acme/ui";
import { AuthPage as AuthPageBase } from "@refinedev/core";
import type { AuthPageProps } from "@refinedev/core";

export const AuthPage = (props: AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      renderContent={(content) => (
        <div>
          <Button>Click me</Button>
          <p
            style={{
              padding: 10,
              color: "#004085",
              backgroundColor: "#cce5ff",
              borderColor: "#b8daff",
              textAlign: "center",
            }}
          >
            email: demo@refine.dev
            <br /> password: demodemo
          </p>
          {content}
        </div>
      )}
    />
  );
};
