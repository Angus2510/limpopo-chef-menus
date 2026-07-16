"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AccountDisabledPage() {
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Account Blocked
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-red-50 p-4 text-red-700">
            Your account has been disabled due to outstanding fees or account
            restrictions.
          </div>
          <p className="text-sm text-muted-foreground">
            Contact Finance: 076 191 2732 or finance@limpopochefs.co.za
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLogout} variant="outline">
            Return to Login
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
