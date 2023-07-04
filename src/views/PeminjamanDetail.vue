<template>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  data() {
    return {
      peminjaman: ref ([]),
      detail: ref ([]),

    };
  },
  mounted() {
    this.getPeminjamanDetail(this.$route.params.id);
    this.getPeminjaman(this.$route.params.id);

  },
  methods: {
    getPeminjamanDetail(id) {
      axios
          .get('https://mhdrmaulana.my.id/mypustaka/select_peminjaman_detail.php?id='+id)
          .then(response => {
            this.detail = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    getPeminjaman(id) {
      axios
          .get('https://mhdrmaulana.my.id/mypustaka/select_peminjaman_master_id.php?id='+id)
          .then(response => {
            this.peminjaman = response.data.data;
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
};
</script>

<style scoped>

</style>