import Link from "next/link";

type LinkItem = {
  name: string;
  href: string;
  external?: boolean;
};

type Props = {
  title: string;
  items: LinkItem[];
};

export default function LinkSection({ title, items }: Props) {
  return (
    <div>
      <h3 className="text-base font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-subtle text-sm">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="hover:text-foreground/80 transition"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
