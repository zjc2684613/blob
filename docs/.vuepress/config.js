module.exports = {
    title: 'Jesse的博客',
    base: "/blog/",
    description: '纸上得来终觉浅',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    plugins: [
        // [
        //   'vuepress-plugin-comment',
        //   {
        //     choosen: 'valine', 
        //     // options选项中的所有参数，会传给Valine的配置
        //     options: {
        //       el: '#valine-vuepress-comment',
        //       appId: 'EgEQKgWiYrHjAdE3PCwMtHJM-gzGzoHsz',
        //       appKey: 'pqkC3XPHUrKEzgfBbr4RcTKS',
        //     }
        //   }
        // ]
    ]
}