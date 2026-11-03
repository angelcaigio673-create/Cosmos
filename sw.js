const V="cosmos-4",CORE=["./","pc.html","m.html","manifest.webmanifest","assets/logo.jpg","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!="GET"||new URL(r.url).origin!=location.origin)return;
e.respondWith(caches.match(r).then(h=>{const n=fetch(r).then(x=>{if(x.ok)caches.open(V).then(c=>c.put(r,x.clone()));return x}).catch(()=>h);return h||n}))});
