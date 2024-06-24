import { findCircuits } from "@/app/circuits/ui/actions/findCircuits";
import { CircuitCard } from "@/app/circuits/ui/components/CircuitCard";
import { AppPage } from "@/app/common/ui/components/AppPage";

export default async function CircuitsPage() {
  const circuits = await findCircuits();
  console.log(circuits);

  return (
    <AppPage>
      <div className="flex flex-wrap gap-6 max-w-5xl m-auto justify-center lg:justify-start">
        {circuits.map((circuit) => {
          return <CircuitCard key={circuit.id} circuit={circuit}></CircuitCard>;
        })}
      </div>
    </AppPage>
  );
}
