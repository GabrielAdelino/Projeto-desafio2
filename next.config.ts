import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Gera um build estático
  images: {
    unoptimized: true, // Evita otimização de imagens, necessária para export estático
  },
};

export default nextConfig;
