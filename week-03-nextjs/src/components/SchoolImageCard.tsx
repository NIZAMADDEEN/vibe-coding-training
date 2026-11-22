import Image from "next/image";

type SchoolImageCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function SchoolImageCard({
  title,
  description,
  image,
}: SchoolImageCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-green-700">
          {title}
        </h3>

        <p className="leading-7 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}