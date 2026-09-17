import Link from "next/link";

const Page = () => {
  return (
    <div className="space-y-6 py-8">
      <div className="flex justify-center gap-4 pt-4">
        <Link
          href="/dashboard"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};
export default Page;
