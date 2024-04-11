import Image from "next/image";
import { mapStackToImageRoute } from "app/utils/mapStackToImageRoute";

export default function TechStackCard({
  stack,
  className,
}: {
  stack: string;
  className?: string;
}) {
  const imgRoute = mapStackToImageRoute(stack);
  return (
    <div
      className={`${className} flex items-center gap-[2px] rounded-xl border-2 border-black bg-white px-2 py-1 text-xs text-black transition-all hover:scale-110`}
    >
      <Image src={imgRoute} alt={stack} width={18} height={18} />
      <span className="font-bold">{stack}</span>
    </div>
  );
}
