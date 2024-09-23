import { findCircuits } from "@/app/circuits/ui/actions/findCircuits";
import { AppPage } from "@/app/common/ui/components/AppPage";

export default async function CircuitsPage({
  params,
}: {
  params: { name: string };
}) {
  const circuits = await findCircuits({
    nameUrl: params.name,
  });

  const currentCircuit = circuits[0];

  return (
    <AppPage>
      <div className="max-w-5xl m-auto">
        detalle circuito {currentCircuit.name}
      </div>
      <div className="max-w-5xl m-auto">
        detalle circuito {currentCircuit.id}
      </div>
    </AppPage>
  );
}
