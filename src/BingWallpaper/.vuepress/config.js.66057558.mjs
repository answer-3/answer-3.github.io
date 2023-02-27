// src/.vuepress/config.js
import { defaultTheme } from "vuepress";
var config_default = {
  title: "\u4E2A\u4EBA\u4E3B\u9875",
  base: "/",
  theme: defaultTheme({
    repo: "answer-3/answer-3.github.io.git",
    // 默认主题配置
    navbar: (() => {
      let nav = [{
        text: "\u9996\u9875",
        link: "/index.html"
      }, {
        text: "Blog",
        link: "/Blog/index.html"
      }, {
        text: "BingImage",
        children: [{
          text: "\u6700\u8FD115\u5929",
          link: "/BingImage/index.html"
        }]
      }, {
        text: "\u5173\u4E8E",
        link: "/about.html"
      }];
      let today = new Date();
      let minDay = new Date("2020/1/1");
      let bingImageChildren = nav[2].children;
      let yearNav = {
        text: today.getFullYear(),
        children: []
      };
      while (today > minDay) {
        if (today.getMonth() === 11 && yearNav.children.length > 0) {
          bingImageChildren.push(yearNav);
          yearNav = {
            text: today.getFullYear(),
            children: []
          };
        }
        yearNav.children.unshift({
          text: today.getFullYear() + "/" + (today.getMonth() + 1),
          link: "/BingImage/" + today.getFullYear() + "/" + today.getFullYear() + (today.getMonth() < 9 ? "0" : "") + (today.getMonth() + 1) + ".html"
        });
        today.setMonth(today.getMonth() - 1);
      }
      console.log(nav);
      return nav;
    })()
  })
};
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9EZXZlbG9wbWVudC9JZGVhUHJvamVjdHNfR2l0SHViL2Fuc3dlci0zL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERldmVsb3BtZW50XFxcXElkZWFQcm9qZWN0c19HaXRIdWJcXFxcYW5zd2VyLTNcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0RldmVsb3BtZW50L0lkZWFQcm9qZWN0c19HaXRIdWIvYW5zd2VyLTMvc3JjLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQge2RlZmF1bHRUaGVtZX0gZnJvbSAndnVlcHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdGl0bGU6ICdcdTRFMkFcdTRFQkFcdTRFM0JcdTk4NzUnLFxyXG4gICAgYmFzZTogJy8nLFxyXG4gICAgdGhlbWU6IGRlZmF1bHRUaGVtZSh7XHJcbiAgICAgICAgcmVwbzogJ2Fuc3dlci0zL2Fuc3dlci0zLmdpdGh1Yi5pby5naXQnLFxyXG4gICAgICAgIC8vIFx1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVxyXG4gICAgICAgIG5hdmJhcjogKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5hdiA9IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHU5OTk2XHU5ODc1JyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICcvaW5kZXguaHRtbCcsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdCbG9nJyxcclxuICAgICAgICAgICAgICAgIGxpbms6ICcvQmxvZy9pbmRleC5odG1sJyxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0JpbmdJbWFnZScsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU2NzAwXHU4RkQxMTVcdTU5MjknLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvQmluZ0ltYWdlL2luZGV4Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1NTE3M1x1NEU4RScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiAnL2Fib3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgbGV0IG1pbkRheSA9IG5ldyBEYXRlKCcyMDIwLzEvMScpO1xyXG4gICAgICAgICAgICBsZXQgYmluZ0ltYWdlQ2hpbGRyZW4gPSBuYXZbMl0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGxldCB5ZWFyTmF2ID0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogdG9kYXkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3aGlsZSAodG9kYXkgPiBtaW5EYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b2RheS5nZXRNb250aCgpID09PSAxMSAmJiB5ZWFyTmF2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5nSW1hZ2VDaGlsZHJlbi5wdXNoKHllYXJOYXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXJOYXYgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRvZGF5LmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHllYXJOYXYuY2hpbGRyZW4udW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdG9kYXkuZ2V0RnVsbFllYXIoKSArICcvJyArICh0b2RheS5nZXRNb250aCgpICsgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9CaW5nSW1hZ2UvJyArIHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLycgKyB0b2RheS5nZXRGdWxsWWVhcigpICsgKHRvZGF5LmdldE1vbnRoKCkgPCA5ID8gJzAnIDogJycpICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKSArICcuaHRtbCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdG9kYXkuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hdilcclxuICAgICAgICAgICAgcmV0dXJuIG5hdjtcclxuICAgICAgICB9KSgpLFxyXG4gICAgfSksXHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBWLFNBQVEsb0JBQW1CO0FBRXJYLElBQU8saUJBQVE7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLE9BQU8sYUFBYTtBQUFBLElBQ2hCLE1BQU07QUFBQTtBQUFBLElBRU4sU0FBUyxNQUFNO0FBQ1gsVUFBSSxNQUFNLENBQUM7QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWLEdBQUc7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNWLEdBQUc7QUFBQSxRQUNDLE1BQU07QUFBQSxRQUNOLFVBQVUsQ0FBQztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1YsQ0FBQztBQUFBLE1BQ0wsR0FBRztBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1YsQ0FBQztBQUNELFVBQUksUUFBUSxJQUFJLEtBQUs7QUFDckIsVUFBSSxTQUFTLElBQUksS0FBSyxVQUFVO0FBQ2hDLFVBQUksb0JBQW9CLElBQUksQ0FBQyxFQUFFO0FBQy9CLFVBQUksVUFBVTtBQUFBLFFBQ1YsTUFBTSxNQUFNLFlBQVk7QUFBQSxRQUN4QixVQUFVLENBQUM7QUFBQSxNQUNmO0FBQ0EsYUFBTyxRQUFRLFFBQVE7QUFDbkIsWUFBSSxNQUFNLFNBQVMsTUFBTSxNQUFNLFFBQVEsU0FBUyxTQUFTLEdBQUc7QUFDeEQsNEJBQWtCLEtBQUssT0FBTztBQUM5QixvQkFBVTtBQUFBLFlBQ04sTUFBTSxNQUFNLFlBQVk7QUFBQSxZQUN4QixVQUFVLENBQUM7QUFBQSxVQUNmO0FBQUEsUUFDSjtBQUNBLGdCQUFRLFNBQVMsUUFBUTtBQUFBLFVBQ3JCLE1BQU0sTUFBTSxZQUFZLElBQUksT0FBTyxNQUFNLFNBQVMsSUFBSTtBQUFBLFVBQ3RELE1BQU0sZ0JBQWdCLE1BQU0sWUFBWSxJQUFJLE1BQU0sTUFBTSxZQUFZLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxNQUFNLE9BQU8sTUFBTSxTQUFTLElBQUksS0FBSztBQUFBLFFBQ3pJLENBQUM7QUFDRCxjQUFNLFNBQVMsTUFBTSxTQUFTLElBQUksQ0FBQztBQUFBLE1BQ3ZDO0FBQ0EsY0FBUSxJQUFJLEdBQUc7QUFDZixhQUFPO0FBQUEsSUFDWCxHQUFHO0FBQUEsRUFDUCxDQUFDO0FBQ0w7IiwKICAibmFtZXMiOiBbXQp9Cg==