"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navItems = [
  {
    href: "/dashboard/assessments",
    label: "Assessments",
    description: "Select intake, student, and menu",
    badge: "Core",
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-full">
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Limpopo Chefs Academy
          </p>
          <h2 className="mt-1 text-base font-semibold">Menu Marking Portal</h2>
        </div>
        <Separator />
        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg border p-3 transition-colors",
                  active
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:bg-muted/40",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium">{item.label}</p>
                  <Badge variant="secondary">{item.badge}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>
    </ScrollArea>
  );
}
