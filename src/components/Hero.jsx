export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-blue-600 font-medium mb-4">
              Technology for Education & Digital Transformation
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Membangun Solusi Digital yang Berdampak
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              QSolution membantu sekolah, organisasi,
              dan bisnis memanfaatkan teknologi untuk
              meningkatkan efisiensi, pembelajaran,
              dan inovasi digital.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#products"
                className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black"
              >
                Lihat Produk
              </a>

              <a
                href="#about"
                className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Pelajari Lebih Lanjut
              </a>

            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-gray-50 p-10">

              <div className="space-y-4">

                <div className="h-4 bg-blue-600 rounded w-2/3"></div>

                <div className="h-4 bg-gray-300 rounded w-full"></div>

                <div className="h-4 bg-gray-300 rounded w-4/5"></div>

                <div className="h-24 bg-white rounded border border-gray-200"></div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}