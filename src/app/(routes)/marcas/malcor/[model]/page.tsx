import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { Breadcrumbs } from "@/app/common/ui/components/Breadcrumbs";
import { routes } from "@/app/common/routes";
import { malcorModels } from "@/lib/motos-data";

type MalcorModelPageProps = {
  params: { model: string };
};

const getModel = (slug: string) => malcorModels.find((model) => model.slug === slug);

export const generateStaticParams = async () => malcorModels.map((model) => ({ model: model.slug }));

export const generateMetadata = ({ params }: MalcorModelPageProps): Metadata => {
  const model = getModel(params.model);
  if (!model) {
    return { title: "Modelo no encontrado" };
  }
  return {
    title: `${model.name} - especificaciones y publico objetivo`,
    description: model.summary,
  };
};

export default function MalcorModelPage({ params }: MalcorModelPageProps) {
  const model = getModel(params.model);
  if (!model) {
    notFound();
  }

  return (
    <AppPage>
      <Breadcrumbs
        items={[
          { label: "Marcas", href: routes.marcas.path },
          { label: "Malcor", href: routes.marcas.malcor.path },
          { label: model.name, href: routes.marcas.malcor.model(model.slug).path },
        ]}
      />
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motos Malcor</p>
        <h1 className="mt-3 text-4xl text-black">{model.name}</h1>
        <p className="mt-3 text-base text-black/60">{model.summary}</p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Especificaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            {model.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <div className="relative h-56 w-full overflow-hidden rounded-xl border border-black/10">
            <Image
              src={model.image}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
              alt={model.name}
            />
          </div>
          <p className="mt-4 text-sm text-black/60">{model.audience}</p>
        </div>
      </section>
      <p className="mt-6 text-xs text-black/50">Potencia y especificaciones segun proveedor.</p>
    </AppPage>
  );
}
