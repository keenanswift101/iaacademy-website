import Image from "next/image";

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  className?: string;
  rounded?: boolean;
}

const aspectMap = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
};

export default function ImagePlaceholder({
  label = "Image coming soon",
  aspectRatio = "16/9",
  className = "",
  rounded = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectMap[aspectRatio]} ${rounded ? "rounded-xl" : ""} ${className} flex flex-col items-center justify-center gap-4 overflow-hidden`}
      style={{
        background: "var(--color-surface-mid)",
        border: "1.5px dashed var(--color-surface-highest)",
        position: "relative",
      }}
      role="img"
      aria-label={label}
    >
      {/* Calming pulse overlay */}
      <div
        className="calm-pulse"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(94,0,129,0.12) 0%, rgba(94,0,129,0) 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Logo — black circle like hero */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: 72,
          height: 72,
          background: "#000000",
          borderRadius: "9999px",
          border: "2px solid rgba(240,192,64,0.5)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/logo-trns.png"
          alt=""
          width={56}
          height={56}
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      <p
        className="text-xs font-medium text-center px-4"
        style={{ color: "var(--color-on-surface-muted)", position: "relative", zIndex: 1 }}
      >
        {label}
      </p>
    </div>
  );
}
