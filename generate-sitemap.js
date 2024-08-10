import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

async function generateSitemap() {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/AboutUs', changefreq: 'monthly', priority: 0.8 },
        { url: '/ContactUs', changefreq: 'monthly', priority: 0.8 },
        { url: '/Services', changefreq: 'monthly', priority: 0.8 },
        { url: '/EnquireNow', changefreq: 'monthly', priority: 0.8 },
        { url: '/T&C', changefreq: 'monthly', priority: 0.8 },
        { url: '/countries', changefreq: 'monthly', priority: 0.8 },
        { url: '/USA', changefreq: 'monthly', priority: 0.8 },
        { url: '/Europe', changefreq: 'monthly', priority: 0.8 },
        { url: '/India', changefreq: 'monthly', priority: 0.8 },
        { url: '/Global', changefreq: 'monthly', priority: 0.8 },
        { url: '/services/Join-Our-Academy', changefreq: 'monthly', priority: 0.8 },
        { url: '/services/Register-For-Tennis-&-Education', changefreq: 'monthly', priority: 0.8 },
        { url: '/services/Scholarship-in-USA-&-Europe', changefreq: 'monthly', priority: 0.8 },
        { url: '/services/Tennis-Camp-in-Spain', changefreq: 'monthly', priority: 0.8 },
        { url: '/services/Career-Counseling', changefreq: 'monthly', priority: 0.8 },
        { url: '/services/Book-a-course', changefreq: 'monthly', priority: 0.8 },
        // Add more links to your routes here
    ];

    const stream = new SitemapStream({ hostname: 'https://new-thirty-forty-master.vercel.app/' });
    const xmlData = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

    // Write sitemap.xml to the public directory
    createWriteStream('./public/sitemap.xml').write(xmlData);
}

generateSitemap().then(() => {
    console.log('Sitemap generated successfully!');
});
