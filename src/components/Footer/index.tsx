import Link from "next/link";

import { getCurrentYear } from "@/utilities/get-current-year";

import { Button } from "@/components/Button";
import { MilCopias } from "@/components/MilCopias";
import { Social } from "@/components/Social";
import { careerWhatsAppUrl, contactWhatsAppUrl, quoteWhatsAppUrl } from "@/utilities/generate-whatsapp-link";

const MENU_INSTITUTIONAL = [
  { label: "Tipos de materiais", href: "#tipos-de-materiais" },
  { label: "Solicitar orçamento", href: quoteWhatsAppUrl, external: true },
  { label: "Política de privacidade", href: "https://milcopias.com.br/politica-de-privacidade" },
];

const MENU_CONTACT = [
  { label: "Tire suas dúvidas", href: contactWhatsAppUrl, external: true },
  { label: "Trabalhe conosco", href: careerWhatsAppUrl, external: true },
  { label: "graficarapida@milcopias.com.br", href: "/trabalhe-conosco/", external: true },
  { label: "(27) 3372-7171", href: "mailto:contato@milcopias.com.br", external: true },
  { label: "Av. Augusto de Carvalho, 1435 Centro, Linhares/ES CEP: 29900-153", href: "https://maps.app.goo.gl/9gvBDJ5S6juLyLs69", external: true },
];

export async function Footer() {
  return (
    <footer className="bg-primary text-on-brand-primary py-12" data-theme="dark">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <Link className="block" href="/" aria-label="Mil Cópias Tecnologia">
            <MilCopias className="w-44" mono />
          </Link>
          <div className="text-secondary space-y-2 text-sm">
            <p>A Mil Cópias Gráfica Rápida tem mais de 40 anos de experiência atendendo todas necessidades de impressão, comunicação visual e materiais gráficos personalizados.</p>
            <p className="text-sm">
              Todos os direitos reservados. © {getCurrentYear()} Mil Cópias. <br />
              Site criado por{" "}
              <Link className="hover:text-primary underline transition-colors duration-300" href="https://jogajunto.co/" target="_blank" rel="noopener">
                Jogajunto
              </Link>
            </p>
          </div>
          <Social />
        </div>
        <div className="space-y-2">
          <h2 className="text-primary-secondary border-b border-neutral-600 pb-3 font-semibold">A Mil Cópias Gráfica Rápida</h2>
          <ul className="-translate-x-3">
            {MENU_INSTITUTIONAL.map((item) => (
              <li key={item.label}>
                <Button size="md" variant="subtle" fullWidth asChild>
                  <Link href={item.href} target={item.external ? "_blank" : ""} rel={item.external ? "noopener noreferrer" : undefined}>
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-primary-secondary border-b border-neutral-600 pb-3 font-semibold">Contato e informações</h2>
          <ul className="-translate-x-3">
            {MENU_CONTACT.map((item) => (
              <li key={item.label}>
                <Button size="md" variant="subtle" fullWidth asChild>
                  <Link href={item.href} target={item.external ? "_blank" : ""} rel={item.external ? "noopener noreferrer" : undefined}>
                    {item.label}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
