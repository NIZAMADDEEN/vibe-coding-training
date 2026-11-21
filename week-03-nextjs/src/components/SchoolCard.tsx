type SchoolCardProps = {
  title: string;
  description: string;
};

export default function SchoolCard({
  title,
  description,
}: SchoolCardProps) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <h3 className="mb-3 text-2xl font-bold text-green-700">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
