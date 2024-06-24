import Image from "next/image";
import Link from "next/link";
import { AppPage } from "./common/ui/components/AppPage";
import { routes } from "./common/routes";

export default function Home() {
  return (
    <AppPage>
      <div className="flex justify-center items-center flex-col">
        <Link href={routes.circuits.path}>
          <section className="flex flex-col lg:flex-row w-full max-w-screen-lg">
            <Image
              src="/karting-circuit.jpg"
              width={700}
              height={233}
              alt="pitbike-circuit"
            ></Image>
            <div className="text-center p-6 flex flex-col justify-center">
              <h1 className="text-3xl">Circuitos</h1>
              <h2 className="text-xl">
                Busca el circuito más cercano donde poder ir con tu pitbike
              </h2>
            </div>
          </section>
        </Link>
      </div>
    </AppPage>
  );
}
