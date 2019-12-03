module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-elk',
      options: {
        blogContentPath: `${__dirname}/content/blog-posts`,
        assetContentPath: `${__dirname}/content/assets`,
        pagesContentPath: `${__dirname}/content/pages`,
        basePath: '/',
        siteTitle: 'Sanget\'s Blog',
        author: 'Sanget',
        description: 'Thinking',
        siteUrl: 'https://thinkmore.xyz',
        social: {
          // twitter: `sanget`,
          mail: 'zh.sanget@gmail.com',
          github: 'https://github.com/SANGET',
        },
        footer: {
          showBuildInfo: true,
          since: 2013,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-125030746-1',
        head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sanget\'s Blog',
        short_name: 'Sanget\'s blog',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#376bfb',
        display: 'minimal-ui',
        icon: 'content/assets/profile-pic.jpg',
      },
    },
  ],
};
