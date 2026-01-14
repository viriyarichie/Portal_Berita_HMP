import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Portalberita {
  constructor(private http: HttpClient) {}

  login(p_username: string, p_password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('username', p_username);
    body.set('password', p_password);
    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/login.php',
      urlEncodedData,
      {
        headers,
      }
    );
  }

  userList(): Observable<any> {
    return this.http.get(
      'https://ubaya.cloud/hybrid/160423078/project/getUser.php'
    );
  }

  kategoriList(): Observable<any> {
    return this.http.get(
      'https://ubaya.cloud/hybrid/160423078/project/getKategori.php'
    );
  }

  kategoriBeritaList(): Observable<any> {
    return this.http.get(
      'https://ubaya.cloud/hybrid/160423078/project/getKategoriBerita.php'
    );
  }

  beritaList(): Observable<any> {
    return this.http.get(
      'https://ubaya.cloud/hybrid/160423078/project/getBerita.php'
    );
  }

  ratingList(): Observable<any> {
    return this.http.get(
      'https://ubaya.cloud/hybrid/160423078/project/getRating.php'
    );
  }

  komentarList(): Observable<any> {
    return this.http.get(
      'https://ubaya.cloud/hybrid/160423078/project/getKomentar.php'
    );
  }

  replyList(): Observable<any> {
    return this.http.get(
      'https://ubaya.cloud/hybrid/160423078/project/getReply.php'
    );
  }

  fotoList(): Observable<any> {
    return this.http.get(
      'https://ubaya.cloud/hybrid/160423078/project/getFoto.php'
    );
  }

  beritaByPenulisList(p_penulis: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('penulis', p_penulis);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/getBeritaByPenulis.php',
      urlEncodedData,
      {
        headers,
      }
    );
  }

  insertRating(p_idBerita: string, p_idUser: string, p_rating: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('idBerita', p_idBerita);
    body.set('idUser', p_idUser);
    body.set('rating', p_rating);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/insertRating.php',
      urlEncodedData,
      {
        headers,
      }
    );
  }

  insertKomentar(p_idBerita: string, p_idUser: string, p_komen: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('idBerita', p_idBerita);
    body.set('idUser', p_idUser);
    body.set('komentar', p_komen);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/insertKomentar.php',
      urlEncodedData,
      {
        headers,
      }
    );
  }

  insertReply(
    p_idBerita: string,
    p_idUser: string,
    p_reply: string,
    p_parent: string
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('idBerita', p_idBerita);
    body.set('idUser', p_idUser);
    body.set('reply', p_reply);
    body.set('parent', p_parent);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/insertReply.php',
      urlEncodedData,
      {
        headers,
      }
    );
  }

  insertFotoBerita(p_path: string, p_idBerita: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('path', p_path);
    body.set('idBerita', p_idBerita);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/insertFotoBerita.php',
      urlEncodedData,
      {
        headers,
      }
    );
  }

  register(p_nama: string, p_email: string, p_password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('nama', p_nama);
    body.set('email', p_email);
    body.set('password', p_password);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/register.php',

      urlEncodedData,
      {
        headers,
      }
    );
  }

  insertKategori(p_nama: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();

    body.set('nama', p_nama);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/insertKategori.php',

      urlEncodedData,
      {
        headers,
      }
    );
  }

  insertBerita(
    p_judul: string,
    p_isi: string,
    p_penulis: string,
    p_fotoJudul: string,
    p_iduser: string,
    p_tglBuat: string
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();

    body.set('judul', p_judul);
    body.set('isi', p_isi);
    body.set('penulis', p_penulis);
    body.set('fotoJudul', p_fotoJudul);
    body.set('user_iduser', p_iduser);
    body.set('tanggalUpload', p_tglBuat);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/insertBerita.php',

      urlEncodedData,
      {
        headers,
      }
    );
  }

  insertKategoriBerita(p_idKategori: string, p_idBerita: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();

    body.set('idKategori', p_idKategori);
    body.set('idBerita', p_idBerita);

    const urlEncodedData = body.toString();
    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/insertKategoriBerita.php',

      urlEncodedData,
      {
        headers,
      }
    );
  }

  updateFavorite(p_id: number, p_isFav: Boolean) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('idberita', p_id.toString());
    body.set('isFav', p_isFav.toString());

    const urlEncodedData = body.toString();

    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/updateFavorite.php',

      urlEncodedData,
      { headers }
    );
  }

  hapusBerita(p_idBerita: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('idberita', p_idBerita.toString());

    const urlEncodedData = body.toString();

    return this.http.post(
      'https://ubaya.cloud/hybrid/160423078/project/hapusBerita.php',

      urlEncodedData,
      { headers }
    );
  }
}
