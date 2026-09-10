import { buttonVariants } from "@/components/ui/button";

export function PrintActions({ downloadUrl }: { downloadUrl: string }) {
  return (
    <div className="no-print mb-4 flex justify-end gap-2">
      <a href={downloadUrl} download className={buttonVariants()}>
        Download PDF
      </a>
    </div>
  );
}
