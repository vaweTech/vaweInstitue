import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page_404">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6">
          <div className="text-center">
            <div className="four_zero_four_bg flex items-center justify-center">
              <h1 className="text-black font-bold mb-[250px] md:mb-[250px]">404</h1>
            </div>
            <div className="md:mt-[10px] md:mb-[250px] contant_box_404 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
                Look like you&apos;re lost
              </h3>
              <p className="text-gray-600 mb-6">
                The page you are looking for is not available!
              </p>
              <Link href="/" className="link_404 rounded-md">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


