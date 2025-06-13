import type {NextConfig} from "next";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolveAlias = {
    "@daniel-rose/envex/hooks": path.resolve(
        __dirname,
        '../../packages/envex/src/hooks.ts'
    ),
    "@daniel-rose/envex/components": path.resolve(
        __dirname,
        '../../packages/envex/src/components.ts'
    ),
    "@daniel-rose/envex": path.resolve(
        __dirname,
        '../../packages/envex/src/index.ts'
    )
}

const nextConfig: NextConfig = {
    output: 'standalone',
    outputFileTracingRoot: path.resolve(process.cwd(), '../../'),
    ...(process.env.NODE_ENV !== 'development' ? {} : {
        webpack: (config) => {
            config.resolve.alias = {
                ...config.resolve.alias,
                ...resolveAlias
            }

            return config
        },
    })
};

export default nextConfig;
