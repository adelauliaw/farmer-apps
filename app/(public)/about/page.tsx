import { PageHeader } from "@/components/PageHeader"

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Tentang TaniMarket" />

      <div className="container-main mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-600">Misi Kami</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TaniMarket didirikan dengan visi untuk memberdayakan petani Indonesia melalui akses mudah terhadap produk pertanian berkualitas tinggi. Kami percaya bahwa pertanian modern membutuhkan dukungan penuh dari penyediaan input berkualitas hingga pelatihan dan konsultasi.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan platform kami, petani kecil hingga besar dapat mengakses pupuk, benih, dan alat pertanian terbaik dengan harga yang terjangkau, tanpa perlu melalui perantara yang menghabiskan biaya.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-600">Visi Kami</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Menjadi platform pertanian digital terdepan di Indonesia yang menghubungkan petani dengan produk dan layanan terbaik untuk meningkatkan produktivitas dan kesejahteraan mereka.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kami berkomitmen untuk terus berinovasi dan memberikan layanan terbaik sehingga pertanian Indonesia dapat berkembang dan berkontribusi lebih besar pada ketahanan pangan nasional.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-green-600">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Kualitas</h3>
              <p className="text-gray-700 text-sm">
                Semua produk yang kami tawarkan telah melewati pemeriksaan kualitas ketat untuk memastikan kepuasan pelanggan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Kepercayaan</h3>
              <p className="text-gray-700 text-sm">
                Kami membangun hubungan jangka panjang dengan pelanggan melalui transparansi dan konsistensi dalam setiap transaksi.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Inovasi</h3>
              <p className="text-gray-700 text-sm">
                Kami terus mengembangkan fitur dan layanan baru untuk memenuhi kebutuhan petani modern yang dinamis.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8 text-green-600">Mengapa Memilih TaniMarket?</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span>Produk berkualitas dari supplier terpercaya dengan harga kompetitif</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span>Pengiriman cepat dan aman ke seluruh Indonesia</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span>Tim customer service responsif siap membantu 24/7</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span>Informasi lengkap dan konsultasi gratis mengenai produk</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <span>Program loyalitas dan diskon khusus untuk pelanggan setia</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
