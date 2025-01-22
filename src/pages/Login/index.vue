<template>
  <div
    class="min-h-screen text-white flex flex-col items-center justify-center px-4 overflow-hidden"
  >
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold">Login</h1>
      <p class="text-gray-400">Login ke akun GoSmart</p>
    </div>

    <!-- Login Form -->
    <div class="w-full max-w-sm">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Masukkan email Anda"
          class="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Masukkan password Anda"
          class="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <!-- Options -->
      <div class="flex items-center justify-between mb-6">
        <label class="flex items-center text-sm text-gray-400">
          <input
            type="checkbox"
            class="h-4 w-4 text-blue-600 border-gray-700 rounded focus:ring-blue-500"
          />
          <span class="ml-2">Ingat Saya</span>
        </label>
        <a href="#" class="text-sm text-blue-500 hover:underline">Lupa Password?</a>
      </div>

      <!-- Login Button -->
      <button
        class="w-full bg-black hover:bg-slate-950 border border-black text-white font-semibold py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        LOG IN
      </button>
    </div>

    <!-- Register Section -->
    <div class="mt-8 text-center">
      <p class="text-gray-400">
        Belum Login? <a href="#" class="text-blue-500 hover:underline">Register Disini</a>
      </p>
      <button
        style="background-color: #2e2e2e"
        class="mt-4 w-full max-w-sm hover:bg-gray-600 border border-black text-white font-semibold py-2 lg:px-24 rounded-2xl focus:ring-2 focus:ring-gray-500 focus:outline-none"
      >
        REGISTER
      </button>
    </div>

    <!-- Footer -->
    <!-- Footer teks di kiri -->
    <footer class="w-full flex items-center justify-between px-4 absolute bottom-0">
      <!-- Teks di sisi kiri -->
      <p class="text-gray-500 absolute bottom-5">Pintar bersama GoSmart</p>

      <!-- Gambar di sisi kanan -->
      <div class="w-full flex items-center justify-end overflow-hidden">
        <img
          src="../../assets/image-from-rawpixel-id-12363052-png.png"
          alt="Illustration"
          class="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/7"
        />
      </div>
    </footer>

    <!-- Footer gambar di kanan -->
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
