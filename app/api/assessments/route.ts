import { NextRequest, NextResponse } from "next/server";

import {
  ASSESSMENT_CATEGORY_LABELS,
  ASSESSMENT_TEMPLATES,
} from "@/lib/assessment-catalog";
import { getStaffIdFromRequest } from "@/lib/auth-token";

export async function GET(req: NextRequest) {
  const auth = getStaffIdFromRequest(req);
  if ("error" in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  const grouped = Object.entries(ASSESSMENT_CATEGORY_LABELS).map(
    ([category, label]) => ({
      category,
      label,
      items: ASSESSMENT_TEMPLATES.filter(
        (item: (typeof ASSESSMENT_TEMPLATES)[number]) =>
          item.category === category,
      ),
    }),
  );

  return NextResponse.json({ assessments: ASSESSMENT_TEMPLATES, grouped });
}
