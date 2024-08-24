import Link from "next/link";

import { Content, Hero } from "@/UI";
import { Button } from "@nextui-org/react";

export default function ContactSalesPage() {
  return (
    <div>
      <Hero
        title="Contratar"
        cta={
          <>
            <h2 className="font-bold text-4xl mb-4 mt-6">
              ¡Contacta con ventas!
            </h2>
            <p>
              Contacta con nuestro equipo de ventas y te ofreceremos el plan más
              adecuado a las necesidades de tu proyecto sin compromiso.
            </p>
          </>
        }
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
