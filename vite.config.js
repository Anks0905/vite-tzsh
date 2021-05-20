//导入defineConfig插件以后,修改此文件就可以有代码提示了
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from 'vite-plugin-style-import';
//路径处理模块
import path from "path";

export default defineConfig({
    //定义别名
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            coms: path.resolve(__dirname, "src/components"),
        },
    },
    //通过插件形式挂载vue
    plugins: [
        vue(),
        styleImport(
            {
                libs: [
                    {
                        libraryName: 'vant',
                        esModule: true,
                        resolveStyle: (name) => `vant/es/${name}/style`,
                    },
                ],
            }
        )
    ],
})