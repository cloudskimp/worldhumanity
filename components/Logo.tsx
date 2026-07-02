import Image from "next/image";

export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="World Humanity Inc. logo"
      width={120}
      height={120}
      className={className}
      priority
    />
  );
}
