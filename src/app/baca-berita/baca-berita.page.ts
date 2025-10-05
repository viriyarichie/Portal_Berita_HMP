import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

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
  komentar: string[];
}
@Component({
  selector: 'app-baca-berita',
  templateUrl: './baca-berita.page.html',
  styleUrls: ['./baca-berita.page.scss'],
  standalone: false,
})
export class BacaBeritaPage implements OnInit {
  constructor(private router: ActivatedRoute, private route: ActivatedRoute) {}

  komentar: string = '';

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
      kategori: ['Ekonomi', 'Saham'],
      fotoJudul: 'assets/img/ihsg.jpg',
      isFavorite: true,
      foto: [],
      rating: [4, 5, 4, 3, 4],
      penulis: 'Admin Ekonomi',
      tanggalUpload: new Date('2025-09-14'),
      komentar: ['Mantap!', 'Informasinya jelas', 'Update terus ya!'],
    },
    {
      judul: 'Indonesia Jadi Tuan Rumah Piala Asia U-20',
      isi: 'Persiapan penyelenggaraan Piala Asia U-20 2025 semakin matang setelah PSSI menyatakan bahwa renovasi sejumlah stadion utama telah mencapai lebih dari 95 persen. Pemerintah daerah juga turut mendukung dengan menyediakan fasilitas transportasi dan akomodasi bagi tim peserta. Antusiasme masyarakat terlihat dari penjualan tiket yang mencapai 80 persen hanya dalam waktu dua hari sejak dibuka.',
      kategori: ['Olahraga'],
      fotoJudul: 'assets/img/piala-asia.jpg',
      isFavorite: false,
      foto: [],
      rating: [5, 4, 4, 5, 3, 2],
      penulis: 'Admin Olahraga',
      tanggalUpload: new Date('2025-09-20'),
      komentar: ['Semoga sukses!', 'Gak sabar nonton!', 'Mantap nih'],
    },
    {
      judul: 'Startup AI Lokal Luncurkan Chipset Buatan Indonesia',
      isi: 'Sebuah startup teknologi asal Bandung resmi merilis chipset kecerdasan buatan (AI) generasi pertama yang dikembangkan sepenuhnya di dalam negeri. Chipset ini dirancang untuk perangkat IoT, sistem keamanan pintar, dan otomasi industri. Peluncuran ini dianggap sebagai langkah penting bagi Indonesia untuk mengurangi ketergantungan pada produk luar negeri dan memperkuat ekosistem teknologi lokal.',
      kategori: ['Teknologi', 'Ekonomi'],
      fotoJudul: 'assets/img/chip-ai.jpg',
      isFavorite: false,
      foto: [],
      rating: [4, 3, 4, 4, 5],
      penulis: 'Admin Teknologi',
      tanggalUpload: new Date('2025-10-01'),
      komentar: ['Bangga banget!', 'Lanjutkan inovasinya'],
    },
    {
      judul: 'Lonjakan Penyakit DBD di Musim Peralihan',
      isi: 'Kementerian Kesehatan melaporkan peningkatan kasus Demam Berdarah Dengue (DBD) di sejumlah wilayah, terutama di Jawa Barat dan DKI Jakarta. Faktor perubahan cuaca, curah hujan tinggi, dan rendahnya kesadaran masyarakat menjadi penyebab utama lonjakan kasus. Pemerintah mengimbau warga untuk rutin membersihkan lingkungan dan melakukan gerakan 3M Plus untuk mencegah penyebaran nyamuk Aedes aegypti.',
      kategori: ['Kesehatan'],
      fotoJudul: 'assets/img/dbd.jpg',
      isFavorite: false,
      foto: [],
      rating: [3, 4, 4, 2, 3],
      penulis: 'Admin Kesehatan',
      tanggalUpload: new Date('2025-09-28'),
      komentar: ['Semoga cepat ditangani', 'Warga harus waspada'],
    },
    {
      judul: 'IPO Perusahaan Energi Terbarukan Diminati Investor',
      isi: 'Perusahaan energi surya terbesar di Indonesia resmi melantai di Bursa Efek Indonesia dan mencatat oversubscribed hingga lima kali lipat. Banyak investor tertarik karena arah kebijakan pemerintah yang terus mendorong penggunaan energi bersih. Dana hasil IPO rencananya akan digunakan untuk ekspansi pabrik panel surya dan pembangunan pembangkit listrik tenaga surya di beberapa provinsi.',
      kategori: ['Ekonomi', 'Saham'],
      fotoJudul: 'assets/img/ipo.jpg',
      isFavorite: true,
      foto: [],
      rating: [4, 5, 4, 4, 5],
      penulis: 'Admin Ekonomi',
      tanggalUpload: new Date('2025-10-03'),
      komentar: ['Investasi yang bagus', 'Prospeknya cerah!'],
    },
    {
      judul: 'Tim eSports Indonesia Juara Dunia Mobile Legends',
      isi: 'Turnamen Mobile Legends tingkat dunia di Seoul berakhir dengan kemenangan dramatis tim Indonesia. Pertandingan final melawan tim asal Filipina berlangsung sengit hingga game kelima. Kemenangan ini membuat Indonesia mencatatkan prestasi internasional terbesar dalam sejarah eSports Asia Tenggara, sekaligus membuka peluang sponsor baru dari perusahaan teknologi lokal.',
      kategori: ['Olahraga', 'Teknologi'],
      fotoJudul: 'assets/img/esports.jpg',
      isFavorite: false,
      foto: [],
      rating: [5, 4, 5, 4, 5],
      penulis: 'Admin Teknologi',
      tanggalUpload: new Date('2025-10-05'),
      komentar: ['Bangga!', 'Go Indonesia!', 'Luar biasa'],
    },
  ];

  judul: string = '';
  isi: string = '';
  fotoJudul: string = '';
  rating: number[] = [];
  penulis: string = '';
  tglUpload: Date = new Date();
  b?: Berita;

  judulGet: string = '';
  kategoriGet: string = '';
  dari: string = '';

  ngOnInit() {
    // var judulGet = this.router.snapshot.paramMap.get('judul') || '';
    // this.kategoriGet = this.router.snapshot.queryParamMap.get('kategori') || '';
    // this.dari = this.router.snapshot.queryParamMap.get('dari') || '';

    this.route.params.subscribe((params) => {
      this.dari = params['asal'];
      this.judulGet = params['judul'];
    });

    for (let berita of this.beritas) {
      if (berita.judul == this.judulGet) {
        this.judul = berita.judul;
        this.isi = berita.isi;
        this.fotoJudul = berita.fotoJudul;
        this.rating = berita.rating;
        this.penulis = berita.penulis;
        this.tglUpload = berita.tanggalUpload;

        this.b = berita;
      }
    }
  }

  // goBack() {
  //   this.navCtrl.navigateBack('/kategori/{{kategoriGet}}');
  // }

  today_ind(): string {
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];

    const days = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];

    const d = this.tglUpload.getDate();
    const m = this.tglUpload.getMonth();
    const y = this.tglUpload.getFullYear();
    const day = days[this.tglUpload.getDay()];

    return day + ', ' + d + ' ' + months[m] + ' ' + y;
  }

  gantiFavorit() {
    if (this.b) {
      if (this.b.isFavorite == true) {
        this.b.isFavorite = false;
      } else {
        this.b.isFavorite = true;
      }
    }
  }

  listRating: number[] = [1, 2, 3, 4, 5];
  ratingInput: number = 0;

  clickRating(rate: number) {
    this.ratingInput = rate;

    this.b?.rating.push(rate);
  }

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

  // tipeStar(j: number, avg: number) {
  //   var full = Math.floor(avg);
  //   var setengah = avg - full >= 0.5;

  //   if (j < full) {
  //     return 'star';
  //   } else if (j == full && setengah) {
  //     return 'star-half-outline';
  //   } else {
  //     return 'star-outline';
  //   }
  // }
}
