/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ['image/webp', 'image/avif'],
		domains: ['*.cdninstagram.com'],
		remotePatterns: [
			{
				hostname: '*.cdninstagram.com',
				protocol: 'https'
			}
		]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		})

		return config
	}
}

module.exports = nextConfig
