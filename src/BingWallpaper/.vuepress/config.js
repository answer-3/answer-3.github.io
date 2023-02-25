import {defaultTheme} from 'vuepress';

export default {
    title: 'Bing Wallpaper 每天发现一个新地方',
    base: '/',
    theme: defaultTheme({
        repo: 'answer-3/answer-3.github.io.git',
        // 默认主题配置
        navbar: (() => {
            let nav = [{
                text: '首页',
                link: '/index.html',
            }];
            let today = new Date();
            let minDay = new Date('2019/12/1');
            let yearNav = {
                text: today.getFullYear(),
                children: []
            };
            while (today > minDay) {
                if (today.getMonth() === 11 && yearNav.children.length > 0) {
                    nav.push(yearNav);
                    yearNav = {
                        text: today.getFullYear(),
                        children: []
                    }
                }
                yearNav.children.unshift({
                    text: today.getFullYear() + '/' + (today.getMonth() < 9 ? '0' : '') + (today.getMonth() + 1),
                    link: '/' + today.getFullYear() + '/' + today.getFullYear() + (today.getMonth() < 9 ? '0' : '') + (today.getMonth() + 1) + '.html'
                });
                today.setMonth(today.getMonth() - 1);
            }
            nav.push({
                text: '关于',
                link: '/about.html',
            });
            return nav;
        })(),
    }),
}