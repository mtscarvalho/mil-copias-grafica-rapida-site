import Link from "next/link";

import { Button } from "@/components/Button";
import { quoteWhatsAppUrl } from "@/utilities/generate-whatsapp-link";
import { MilCopias } from "../MilCopias";
import { WhatsApp } from "../SocialIcon";

export async function Header() {
  return (
    <header>
      <Button variant="primary" size="md" className="skip-to-main" asChild>
        <Link href="#conteudo">Pular para o conteúdo</Link>
      </Button>
      <div className="absolute top-0 left-0 z-10 h-auto w-full overflow-auto py-6 sm:px-6 sm:py-12">
        <div className="container h-full py-2.5">
          <div className="flex w-full items-center justify-between">
            <MilCopias className="w-full max-w-[234px]" />
            <nav className="shrink-0 max-md:hidden">
              <ul className="flex gap-2">
                <li className="mb-2 lg:mb-0">
                  <Button size="md" asChild>
                    <Link href={quoteWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                      <WhatsApp />
                      Solicitar orçamento
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
