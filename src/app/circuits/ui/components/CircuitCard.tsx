import Link from "next/link";
import { Circuit } from "../../domain/entities/Circuit";
import Image from "next/image";

interface CircuitCardProps {
  circuit: Circuit;
}

export const CircuitCard = ({ circuit }: CircuitCardProps) => {
  return (
    <Link href={`/circuitos/${circuit.nameUrl}`}>
      <div className="w-[280px] bg-white border border-gray-200 rounded-lg shadow">
        <div className="w-full h-[200px] relative rounded-t-lg overflow-hidden flex justify-center items-center bg-gray-100">
          <Image
            className="object-contain w-full h-full"
            src={circuit.images[0]}
            width={240}
            height={200}
            alt={circuit.name}
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {circuit.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 line-clamp-2">
            {circuit.address}
          </p>
        </div>
      </div>
    </Link>
  );
};
