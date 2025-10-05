import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface Kategori {
  name: string;
}

interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  fotoJudul: string;
  isFavorite: boolean;
  foto: string[];
  rating: number[];
  penulis: string;
  tanggalUpload: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  namaKategori: string = '';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.namaKategori = params['namaKategori'];
    });
  }

  kategoris: Kategori[] = [
    { name: 'Ekonomi' },
    { name: 'Olahraga' },
    { name: 'Teknologi' },
    { name: 'Kesehatan' },
    { name: 'Saham' },
  ];

  beritas: Berita[] = [
    {
      judul: 'IHSG Sentuh Rekor Tertinggi di Kuartal Akhir 2025',
      isi: 'Indeks Harga Saham Gabungan (IHSG) mencetak rekor baru pada penutupan perdagangan hari ini. Kenaikan signifikan ini dipicu oleh masuknya investor asing yang memborong saham di sektor perbankan, energi terbarukan, dan teknologi. Analis pasar memperkirakan tren positif ini masih akan berlanjut hingga akhir Oktober, terutama dengan adanya sentimen pemulihan ekonomi global dan stabilnya nilai tukar rupiah terhadap dolar Amerika Serikat.',
      kategori: [this.kategoris[0].name, this.kategoris[4].name],
      fotoJudul: 'assets/img/ihsg.jpg',
      isFavorite: true,
      foto: [],
      rating: [4, 5, 4, 3, 4],
      penulis: 'Admin Ekonomi',
      tanggalUpload: new Date('2025-09-14'),
    },
    {
      judul: 'Indonesia Jadi Tuan Rumah Piala Asia U-20',
      isi: 'Persiapan penyelenggaraan Piala Asia U-20 2025 semakin matang setelah PSSI menyatakan bahwa renovasi sejumlah stadion utama telah mencapai lebih dari 95 persen. Pemerintah daerah juga turut mendukung dengan menyediakan fasilitas transportasi dan akomodasi bagi tim peserta. Antusiasme masyarakat terlihat dari penjualan tiket yang mencapai 80 persen hanya dalam waktu dua hari sejak dibuka.',
      kategori: [this.kategoris[1].name],
      fotoJudul: 'assets/img/piala-asia.jpg',
      isFavorite: false,
      foto: [],
      rating: [5, 4, 4, 5, 3],
      penulis: 'Admin Olahraga',
      tanggalUpload: new Date('2025-09-20'),
    },
    {
      judul: 'Startup AI Lokal Luncurkan Chipset Buatan Indonesia',
      isi: 'Sebuah startup teknologi asal Bandung resmi merilis chipset kecerdasan buatan (AI) generasi pertama yang dikembangkan sepenuhnya di dalam negeri. Chipset ini dirancang untuk perangkat IoT, sistem keamanan pintar, dan otomasi industri. Peluncuran ini dianggap sebagai langkah penting bagi Indonesia untuk mengurangi ketergantungan pada produk luar negeri dan memperkuat ekosistem teknologi lokal.',
      kategori: [this.kategoris[2].name, this.kategoris[0].name],
      fotoJudul: 'assets/img/chip-ai.jpg',
      isFavorite: false,
      foto: [],
      rating: [4, 3, 4, 4, 5],
      penulis: 'Admin Teknologi',
      tanggalUpload: new Date('2025-10-01'),
    },
    {
      judul: 'Lonjakan Penyakit DBD di Musim Peralihan',
      isi: 'Kementerian Kesehatan melaporkan peningkatan kasus Demam Berdarah Dengue (DBD) di sejumlah wilayah, terutama di Jawa Barat dan DKI Jakarta. Faktor perubahan cuaca, curah hujan tinggi, dan rendahnya kesadaran masyarakat menjadi penyebab utama lonjakan kasus. Pemerintah mengimbau warga untuk rutin membersihkan lingkungan dan melakukan gerakan 3M Plus untuk mencegah penyebaran nyamuk Aedes aegypti.',
      kategori: [this.kategoris[3].name],
      fotoJudul: 'assets/img/dbd.jpg',
      isFavorite: false,
      foto: [],
      rating: [3, 4, 4, 2, 3],
      penulis: 'Admin Kesehatan',
      tanggalUpload: new Date('2025-09-28'),
    },
    {
      judul: 'IPO Perusahaan Energi Terbarukan Diminati Investor',
      isi: 'Perusahaan energi surya terbesar di Indonesia resmi melantai di Bursa Efek Indonesia dan mencatat oversubscribed hingga lima kali lipat. Banyak investor tertarik karena arah kebijakan pemerintah yang terus mendorong penggunaan energi bersih. Dana hasil IPO rencananya akan digunakan untuk ekspansi pabrik panel surya dan pembangunan pembangkit listrik tenaga surya di beberapa provinsi.',
      kategori: [this.kategoris[0].name, this.kategoris[4].name],
      fotoJudul: 'assets/img/ipo.jpg',
      isFavorite: true,
      foto: [],
      rating: [4, 5, 4, 4, 5],
      penulis: 'Admin Ekonomi',
      tanggalUpload: new Date('2025-10-03'),
    },
    {
      judul: 'Tim eSports Indonesia Juara Dunia Mobile Legends',
      isi: 'Turnamen Mobile Legends tingkat dunia di Seoul berakhir dengan kemenangan dramatis tim Indonesia. Pertandingan final melawan tim asal Filipina berlangsung sengit hingga game kelima. Kemenangan ini membuat Indonesia mencatatkan prestasi internasional terbesar dalam sejarah eSports Asia Tenggara, sekaligus membuka peluang sponsor baru dari perusahaan teknologi lokal.',
      kategori: [this.kategoris[1].name, this.kategoris[2].name],
      fotoJudul: 'assets/img/esports.jpg',
      isFavorite: false,
      foto: [],
      rating: [5, 4, 5, 4, 5],
      penulis: 'Admin Teknologi',
      tanggalUpload: new Date('2025-10-05'),
    },
  ];

  goToPage(route: string) {
    this.router.navigate(['/kategori', route]);
  }

  listRating: number[] = [1, 2, 3, 4, 5];

  getRating(arrayRating: number[]): number {
    if (arrayRating.length > 0) {
      var totalRating = 0;
      for (var i = 0; i < arrayRating.length; i++) {
        totalRating += arrayRating[i];
      }
    } else {
      return 0;
    }

    return totalRating / arrayRating.length;
  }

  tipeStar(j: number, avg: number) {
    var full = Math.floor(avg);
    var setengah = avg - full >= 0.5;

    if (j < full) {
      return 'star';
    } else if (j == full && setengah) {
      return 'star-half-outline';
    } else {
      return 'star-outline';
    }
  }
}
