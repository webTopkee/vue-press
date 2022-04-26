module.exports = {
    title: 'weber', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '前端记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/git.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/git.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            // {
            //     text: '分类',
            //     ariaLabel: '分类',
            //     items: [
            //         { text: '文章', link: '/pages/folder1/test1.md' },
            //         { text: '琐碎', link: '/pages/folder2/test4.md' },
            //     ]
            // },
            { text: '书签栏', link: '/pages/bookmark/link.md' },
            { text: 'Github', link: 'https://github.com/webTopkee' },
        ],
        sidebar: {
            '/pages/guide/':[
                {
                    title: '阅读',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['git.md', 'Git'],
                        ['npm.md', 'Npm'],
                    ]
                },
            ],
        }
    }
}