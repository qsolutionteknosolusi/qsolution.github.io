export default function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-gray-200 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="max-w-3xl">
          <p className="text-blue-600 font-medium mb-4">
            About QSolution
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Teknologi yang Mendukung Pendidikan dan Transformasi Digital
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            QSolution membangun solusi digital untuk pendidikan,
            organisasi, dan bisnis. Kami menggabungkan teknologi
            modern, pengalaman pengguna yang baik, dan pendekatan
            berbasis dampak berkelanjutan untuk membantu transformasi digital
            yang berkelanjutan.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          <article className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Education
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Mendukung pembelajaran Coding, AI, dan transformasi
              pendidikan melalui pendekatan yang relevan dengan
              kebutuhan masa depan.
            </p>
          </article>

          <article className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Digital Transformation
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Membantu organisasi meningkatkan efisiensi,
              kolaborasi, dan produktivitas melalui solusi
              digital yang tepat guna.
            </p>
          </article>

          <article className="border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Artificial Intelligence
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Mengembangkan serta mengintegrasikan teknologi AI
              yang praktis, mudah digunakan, dan memberikan
              dampak nyata .
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}