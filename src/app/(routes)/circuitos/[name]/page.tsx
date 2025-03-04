import { findCircuit } from "@/app/circuits/ui/actions/findCircuit";
import { CircuitGallery } from "@/app/circuits/ui/components/CircuitGallery";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { ReportComponent } from "@/app/common/ui/components/ReportComponent";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Metadata } from "next";
import Link from "next/link";

type CircuitPageProps = {
  params: { name: string };
};

export async function generateMetadata({ params }: CircuitPageProps): Promise<Metadata> {
  const circuit = await findCircuit({
    nameUrl: params.name,
  });

  const title = `Circuito para pitbikes ${circuit.name} - Información, Horarios y Ubicación para Pitbikes`;
  const description = `Descubre todo sobre ${circuit.name}. Información completa sobre horarios, tarifas, ubicación, y detalles técnicos para rodar con tu pitbike en asfalto. ¡Encuentra tu próximo desafío!`;

  return {
    title,
    description,
  };
}

export default async function CircuitPage({ params }: CircuitPageProps) {
  const circuit = await findCircuit({
    nameUrl: params.name,
  });

  return (
    <AppPage>
      <div className="relative">
        <div className="flex">
          <h1 className="text-3xl grow">Circuito {circuit.name}</h1>
          <ReportComponent
            url={`https://docs.google.com/forms/d/e/1FAIpQLSdfpI96fk2nhMaeH4hN-kGQeD6MK10AAw9NagM4-oMbyzCv_w/viewform?entry.1591967472=${circuit.nameUrl}`}
          />
        </div>

        <h2 className="text-2xl mt-5">Dirección</h2>
        <h3 className="text-l mt-1">{circuit.address}</h3>

        {circuit.description && (
          <>
            <h2 className="text-2xl mt-5">Descripción</h2>
            {circuit.description && <h3 className="text-l mt-1">{circuit.description}</h3>}
          </>
        )}

        {circuit.price && (
          <>
            <h2 className="text-2xl mt-5">Precio</h2>
            {circuit.price.half && <h3 className="text-l mt-1">{circuit.price.half}€ medio día</h3>}
            {circuit.price.complete && <h3 className="text-l mt-1">{circuit.price.complete}€ día completo</h3>}
          </>
        )}

        {circuit.social && (
          <>
            <h2 className="text-2xl mt-5">Redes Sociales</h2>
            {circuit.social.instagram && (
              <h3 className="text-l mt-1">
                <Link target="_blank" href={circuit.social.instagram}>
                  Instagram
                </Link>
              </h3>
            )}
            {circuit.social.facebook && (
              <h3 className="text-l mt-1">
                <Link target="_blank" href={circuit.social.facebook}>
                  Facebook
                </Link>
              </h3>
            )}
          </>
        )}

        {Boolean(circuit.distance || circuit.width || circuit.settings) && (
          <>
            <h2 className="text-2xl mt-5">Detalles técnicos del circuito</h2>
            {circuit.distance && <h3 className="text-l mt-1">Distancia: {circuit.distance} metros</h3>}
            {circuit.width && <h3 className="text-l mt-1">Anchura: {circuit.width} metros</h3>}
            {circuit.settings && circuit.settings[160] && (
              <h3 className="text-l mt-1">Desarrollo motor 160: {circuit.settings[160]}</h3>
            )}
            {circuit.settings && circuit.settings[190] && (
              <h3 className="text-l mt-1">Desarrollo motor 190: {circuit.settings[190]}</h3>
            )}
          </>
        )}

        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-2xl mt-5">Ubicación</h2>

          <div className="grow lg:min-w-96">
            <GoogleMapsEmbed
              apiKey={process.env.GMAPS_API_KEY as string}
              height={400}
              width="100%"
              mode="place"
              maptype="satellite"
              zoom="17"
              q={`${circuit.location.lat},${circuit.location.lng}`}
            />
          </div>

          <h2 className="text-2xl mt-5">Imágenes</h2>
          <CircuitGallery images={circuit.images} />
        </div>
      </div>
    </AppPage>
  );
}
