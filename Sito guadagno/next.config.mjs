const nextConfig = {
  // STATIC_EXPORT=1 npm run build produces a portable out/ folder.
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" } : {}),
  images: { unoptimized: process.env.STATIC_EXPORT === "1" },
};
export default nextConfig;
