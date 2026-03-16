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
      <div className="space-y-10">
        <section className="rounded-3xl border border-black/10 bg-white p-6 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-black/50">Circuito</p>
              <h1 className="mt-4 text-4xl text-black md:text-5xl">{circuit.name}</h1>
              <p className="mt-3 text-sm text-black/60 md:text-base">{circuit.address}</p>

              {circuit.description && (
                <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4">
                  <h2 className="text-lg text-black">Descripcion</h2>
                  <p className="mt-2 text-sm text-black/60">{circuit.description}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <ReportComponent
                title="Reportar datos"
                url={`https://docs.google.com/forms/d/e/1FAIpQLSdfpI96fk2nhMaeH4hN-kGQeD6MK10AAw9NagM4-oMbyzCv_w/viewform?entry.1591967472=${circuit.nameUrl}`}
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl text-black">Ubicacion</h2>
            <p className="mt-2 text-sm text-black/60">Vista de mapa y coordenadas precisas.</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-black/10">
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
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl text-black">Detalles</h2>
            <div className="mt-5 space-y-5 text-sm text-black/60">
              {circuit.price && (
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/50">Precios</h3>
                  <div className="mt-3 space-y-1">
                    {circuit.price.half && <p>{circuit.price.half} EUR medio dia</p>}
                    {circuit.price.complete && <p>{circuit.price.complete} EUR dia completo</p>}
                  </div>
                </div>
              )}

              {circuit.social && (
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/50">Redes sociales</h3>
                  <div className="mt-3 flex flex-col gap-2">
                    {circuit.social.instagram && (
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href={circuit.social.instagram}
                        className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-xs text-black/70"
                      >
                        Instagram
                      </Link>
                    )}
                    {circuit.social.facebook && (
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href={circuit.social.facebook}
                        className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-xs text-black/70"
                      >
                        Facebook
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {Boolean(circuit.distance || circuit.width || circuit.settings) && (
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-black/50">Tecnica</h3>
                  <div className="mt-3 space-y-1">
                    {circuit.distance && <p>Distancia: {circuit.distance} metros</p>}
                    {circuit.width && <p>Anchura: {circuit.width} metros</p>}
                    {circuit.settings && circuit.settings[160] && <p>Desarrollo 160: {circuit.settings[160]}</p>}
                    {circuit.settings && circuit.settings[190] && <p>Desarrollo 190: {circuit.settings[190]}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <h2 className="text-2xl text-black">Imagenes</h2>
          <p className="mt-2 text-sm text-black/60">Galeria del circuito y zonas clave.</p>
          <div className="mt-4">
            <CircuitGallery images={circuit.images} />
          </div>
        </section>
      </div>
    </AppPage>
  );
}
