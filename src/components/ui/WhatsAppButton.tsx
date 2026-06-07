"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/264817296626?text=Hi%20IA%20Academy%2C%20I%27d%20like%20more%20information"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with IA Academy on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-3 shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        background: "#25D366",
        color: "#fff",
        boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.077a.75.75 0 00.921.921L6.2 22.481A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.197-1.367l-.374-.216-3.877 1.017 1.018-3.804-.234-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.507-7.557c-.275-.138-1.628-.803-1.88-.894-.25-.092-.433-.138-.615.138-.183.275-.707.894-.867 1.077-.16.183-.318.206-.593.069-.275-.138-1.16-.428-2.21-1.364-.817-.728-1.368-1.628-1.529-1.903-.16-.275-.017-.424.12-.561.123-.123.275-.32.413-.48.138-.16.183-.275.275-.458.092-.183.046-.344-.023-.482-.069-.138-.615-1.484-.843-2.032-.222-.533-.448-.46-.615-.468l-.524-.009c-.183 0-.48.069-.731.344-.251.275-.96.938-.96 2.287s.983 2.652 1.12 2.835c.138.183 1.934 2.952 4.686 4.14.655.283 1.166.452 1.564.579.657.209 1.255.179 1.728.109.527-.079 1.628-.665 1.858-1.308.23-.643.23-1.194.16-1.308-.069-.115-.25-.183-.525-.32z" />
      </svg>
      <span className="text-sm font-semibold">Chat with us</span>
    </a>
  );
}
