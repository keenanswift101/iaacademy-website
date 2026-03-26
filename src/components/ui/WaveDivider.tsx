/**
 * WaveDivider — full-width SVG shape used to create organic transitions
 * between sections. The outer div carries the "from" section's background
 * colour; the SVG path is filled with the "to" section's colour.
 */

type WaveVariant = "wave" | "curve" | "tilt" | "blob";

interface WaveDividerProps {
  /** Background colour matching the section ABOVE this divider */
  fromColor: string;
  /** Fill colour matching the section BELOW this divider */
  toColor: string;
  /** Flip vertically — converts a "crest up" wave to a "crest down" wave */
  flip?: boolean;
  /** Shape style */
  variant?: WaveVariant;
  /** Height in px (default 72) */
  height?: number;
}

const PATHS: Record<WaveVariant, string> = {
  // Smooth double-crest sine wave
  wave:  "M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z",
  // Single soft arch
  curve: "M0,0 Q720,72 1440,0 L1440,72 L0,72 Z",
  // Gentle diagonal tilt
  tilt:  "M0,56 L1440,0 L1440,72 L0,72 Z",
  // Asymmetric organic blob edge
  blob:  "M0,48 C160,72 320,24 480,48 C640,72 800,20 960,44 C1120,68 1300,16 1440,36 L1440,72 L0,72 Z",
};

export default function WaveDivider({
  fromColor,
  toColor,
  flip = false,
  variant = "wave",
  height = 72,
}: WaveDividerProps) {
  return (
    <div
      style={{
        background: fromColor,
        lineHeight: 0,
        display: "block",
        transform: flip ? "scaleY(-1)" : undefined,
        marginTop: -1, // closes sub-pixel gap between section and divider
        marginBottom: -1,
      }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height }}
      >
        <path d={PATHS[variant]} fill={toColor} />
      </svg>
    </div>
  );
}
