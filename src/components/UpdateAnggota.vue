<template>
  <form  @submit.prevent="editAnggota">
    <div className="m-5 border border-radius p-5">
      <h1 className="mb-4">Edit Anggota</h1>
      <input
          className="form-control"
          type="text"
          v-model="anggota.nama"
          placeholder="Kode Kategori"
          aria-label="default input example"
      /><br/>
      <select class="form-control" v-model="anggota.jenis_kelamin">
        <option value="">Pilih jenis kelamin</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
      <br />
      <input
          className="form-control"
          type="text"
          v-model="anggota.alamat"
          placeholder="Pengarang Buku"
          aria-label="default input example"
      /><br/>
      <input
          className="form-control"
          type="text"
          v-model="anggota.no_hp"
          placeholder="Penerbit Buku"
          aria-label="default input example"
      /><br/>
      <input
          className="form-control"
          type="text"
          v-model="anggota.tanggal_terdaftar"
          placeholder="Tahun Terbit"
          aria-label="default input example"
      /><br/>

      <button class="button button-upload" type="submit" >Simpan perubahan</button>
    </div>
  </form>


</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
export default {
  data() {
    return {
      anggota: ref([])
    };
  },
  mounted() {
    this.getAnggota(this.$route.params.id);
  },
  methods: {
    getAnggota(id) {
      axios
          .get('https://mhdrmaulana.my.id/mypustaka/select_anggota_nomor.php?id='+id)
          .then(response => {
            this.anggota = response.data.data[0];
          })
          .catch(error => {
            console.log(error);
          });
    },
    editAnggota(){
      axios
          .post('https://mhdrmaulana.my.id/mypustaka/update_anggota.php',
              this.anggota, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }})
          .then(response => {
            console.log(response.data);
            this.$router.push('/anggota');
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>
button {
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

button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

button:hover {
  color: white;
}

button:before {
  top: 100%;
  left: 100%;
  transition: .3s all;
}

button:hover::before {
  top: -30px;
  left: -30px;
}
</style>