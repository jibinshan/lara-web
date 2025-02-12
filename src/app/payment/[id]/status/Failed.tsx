import type { RefreshPayment } from "@/types/refresh-payment.type";

export default function Failed({ data }: { data: RefreshPayment }) {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <p className="text-4xl font-[600] tracking-[2px] text-menuprimary">Payment Failed</p>
            <p className="text-lg">Please try again or contact support if the problem persists.</p>

            {JSON.stringify(data)}
        </div>
    );
}
