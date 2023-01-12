/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'press.hulu.com',
            port: '',
            pathname: '/wp-content/uploads/2020/02/**',
        }, ]
    },
}