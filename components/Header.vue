<template>
    <header class="w-full border-b border-slate-200 py-6 bg-pink-900"  >
    <div class="container">
    <div class="flex justify-between items-center">
    <div>
        <NuxtLink to="/" class="text-xl font-bold" style="display: flex; align-items: center;">
  <img src="~/assets/logo-white.png" width="250" style="margin-left: 10px;" />
</NuxtLink>

    </div>
    <nav class="flex items-center gap-6 text-white">
    <NuxtLink to="/" class="text-base">Beranda</NuxtLink>
    <NuxtLink to="/cart" class="text-base">Riwayat Pesanan</NuxtLink>
    </nav>
    </div>
    </div>
    </header>
    </template>