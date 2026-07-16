"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SetCookiePage() {
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const accessToken = searchParams.get("accessToken");
    const redirectUrl = searchParams.get("redirect") || "/";

    if (!accessToken) {
      router.push("/login");
      return;
    }

    document.cookie = `accessToken=${accessToken}; path=/; max-age=${60 * 60 * 5}; samesite=lax`;
    router.push(redirectUrl);
  }, [router]);

  return null;
}
