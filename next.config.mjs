/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Hapus atau set `unoptimized` ke false
  // images: {
  //   unoptimized: true,
  // },
}

export default nextConfig