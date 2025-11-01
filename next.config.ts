import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    output: "export",
    basePath: "/gitaoh",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
