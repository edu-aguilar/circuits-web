import { findCircuit } from "@/app/circuits/ui/actions/findCircuit";
import { CircuitGallery } from "@/app/circuits/ui/components/CircuitGallery";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { ReportComponent } from "@/app/common/ui/components/ReportComponent";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

type CircuitPageProps = {
  params: { name: string };
};

export async function generateMetadata({
  params,
}: CircuitPageProps): Promise<Metadata> {
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
      <>
        <ReportComponent
          url={`https://docs.google.com/forms/d/e/1FAIpQLSdfpI96fk2nhMaeH4hN-kGQeD6MK10AAw9NagM4-oMbyzCv_w/viewform?entry.1591967472=${circuit.nameUrl}`}
        />
        <h1 className="text-3xl">Circuito {circuit.name}</h1>
        <h2 className="text-xl mt-1">Circuito {circuit.address}</h2>

        <div className="mt-8 flex flex-col gap-4">
          <div className="grow lg:min-w-96">
            <GoogleMapsEmbed
              apiKey={process.env.GMAPS_API_KEY as string}
              height={400}
              width="100%"
              mode="place"
              q={`${circuit.location.lat},${circuit.location.lng}`}
            />
          </div>

          <CircuitGallery images={circuit.images} />
        </div>
      </>
    </AppPage>
  );
}
