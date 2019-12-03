# Gatsby-theme-elk-starter

Start write blog by markdown, and build with gatsby.

## Usage

Install gatsby-cli first.

```shell
npm i gatsby-cli
gatsby new yourBlog https://github.com/SANGET/gatsby-theme-elk-starter
cd yourBlog
yarn; yarn start
```

And then open [http://localhost:7788](http://localhost:7788)

## Writing blog

Blogs' storage dir is `/content/blog-posts/`, you can organize files under  year's dir, like `/content/blog-posts/2019/post.md`

## Assets dir

Sometime you want to add some image in you post, and you can place the images asset under dir `/content/assets/images`, and reference image relative to the `/assets/` dir, like:

```treeview
|-- /content/
|  |-- assets/
|  |  |-- images/
|  |  |  |-- images1.jpg
|  |-- blog-posts/
|  |  |-- post.md
```

```markdown
## image

![img](../assets/images/image1.jpg)
```

## Write a page

Sometime you want to add a page in your blog, like `about` page to intro what is the topic of your blog, you can add any page in `/content/pages`, like:

Edit frontmatter field layout to `page`

```markdown
---
title: Custom
layout: page
---

## Custom page

Custom page
```

and add `sideMenu` options to gatsby-config.js, like:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-elk',
      options: {
        ...options,
        sideMenu: [
          {
            title: 'Blog',
            path: '/',
          },
          {
            title: 'Archive',
            path: '/archive',
          },
          {
            title: 'Tags',
            path: '/tags',
          },
          {
            title: 'About',
            path: '/about',
          },
        ],
      },
    },
  ],
};
```

That is buildin menu.

Once added page, you can access that in `host/pageName`, like `localhost:7788/custom`.
