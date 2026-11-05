import {existsSync} from 'node:fs';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const researchPortraits = ['liu-zhidan','xi-zhongxun'].filter(id =>
 existsSync(new URL('./public/images/research/'+id+'.jpg', import.meta.url))
);

export default defineConfig({
 base: './',
 plugins: [react()],
 define: {__LOCAL_RESEARCH_PORTRAITS__: JSON.stringify(researchPortraits)},
 build: {target:'edge90', cssTarget:'chrome90', assetsInlineLimit:0},
});
