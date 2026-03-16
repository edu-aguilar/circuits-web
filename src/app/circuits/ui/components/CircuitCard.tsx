import Link from "next/link";
import { Circuit } from "../../domain/entities/Circuit";
import Image from "next/image";

interface CircuitCardProps {
  circuit: Circuit;
}

export const CircuitCard = ({ circuit }: CircuitCardProps) => {
  return (
    <Link href={`/circuitos/${circuit.nameUrl}`}>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:border-black/20">
        <div className="relative h-[200px] w-full overflow-hidden bg-black/5">
          <Image
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={circuit.images[0]}
            width={240}
            height={200}
            alt={circuit.name}
          />
        </div>
        <div className="flex h-full flex-col gap-3 p-5">
          <h3 className="min-h-16 text-2xl tracking-tight text-black line-clamp-2">{circuit.name}</h3>
          <p className="text-sm text-black/60 line-clamp-2">{circuit.address}</p>
          <div className="mt-auto text-xs text-black/50">Ver detalles</div>
        </div>
      </div>
    </Link>
  );
};
