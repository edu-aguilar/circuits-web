import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { routes } from "@/app/common/routes";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre pitbikes de asfalto",
  description:
    "Respuestas rapidas a dudas comunes: precios, horarios, equipo obligatorio y normas en circuitos de asfalto.",
};

const faqs = [
  {
    question: "Necesito licencia para rodar en circuito?",
    answer:
      "Depende del circuito. Algunos organizan tandas abiertas sin licencia, otros requieren seguro o licencia. Confirma siempre antes de ir.",
  },
  {
    question: "Cuanto cuesta una tanda?",
    answer: "El precio varia segun circuito y horario. Consulta la ficha del circuito para tarifas actualizadas.",
  },
  {
    question: "Puedo alquilar pitbike en un circuito?",
    answer: "Algunos circuitos tienen alquiler. Revisa la ficha y contacta con el circuito para disponibilidad.",
  },
  {
    question: "Que equipo es obligatorio?",
    answer:
      "Casco integral y guantes son imprescindibles. Normalmente tambien se exige proteccion de rodillas y botas.",
  },
  {
    question: "Hay edad minima para entrar?",
    answer: "La edad minima puede variar por circuito. Consulta sus normas y requisitos.",
  },
  {
    question: "Se puede rodar con lluvia?",
    answer: "Depende del circuito y las condiciones. En mojado baja el ritmo, aumenta distancias y revisa presiones.",
  },
  {
    question: "Que neumaticos son mejores para asfalto?",
    answer: "Neumaticos de asfalto con compuesto adecuado a temperatura y nivel. Pide recomendaciones en tu circuito.",
  },
  {
    question: "Cada cuanto debo hacer mantenimiento?",
    answer: "Haz revisiones basicas antes y despues de rodar. El mantenimiento periodico depende de horas de uso.",
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">FAQ</p>
        <h1 className="mt-3 text-4xl text-black">Preguntas frecuentes</h1>
        <p className="mt-3 text-base text-black/60">Respuestas rapidas a dudas comunes antes de ir a rodar.</p>
      </section>

      <section className="mt-10 grid gap-4">
        {faqs.map((item) => (
          <div key={item.question} className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-lg text-black">{item.question}</h2>
            <p className="mt-2 text-sm text-black/60">{item.answer}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={routes.circuits.path}
          className="inline-flex items-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-black transition hover:border-black/20"
        >
          Buscar circuitos
        </Link>
      </section>
    </AppPage>
  );
}
