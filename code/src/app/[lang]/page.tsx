import Link from "next/link";

import { Content, Hero, SocialProof } from "@/UI";
import { Button } from "@nextui-org/react";
import { getTranslations } from "@/translations/translations";
import { AvailableLocales } from "@/translations/translations";

export default async function Home({
  params: { lang },
}: {
  params: { lang: AvailableLocales };
}) {
  const translations = await getTranslations(lang);
  return (
    <div>
      <Hero
        title={translations.home.header.title}
        cta={
          <>
            <h2 className="font-bold text-4xl mb-4 mt-6">
              {translations.home.header.subtitle}
            </h2>
            <p>{translations.home.header.text}</p>
          </>
        }
        actions={[
          <Button
            as={Link}
            href="/contact-sales"
            color="primary"
            variant="shadow"
            key="first"
            size="lg"
          >
            {translations.home.header.button}
          </Button>,
          <Button
            as={Link}
            href="/pricing"
            color="primary"
            variant="ghost"
            key="second"
            size="lg"
          >
            {translations.home.header.secondary_button}
          </Button>,
        ]}
      />
      <Content
        title="Un sistema de ticketing a tu medida"
        image="https://picsum.photos/200/300"
        texts={[
          <div key="first text" className="flex-col gap-y-2">
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Ofrece presupuestos
            </h3>
            <p>
              Conecta MCTS en tu sitio web para permitir que tus clientes
              soliciten presupuesto. Aprovecha las ventajas de su{" "}
              <span className="font-semibold">IA integrada</span> para responder
              automáticamente y filtrar las conversiones de mayor potencial.
            </p>
          </div>,
          <div key="second text" className="flex-col gap-y-2">
            <h3 className="text-xl font-semibold mt-4 mb-2">Reserva mesas</h3>
            <p>
              ¿Tienes un local de hostelería? Integrando MCTS podrás gestionar
              tus reservas de forma fácil, cómoda y económica.
            </p>
          </div>,
        ]}
      />
      <SocialProof
        reviews={[
          {
            author: "Juan Pérez",
            content: "Increíblemente fácil de usar y muy útil.",
          },
          {
            author: "María García",
            content: "La mejor herramienta que he probado hasta ahora.",
          },
          {
            author: "Pedro López",
            content: "Muy contento con el servicio y la atención al cliente.",
          },
          {
            author: "Ana Martínez",
            content: "Fantástico, lo recomiendo a todo el mundo.",
          },
        ]}
      />
      <Content
        title="Muchos usos diferentes"
        image="https://picsum.photos/200/300"
        texts={[
          <div key="first text" className="flex-col gap-y-2">
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Vende productos digitales
            </h3>
            <p>
              Vende tus productos digitales, entradas para eventos o
              suscripciones y mantén el contacto con tu clientela.
            </p>
          </div>,
          <div key="second text" className="flex-col gap-y-2">
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Gestiona la atención al cliente
            </h3>
            <p>
              Permite a tus usuarios y usuarias contactar contigo para realizar
              solicitures y propuestas. Contéstales o deja que lo haga su{" "}
              <span className="font-semibold">potente IA</span>.
            </p>
          </div>,
        ]}
      />
    </div>
  );
}
