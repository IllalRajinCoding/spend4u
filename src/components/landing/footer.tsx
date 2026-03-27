import Link from "next/link";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
];

export function LandingFooter() {
  return (
    <footer
      id="docs"
      className="mx-auto mt-16 w-full max-w-7xl border-t border-slate-200 pt-10 pb-12"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-slate-900">
            SPEND4U
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Premium command center for product, finance, and strategy operators.
          </p>
        </div>

        <FooterColumn title="Product" links={productLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: Readonly<FooterColumnProps>) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-800">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
