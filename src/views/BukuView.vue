<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form class="d-flex" role="search">
          <router-link class="button button-add" :to="`/insert-buku/`">Tambah Buku</router-link>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(data, index) in buku" :key="data.id">
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide">
              <img :src="data.file_cover" alt="File Cover"
                   class="img-fluid" style="width: 190px">
            </div>
            <div class="backSide">
              <p class="title">{{ data.judul }}</p>
              <p class="list-group-item">Pengarang: {{ data.pengarang }}</p>
              <p class="list-group-item">Kategori: {{ data.kode_kategori }}</p>
              <p class="list-group-item">Penerbit: {{ data.penerbit }}</p>
              <p class="list-group-item">Harga: {{ data.harga }}</p>
              <div class="card-body">
                <router-link class="button button-edit" :to="`/update-buku/`+data.id">Edit</router-link>
                <button class="button button-delete" role="button" @click="hapusBuku(data.id)">Delete</button>
              </div>
            </div>
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
      buku: ref([]),
    };
  },
  mounted() {
    this.getBukuList();
  },
  methods: {
    getBukuList() {
      axios
          .get('https://mhdrmaulana.my.id/mypustaka/select_buku.php')
          .then(response => {
            this.buku = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    },
    hapusBuku(id) {
      axios
          .delete(`https://mhdrmaulana.my.id/mypustaka/delete_buku.php?id=${id}`)
          .then(response => {
            console.log(response.data);
            this.getBukuList();
          })
          .catch(error => {
            console.log(error);
          });
    },
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1140px; /* Adjust the width as needed */
}

.row {
  display: flex;
  justify-content: space-between;
}

.col-md-4 {
  flex-basis: calc(33.33% - 1rem);
  margin-bottom: 4rem;
}

.myCard {
  background-color: transparent;
  width: 290px;
  height: 354px;
  perspective: 1000px;
  margin-top: 50px;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.innerCard {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.myCard:hover .innerCard {
  transform: rotateY(180deg);
}

.frontSide,
.backSide {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  color: white;
  box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
  font-weight: 700;
}

.frontSide,
.frontSide::before {
  background: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
}

.backSide,
.backSide::before {
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.backSide {
  transform: rotateY(180deg);
}

.frontSide::before,
.backSide::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
  border-radius: 1em;
  filter: blur(20px);
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    opacity: 0.3;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
}

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


.button-add {
  --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: auto;
  height: auto;
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