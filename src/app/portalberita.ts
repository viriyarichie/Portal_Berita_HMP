import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

interface Kategori {
  name: string;
}

export interface Komentar {
  user: string;
  text: string;
  replies: Komentar[];
}

export interface Berita {
  judul: string;
  isi: string;
  kategori: string[];
  fotoJudul: string;
  isFavorite: boolean;
  foto: string[];
  rating: number[];
  penulis: string;
  tanggalUpload: Date;
  komentar: Komentar[];
}

@Injectable({
  providedIn: 'root',
})
export class Portalberita {
  users: User[] = [
    { username: 'admin', password: '123' },
    { username: 'robby', password: '123' },
    { username: 'richie', password: '123' },
    { username: 'ericko', password: '123' },
  ];

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
      foto: [
        'assets/img/ihsg1.jpeg',
        'assets/img/ihsg2.jpeg',
        'assets/img/ihsg3.jpeg',
        'assets/img/ihsg4.jpeg',
      ],
      rating: [4, 5, 4, 3, 4],
      penulis: 'Admin Ekonomi',
      tanggalUpload: new Date('2025-09-14'),
      komentar: [
        {
          user: 'Ericko',
          text: 'Mantap!',
          replies: [{ user: 'Robby', text: 'Setuju banget!', replies: [] }],
        },
        {
          user: 'Robby',
          text: 'Informasinya jelas',
          replies: [
            { user: 'Richie', text: 'Bener, gampang dipahami.', replies: [] },
          ],
        },
        {
          user: 'Richie',
          text: 'Update terus ya!',
          replies: [{ user: 'Ericko', text: 'Semoga konsisten!', replies: [] }],
        },
      ],
    },
    {
      judul: 'Indonesia Jadi Tuan Rumah Piala Asia U-20',
      isi: 'Persiapan penyelenggaraan Piala Asia U-20 2025 semakin matang setelah PSSI menyatakan bahwa renovasi sejumlah stadion utama telah mencapai lebih dari 95 persen. Pemerintah daerah juga turut mendukung dengan menyediakan fasilitas transportasi dan akomodasi bagi tim peserta. Antusiasme masyarakat terlihat dari penjualan tiket yang mencapai 80 persen hanya dalam waktu dua hari sejak dibuka.',
      kategori: ['Olahraga'],
      fotoJudul: 'assets/img/piala-asia.jpg',
      isFavorite: false,
      foto: [
        'assets/img/asia1.jpeg',
        'assets/img/asia2.jpeg',
        'assets/img/asia3.jpeg',
        'assets/img/asia4.jpeg',
      ],
      rating: [5, 4, 4, 5, 3, 2],
      penulis: 'Admin Olahraga',
      tanggalUpload: new Date('2025-09-20'),
      komentar: [
        {
          user: 'Ericko',
          text: 'Semoga sukses!',
          replies: [
            { user: 'Robby', text: 'Amin, dukung terus ya!', replies: [] },
          ],
        },
        {
          user: 'Richie',
          text: 'Gak sabar nonton!',
          replies: [
            { user: 'Robby', text: 'Aku juga udah beli tiket.', replies: [] },
          ],
        },
        {
          user: 'Robby',
          text: 'Mantap nih',
          replies: [
            { user: 'Richie', text: 'Pasti seru banget.', replies: [] },
          ],
        },
      ],
    },
    {
      judul: 'Startup AI Lokal Luncurkan Chipset Buatan Indonesia',
      isi: 'Sebuah startup teknologi asal Bandung resmi merilis chipset kecerdasan buatan (AI) generasi pertama yang dikembangkan sepenuhnya di dalam negeri. Chipset ini dirancang untuk perangkat IoT, sistem keamanan pintar, dan otomasi industri. Peluncuran ini dianggap sebagai langkah penting bagi Indonesia untuk mengurangi ketergantungan pada produk luar negeri dan memperkuat ekosistem teknologi lokal.',
      kategori: ['Teknologi', 'Ekonomi'],
      fotoJudul: 'assets/img/chip-ai.jpg',
      isFavorite: false,
      foto: [
        'assets/img/chip-ai1.jpg',
        'assets/img/chip-ai2.jpg',
        'assets/img/chip-ai3.jpg',
        'assets/img/chip-ai4.jpg',
      ],
      rating: [4, 3, 4, 4, 5],
      penulis: 'Admin Teknologi',
      tanggalUpload: new Date('2025-10-01'),
      komentar: [
        {
          user: 'Richie',
          text: 'Bangga banget!',
          replies: [
            { user: 'Ericko', text: 'Akhirnya ada produk lokal.', replies: [] },
          ],
        },
        {
          user: 'Robby',
          text: 'Lanjutkan inovasinya',
          replies: [
            { user: 'Ericko', text: 'Terima kasih dukungannya!', replies: [] },
          ],
        },
      ],
    },
    {
      judul: 'Lonjakan Penyakit DBD di Musim Peralihan',
      isi: 'Kementerian Kesehatan melaporkan peningkatan kasus Demam Berdarah Dengue (DBD) di sejumlah wilayah, terutama di Jawa Barat dan DKI Jakarta. Faktor perubahan cuaca, curah hujan tinggi, dan rendahnya kesadaran masyarakat menjadi penyebab utama lonjakan kasus. Pemerintah mengimbau warga untuk rutin membersihkan lingkungan dan melakukan gerakan 3M Plus untuk mencegah penyebaran nyamuk Aedes aegypti.',
      kategori: ['Kesehatan'],
      fotoJudul: 'assets/img/dbd.jpg',
      isFavorite: false,
      foto: [
        'assets/img/dbd1.jpg',
        'assets/img/dbd2.jpg',
        'assets/img/dbd3.jpg',
        'assets/img/dbd4.jpg',
      ],
      rating: [3, 4, 4, 2, 3],
      penulis: 'Admin Kesehatan',
      tanggalUpload: new Date('2025-09-28'),
      komentar: [
        {
          user: 'Robby',
          text: 'Semoga cepat ditangani',
          replies: [
            {
              user: 'Richie',
              text: 'Betul, jangan sampai makin parah.',
              replies: [],
            },
          ],
        },
        {
          user: 'Ericko',
          text: 'Warga harus waspada',
          replies: [
            {
              user: 'Richie',
              text: 'Kami terus pantau perkembangannya.',
              replies: [],
            },
          ],
        },
      ],
    },
    {
      judul: 'IPO Perusahaan Energi Terbarukan Diminati Investor',
      isi: 'Perusahaan energi surya terbesar di Indonesia resmi melantai di Bursa Efek Indonesia dan mencatat oversubscribed hingga lima kali lipat. Banyak investor tertarik karena arah kebijakan pemerintah yang terus mendorong penggunaan energi bersih. Dana hasil IPO rencananya akan digunakan untuk ekspansi pabrik panel surya dan pembangunan pembangkit listrik tenaga surya di beberapa provinsi.',
      kategori: ['Ekonomi', 'Saham'],
      fotoJudul: 'assets/img/ipo.jpg',
      isFavorite: true,
      foto: [
        'assets/img/ipo1.jpg',
        'assets/img/ipo2.jpg',
        'assets/img/ipo3.jpg',
        'assets/img/ipo4.jpg',
      ],
      rating: [4, 5, 4, 4, 5],
      penulis: 'Admin Ekonomi',
      tanggalUpload: new Date('2025-10-03'),
      komentar: [
        {
          user: 'Richie',
          text: 'Investasi yang bagus',
          replies: [
            { user: 'Robby', text: 'Cocok buat jangka panjang.', replies: [] },
          ],
        },
        {
          user: 'Robby',
          text: 'Prospeknya cerah!',
          replies: [
            {
              user: 'Ericko',
              text: 'Kami optimis pasar energi bersih makin berkembang.',
              replies: [],
            },
          ],
        },
      ],
    },
    {
      judul: 'Tim eSports Indonesia Juara Dunia Mobile Legends',
      isi: 'Turnamen Mobile Legends tingkat dunia di Seoul berakhir dengan kemenangan dramatis tim Indonesia. Pertandingan final melawan tim asal Filipina berlangsung sengit hingga game kelima. Kemenangan ini membuat Indonesia mencatatkan prestasi internasional terbesar dalam sejarah eSports Asia Tenggara, sekaligus membuka peluang sponsor baru dari perusahaan teknologi lokal.',
      kategori: ['Olahraga', 'Teknologi'],
      fotoJudul: 'assets/img/esports.jpg',
      isFavorite: false,
      foto: [
        'assets/img/esports1.jpg',
        'assets/img/esports2.jpg',
        'assets/img/esports3.jpg',
        'assets/img/esports4.jpg',
      ],
      rating: [5, 4, 5, 4, 5],
      penulis: 'Admin Teknologi',
      tanggalUpload: new Date('2025-10-05'),
      komentar: [
        {
          user: 'Ericko',
          text: 'Bangga!',
          replies: [
            { user: 'Richie', text: 'Prestasi luar biasa.', replies: [] },
          ],
        },
        {
          user: 'Richie',
          text: 'Go Indonesia!',
          replies: [
            {
              user: 'Robby',
              text: 'Indonesia memang kuat di eSports.',
              replies: [],
            },
          ],
        },
        {
          user: 'Richie',
          text: 'Luar biasa',
          replies: [
            { user: 'Ericko', text: 'Semoga makin sering juara.', replies: [] },
          ],
        },
      ],
    },
    {
      judul: 'Perusahaan Rintisan Buat AI untuk Analisis Cedera Atlet',
      isi: 'Tim peneliti muda Indonesia berhasil menciptakan sistem kecerdasan buatan yang mampu menganalisis risiko cedera atlet berdasarkan data latihan dan rekaman video pertandingan. Teknologi ini mulai diuji coba di beberapa klub olahraga nasional dan dinilai mampu menekan risiko cedera hingga 30 persen.',
      kategori: ['Teknologi', 'Olahraga', 'Kesehatan'],
      fotoJudul: 'assets/img/ai-sport.jpeg',
      isFavorite: false,
      foto: [
        'assets/img/ai-sport1.jpeg',
        'assets/img/ai-sport2.jpeg',
        'assets/img/ai-sport3.jpeg',
        'assets/img/ai-sport4.jpeg',
      ],
      rating: [4, 3, 2, 4, 3],
      penulis: 'Admin Teknologi',
      tanggalUpload: new Date('2025-10-19'),
      komentar: [
        {
          user: 'Robby',
          text: 'Canggih banget, bisa bantu atlet profesional!',
          replies: [
            {
              user: 'Richie',
              text: 'Teknologi kayak gini wajib dikembangkan.',
              replies: [],
            },
          ],
        },
        {
          user: 'Richie',
          text: 'Harusnya bisa dipakai juga di olahraga sekolah.',
          replies: [
            {
              user: 'Ericko',
              text: 'Iya juga yaa',
              replies: [],
            },
          ],
        },
      ],
    },
  ];
}
