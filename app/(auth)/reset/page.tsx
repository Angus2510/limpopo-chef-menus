"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ResetPage() {
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function requestCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "request", email }),
      });
      const data = await response.json();
      setMessage(data?.message || "Reset request sent");
      if (data?.resetCode) {
        setMessage(`Reset code: ${data.resetCode}`);
      }
    } finally {
      setLoading(false);
    }
  }

  async function resetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "reset",
          email,
          resetCode,
          newPassword,
        }),
      });
      const data = await response.json();
      setMessage(data?.message || "Password updated");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Reset Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-3" onSubmit={requestCode}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <Button className="w-full" disabled={loading} type="submit">
              Request reset code
            </Button>
          </form>

          <form className="space-y-3" onSubmit={resetPassword}>
            <Input
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              type="text"
              placeholder="Reset code"
              required
            />
            <Input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="New password"
              required
            />
            <Button className="w-full" disabled={loading} type="submit">
              Reset password
            </Button>
          </form>

          {message ? (
            <p className="text-sm text-muted-foreground">{message}</p>
          ) : null}
        </CardContent>
        <CardFooter>
          <Link
            className="text-sm text-primary underline-offset-4 hover:underline"
            href="/login"
          >
            Back to login
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
