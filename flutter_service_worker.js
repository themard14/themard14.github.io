'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ba0eb8129f348f15eedceba527d2bcba",
"/": "ba0eb8129f348f15eedceba527d2bcba",
"main.dart.js": "64bd202bb7064eaaf893cc93351a80e5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a0a8f524fdac21e457ef892254ca1bce",
".git/config": "61384a771b9c6ab3318278e7b5c4b239",
".git/objects/61/d731241cf357e7adae3e10fd42bd6d8a67feb1": "2be6a9b4c7f548f6a08d9a9e22a36ade",
".git/objects/61/c4472f4b806770f5cbaeca36ddc1f56ec032cb": "b023e985307d850d8775e45ee3576b8e",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9b/d7adbfc29baf4b1ea15285fd4fb7c9467a4e00": "eb621c3a2de880675dd7a58c94c43d8b",
".git/objects/60/1361a6123f562ac80622ca96719d98f485ecf1": "3225238cd7f387ad809888102be5c96b",
".git/objects/02/59910e5794dba24dafca63e5a351241108043c": "7d09b3d8f1d1c7408ee3582606562d87",
".git/objects/a5/f68c20fc4756657c0433f2851f16f20135f5e8": "a649163d10ff2872a68e2437d15c6446",
".git/objects/d1/66532e665f2e2f8fb97d04cb4eb2422e229e68": "9a29bef2f456f55a2bce9a53aec6ac2e",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ca/12fa1425f610f412bdbb5b0aa0c8dfa05da861": "a3f7b6dc3bf5bedba038c1d25416a898",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/fec92a32b99d863c3cfbf6be3bdfd468263e48": "112fcb53940924f8f9e4b0266cb85aa6",
".git/objects/4b/8d45be51d979b0b7718001030ea659f0e801fd": "627cfc9199064555a06c8af9c9a28954",
".git/objects/17/78b75015f17624167a6d1839e659c32dd9f245": "f3408c4de0c74aca24a351691792e826",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/da74c517180e35046d7d990aec41f9c5866ac6": "ba2fa5173fd89abddb2a4204d3a15183",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/cb8221c785de3dc381e420a414df645f64c1b2": "dd4b1f45fc7f1e37dd4a85210ac9be26",
".git/objects/5c/e81fc68532766c70b0536e36d896c09d1f2a75": "a2cf896fa826ce94865b016e497c2660",
".git/objects/09/02a520feb212a142eebba72ca1f928ce4076d3": "886e893329da0634a22a9e1f0b54f301",
".git/objects/65/eb9ae5ea25146b49f55e36b9808f9e3acf657c": "f782693be572e5f28bb33d70715b3465",
".git/objects/62/db2d7fe2a9904bf639f5937cfdb8d2514afe8b": "42db0d22c54c87814b69e264cdb9a8f5",
".git/objects/98/d38cf7067b01de5e0bbd4bf08b5ececea38855": "9c370d257845ceff325e8882ce971fde",
".git/objects/3f/aa74de0cbf0f466ec4316d37733ddd50d0fb1e": "4cbbf69548e754aeb86160a8c45f070d",
".git/objects/30/586ed7f5f1147e74b51aa268eccb804a398876": "554f9a601375b11d98e433c09ea4517b",
".git/objects/01/3a6f1b5a0900d628739460d6795d616adca9fa": "209e7e46303cf8ddf1c0da5ae174168d",
".git/objects/97/f1ddfffa9e28836986c2a60e70423d4bd99040": "442cd6643752665dddf0ed9e33d04daf",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/672ea8608c6c2e8c24779d1b4c9dddc6b86c4f": "06ea4978fe20a599c907f8ffbbc5dcd1",
".git/objects/d4/2785bb1350164159901834ce4b85182e8c8cc2": "e3dff4eb85d2285c9060d2b55cb9d653",
".git/objects/b8/fac119081777572d41497d0559d7a0e83d491c": "6e516960adab4b4b22014fd3ba9287c2",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9480f5ce857de6c385e3778eca1c797af82032": "dd9f49d25e70aefb67ca4899d55bd74d",
".git/objects/db/ddae65670000bdc236eb9a55e6707c7cac7622": "791961233b182382337bd8494151aab9",
".git/objects/a6/19335cd183df31657dfae4c96a3a7280c0c44a": "a07afed30b41596f1cb0e0cbe1c661fe",
".git/objects/ff/12ff88c22cf6efe230ea9f28c62aeaa2b1a1fb": "92017656db18af46ccf96b693903a386",
".git/objects/c5/68c4ef96dba95fa6cb1966086f0beff1f29f1a": "0eef4188bd7476d6e0b81a5e2e688074",
".git/objects/f1/70d69018039c2ed5828c2f05ef371baa67b77c": "31f494cec8bdd7c39cdf108bc0ea0b32",
".git/objects/41/affe720d45887d2f59b2db70b729f0884be22c": "74452348c8e11ae065a336a2d5bf757c",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/2b/c29838d087059f7b9edab155c8172ae886d8fb": "cb09f950abf974212ad16b0b0d3c244e",
".git/objects/13/9cf618a7a1bd5f518fcc36bd4a1840cf86f1c4": "671d3dd7906a27b20aed059f8a74e56a",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7f/b6029529c12d76cda6994c9475fc543a911859": "6b95876f87115fe904ae5350397142de",
".git/objects/25/a0d902bdaa03ed530cb718b929625ed422503d": "2c53d0d2d115464ff05ddc4ca351a0b2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a0796149b431536fae9b0cb9f44a8199",
".git/logs/refs/heads/master": "a0796149b431536fae9b0cb9f44a8199",
".git/logs/refs/remotes/master/master": "7ce2622ff0ea88fcfa038de1c6b89f62",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "5e910d9b709933caee9c0e4d20198978",
".git/refs/remotes/master/master": "5e910d9b709933caee9c0e4d20198978",
".git/index": "0b81858c2323dd58b97c931be402e6d4",
".git/COMMIT_EDITMSG": "fc519af70ad268523657efd8b7f81289",
"assets/AssetManifest.json": "415ccf52279c571a338de731f0520c1c",
"assets/NOTICES": "98b06a3c20ebff7de1feb2774aa1abfd",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/logo-no-text.png": "b3d97fb05ff10be99395548fb3f2b12f",
"assets/assets/logo-with-text.png": "d7f9710a3af04f2c26aacaa7b06c3c85"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
