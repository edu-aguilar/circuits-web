import Link from "next/link";
import { Circuit } from "../../domain/entities/Circuit";
import Image from "next/image";

interface CircuitCardProps {
  circuit: Circuit;
}

export const CircuitCard = ({ circuit }: CircuitCardProps) => {
  return (
    <Link href={circuit.name}>
      <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg"
          src={circuit.images[0]}
          width={382}
          height={127}
          alt=""
        ></Image>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {circuit.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {circuit.address}
          </p>
        </div>
      </div>
    </Link>
  );
};
