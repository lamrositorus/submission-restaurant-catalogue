if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let c={};const f=e=>i(e,d),n={module:{uri:d},exports:c,require:f};a[d]=Promise.all(s.map((e=>n[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-27b4add1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"207.bundle.js",revision:"9fc3a4e74818bc240e2c21532aee3a10"},{url:"465.bundle.js",revision:"55bf93637f7d99410a8fff46c77ade08"},{url:"app.webmanifest",revision:"9f0ae7a3771e5d89420f4e1cee8c6c98"},{url:"app~09955542.bundle.js",revision:"c1c3e45ec2246aa0504ab8f00d891084"},{url:"app~09955542.css",revision:"7a67e7117160be798bff991a1bf06852"},{url:"app~a51fa3f5.bundle.js",revision:"4fde3594566fde4d9ce22b492fd6f784"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"6621cb1a79615b70e44914479dad7403"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"ac535b4a9d4ccf44f5c8889ae1aac4e4"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icons/icon.png",revision:"d2d694dadb869ed818767e857063e6d6"},{url:"images/03.jpg",revision:"0e44b271115e33382e60af9fe2ded47b"},{url:"images/04.jpg",revision:"854fbee27be80d218d10f32cd5be43b0"},{url:"images/05.jpg",revision:"77e4620a276f43c3b8ddea0bd9c7aee8"},{url:"images/10.jpg",revision:"3336a1e38cb35551bd5bdcc358162198"},{url:"images/14.jpg",revision:"486494c6d9a186f6bf4119aba4b59876"},{url:"images/15.jpg",revision:"0d0ae8097d32c931b5d4c91f218ad73c"},{url:"images/18.jpg",revision:"344e3b6e67c45a86cf8ac9428515d2a0"},{url:"images/19.jpg",revision:"d3058462d438108f7d94b2ee6e34d88a"},{url:"images/21.jpg",revision:"9f12b90ed8178b8d6b7aac0409a61ec9"},{url:"images/22.jpg",revision:"13b7c7a72e44fe5328a669b01c9d7b11"},{url:"images/23.jpg",revision:"652e5ab6a51909fe191b70989006f493"},{url:"images/24.jpg",revision:"9fe08cc9494319e5dd9680f992a813da"},{url:"images/25.jpg",revision:"cdfa14573c04b5a68c206b0258c9fea3"},{url:"images/27.jpg",revision:"5b9538c17ec58ec18b2b0a62c3a0b4b9"},{url:"images/30.jpg",revision:"38f5ffd68982b5d156a98756b837c58f"},{url:"images/32.jpg",revision:"7891bec43eaef4d10b4061e00f653efa"},{url:"images/34.jpg",revision:"58a288c5f66f4ac1281e6f72e60985d9"},{url:"images/35.jpg",revision:"0e34cbac02ac75cc57d0c1b643f061f0"},{url:"images/38.jpg",revision:"3d5b894a5ac31bd22522f7a38700053c"},{url:"images/43.jpg",revision:"11d2bbfacc6b14d1b83eee127ef7aaa5"},{url:"images/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"index.html",revision:"f8177e49d21001c83c2de9b70d5ab8a5"}],{}),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev/,new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev\/images/,new e.StaleWhileRevalidate({cacheName:"images",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
