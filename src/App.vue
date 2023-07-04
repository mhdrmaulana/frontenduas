<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/">Buku</a>
            <a class="nav-link" href="/kategori">Kategori</a>
            <a class="nav-link" href="/anggota">Anggota</a>
            <a class="nav-link" href="/peminjaman">Peminjaman</a>
            <a class="nav-link" href="/peminjaman-master">Peminjaman Master</a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>