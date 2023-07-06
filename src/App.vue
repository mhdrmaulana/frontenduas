<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Buku</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/kategori">Kategori</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/anggota">Anggota</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/peminjaman">Peminjaman</a>
            </li>
          </ul>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
