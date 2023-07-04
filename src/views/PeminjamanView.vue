<template>
  <div>
    <h1 class="card-header">Status Peminjaman</h1>

    <div class="container">

      <div class="row">
        <div>
          <router-link class="button button-add" :to="`/peminjaman-master/`">Tambah</router-link>
        </div>
        <div class="col-12">
          <select class="form-control" @change="getPeminjamanList" v-model="status">
            <option value="DIPINJAM">DIPINJAM</option>
            <option value="DIKEMBALIKAN">DIKEMBALIKAN</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row mt-5 justify-content-center">
      <div class="col-lg-4 col-md-6" v-for="(data, index) in peminjaman" :key="data.id">
        <div class="card mb-3">
          <div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Status: {{ data.status_peminjaman }}</li>
              <li class="list-group-item">Nama Anggota: {{ data.nomor_anggota}}</li>
              <li class="list-group-item">Tanggal Peminjaman: {{ data.tanggal_peminjaman }}</li>
            </ul>
          </div>
        </div>
        <div class="card mb-3">
          <div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Tanggal Pengembalian: {{ data.tanggal_pengembalian }}</li>
              <li class="list-group-item">Durasi Keterlambatan: {{ data.durasi_keterlambatan }}</li>
              <li class="list-group-item">
                <router-link class="button-edit" :to="`/detail-pinjaman/`+data.id">Detail</router-link>

              </li>

            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';

export default {
  data() {
    return {
      peminjaman: ref([]),
      status: ref('DIPINJAM'),
    };
  },
  mounted() {
    this.getPeminjamanList();
  },
  methods: {
    getPeminjamanList() {
      axios
          .get('https://mhdrmaulana.my.id/mypustaka/daftar_peminjaman_buku.php?status='+this.status)
          .then(response => {
            this.peminjaman = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>

.card-header{
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
  text-align: center;
}

.button-add {
  --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;
}

.button-add::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

.button-add:hover {
  color: white;
}

.button-add:before {
  top: 100%;
  left: 100%;
  transition: .3s all;
}

.button-add:hover::before {
  top: -30px;
  left: -30px;
}
</style>