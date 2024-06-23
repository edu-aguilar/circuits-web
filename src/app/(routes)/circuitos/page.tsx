import { findCircuits } from "@/app/circuits/ui/actions/findCircuits";
import { AppPage } from "@/app/common/ui/components/AppPage";

export default async function CircuitsPage() {
  const circuits = await findCircuits();
  console.log(circuits);
  
  return <AppPage>{circuits.map(circuit => {
    return <div key={circuit.id}>
      <h1 >{circuit.name}</h1>
    </div>
  })}</AppPage>
}
