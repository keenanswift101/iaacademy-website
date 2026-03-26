export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/264817296626?text=Hi%20IA%20Academy%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20school."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105 focus-visible:ring-2"
      style={{ background: "#25D366" }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.67 4.83 1.84 6.87L2 30l7.32-1.81A13.94 13.94 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm6.77 19.64c-.28.79-1.63 1.51-2.24 1.6-.57.08-1.3.12-2.1-.13a18.92 18.92 0 0 1-1.9-.7c-3.35-1.45-5.54-4.83-5.71-5.05-.17-.22-1.38-1.84-1.38-3.5 0-1.67.87-2.49 1.18-2.83.31-.34.67-.43.9-.43.22 0 .45.01.65.01.21 0 .49-.08.77.59.29.68 1 2.47 1.08 2.65.09.18.14.39.03.62-.11.23-.17.38-.33.58-.17.2-.35.45-.5.6-.17.16-.34.34-.15.67.19.33.85 1.4 1.82 2.26 1.25 1.12 2.3 1.47 2.63 1.63.32.17.51.14.7-.08.19-.22.81-.95 1.03-1.27.22-.33.43-.27.72-.16.29.11 1.84.87 2.16 1.03.32.16.53.24.6.37.08.13.08.74-.2 1.53z" />
      </svg>
    </a>
  );
}
