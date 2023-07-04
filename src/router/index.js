import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buku',
      component: () => import('../views/BukuView.vue')
    },
    {
      path: '/anggota',
      name: 'anggota',
      component: () => import('../views/AnggotaView.vue')
    },
    {
      path: '/kategori',
      name: 'kategori',
      component: () => import('../views/KategoriView.vue')
    },
    {
      path: '/update-buku/:id',
      name: 'UpdateBuku',
      component: () => import('../components/UpdateBuku.vue')
    },
    {
      path: '/insert-buku',
      name: 'InsertBuku',
      component: () => import('../components/InsertBuku.vue')
    },
    {
      path: '/update-kategori/:id',
      name: 'UpdateKategori',
      component: () => import('../components/UpdateKategori.vue')
    },
    {
      path: '/insert-kategori',
      name: 'InsertKategori',
      component: () => import('../components/InsertKategori.vue')
    },
    {
      path: '/update-anggota/:id',
      name: 'UpdateAnggota',
      component: () => import('../components/UpdateAnggota.vue')
    },
    {
      path: '/insert-anggota',
      name: 'InsertAnggota',
      component: () => import('../components/InsertAnggota.vue')
    },
    {
      path: '/peminjaman',
      name: 'PeminjamanView',
      component: () => import('../views/PeminjamanView.vue')
    },
    {
      path: '/peminjaman-master',
      name: 'PeminjamanMaster',
      component: () => import('../components/PeminjamanMaster.vue')
    },
    {
      path: '/peminjaman-detail/:id',
      name: 'PeminjamanDetail',
      component: () => import('../views/PeminjamanDetail.vue')
    }
  ]
})

export default router
