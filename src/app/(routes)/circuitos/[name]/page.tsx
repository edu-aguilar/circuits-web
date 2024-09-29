import { findCircuit } from "@/app/circuits/ui/actions/findCircuit";
import { CircuitGallery } from "@/app/circuits/ui/components/CircuitGallery";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { ReportComponent } from "@/app/common/ui/components/ReportComponent";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default async function CircuitsPage({
  params,
}: {
  params: { name: string };
}) {
  const circuits = await findCircuit({
    nameUrl: params.name,
  });

  const circuit = circuits[0];

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
