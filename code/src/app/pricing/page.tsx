import Link from "next/link";

import { Content, Hero, PricingTables } from "@/UI";
import { Button } from "@nextui-org/react";

export default function PricingPage() {
  return (
    <div>
      <Hero
        title="Precios"
        cta={
          <>
            <h2 className="font-bold text-4xl mb-4 mt-6">
              Nos adaptamos a las necesidades de tu proyecto
            </h2>
            <p>
              Si no disponemos de un plan adecuado para ti, no dudes en ponerte
              en contacto con nosotros.
            </p>
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
            Contratar
          </Button>,
        ]}
      />
      <PricingTables
        plans={[
          {
            title: "Básico",
            price: "$9.99",
            features: [
              "Soporte por email",
              "Hasta 100 tickets al mes",
              "1 usuario",
            ],
            description: "Para pequeños proyectos y startups emergentes",
            action: (
              <Button
                as={Link}
                href="/contact-sales"
                color="primary"
                variant="shadow"
                size="md"
                fullWidth
              >
                Contratar
              </Button>
            ),
          },
          {
            title: "Premium",
            price: "$19.99",
            features: [
              "Soporte por email y teléfono",
              "Hasta 500 tickets al mes",
              "3 usuarios",
            ],
            description: "Para empresas en crecimiento y proyectos en activo",
            action: (
              <Button
                as={Link}
                href="/contact-sales"
                color="primary"
                variant="shadow"
                size="md"
                fullWidth
              >
                Contratar
              </Button>
            ),
          },
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
    </div>
  );
}
