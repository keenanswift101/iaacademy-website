import Link from "next/link";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({ label, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section
      className="px-6 py-16 sm:py-20"
      style={{
        background: "linear-gradient(145deg, #f2eaff 0%, #ede1ff 40%, #fdf6e0 100%)",
        borderBottom: "1px solid rgba(94,0,129,0.07)",
        color: "var(--color-on-surface)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
              <li><Link href="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
              {breadcrumb.map(({ label: crumbLabel, href }, i) => (
                <li key={href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {i === breadcrumb.length - 1 ? (
                    <span aria-current="page" className="opacity-100 font-medium">{crumbLabel}</span>
                  ) : (
                    <Link href={href} className="hover:opacity-100 transition-opacity">{crumbLabel}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {label && (
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
            {label}
          </p>
        )}
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-85">{description}</p>
        )}
      </div>
    </section>
  );
}
