import { findCircuits } from "@/app/circuits/ui/actions/findCircuits";
import { AppPage } from "@/app/common/ui/components/AppPage";

export default async function CircuitsPage() {
  const circuits = await findCircuits();
  console.log(circuits);
  
  return <AppPage><h1>circuitos</h1></AppPage>
}
