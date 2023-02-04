// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1oCNm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6514a1055d1a7ea0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hEBz2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPrivateKey", ()=>(0, _keys.getPrivateKey));
parcelHelpers.export(exports, "getPublicKey", ()=>(0, _keys.getPublicKey));
parcelHelpers.export(exports, "setPrivateKey", ()=>(0, _keys.setPrivateKey));
parcelHelpers.export(exports, "createNote", ()=>(0, _notes.createNote));
parcelHelpers.export(exports, "subscribeAndGetProfile", ()=>(0, _profiles.subscribeAndGetProfile));
parcelHelpers.export(exports, "setProfile", ()=>(0, _profiles.setProfile));
parcelHelpers.export(exports, "getRelays", ()=>(0, _relays.getRelays));
parcelHelpers.export(exports, "setRelays", ()=>(0, _relays.setRelays));
parcelHelpers.export(exports, "subscribe", ()=>(0, _subscribe.subscribe));
var _relays = require("./relays");
var _keys = require("./keys");
var _notes = require("./notes");
var _profiles = require("./profiles");
var _subscribe = require("./subscribe");
(0, _relays.createRelays)();

},{"./relays":"le10m","./keys":"bYUmf","./notes":"hlkir","./profiles":"2Bolr","./subscribe":"b20xP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"le10m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRelays", ()=>getRelays);
parcelHelpers.export(exports, "hasRelays", ()=>hasRelays);
parcelHelpers.export(exports, "setRelays", ()=>setRelays);
parcelHelpers.export(exports, "_initRelays", ()=>_initRelays);
parcelHelpers.export(exports, "_publish", ()=>_publish);
parcelHelpers.export(exports, "_subscribe", ()=>_subscribe);
parcelHelpers.export(exports, "createRelays", ()=>createRelays);
var _nostrTools = require("nostr-tools");
var _constants = require("../constants");
const relays = [];
globalThis.relays = relays;
let connectedPromise;
const getRelays = async ({ localStorage =globalThis.localStorage  } = {})=>{
    const relaysJSONMaybe = localStorage.getItem((0, _constants.RELAYS_STORAGE_KEY));
    if (relaysJSONMaybe === null || relaysJSONMaybe.length === 0) throw new Error("#we8Qt4 No relays configured");
    try {
        const relays = JSON.parse(relaysJSONMaybe);
        if (!Array.isArray(relays)) throw new Error("#kSt3oN Relays is not an array of relays");
        return relays;
    } catch (error) {
        console.error("#TKE6Vm Error during JSON.parse()", error);
        throw error;
    }
};
const hasRelays = async ({ localStorage =globalThis.localStorage  } = {})=>{
    const relaysJson = localStorage.getItem((0, _constants.RELAYS_STORAGE_KEY));
    if (relaysJson === null) return false;
    try {
        const relays = JSON.parse(relaysJson);
        if (Array.isArray(relays)) return true;
        return false;
    } catch  {
        return false;
    }
    return true;
};
const setRelays = async ({ relays , localStorage =globalThis.localStorage  })=>{
    const relaysString = JSON.stringify(relays);
    localStorage.setItem((0, _constants.RELAYS_STORAGE_KEY), relaysString);
    return;
};
const _initRelays = async ({ urls =[]  } = {})=>{
    if (typeof connectedPromise !== "undefined") // NOTE: We need to cast here because TypeScript doesn't know if this will
    // be an array or a single void and so it complains. In reality, we don't
    // care, we just want to await this promise and ignore it's output.
    return connectedPromise;
    // Ensure this is only invoked once
    if (relays.length > 0) return;
    // Use the result from `getRelays()` if `urls` is not provided
    const realUrls = urls.length === 0 ? await getRelays() : urls;
    const connectionPromises = realUrls.map(async (url)=>{
        const relay = (0, _nostrTools.relayInit)(url);
        try {
            await relay.connect();
        } catch (error) {
            console.error("#b9aLfB Connecting to relay failed", relay.url, error);
            return;
        }
        relays.push(relay);
    });
    connectedPromise = Promise.all(connectionPromises);
    await connectedPromise;
    if (relays.length === 0) {
        console.error("#qDRSs5 All relays failed to connect");
        globalThis.alert("Error: All relays failed to connect. Please wait a minute and reload.");
    }
};
const _publish = (event)=>{
    const publishPromises = relays.map((relay)=>{
        return new Promise((resolve, reject)=>{
            const pub = relay.publish(event);
            pub.on("ok", ()=>resolve());
            pub.on("failed", (reason)=>reject(`${relay.url} - ${reason}`));
        });
    });
    return publishPromises;
};
const _subscribe = async ({ filters , onEvent  })=>{
    await _initRelays();
    const subscriptions = relays.map((relay)=>new Promise((resolve, reject)=>{
            const subscription = relay.sub(filters);
            subscription.on("event", onEvent);
            subscription.on("eose", ()=>{
                resolve(subscription);
            });
        }));
    return subscriptions;
};
const createRelays = async ()=>{
    const relaysInstalled = await hasRelays();
    if (!relaysInstalled) await setRelays({
        relays: (0, _constants.DEFAULT_RELAYS)
    });
};

},{"nostr-tools":"9f1gR","../constants":"45DZp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9f1gR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Kind", ()=>Kind);
parcelHelpers.export(exports, "fj", ()=>fakejson_exports);
parcelHelpers.export(exports, "generatePrivateKey", ()=>generatePrivateKey);
parcelHelpers.export(exports, "getBlankEvent", ()=>getBlankEvent);
parcelHelpers.export(exports, "getEventHash", ()=>getEventHash);
parcelHelpers.export(exports, "getPublicKey", ()=>getPublicKey);
parcelHelpers.export(exports, "matchFilter", ()=>matchFilter);
parcelHelpers.export(exports, "matchFilters", ()=>matchFilters);
parcelHelpers.export(exports, "nip04", ()=>nip04_exports);
parcelHelpers.export(exports, "nip05", ()=>nip05_exports);
parcelHelpers.export(exports, "nip06", ()=>nip06_exports);
parcelHelpers.export(exports, "nip19", ()=>nip19_exports);
parcelHelpers.export(exports, "nip26", ()=>nip26_exports);
parcelHelpers.export(exports, "relayInit", ()=>relayInit);
parcelHelpers.export(exports, "serializeEvent", ()=>serializeEvent);
parcelHelpers.export(exports, "signEvent", ()=>signEvent);
parcelHelpers.export(exports, "utils", ()=>utils_exports);
parcelHelpers.export(exports, "validateEvent", ()=>validateEvent);
parcelHelpers.export(exports, "verifySignature", ()=>verifySignature);
// keys.ts
var _secp256K1 = require("@noble/secp256k1");
var _sha256 = require("@noble/hashes/sha256");
var _utils = require("@noble/hashes/utils");
var _base = require("@scure/base");
var _englishJs = require("@scure/bip39/wordlists/english.js");
var _bip39 = require("@scure/bip39");
var _bip32 = require("@scure/bip32");
var _hmac = require("@noble/hashes/hmac");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
function generatePrivateKey() {
    return _secp256K1.utils.bytesToHex(_secp256K1.utils.randomPrivateKey());
}
function getPublicKey(privateKey) {
    return _secp256K1.utils.bytesToHex(_secp256K1.schnorr.getPublicKey(privateKey));
}
// utils.ts
var utils_exports = {};
__export(utils_exports, {
    insertEventIntoAscendingList: ()=>insertEventIntoAscendingList,
    insertEventIntoDescendingList: ()=>insertEventIntoDescendingList,
    utf8Decoder: ()=>utf8Decoder,
    utf8Encoder: ()=>utf8Encoder
});
var utf8Decoder = new TextDecoder("utf-8");
var utf8Encoder = new TextEncoder();
function insertEventIntoDescendingList(sortedArray, event) {
    let start = 0;
    let end = sortedArray.length - 1;
    let midPoint;
    let position = start;
    if (end < 0) position = 0;
    else if (event.created_at < sortedArray[end].created_at) position = end + 1;
    else if (event.created_at >= sortedArray[start].created_at) position = start;
    else while(true){
        if (end <= start + 1) {
            position = end;
            break;
        }
        midPoint = Math.floor(start + (end - start) / 2);
        if (sortedArray[midPoint].created_at > event.created_at) start = midPoint;
        else if (sortedArray[midPoint].created_at < event.created_at) end = midPoint;
        else {
            position = midPoint;
            break;
        }
    }
    if (sortedArray[position]?.id !== event.id) return [
        ...sortedArray.slice(0, position),
        event,
        ...sortedArray.slice(position)
    ];
    return sortedArray;
}
function insertEventIntoAscendingList(sortedArray, event) {
    let start = 0;
    let end = sortedArray.length - 1;
    let midPoint;
    let position = start;
    if (end < 0) position = 0;
    else if (event.created_at > sortedArray[end].created_at) position = end + 1;
    else if (event.created_at <= sortedArray[start].created_at) position = start;
    else while(true){
        if (end <= start + 1) {
            position = end;
            break;
        }
        midPoint = Math.floor(start + (end - start) / 2);
        if (sortedArray[midPoint].created_at < event.created_at) start = midPoint;
        else if (sortedArray[midPoint].created_at > event.created_at) end = midPoint;
        else {
            position = midPoint;
            break;
        }
    }
    if (sortedArray[position]?.id !== event.id) return [
        ...sortedArray.slice(0, position),
        event,
        ...sortedArray.slice(position)
    ];
    return sortedArray;
}
// event.ts
var Kind = /* @__PURE__ */ ((Kind2)=>{
    Kind2[Kind2["Metadata"] = 0] = "Metadata";
    Kind2[Kind2["Text"] = 1] = "Text";
    Kind2[Kind2["RecommendRelay"] = 2] = "RecommendRelay";
    Kind2[Kind2["Contacts"] = 3] = "Contacts";
    Kind2[Kind2["EncryptedDirectMessage"] = 4] = "EncryptedDirectMessage";
    Kind2[Kind2["EventDeletion"] = 5] = "EventDeletion";
    Kind2[Kind2["Reaction"] = 7] = "Reaction";
    Kind2[Kind2["ChannelCreation"] = 40] = "ChannelCreation";
    Kind2[Kind2["ChannelMetadata"] = 41] = "ChannelMetadata";
    Kind2[Kind2["ChannelMessage"] = 42] = "ChannelMessage";
    Kind2[Kind2["ChannelHideMessage"] = 43] = "ChannelHideMessage";
    Kind2[Kind2["ChannelMuteUser"] = 44] = "ChannelMuteUser";
    return Kind2;
})(Kind || {});
function getBlankEvent() {
    return {
        kind: 255,
        pubkey: "",
        content: "",
        tags: [],
        created_at: 0
    };
}
function serializeEvent(evt) {
    if (!validateEvent(evt)) throw new Error("can't serialize event with wrong or missing properties");
    return JSON.stringify([
        0,
        evt.pubkey,
        evt.created_at,
        evt.kind,
        evt.tags,
        evt.content
    ]);
}
function getEventHash(event) {
    let eventHash = (0, _sha256.sha256)(utf8Encoder.encode(serializeEvent(event)));
    return _secp256K1.utils.bytesToHex(eventHash);
}
function validateEvent(event) {
    if (typeof event.content !== "string") return false;
    if (typeof event.created_at !== "number") return false;
    if (typeof event.pubkey !== "string") return false;
    if (!event.pubkey.match(/^[a-f0-9]{64}$/)) return false;
    if (!Array.isArray(event.tags)) return false;
    for(let i = 0; i < event.tags.length; i++){
        let tag = event.tags[i];
        if (!Array.isArray(tag)) return false;
        for(let j = 0; j < tag.length; j++){
            if (typeof tag[j] === "object") return false;
        }
    }
    return true;
}
function verifySignature(event) {
    return _secp256K1.schnorr.verifySync(event.sig, getEventHash(event), event.pubkey);
}
function signEvent(event, key) {
    return _secp256K1.utils.bytesToHex(_secp256K1.schnorr.signSync(getEventHash(event), key));
}
// filter.ts
function matchFilter(filter, event) {
    if (filter.ids && filter.ids.indexOf(event.id) === -1) return false;
    if (filter.kinds && filter.kinds.indexOf(event.kind) === -1) return false;
    if (filter.authors && filter.authors.indexOf(event.pubkey) === -1) return false;
    for(let f in filter)if (f[0] === "#") {
        let tagName = f.slice(1);
        let values = filter[`#${tagName}`];
        if (values && !event.tags.find(([t, v])=>t === f.slice(1) && values.indexOf(v) !== -1)) return false;
    }
    if (filter.since && event.created_at < filter.since) return false;
    if (filter.until && event.created_at >= filter.until) return false;
    return true;
}
function matchFilters(filters, event) {
    for(let i = 0; i < filters.length; i++){
        if (matchFilter(filters[i], event)) return true;
    }
    return false;
}
// fakejson.ts
var fakejson_exports = {};
__export(fakejson_exports, {
    getHex64: ()=>getHex64,
    getInt: ()=>getInt,
    matchEventId: ()=>matchEventId,
    matchEventKind: ()=>matchEventKind,
    matchEventPubkey: ()=>matchEventPubkey
});
function getHex64(json, field) {
    let len = field.length + 3;
    let idx = json.indexOf(`"${field}":`) + len;
    let s = json.slice(idx).indexOf(`"`) + idx + 1;
    return json.slice(s, s + 64);
}
function getInt(json, field) {
    let len = field.length;
    let idx = json.indexOf(`"${field}":`) + len + 3;
    let sliced = json.slice(idx);
    let end = Math.min(sliced.indexOf(","), sliced.indexOf("}"));
    return parseInt(sliced.slice(0, end), 10);
}
function matchEventId(json, id) {
    return id === getHex64(json, "id");
}
function matchEventPubkey(json, pubkey) {
    return pubkey === getHex64(json, "pubkey");
}
function matchEventKind(json, kind) {
    return kind === getInt(json, "kind");
}
// relay.ts
function relayInit(url, alreadyHaveEvent = ()=>false) {
    var ws;
    var resolveClose;
    var setOpen;
    var untilOpen = new Promise((resolve)=>{
        setOpen = resolve;
    });
    var openSubs = {};
    var listeners = {
        connect: [],
        disconnect: [],
        error: [],
        notice: []
    };
    var subListeners = {};
    var pubListeners = {};
    async function connectRelay() {
        return new Promise((resolve, reject)=>{
            ws = new WebSocket(url);
            ws.onopen = ()=>{
                listeners.connect.forEach((cb)=>cb());
                setOpen();
                resolve();
            };
            ws.onerror = ()=>{
                listeners.error.forEach((cb)=>cb());
                reject();
            };
            ws.onclose = async ()=>{
                listeners.disconnect.forEach((cb)=>cb());
                resolveClose && resolveClose();
            };
            let incomingMessageQueue = [];
            let handleNextInterval;
            ws.onmessage = (e)=>{
                incomingMessageQueue.push(e.data);
                if (!handleNextInterval) handleNextInterval = setInterval(handleNext, 0);
            };
            function handleNext() {
                if (incomingMessageQueue.length === 0) {
                    clearInterval(handleNextInterval);
                    handleNextInterval = null;
                    return;
                }
                var json = incomingMessageQueue.shift();
                if (!json || alreadyHaveEvent(getHex64(json, "id"))) return;
                try {
                    let data = JSON.parse(json);
                    switch(data[0]){
                        case "EVENT":
                            let id = data[1];
                            let event = data[2];
                            if (validateEvent(event) && openSubs[id] && (openSubs[id].skipVerification || verifySignature(event)) && matchFilters(openSubs[id].filters, event)) {
                                openSubs[id];
                                (subListeners[id]?.event || []).forEach((cb)=>cb(event));
                            }
                            return;
                        case "EOSE":
                            {
                                let id2 = data[1];
                                (subListeners[id2]?.eose || []).forEach((cb)=>cb());
                                return;
                            }
                        case "OK":
                            {
                                let id2 = data[1];
                                let ok = data[2];
                                let reason = data[3] || "";
                                if (ok) pubListeners[id2]?.ok.forEach((cb)=>cb());
                                else pubListeners[id2]?.failed.forEach((cb)=>cb(reason));
                                return;
                            }
                        case "NOTICE":
                            let notice = data[1];
                            listeners.notice.forEach((cb)=>cb(notice));
                            return;
                    }
                } catch (err) {
                    return;
                }
            }
        });
    }
    async function connect() {
        if (ws?.readyState && ws.readyState === 1) return;
        await connectRelay();
    }
    async function trySend(params) {
        let msg = JSON.stringify(params);
        await untilOpen;
        try {
            ws.send(msg);
        } catch (err) {
            console.log(err);
        }
    }
    const sub = (filters, { skipVerification =false , id =Math.random().toString().slice(2)  } = {})=>{
        let subid = id;
        openSubs[subid] = {
            id: subid,
            filters,
            skipVerification
        };
        trySend([
            "REQ",
            subid,
            ...filters
        ]);
        return {
            sub: (newFilters, newOpts = {})=>sub(newFilters || filters, {
                    skipVerification: newOpts.skipVerification || skipVerification,
                    id: subid
                }),
            unsub: ()=>{
                delete openSubs[subid];
                delete subListeners[subid];
                trySend([
                    "CLOSE",
                    subid
                ]);
            },
            on: (type, cb)=>{
                subListeners[subid] = subListeners[subid] || {
                    event: [],
                    eose: []
                };
                subListeners[subid][type].push(cb);
            },
            off: (type, cb)=>{
                let listeners2 = subListeners[subid];
                let idx = listeners2[type].indexOf(cb);
                if (idx >= 0) listeners2[type].splice(idx, 1);
            }
        };
    };
    return {
        url,
        sub,
        on: (type, cb)=>{
            listeners[type].push(cb);
            if (type === "connect" && ws?.readyState === 1) cb();
        },
        off: (type, cb)=>{
            let index = listeners[type].indexOf(cb);
            if (index !== -1) listeners[type].splice(index, 1);
        },
        publish (event) {
            if (!event.id) throw new Error(`event ${event} has no id`);
            let id = event.id;
            var sent = false;
            var mustMonitor = false;
            trySend([
                "EVENT",
                event
            ]).then(()=>{
                sent = true;
                if (mustMonitor) {
                    startMonitoring();
                    mustMonitor = false;
                }
            }).catch(()=>{});
            const startMonitoring = ()=>{
                let monitor = sub([
                    {
                        ids: [
                            id
                        ]
                    }
                ], {
                    id: `monitor-${id.slice(0, 5)}`
                });
                let willUnsub = setTimeout(()=>{
                    (pubListeners[id]?.failed || []).forEach((cb)=>cb("event not seen after 5 seconds"));
                    monitor.unsub();
                }, 5e3);
                monitor.on("event", ()=>{
                    clearTimeout(willUnsub);
                    (pubListeners[id]?.seen || []).forEach((cb)=>cb());
                });
            };
            return {
                on: (type, cb)=>{
                    pubListeners[id] = pubListeners[id] || {
                        ok: [],
                        seen: [],
                        failed: []
                    };
                    pubListeners[id][type].push(cb);
                    if (type === "seen") {
                        if (sent) startMonitoring();
                        else mustMonitor = true;
                    }
                },
                off: (type, cb)=>{
                    let listeners2 = pubListeners[id];
                    if (!listeners2) return;
                    let idx = listeners2[type].indexOf(cb);
                    if (idx >= 0) listeners2[type].splice(idx, 1);
                }
            };
        },
        connect,
        close () {
            ws.close();
            return new Promise((resolve)=>{
                resolveClose = resolve;
            });
        },
        get status () {
            return ws?.readyState ?? 3;
        }
    };
}
// nip04.ts
var nip04_exports = {};
__export(nip04_exports, {
    decrypt: ()=>decrypt,
    encrypt: ()=>encrypt
});
async function encrypt(privkey, pubkey, text) {
    const key = _secp256K1.getSharedSecret(privkey, "02" + pubkey);
    const normalizedKey = getNormalizedX(key);
    let iv = Uint8Array.from((0, _utils.randomBytes)(16));
    let plaintext = utf8Encoder.encode(text);
    let cryptoKey = await crypto.subtle.importKey("raw", normalizedKey, {
        name: "AES-CBC"
    }, false, [
        "encrypt"
    ]);
    let ciphertext = await crypto.subtle.encrypt({
        name: "AES-CBC",
        iv
    }, cryptoKey, plaintext);
    let ctb64 = (0, _base.base64).encode(new Uint8Array(ciphertext));
    let ivb64 = (0, _base.base64).encode(new Uint8Array(iv.buffer));
    return `${ctb64}?iv=${ivb64}`;
}
async function decrypt(privkey, pubkey, data) {
    let [ctb64, ivb64] = data.split("?iv=");
    let key = _secp256K1.getSharedSecret(privkey, "02" + pubkey);
    let normalizedKey = getNormalizedX(key);
    let cryptoKey = await crypto.subtle.importKey("raw", normalizedKey, {
        name: "AES-CBC"
    }, false, [
        "decrypt"
    ]);
    let ciphertext = (0, _base.base64).decode(ctb64);
    let iv = (0, _base.base64).decode(ivb64);
    let plaintext = await crypto.subtle.decrypt({
        name: "AES-CBC",
        iv
    }, cryptoKey, ciphertext);
    let text = utf8Decoder.decode(plaintext);
    return text;
}
function getNormalizedX(key) {
    return key.slice(1, 33);
}
// nip05.ts
var nip05_exports = {};
__export(nip05_exports, {
    queryProfile: ()=>queryProfile,
    searchDomain: ()=>searchDomain,
    useFetchImplementation: ()=>useFetchImplementation
});
var _fetch;
try {
    _fetch = fetch;
} catch  {}
function useFetchImplementation(fetchImplementation) {
    _fetch = fetchImplementation;
}
async function searchDomain(domain, query = "") {
    try {
        let res = await (await _fetch(`https://${domain}/.well-known/nostr.json?name=${query}`)).json();
        return res.names;
    } catch (_) {
        return {};
    }
}
async function queryProfile(fullname) {
    let [name, domain] = fullname.split("@");
    if (!domain) {
        domain = name;
        name = "_";
    }
    if (!name.match(/^[a-z0-9-_]+$/)) return null;
    let res = await (await _fetch(`https://${domain}/.well-known/nostr.json?name=${name}`)).json();
    if (!res?.names?.[name]) return null;
    let pubkey = res.names[name];
    let relays = res.relays?.[pubkey] || [];
    return {
        pubkey,
        relays
    };
}
// nip06.ts
var nip06_exports = {};
__export(nip06_exports, {
    generateSeedWords: ()=>generateSeedWords,
    privateKeyFromSeedWords: ()=>privateKeyFromSeedWords,
    validateWords: ()=>validateWords
});
function privateKeyFromSeedWords(mnemonic, passphrase) {
    let root = (0, _bip32.HDKey).fromMasterSeed((0, _bip39.mnemonicToSeedSync)(mnemonic, passphrase));
    let privateKey = root.derive(`m/44'/1237'/0'/0/0`).privateKey;
    if (!privateKey) throw new Error("could not derive private key");
    return _secp256K1.utils.bytesToHex(privateKey);
}
function generateSeedWords() {
    return (0, _bip39.generateMnemonic)((0, _englishJs.wordlist));
}
function validateWords(words) {
    return (0, _bip39.validateMnemonic)(words, (0, _englishJs.wordlist));
}
// nip19.ts
var nip19_exports = {};
__export(nip19_exports, {
    decode: ()=>decode,
    neventEncode: ()=>neventEncode,
    noteEncode: ()=>noteEncode,
    nprofileEncode: ()=>nprofileEncode,
    npubEncode: ()=>npubEncode,
    nsecEncode: ()=>nsecEncode
});
var Bech32MaxSize = 5e3;
function decode(nip19) {
    let { prefix , words  } = (0, _base.bech32).decode(nip19, Bech32MaxSize);
    let data = new Uint8Array((0, _base.bech32).fromWords(words));
    if (prefix === "nprofile") {
        let tlv = parseTLV(data);
        if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for nprofile");
        if (tlv[0][0].length !== 32) throw new Error("TLV 0 should be 32 bytes");
        return {
            type: "nprofile",
            data: {
                pubkey: _secp256K1.utils.bytesToHex(tlv[0][0]),
                relays: tlv[1].map((d)=>utf8Decoder.decode(d))
            }
        };
    }
    if (prefix === "nevent") {
        let tlv = parseTLV(data);
        if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for nevent");
        if (tlv[0][0].length !== 32) throw new Error("TLV 0 should be 32 bytes");
        return {
            type: "nevent",
            data: {
                id: _secp256K1.utils.bytesToHex(tlv[0][0]),
                relays: tlv[1].map((d)=>utf8Decoder.decode(d))
            }
        };
    }
    if (prefix === "nsec" || prefix === "npub" || prefix === "note") return {
        type: prefix,
        data: _secp256K1.utils.bytesToHex(data)
    };
    throw new Error(`unknown prefix ${prefix}`);
}
function parseTLV(data) {
    let result = {};
    let rest = data;
    while(rest.length > 0){
        let t = rest[0];
        let l = rest[1];
        let v = rest.slice(2, 2 + l);
        rest = rest.slice(2 + l);
        if (v.length < l) continue;
        result[t] = result[t] || [];
        result[t].push(v);
    }
    return result;
}
function nsecEncode(hex) {
    return encodeBytes("nsec", hex);
}
function npubEncode(hex) {
    return encodeBytes("npub", hex);
}
function noteEncode(hex) {
    return encodeBytes("note", hex);
}
function encodeBytes(prefix, hex) {
    let data = _secp256K1.utils.hexToBytes(hex);
    let words = (0, _base.bech32).toWords(data);
    return (0, _base.bech32).encode(prefix, words, Bech32MaxSize);
}
function nprofileEncode(profile) {
    let data = encodeTLV({
        0: [
            _secp256K1.utils.hexToBytes(profile.pubkey)
        ],
        1: (profile.relays || []).map((url)=>utf8Encoder.encode(url))
    });
    let words = (0, _base.bech32).toWords(data);
    return (0, _base.bech32).encode("nprofile", words, Bech32MaxSize);
}
function neventEncode(event) {
    let data = encodeTLV({
        0: [
            _secp256K1.utils.hexToBytes(event.id)
        ],
        1: (event.relays || []).map((url)=>utf8Encoder.encode(url))
    });
    let words = (0, _base.bech32).toWords(data);
    return (0, _base.bech32).encode("nevent", words, Bech32MaxSize);
}
function encodeTLV(tlv) {
    let entries = [];
    Object.entries(tlv).forEach(([t, vs])=>{
        vs.forEach((v)=>{
            let entry = new Uint8Array(v.length + 2);
            entry.set([
                parseInt(t)
            ], 0);
            entry.set([
                v.length
            ], 1);
            entry.set(v, 2);
            entries.push(entry);
        });
    });
    return _secp256K1.utils.concatBytes(...entries);
}
// nip26.ts
var nip26_exports = {};
__export(nip26_exports, {
    createDelegation: ()=>createDelegation,
    getDelegator: ()=>getDelegator
});
function createDelegation(privateKey, parameters) {
    let conditions = [];
    if ((parameters.kind || -1) >= 0) conditions.push(`kind=${parameters.kind}`);
    if (parameters.until) conditions.push(`created_at<${parameters.until}`);
    if (parameters.since) conditions.push(`created_at>${parameters.since}`);
    let cond = conditions.join("&");
    if (cond === "") throw new Error("refusing to create a delegation without any conditions");
    let sighash = (0, _sha256.sha256)(utf8Encoder.encode(`nostr:delegation:${parameters.pubkey}:${cond}`));
    let sig = _secp256K1.utils.bytesToHex(_secp256K1.schnorr.signSync(sighash, privateKey));
    return {
        from: getPublicKey(privateKey),
        to: parameters.pubkey,
        cond,
        sig
    };
}
function getDelegator(event) {
    let tag = event.tags.find((tag2)=>tag2[0] === "delegation" && tag2.length >= 4);
    if (!tag) return null;
    let pubkey = tag[1];
    let cond = tag[2];
    let sig = tag[3];
    let conditions = cond.split("&");
    for(let i = 0; i < conditions.length; i++){
        let [key, operator, value] = conditions[i].split(/\b/);
        if (key === "kind" && operator === "=" && event.kind === parseInt(value)) continue;
        else if (key === "created_at" && operator === "<" && event.created_at < parseInt(value)) continue;
        else if (key === "created_at" && operator === ">" && event.created_at > parseInt(value)) continue;
        else return null;
    }
    let sighash = (0, _sha256.sha256)(utf8Encoder.encode(`nostr:delegation:${event.pubkey}:${cond}`));
    if (!_secp256K1.schnorr.verifySync(sig, sighash, pubkey)) return null;
    return pubkey;
}
_secp256K1.utils.hmacSha256Sync = (key, ...msgs)=>(0, _hmac.hmac)((0, _sha256.sha256), key, _secp256K1.utils.concatBytes(...msgs));
_secp256K1.utils.sha256Sync = (...msgs)=>(0, _sha256.sha256)(_secp256K1.utils.concatBytes(...msgs));

},{"@noble/secp256k1":"eyYsH","@noble/hashes/sha256":"gMMnQ","@noble/hashes/utils":"4eGYF","@scure/base":"cvmUK","@scure/bip39/wordlists/english.js":"6Y9rd","@scure/bip39":"cFmd4","@scure/bip32":"hVSVx","@noble/hashes/hmac":"b3lnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyYsH":[function(require,module,exports) {
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CURVE", ()=>CURVE);
parcelHelpers.export(exports, "Point", ()=>Point);
parcelHelpers.export(exports, "Signature", ()=>Signature);
parcelHelpers.export(exports, "getPublicKey", ()=>getPublicKey);
parcelHelpers.export(exports, "recoverPublicKey", ()=>recoverPublicKey);
parcelHelpers.export(exports, "getSharedSecret", ()=>getSharedSecret);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "signSync", ()=>signSync);
parcelHelpers.export(exports, "verify", ()=>verify);
parcelHelpers.export(exports, "schnorr", ()=>schnorr);
parcelHelpers.export(exports, "utils", ()=>utils);
var _crypto = require("crypto");
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _3n = BigInt(3);
const _8n = BigInt(8);
const CURVE = Object.freeze({
    a: _0n,
    b: BigInt(7),
    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: _1n,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
const divNearest = (a, b)=>(a + b / _2n) / b;
const endo = {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar (k) {
        const { n  } = CURVE;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b2 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest(b2 * k, n);
        const c2 = divNearest(-b1 * k, n);
        let k1 = mod(k - c1 * a1 - c2 * a2, n);
        let k2 = mod(-c1 * b1 - c2 * b2, n);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg) k1 = n - k1;
        if (k2neg) k2 = n - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error("splitScalarEndo: Endomorphism failed, k=" + k);
        return {
            k1neg,
            k1,
            k2neg,
            k2
        };
    }
};
const fieldLen = 32;
const groupLen = 32;
const hashLen = 32;
const compressedLen = fieldLen + 1;
const uncompressedLen = 2 * fieldLen + 1;
function weierstrass(x) {
    const { a , b  } = CURVE;
    const x2 = mod(x * x);
    const x3 = mod(x2 * x);
    return mod(x3 + a * x + b);
}
const USE_ENDOMORPHISM = CURVE.a === _0n;
class ShaError extends Error {
    constructor(message){
        super(message);
    }
}
function assertJacPoint(other) {
    if (!(other instanceof JacobianPoint)) throw new TypeError("JacobianPoint expected");
}
class JacobianPoint {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromAffine(p) {
        if (!(p instanceof Point)) throw new TypeError("JacobianPoint#fromAffine: expected Point");
        if (p.equals(Point.ZERO)) return JacobianPoint.ZERO;
        return new JacobianPoint(p.x, p.y, _1n);
    }
    static toAffineBatch(points) {
        const toInv = invertBatch(points.map((p)=>p.z));
        return points.map((p, i)=>p.toAffine(toInv[i]));
    }
    static normalizeZ(points) {
        return JacobianPoint.toAffineBatch(points).map(JacobianPoint.fromAffine);
    }
    equals(other) {
        assertJacPoint(other);
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const { x: X2 , y: Y2 , z: Z2  } = other;
        const Z1Z1 = mod(Z1 * Z1);
        const Z2Z2 = mod(Z2 * Z2);
        const U1 = mod(X1 * Z2Z2);
        const U2 = mod(X2 * Z1Z1);
        const S1 = mod(mod(Y1 * Z2) * Z2Z2);
        const S2 = mod(mod(Y2 * Z1) * Z1Z1);
        return U1 === U2 && S1 === S2;
    }
    negate() {
        return new JacobianPoint(this.x, mod(-this.y), this.z);
    }
    double() {
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const A = mod(X1 * X1);
        const B = mod(Y1 * Y1);
        const C = mod(B * B);
        const x1b = X1 + B;
        const D = mod(_2n * (mod(x1b * x1b) - A - C));
        const E = mod(_3n * A);
        const F = mod(E * E);
        const X3 = mod(F - _2n * D);
        const Y3 = mod(E * (D - X3) - _8n * C);
        const Z3 = mod(_2n * Y1 * Z1);
        return new JacobianPoint(X3, Y3, Z3);
    }
    add(other) {
        assertJacPoint(other);
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const { x: X2 , y: Y2 , z: Z2  } = other;
        if (X2 === _0n || Y2 === _0n) return this;
        if (X1 === _0n || Y1 === _0n) return other;
        const Z1Z1 = mod(Z1 * Z1);
        const Z2Z2 = mod(Z2 * Z2);
        const U1 = mod(X1 * Z2Z2);
        const U2 = mod(X2 * Z1Z1);
        const S1 = mod(mod(Y1 * Z2) * Z2Z2);
        const S2 = mod(mod(Y2 * Z1) * Z1Z1);
        const H = mod(U2 - U1);
        const r = mod(S2 - S1);
        if (H === _0n) {
            if (r === _0n) return this.double();
            else return JacobianPoint.ZERO;
        }
        const HH = mod(H * H);
        const HHH = mod(H * HH);
        const V = mod(U1 * HH);
        const X3 = mod(r * r - HHH - _2n * V);
        const Y3 = mod(r * (V - X3) - S1 * HHH);
        const Z3 = mod(Z1 * Z2 * H);
        return new JacobianPoint(X3, Y3, Z3);
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiplyUnsafe(scalar) {
        const P0 = JacobianPoint.ZERO;
        if (typeof scalar === "bigint" && scalar === _0n) return P0;
        let n = normalizeScalar(scalar);
        if (n === _1n) return this;
        if (!USE_ENDOMORPHISM) {
            let p = P0;
            let d = this;
            while(n > _0n){
                if (n & _1n) p = p.add(d);
                d = d.double();
                n >>= _1n;
            }
            return p;
        }
        let { k1neg , k1 , k2neg , k2  } = endo.splitScalar(n);
        let k1p = P0;
        let k2p = P0;
        let d = this;
        while(k1 > _0n || k2 > _0n){
            if (k1 & _1n) k1p = k1p.add(d);
            if (k2 & _1n) k2p = k2p.add(d);
            d = d.double();
            k1 >>= _1n;
            k2 >>= _1n;
        }
        if (k1neg) k1p = k1p.negate();
        if (k2neg) k2p = k2p.negate();
        k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
        return k1p.add(k2p);
    }
    precomputeWindow(W) {
        const windows = USE_ENDOMORPHISM ? 128 / W + 1 : 256 / W + 1;
        const points = [];
        let p = this;
        let base = p;
        for(let window = 0; window < windows; window++){
            base = p;
            points.push(base);
            for(let i = 1; i < 2 ** (W - 1); i++){
                base = base.add(p);
                points.push(base);
            }
            p = base.double();
        }
        return points;
    }
    wNAF(n, affinePoint) {
        if (!affinePoint && this.equals(JacobianPoint.BASE)) affinePoint = Point.BASE;
        const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
        if (256 % W) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
        if (!precomputes) {
            precomputes = this.precomputeWindow(W);
            if (affinePoint && W !== 1) {
                precomputes = JacobianPoint.normalizeZ(precomputes);
                pointPrecomputes.set(affinePoint, precomputes);
            }
        }
        let p = JacobianPoint.ZERO;
        let f = JacobianPoint.BASE;
        const windows = 1 + (USE_ENDOMORPHISM ? 128 / W : 256 / W);
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for(let window = 0; window < windows; window++){
            const offset = window * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
                wbits -= maxNumber;
                n += _1n;
            }
            const offset1 = offset;
            const offset2 = offset + Math.abs(wbits) - 1;
            const cond1 = window % 2 !== 0;
            const cond2 = wbits < 0;
            if (wbits === 0) f = f.add(constTimeNegate(cond1, precomputes[offset1]));
            else p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
        return {
            p,
            f
        };
    }
    multiply(scalar, affinePoint) {
        let n = normalizeScalar(scalar);
        let point;
        let fake;
        if (USE_ENDOMORPHISM) {
            const { k1neg , k1 , k2neg , k2  } = endo.splitScalar(n);
            let { p: k1p , f: f1p  } = this.wNAF(k1, affinePoint);
            let { p: k2p , f: f2p  } = this.wNAF(k2, affinePoint);
            k1p = constTimeNegate(k1neg, k1p);
            k2p = constTimeNegate(k2neg, k2p);
            k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
            point = k1p.add(k2p);
            fake = f1p.add(f2p);
        } else {
            const { p , f  } = this.wNAF(n, affinePoint);
            point = p;
            fake = f;
        }
        return JacobianPoint.normalizeZ([
            point,
            fake
        ])[0];
    }
    toAffine(invZ) {
        const { x , y , z  } = this;
        const is0 = this.equals(JacobianPoint.ZERO);
        if (invZ == null) invZ = is0 ? _8n : invert(z);
        const iz1 = invZ;
        const iz2 = mod(iz1 * iz1);
        const iz3 = mod(iz2 * iz1);
        const ax = mod(x * iz2);
        const ay = mod(y * iz3);
        const zz = mod(z * iz1);
        if (is0) return Point.ZERO;
        if (zz !== _1n) throw new Error("invZ was invalid");
        return new Point(ax, ay);
    }
}
JacobianPoint.BASE = new JacobianPoint(CURVE.Gx, CURVE.Gy, _1n);
JacobianPoint.ZERO = new JacobianPoint(_0n, _1n, _0n);
function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
}
const pointPrecomputes = new WeakMap();
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
    }
    hasEvenY() {
        return this.y % _2n === _0n;
    }
    static fromCompressedHex(bytes) {
        const isShort = bytes.length === 32;
        const x = bytesToNumber(isShort ? bytes : bytes.subarray(1));
        if (!isValidFieldElement(x)) throw new Error("Point is not on curve");
        const y2 = weierstrass(x);
        let y = sqrtMod(y2);
        const isYOdd = (y & _1n) === _1n;
        if (isShort) {
            if (isYOdd) y = mod(-y);
        } else {
            const isFirstByteOdd = (bytes[0] & 1) === 1;
            if (isFirstByteOdd !== isYOdd) y = mod(-y);
        }
        const point = new Point(x, y);
        point.assertValidity();
        return point;
    }
    static fromUncompressedHex(bytes) {
        const x = bytesToNumber(bytes.subarray(1, fieldLen + 1));
        const y = bytesToNumber(bytes.subarray(fieldLen + 1, fieldLen * 2 + 1));
        const point = new Point(x, y);
        point.assertValidity();
        return point;
    }
    static fromHex(hex) {
        const bytes = ensureBytes(hex);
        const len = bytes.length;
        const header = bytes[0];
        if (len === fieldLen) return this.fromCompressedHex(bytes);
        if (len === compressedLen && (header === 0x02 || header === 0x03)) return this.fromCompressedHex(bytes);
        if (len === uncompressedLen && header === 0x04) return this.fromUncompressedHex(bytes);
        throw new Error(`Point.fromHex: received invalid point. Expected 32-${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes, not ${len}`);
    }
    static fromPrivateKey(privateKey) {
        return Point.BASE.multiply(normalizePrivateKey(privateKey));
    }
    static fromSignature(msgHash, signature, recovery) {
        const { r , s  } = normalizeSignature(signature);
        if (![
            0,
            1,
            2,
            3
        ].includes(recovery)) throw new Error("Cannot recover: invalid recovery bit");
        const h = truncateHash(ensureBytes(msgHash));
        const { n  } = CURVE;
        const radj = recovery === 2 || recovery === 3 ? r + n : r;
        const rinv = invert(radj, n);
        const u1 = mod(-h * rinv, n);
        const u2 = mod(s * rinv, n);
        const prefix = recovery & 1 ? "03" : "02";
        const R = Point.fromHex(prefix + numTo32bStr(radj));
        const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q) throw new Error("Cannot recover signature: point at infinify");
        Q.assertValidity();
        return Q;
    }
    toRawBytes(isCompressed = false) {
        return hexToBytes(this.toHex(isCompressed));
    }
    toHex(isCompressed = false) {
        const x = numTo32bStr(this.x);
        if (isCompressed) {
            const prefix = this.hasEvenY() ? "02" : "03";
            return `${prefix}${x}`;
        } else return `04${x}${numTo32bStr(this.y)}`;
    }
    toHexX() {
        return this.toHex(true).slice(2);
    }
    toRawX() {
        return this.toRawBytes(true).slice(1);
    }
    assertValidity() {
        const msg = "Point is not on elliptic curve";
        const { x , y  } = this;
        if (!isValidFieldElement(x) || !isValidFieldElement(y)) throw new Error(msg);
        const left = mod(y * y);
        const right = weierstrass(x);
        if (mod(left - right) !== _0n) throw new Error(msg);
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
    negate() {
        return new Point(this.x, mod(-this.y));
    }
    double() {
        return JacobianPoint.fromAffine(this).double().toAffine();
    }
    add(other) {
        return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(other)).toAffine();
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiply(scalar) {
        return JacobianPoint.fromAffine(this).multiply(scalar, this).toAffine();
    }
    multiplyAndAddUnsafe(Q, a, b) {
        const P = JacobianPoint.fromAffine(this);
        const aP = a === _0n || a === _1n || this !== Point.BASE ? P.multiplyUnsafe(a) : P.multiply(a);
        const bQ = JacobianPoint.fromAffine(Q).multiplyUnsafe(b);
        const sum = aP.add(bQ);
        return sum.equals(JacobianPoint.ZERO) ? undefined : sum.toAffine();
    }
}
Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
Point.ZERO = new Point(_0n, _0n);
function sliceDER(s) {
    return Number.parseInt(s[0], 16) >= 8 ? "00" + s : s;
}
function parseDERInt(data) {
    if (data.length < 2 || data[0] !== 0x02) throw new Error(`Invalid signature integer tag: ${bytesToHex(data)}`);
    const len = data[1];
    const res = data.subarray(2, len + 2);
    if (!len || res.length !== len) throw new Error(`Invalid signature integer: wrong length`);
    if (res[0] === 0x00 && res[1] <= 0x7f) throw new Error("Invalid signature integer: trailing length");
    return {
        data: bytesToNumber(res),
        left: data.subarray(len + 2)
    };
}
function parseDERSignature(data) {
    if (data.length < 2 || data[0] != 0x30) throw new Error(`Invalid signature tag: ${bytesToHex(data)}`);
    if (data[1] !== data.length - 2) throw new Error("Invalid signature: incorrect length");
    const { data: r , left: sBytes  } = parseDERInt(data.subarray(2));
    const { data: s , left: rBytesLeft  } = parseDERInt(sBytes);
    if (rBytesLeft.length) throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex(rBytesLeft)}`);
    return {
        r,
        s
    };
}
class Signature {
    constructor(r, s){
        this.r = r;
        this.s = s;
        this.assertValidity();
    }
    static fromCompact(hex) {
        const arr = hex instanceof Uint8Array;
        const name = "Signature.fromCompact";
        if (typeof hex !== "string" && !arr) throw new TypeError(`${name}: Expected string or Uint8Array`);
        const str = arr ? bytesToHex(hex) : hex;
        if (str.length !== 128) throw new Error(`${name}: Expected 64-byte hex`);
        return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
    }
    static fromDER(hex) {
        const arr = hex instanceof Uint8Array;
        if (typeof hex !== "string" && !arr) throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
        const { r , s  } = parseDERSignature(arr ? hex : hexToBytes(hex));
        return new Signature(r, s);
    }
    static fromHex(hex) {
        return this.fromDER(hex);
    }
    assertValidity() {
        const { r , s  } = this;
        if (!isWithinCurveOrder(r)) throw new Error("Invalid Signature: r must be 0 < r < n");
        if (!isWithinCurveOrder(s)) throw new Error("Invalid Signature: s must be 0 < s < n");
    }
    hasHighS() {
        const HALF = CURVE.n >> _1n;
        return this.s > HALF;
    }
    normalizeS() {
        return this.hasHighS() ? new Signature(this.r, mod(-this.s, CURVE.n)) : this;
    }
    toDERRawBytes() {
        return hexToBytes(this.toDERHex());
    }
    toDERHex() {
        const sHex = sliceDER(numberToHexUnpadded(this.s));
        const rHex = sliceDER(numberToHexUnpadded(this.r));
        const sHexL = sHex.length / 2;
        const rHexL = rHex.length / 2;
        const sLen = numberToHexUnpadded(sHexL);
        const rLen = numberToHexUnpadded(rHexL);
        const length = numberToHexUnpadded(rHexL + sHexL + 4);
        return `30${length}02${rLen}${rHex}02${sLen}${sHex}`;
    }
    toRawBytes() {
        return this.toDERRawBytes();
    }
    toHex() {
        return this.toDERHex();
    }
    toCompactRawBytes() {
        return hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
        return numTo32bStr(this.r) + numTo32bStr(this.s);
    }
}
function concatBytes(...arrays) {
    if (!arrays.every((b)=>b instanceof Uint8Array)) throw new Error("Uint8Array list expected");
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    let hex = "";
    for(let i = 0; i < uint8a.length; i++)hex += hexes[uint8a[i]];
    return hex;
}
const POW_2_256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function numTo32bStr(num) {
    if (typeof num !== "bigint") throw new Error("Expected bigint");
    if (!(_0n <= num && num < POW_2_256)) throw new Error("Expected number 0 <= n < 2^256");
    return num.toString(16).padStart(64, "0");
}
function numTo32b(num) {
    const b = hexToBytes(numTo32bStr(num));
    if (b.length !== 32) throw new Error("Error: expected 32 bytes");
    return b;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToNumber: expected string, got " + typeof hex);
    return BigInt(`0x${hex}`);
}
function hexToBytes(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    if (hex.length % 2) throw new Error("hexToBytes: received invalid unpadded hex" + hex.length);
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error("Invalid byte sequence");
        array[i] = byte;
    }
    return array;
}
function bytesToNumber(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function ensureBytes(hex) {
    return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
}
function normalizeScalar(num) {
    if (typeof num === "number" && Number.isSafeInteger(num) && num > 0) return BigInt(num);
    if (typeof num === "bigint" && isWithinCurveOrder(num)) return num;
    throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function mod(a, b = CURVE.P) {
    const result = a % b;
    return result >= _0n ? result : b + result;
}
function pow2(x, power) {
    const { P  } = CURVE;
    let res = x;
    while(power-- > _0n){
        res *= res;
        res %= P;
    }
    return res;
}
function sqrtMod(x) {
    const { P  } = CURVE;
    const _6n = BigInt(6);
    const _11n = BigInt(11);
    const _22n = BigInt(22);
    const _23n = BigInt(23);
    const _44n = BigInt(44);
    const _88n = BigInt(88);
    const b2 = x * x * x % P;
    const b3 = b2 * b2 * x % P;
    const b6 = pow2(b3, _3n) * b3 % P;
    const b9 = pow2(b6, _3n) * b3 % P;
    const b11 = pow2(b9, _2n) * b2 % P;
    const b22 = pow2(b11, _11n) * b11 % P;
    const b44 = pow2(b22, _22n) * b22 % P;
    const b88 = pow2(b44, _44n) * b44 % P;
    const b176 = pow2(b88, _88n) * b88 % P;
    const b220 = pow2(b176, _44n) * b44 % P;
    const b223 = pow2(b220, _3n) * b3 % P;
    const t1 = pow2(b223, _23n) * b22 % P;
    const t2 = pow2(t1, _6n) * b2 % P;
    const rt = pow2(t2, _2n);
    const xc = rt * rt % P;
    if (xc !== x) throw new Error("Cannot find square root");
    return rt;
}
function invert(number, modulo = CURVE.P) {
    if (number === _0n || modulo <= _0n) throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    let a = mod(number, modulo);
    let b = modulo;
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while(a !== _0n){
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error("invert: does not exist");
    return mod(x, modulo);
}
function invertBatch(nums, p = CURVE.P) {
    const scratch = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i)=>{
        if (num === _0n) return acc;
        scratch[i] = acc;
        return mod(acc * num, p);
    }, _1n);
    const inverted = invert(lastMultiplied, p);
    nums.reduceRight((acc, num, i)=>{
        if (num === _0n) return acc;
        scratch[i] = mod(acc * scratch[i], p);
        return mod(acc * num, p);
    }, inverted);
    return scratch;
}
function bits2int_2(bytes) {
    const delta = bytes.length * 8 - groupLen * 8;
    const num = bytesToNumber(bytes);
    return delta > 0 ? num >> BigInt(delta) : num;
}
function truncateHash(hash, truncateOnly = false) {
    const h = bits2int_2(hash);
    if (truncateOnly) return h;
    const { n  } = CURVE;
    return h >= n ? h - n : h;
}
let _sha256Sync;
let _hmacSha256Sync;
class HmacDrbg {
    constructor(hashLen, qByteLen){
        this.hashLen = hashLen;
        this.qByteLen = qByteLen;
        if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
        if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
        this.v = new Uint8Array(hashLen).fill(1);
        this.k = new Uint8Array(hashLen).fill(0);
        this.counter = 0;
    }
    hmac(...values) {
        return utils.hmacSha256(this.k, ...values);
    }
    hmacSync(...values) {
        return _hmacSha256Sync(this.k, ...values);
    }
    checkSync() {
        if (typeof _hmacSha256Sync !== "function") throw new ShaError("hmacSha256Sync needs to be set");
    }
    incr() {
        if (this.counter >= 1000) throw new Error("Tried 1,000 k values for sign(), all were invalid");
        this.counter += 1;
    }
    async reseed(seed = new Uint8Array()) {
        this.k = await this.hmac(this.v, Uint8Array.from([
            0x00
        ]), seed);
        this.v = await this.hmac(this.v);
        if (seed.length === 0) return;
        this.k = await this.hmac(this.v, Uint8Array.from([
            0x01
        ]), seed);
        this.v = await this.hmac(this.v);
    }
    reseedSync(seed = new Uint8Array()) {
        this.checkSync();
        this.k = this.hmacSync(this.v, Uint8Array.from([
            0x00
        ]), seed);
        this.v = this.hmacSync(this.v);
        if (seed.length === 0) return;
        this.k = this.hmacSync(this.v, Uint8Array.from([
            0x01
        ]), seed);
        this.v = this.hmacSync(this.v);
    }
    async generate() {
        this.incr();
        let len = 0;
        const out = [];
        while(len < this.qByteLen){
            this.v = await this.hmac(this.v);
            const sl = this.v.slice();
            out.push(sl);
            len += this.v.length;
        }
        return concatBytes(...out);
    }
    generateSync() {
        this.checkSync();
        this.incr();
        let len = 0;
        const out = [];
        while(len < this.qByteLen){
            this.v = this.hmacSync(this.v);
            const sl = this.v.slice();
            out.push(sl);
            len += this.v.length;
        }
        return concatBytes(...out);
    }
}
function isWithinCurveOrder(num) {
    return _0n < num && num < CURVE.n;
}
function isValidFieldElement(num) {
    return _0n < num && num < CURVE.P;
}
function kmdToSig(kBytes, m, d, lowS = true) {
    const { n  } = CURVE;
    const k = truncateHash(kBytes, true);
    if (!isWithinCurveOrder(k)) return;
    const kinv = invert(k, n);
    const q = Point.BASE.multiply(k);
    const r = mod(q.x, n);
    if (r === _0n) return;
    const s = mod(kinv * mod(m + d * r, n), n);
    if (s === _0n) return;
    let sig = new Signature(r, s);
    let recovery = (q.x === sig.r ? 0 : 2) | Number(q.y & _1n);
    if (lowS && sig.hasHighS()) {
        sig = sig.normalizeS();
        recovery ^= 1;
    }
    return {
        sig,
        recovery
    };
}
function normalizePrivateKey(key) {
    let num;
    if (typeof key === "bigint") num = key;
    else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) num = BigInt(key);
    else if (typeof key === "string") {
        if (key.length !== 2 * groupLen) throw new Error("Expected 32 bytes of private key");
        num = hexToNumber(key);
    } else if (key instanceof Uint8Array) {
        if (key.length !== groupLen) throw new Error("Expected 32 bytes of private key");
        num = bytesToNumber(key);
    } else throw new TypeError("Expected valid private key");
    if (!isWithinCurveOrder(num)) throw new Error("Expected private key: 0 < key < n");
    return num;
}
function normalizePublicKey(publicKey) {
    if (publicKey instanceof Point) {
        publicKey.assertValidity();
        return publicKey;
    } else return Point.fromHex(publicKey);
}
function normalizeSignature(signature) {
    if (signature instanceof Signature) {
        signature.assertValidity();
        return signature;
    }
    try {
        return Signature.fromDER(signature);
    } catch (error) {
        return Signature.fromCompact(signature);
    }
}
function getPublicKey(privateKey, isCompressed = false) {
    return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
}
function recoverPublicKey(msgHash, signature, recovery, isCompressed = false) {
    return Point.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed);
}
function isProbPub(item) {
    const arr = item instanceof Uint8Array;
    const str = typeof item === "string";
    const len = (arr || str) && item.length;
    if (arr) return len === compressedLen || len === uncompressedLen;
    if (str) return len === compressedLen * 2 || len === uncompressedLen * 2;
    if (item instanceof Point) return true;
    return false;
}
function getSharedSecret(privateA, publicB, isCompressed = false) {
    if (isProbPub(privateA)) throw new TypeError("getSharedSecret: first arg must be private key");
    if (!isProbPub(publicB)) throw new TypeError("getSharedSecret: second arg must be public key");
    const b = normalizePublicKey(publicB);
    b.assertValidity();
    return b.multiply(normalizePrivateKey(privateA)).toRawBytes(isCompressed);
}
function bits2int(bytes) {
    const slice = bytes.length > fieldLen ? bytes.slice(0, fieldLen) : bytes;
    return bytesToNumber(slice);
}
function bits2octets(bytes) {
    const z1 = bits2int(bytes);
    const z2 = mod(z1, CURVE.n);
    return int2octets(z2 < _0n ? z1 : z2);
}
function int2octets(num) {
    return numTo32b(num);
}
function initSigArgs(msgHash, privateKey, extraEntropy) {
    if (msgHash == null) throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
    const h1 = ensureBytes(msgHash);
    const d = normalizePrivateKey(privateKey);
    const seedArgs = [
        int2octets(d),
        bits2octets(h1)
    ];
    if (extraEntropy != null) {
        if (extraEntropy === true) extraEntropy = utils.randomBytes(fieldLen);
        const e = ensureBytes(extraEntropy);
        if (e.length !== fieldLen) throw new Error(`sign: Expected ${fieldLen} bytes of extra data`);
        seedArgs.push(e);
    }
    const seed = concatBytes(...seedArgs);
    const m = bits2int(h1);
    return {
        seed,
        m,
        d
    };
}
function finalizeSig(recSig, opts) {
    const { sig , recovery  } = recSig;
    const { der , recovered  } = Object.assign({
        canonical: true,
        der: true
    }, opts);
    const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
    return recovered ? [
        hashed,
        recovery
    ] : hashed;
}
async function sign(msgHash, privKey, opts = {}) {
    const { seed , m , d  } = initSigArgs(msgHash, privKey, opts.extraEntropy);
    const drbg = new HmacDrbg(hashLen, groupLen);
    await drbg.reseed(seed);
    let sig;
    while(!(sig = kmdToSig(await drbg.generate(), m, d, opts.canonical)))await drbg.reseed();
    return finalizeSig(sig, opts);
}
function signSync(msgHash, privKey, opts = {}) {
    const { seed , m , d  } = initSigArgs(msgHash, privKey, opts.extraEntropy);
    const drbg = new HmacDrbg(hashLen, groupLen);
    drbg.reseedSync(seed);
    let sig;
    while(!(sig = kmdToSig(drbg.generateSync(), m, d, opts.canonical)))drbg.reseedSync();
    return finalizeSig(sig, opts);
}
const vopts = {
    strict: true
};
function verify(signature, msgHash, publicKey, opts = vopts) {
    let sig;
    try {
        sig = normalizeSignature(signature);
        msgHash = ensureBytes(msgHash);
    } catch (error) {
        return false;
    }
    const { r , s  } = sig;
    if (opts.strict && sig.hasHighS()) return false;
    const h = truncateHash(msgHash);
    let P;
    try {
        P = normalizePublicKey(publicKey);
    } catch (error) {
        return false;
    }
    const { n  } = CURVE;
    const sinv = invert(s, n);
    const u1 = mod(h * sinv, n);
    const u2 = mod(r * sinv, n);
    const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2);
    if (!R) return false;
    const v = mod(R.x, n);
    return v === r;
}
function schnorrChallengeFinalize(ch) {
    return mod(bytesToNumber(ch), CURVE.n);
}
class SchnorrSignature {
    constructor(r, s){
        this.r = r;
        this.s = s;
        this.assertValidity();
    }
    static fromHex(hex) {
        const bytes = ensureBytes(hex);
        if (bytes.length !== 64) throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${bytes.length}`);
        const r = bytesToNumber(bytes.subarray(0, 32));
        const s = bytesToNumber(bytes.subarray(32, 64));
        return new SchnorrSignature(r, s);
    }
    assertValidity() {
        const { r , s  } = this;
        if (!isValidFieldElement(r) || !isWithinCurveOrder(s)) throw new Error("Invalid signature");
    }
    toHex() {
        return numTo32bStr(this.r) + numTo32bStr(this.s);
    }
    toRawBytes() {
        return hexToBytes(this.toHex());
    }
}
function schnorrGetPublicKey(privateKey) {
    return Point.fromPrivateKey(privateKey).toRawX();
}
class InternalSchnorrSignature {
    constructor(message, privateKey, auxRand = utils.randomBytes()){
        if (message == null) throw new TypeError(`sign: Expected valid message, not "${message}"`);
        this.m = ensureBytes(message);
        const { x , scalar  } = this.getScalar(normalizePrivateKey(privateKey));
        this.px = x;
        this.d = scalar;
        this.rand = ensureBytes(auxRand);
        if (this.rand.length !== 32) throw new TypeError("sign: Expected 32 bytes of aux randomness");
    }
    getScalar(priv) {
        const point = Point.fromPrivateKey(priv);
        const scalar = point.hasEvenY() ? priv : CURVE.n - priv;
        return {
            point,
            scalar,
            x: point.toRawX()
        };
    }
    initNonce(d, t0h) {
        return numTo32b(d ^ bytesToNumber(t0h));
    }
    finalizeNonce(k0h) {
        const k0 = mod(bytesToNumber(k0h), CURVE.n);
        if (k0 === _0n) throw new Error("sign: Creation of signature failed. k is zero");
        const { point: R , x: rx , scalar: k  } = this.getScalar(k0);
        return {
            R,
            rx,
            k
        };
    }
    finalizeSig(R, k, e, d) {
        return new SchnorrSignature(R.x, mod(k + e * d, CURVE.n)).toRawBytes();
    }
    error() {
        throw new Error("sign: Invalid signature produced");
    }
    async calc() {
        const { m , d , px , rand  } = this;
        const tag = utils.taggedHash;
        const t = this.initNonce(d, await tag(TAGS.aux, rand));
        const { R , rx , k  } = this.finalizeNonce(await tag(TAGS.nonce, t, px, m));
        const e = schnorrChallengeFinalize(await tag(TAGS.challenge, rx, px, m));
        const sig = this.finalizeSig(R, k, e, d);
        if (!await schnorrVerify(sig, m, px)) this.error();
        return sig;
    }
    calcSync() {
        const { m , d , px , rand  } = this;
        const tag = utils.taggedHashSync;
        const t = this.initNonce(d, tag(TAGS.aux, rand));
        const { R , rx , k  } = this.finalizeNonce(tag(TAGS.nonce, t, px, m));
        const e = schnorrChallengeFinalize(tag(TAGS.challenge, rx, px, m));
        const sig = this.finalizeSig(R, k, e, d);
        if (!schnorrVerifySync(sig, m, px)) this.error();
        return sig;
    }
}
async function schnorrSign(msg, privKey, auxRand) {
    return new InternalSchnorrSignature(msg, privKey, auxRand).calc();
}
function schnorrSignSync(msg, privKey, auxRand) {
    return new InternalSchnorrSignature(msg, privKey, auxRand).calcSync();
}
function initSchnorrVerify(signature, message, publicKey) {
    const raw = signature instanceof SchnorrSignature;
    const sig = raw ? signature : SchnorrSignature.fromHex(signature);
    if (raw) sig.assertValidity();
    return {
        ...sig,
        m: ensureBytes(message),
        P: normalizePublicKey(publicKey)
    };
}
function finalizeSchnorrVerify(r, P, s, e) {
    const R = Point.BASE.multiplyAndAddUnsafe(P, normalizePrivateKey(s), mod(-e, CURVE.n));
    if (!R || !R.hasEvenY() || R.x !== r) return false;
    return true;
}
async function schnorrVerify(signature, message, publicKey) {
    try {
        const { r , s , m , P  } = initSchnorrVerify(signature, message, publicKey);
        const e = schnorrChallengeFinalize(await utils.taggedHash(TAGS.challenge, numTo32b(r), P.toRawX(), m));
        return finalizeSchnorrVerify(r, P, s, e);
    } catch (error) {
        return false;
    }
}
function schnorrVerifySync(signature, message, publicKey) {
    try {
        const { r , s , m , P  } = initSchnorrVerify(signature, message, publicKey);
        const e = schnorrChallengeFinalize(utils.taggedHashSync(TAGS.challenge, numTo32b(r), P.toRawX(), m));
        return finalizeSchnorrVerify(r, P, s, e);
    } catch (error) {
        if (error instanceof ShaError) throw error;
        return false;
    }
}
const schnorr = {
    Signature: SchnorrSignature,
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    signSync: schnorrSignSync,
    verifySync: schnorrVerifySync
};
Point.BASE._setWindowSize(8);
const crypto = {
    node: _crypto,
    web: typeof self === "object" && "crypto" in self ? self.crypto : undefined
};
const TAGS = {
    challenge: "BIP0340/challenge",
    aux: "BIP0340/aux",
    nonce: "BIP0340/nonce"
};
const TAGGED_HASH_PREFIXES = {};
const utils = {
    bytesToHex,
    hexToBytes,
    concatBytes,
    mod,
    invert,
    isValidPrivateKey (privateKey) {
        try {
            normalizePrivateKey(privateKey);
            return true;
        } catch (error) {
            return false;
        }
    },
    _bigintTo32Bytes: numTo32b,
    _normalizePrivateKey: normalizePrivateKey,
    hashToPrivateKey: (hash)=>{
        hash = ensureBytes(hash);
        const minLen = groupLen + 8;
        if (hash.length < minLen || hash.length > 1024) throw new Error(`Expected valid bytes of private key as per FIPS 186`);
        const num = mod(bytesToNumber(hash), CURVE.n - _1n) + _1n;
        return numTo32b(num);
    },
    randomBytes: (bytesLength = 32)=>{
        if (crypto.web) return crypto.web.getRandomValues(new Uint8Array(bytesLength));
        else if (crypto.node) {
            const { randomBytes  } = crypto.node;
            return Uint8Array.from(randomBytes(bytesLength));
        } else throw new Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey: ()=>utils.hashToPrivateKey(utils.randomBytes(groupLen + 8)),
    precompute (windowSize = 8, point = Point.BASE) {
        const cached = point === Point.BASE ? point : new Point(point.x, point.y);
        cached._setWindowSize(windowSize);
        cached.multiply(_3n);
        return cached;
    },
    sha256: async (...messages)=>{
        if (crypto.web) {
            const buffer = await crypto.web.subtle.digest("SHA-256", concatBytes(...messages));
            return new Uint8Array(buffer);
        } else if (crypto.node) {
            const { createHash  } = crypto.node;
            const hash = createHash("sha256");
            messages.forEach((m)=>hash.update(m));
            return Uint8Array.from(hash.digest());
        } else throw new Error("The environment doesn't have sha256 function");
    },
    hmacSha256: async (key, ...messages)=>{
        if (crypto.web) {
            const ckey = await crypto.web.subtle.importKey("raw", key, {
                name: "HMAC",
                hash: {
                    name: "SHA-256"
                }
            }, false, [
                "sign"
            ]);
            const message = concatBytes(...messages);
            const buffer = await crypto.web.subtle.sign("HMAC", ckey, message);
            return new Uint8Array(buffer);
        } else if (crypto.node) {
            const { createHmac  } = crypto.node;
            const hash = createHmac("sha256", key);
            messages.forEach((m)=>hash.update(m));
            return Uint8Array.from(hash.digest());
        } else throw new Error("The environment doesn't have hmac-sha256 function");
    },
    sha256Sync: undefined,
    hmacSha256Sync: undefined,
    taggedHash: async (tag, ...messages)=>{
        let tagP = TAGGED_HASH_PREFIXES[tag];
        if (tagP === undefined) {
            const tagH = await utils.sha256(Uint8Array.from(tag, (c)=>c.charCodeAt(0)));
            tagP = concatBytes(tagH, tagH);
            TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return utils.sha256(tagP, ...messages);
    },
    taggedHashSync: (tag, ...messages)=>{
        if (typeof _sha256Sync !== "function") throw new ShaError("sha256Sync is undefined, you need to set it");
        let tagP = TAGGED_HASH_PREFIXES[tag];
        if (tagP === undefined) {
            const tagH = _sha256Sync(Uint8Array.from(tag, (c)=>c.charCodeAt(0)));
            tagP = concatBytes(tagH, tagH);
            TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return _sha256Sync(tagP, ...messages);
    },
    _JacobianPoint: JacobianPoint
};
Object.defineProperties(utils, {
    sha256Sync: {
        configurable: false,
        get () {
            return _sha256Sync;
        },
        set (val) {
            if (!_sha256Sync) _sha256Sync = val;
        }
    },
    hmacSha256Sync: {
        configurable: false,
        get () {
            return _hmacSha256Sync;
        },
        set (val) {
            if (!_hmacSha256Sync) _hmacSha256Sync = val;
        }
    }
});

},{"crypto":"jhUEF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gMMnQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha256 = void 0;
const _sha2_js_1 = require("bfe4a15d4a7c35ed");
const utils_js_1 = require("35fc8c226442297c");
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = new Uint32Array(64);
class SHA256 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A , B , C , D , E , F , G , H  } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A , B , C , D , E , F , G , H  } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
exports.sha256 = (0, utils_js_1.wrapConstructor)(()=>new SHA256());

},{"bfe4a15d4a7c35ed":"6grsp","35fc8c226442297c":"4eGYF"}],"6grsp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHA2 = void 0;
const utils_js_1 = require("f581286f80476a8c");
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends utils_js_1.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
    }
    update(data) {
        if (this.destroyed) throw new Error("instance is destroyed");
        const { view , buffer , blockLen , finished  } = this;
        if (finished) throw new Error("digest() was already called");
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        if (this.destroyed) throw new Error("instance is destroyed");
        if (!(out instanceof Uint8Array) || out.length < this.outputLen) throw new Error("_Sha2: Invalid output buffer");
        if (this.finished) throw new Error("digest() was already called");
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer , view , blockLen , isLE  } = this;
        let { pos  } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // NOTE: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64bit of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        this.get().forEach((v, i)=>oview.setUint32(4 * i, v, isLE));
    }
    digest() {
        const { buffer , outputLen  } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen , buffer , length , finished , destroyed , pos  } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
exports.SHA2 = SHA2;

},{"f581286f80476a8c":"4eGYF"}],"4eGYF":[function(require,module,exports) {
"use strict";
/*! noble-hashes - MIT License (c) 2021 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.assertHash = exports.assertBytes = exports.assertBool = exports.assertNumber = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
// The import here is via the package name. This is to ensure
// that exports mapping/resolution does fall into place.
const crypto_1 = require("e6c7a25b1ec8f48f");
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
// There is almost no big endian hardware, but js typed arrays uses platform specific endianess.
// So, just to be sure not to corrupt anything.
if (!exports.isLE) throw new Error("Non little-endian hardware is not supported");
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
    // pre-caching chars could speed this up 6x.
    let hex = "";
    for(let i = 0; i < uint8a.length; i++)hex += hexes[uint8a[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
function parseHexByte(hexByte) {
    if (hexByte.length !== 2) throw new Error("Invalid byte sequence");
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte)) throw new Error("Invalid byte sequence");
    return byte;
}
// Buffer.from(hex, 'hex') -> hexToBytes(hex)
function hexToBytes(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    if (hex.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        array[i] = parseHexByte(hex.slice(j, j + 2));
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// Currently avoid insertion of polyfills with packers (browserify/webpack/etc)
// But setTimeout is pretty slow, maybe worth to investigate howto do minimal polyfill here
exports.nextTick = (()=>{
    const nodeRequire = typeof module.require === "function" && module.require.bind(module);
    try {
        if (nodeRequire) {
            const { setImmediate  } = nodeRequire("timers");
            return ()=>new Promise((resolve)=>setImmediate(resolve));
        }
    } catch (e) {}
    return ()=>new Promise((resolve)=>setTimeout(resolve, 0));
})();
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
function utf8ToBytes(str) {
    if (typeof str !== "string") throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    return new TextEncoder().encode(str);
}
exports.utf8ToBytes = utf8ToBytes;
function toBytes(data) {
    if (typeof data === "string") data = utf8ToBytes(data);
    if (!(data instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
exports.toBytes = toBytes;
// Buffer.concat([buf1, buf2]) -> concatBytes(buf1, buf2)
function concatBytes(...arrays) {
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
exports.concatBytes = concatBytes;
function assertNumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
exports.assertNumber = assertNumber;
function assertBool(b) {
    if (typeof b !== "boolean") throw new Error(`Expected boolean, not ${b}`);
}
exports.assertBool = assertBool;
function assertBytes(bytes, ...lengths) {
    if (bytes instanceof Uint8Array && (!lengths.length || lengths.includes(bytes.length))) return;
    throw new TypeError(`Expected ${lengths} bytes, not ${typeof bytes} with length=${bytes.length}`);
}
exports.assertBytes = assertBytes;
function assertHash(hash) {
    if (typeof hash !== "function" || typeof hash.init !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    assertNumber(hash.outputLen);
    assertNumber(hash.blockLen);
}
exports.assertHash = assertHash;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
// Check if object doens't have custom constructor (like Uint8Array/Array)
const isPlainObject = (obj)=>Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
function checkOpts(def, _opts) {
    if (_opts !== undefined && (typeof _opts !== "object" || !isPlainObject(_opts))) throw new TypeError("Options should be object or undefined");
    const opts = Object.assign(def, _opts);
    return opts;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashConstructor) {
    const hashC = (message)=>hashConstructor().update(toBytes(message)).digest();
    const tmp = hashConstructor();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashConstructor();
    hashC.init = hashC.create;
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    hashC.init = hashC.create;
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto.web) return crypto_1.crypto.web.getRandomValues(new Uint8Array(bytesLength));
    else if (crypto_1.crypto.node) return new Uint8Array(crypto_1.crypto.node.randomBytes(bytesLength).buffer);
    else throw new Error("The environment doesn't have randomBytes function");
}
exports.randomBytes = randomBytes;

},{"e6c7a25b1ec8f48f":"iMUH0"}],"iMUH0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = {
    node: undefined,
    web: typeof self === "object" && "crypto" in self ? self.crypto : undefined
};

},{}],"cvmUK":[function(require,module,exports) {
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assertNumber", ()=>assertNumber);
parcelHelpers.export(exports, "utils", ()=>utils);
parcelHelpers.export(exports, "base16", ()=>base16);
parcelHelpers.export(exports, "base32", ()=>base32);
parcelHelpers.export(exports, "base32hex", ()=>base32hex);
parcelHelpers.export(exports, "base32crockford", ()=>base32crockford);
parcelHelpers.export(exports, "base64", ()=>base64);
parcelHelpers.export(exports, "base64url", ()=>base64url);
parcelHelpers.export(exports, "base58", ()=>base58);
parcelHelpers.export(exports, "base58flickr", ()=>base58flickr);
parcelHelpers.export(exports, "base58xrp", ()=>base58xrp);
parcelHelpers.export(exports, "base58xmr", ()=>base58xmr);
parcelHelpers.export(exports, "base58check", ()=>base58check);
parcelHelpers.export(exports, "bech32", ()=>bech32);
parcelHelpers.export(exports, "bech32m", ()=>bech32m);
parcelHelpers.export(exports, "utf8", ()=>utf8);
parcelHelpers.export(exports, "hex", ()=>hex);
parcelHelpers.export(exports, "bytesToString", ()=>bytesToString);
parcelHelpers.export(exports, "str", ()=>str);
parcelHelpers.export(exports, "stringToBytes", ()=>stringToBytes);
parcelHelpers.export(exports, "bytes", ()=>bytes);
function assertNumber(n) {
    if (!Number.isSafeInteger(n)) throw new Error(`Wrong integer: ${n}`);
}
function chain(...args) {
    const wrap = (a, b)=>(c)=>a(b(c));
    const encode = Array.from(args).reverse().reduce((acc, i)=>acc ? wrap(acc, i.encode) : i.encode, undefined);
    const decode = args.reduce((acc, i)=>acc ? wrap(acc, i.decode) : i.decode, undefined);
    return {
        encode,
        decode
    };
}
function alphabet(alphabet) {
    return {
        encode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number") throw new Error("alphabet.encode input should be an array of numbers");
            return digits.map((i)=>{
                assertNumber(i);
                if (i < 0 || i >= alphabet.length) throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
                return alphabet[i];
            });
        },
        decode: (input)=>{
            if (!Array.isArray(input) || input.length && typeof input[0] !== "string") throw new Error("alphabet.decode input should be array of strings");
            return input.map((letter)=>{
                if (typeof letter !== "string") throw new Error(`alphabet.decode: not string element=${letter}`);
                const index = alphabet.indexOf(letter);
                if (index === -1) throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
                return index;
            });
        }
    };
}
function join(separator = "") {
    if (typeof separator !== "string") throw new Error("join separator should be string");
    return {
        encode: (from)=>{
            if (!Array.isArray(from) || from.length && typeof from[0] !== "string") throw new Error("join.encode input should be array of strings");
            for (let i of from)if (typeof i !== "string") throw new Error(`join.encode: non-string input=${i}`);
            return from.join(separator);
        },
        decode: (to)=>{
            if (typeof to !== "string") throw new Error("join.decode input should be string");
            return to.split(separator);
        }
    };
}
function padding(bits, chr = "=") {
    assertNumber(bits);
    if (typeof chr !== "string") throw new Error("padding chr should be string");
    return {
        encode (data) {
            if (!Array.isArray(data) || data.length && typeof data[0] !== "string") throw new Error("padding.encode input should be array of strings");
            for (let i of data)if (typeof i !== "string") throw new Error(`padding.encode: non-string input=${i}`);
            while(data.length * bits % 8)data.push(chr);
            return data;
        },
        decode (input) {
            if (!Array.isArray(input) || input.length && typeof input[0] !== "string") throw new Error("padding.encode input should be array of strings");
            for (let i of input)if (typeof i !== "string") throw new Error(`padding.decode: non-string input=${i}`);
            let end = input.length;
            if (end * bits % 8) throw new Error("Invalid padding: string should have whole number of bytes");
            for(; end > 0 && input[end - 1] === chr; end--){
                if (!((end - 1) * bits % 8)) throw new Error("Invalid padding: string has too much padding");
            }
            return input.slice(0, end);
        }
    };
}
function normalize(fn) {
    if (typeof fn !== "function") throw new Error("normalize fn should be function");
    return {
        encode: (from)=>from,
        decode: (to)=>fn(to)
    };
}
function convertRadix(data, from, to) {
    if (from < 2) throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
    if (to < 2) throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
    if (!Array.isArray(data)) throw new Error("convertRadix: data should be array");
    if (!data.length) return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data);
    digits.forEach((d)=>{
        assertNumber(d);
        if (d < 0 || d >= from) throw new Error(`Wrong integer: ${d}`);
    });
    while(true){
        let carry = 0;
        let done = true;
        for(let i = pos; i < digits.length; i++){
            const digit = digits[i];
            const digitBase = from * carry + digit;
            if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) throw new Error("convertRadix: carry overflow");
            carry = digitBase % to;
            digits[i] = Math.floor(digitBase / to);
            if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase) throw new Error("convertRadix: carry overflow");
            if (!done) continue;
            else if (!digits[i]) pos = i;
            else done = false;
        }
        res.push(carry);
        if (done) break;
    }
    for(let i = 0; i < data.length - 1 && data[i] === 0; i++)res.push(0);
    return res.reverse();
}
const gcd = (a, b)=>!b ? a : gcd(b, a % b);
const radix2carry = (from, to)=>from + (to - gcd(from, to));
function convertRadix2(data, from, to, padding) {
    if (!Array.isArray(data)) throw new Error("convertRadix2: data should be array");
    if (from <= 0 || from > 32) throw new Error(`convertRadix2: wrong from=${from}`);
    if (to <= 0 || to > 32) throw new Error(`convertRadix2: wrong to=${to}`);
    if (radix2carry(from, to) > 32) throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
    let carry = 0;
    let pos = 0;
    const mask = 2 ** to - 1;
    const res = [];
    for (const n of data){
        assertNumber(n);
        if (n >= 2 ** from) throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = carry << from | n;
        if (pos + from > 32) throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for(; pos >= to; pos -= to)res.push((carry >> pos - to & mask) >>> 0);
        carry &= 2 ** pos - 1;
    }
    carry = carry << to - pos & mask;
    if (!padding && pos >= from) throw new Error("Excess padding");
    if (!padding && carry) throw new Error(`Non-zero padding: ${carry}`);
    if (padding && pos > 0) res.push(carry >>> 0);
    return res;
}
function radix(num) {
    assertNumber(num);
    return {
        encode: (bytes)=>{
            if (!(bytes instanceof Uint8Array)) throw new Error("radix.encode input should be Uint8Array");
            return convertRadix(Array.from(bytes), 256, num);
        },
        decode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number") throw new Error("radix.decode input should be array of strings");
            return Uint8Array.from(convertRadix(digits, num, 256));
        }
    };
}
function radix2(bits, revPadding = false) {
    assertNumber(bits);
    if (bits <= 0 || bits > 32) throw new Error("radix2: bits should be in (0..32]");
    if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32) throw new Error("radix2: carry overflow");
    return {
        encode: (bytes)=>{
            if (!(bytes instanceof Uint8Array)) throw new Error("radix2.encode input should be Uint8Array");
            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number") throw new Error("radix2.decode input should be array of strings");
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        }
    };
}
function unsafeWrapper(fn) {
    if (typeof fn !== "function") throw new Error("unsafeWrapper fn should be function");
    return function(...args) {
        try {
            return fn.apply(null, args);
        } catch (e) {}
    };
}
function checksum(len, fn) {
    assertNumber(len);
    if (typeof fn !== "function") throw new Error("checksum fn should be function");
    return {
        encode (data) {
            if (!(data instanceof Uint8Array)) throw new Error("checksum.encode: input should be Uint8Array");
            const checksum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(checksum, data.length);
            return res;
        },
        decode (data) {
            if (!(data instanceof Uint8Array)) throw new Error("checksum.decode: input should be Uint8Array");
            const payload = data.slice(0, -len);
            const newChecksum = fn(payload).slice(0, len);
            const oldChecksum = data.slice(-len);
            for(let i = 0; i < len; i++)if (newChecksum[i] !== oldChecksum[i]) throw new Error("Invalid checksum");
            return payload;
        }
    };
}
const utils = {
    alphabet,
    chain,
    checksum,
    radix,
    radix2,
    join,
    padding
};
const base16 = chain(radix2(4), alphabet("0123456789ABCDEF"), join(""));
const base32 = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
const base32hex = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
const base32crockford = chain(radix2(5), alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s)=>s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
const base64 = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
const base64url = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
const genBase58 = (abc)=>chain(radix(58), alphabet(abc), join(""));
const base58 = genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
const base58flickr = genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
const base58xrp = genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
const XMR_BLOCK_LEN = [
    0,
    2,
    3,
    5,
    6,
    7,
    9,
    10,
    11
];
const base58xmr = {
    encode (data) {
        let res = "";
        for(let i = 0; i < data.length; i += 8){
            const block = data.subarray(i, i + 8);
            res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], "1");
        }
        return res;
    },
    decode (str) {
        let res = [];
        for(let i = 0; i < str.length; i += 11){
            const slice = str.slice(i, i + 11);
            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
            const block = base58.decode(slice);
            for(let j = 0; j < block.length - blockLen; j++){
                if (block[j] !== 0) throw new Error("base58xmr: wrong padding");
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
    }
};
const base58check = (sha256)=>chain(checksum(4, (data)=>sha256(sha256(data))), base58);
const BECH_ALPHABET = chain(alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
const POLYMOD_GENERATORS = [
    0x3b6a57b2,
    0x26508e6d,
    0x1ea119fa,
    0x3d4233dd,
    0x2a1462b3
];
function bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 0x1ffffff) << 5;
    for(let i = 0; i < POLYMOD_GENERATORS.length; i++)if ((b >> i & 1) === 1) chk ^= POLYMOD_GENERATORS[i];
    return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for(let i = 0; i < len; i++){
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126) throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ c >> 5;
    }
    chk = bech32Polymod(chk);
    for(let i = 0; i < len; i++)chk = bech32Polymod(chk) ^ prefix.charCodeAt(i) & 0x1f;
    for (let v of words)chk = bech32Polymod(chk) ^ v;
    for(let i = 0; i < 6; i++)chk = bech32Polymod(chk);
    chk ^= encodingConst;
    return BECH_ALPHABET.encode(convertRadix2([
        chk % 2 ** 30
    ], 30, 5, false));
}
function genBech32(encoding) {
    const ENCODING_CONST = encoding === "bech32" ? 1 : 0x2bc830a3;
    const _words = radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = unsafeWrapper(fromWords);
    function encode(prefix, words, limit = 90) {
        if (typeof prefix !== "string") throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
        if (!Array.isArray(words) || words.length && typeof words[0] !== "number") throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
        const actualLength = prefix.length + 7 + words.length;
        if (limit !== false && actualLength > limit) throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        prefix = prefix.toLowerCase();
        return `${prefix}1${BECH_ALPHABET.encode(words)}${bechChecksum(prefix, words, ENCODING_CONST)}`;
    }
    function decode(str, limit = 90) {
        if (typeof str !== "string") throw new Error(`bech32.decode input should be string, not ${typeof str}`);
        if (str.length < 8 || limit !== false && str.length > limit) throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase()) throw new Error(`String must be lowercase or uppercase`);
        str = lowered;
        const sepIndex = str.lastIndexOf("1");
        if (sepIndex === 0 || sepIndex === -1) throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = str.slice(0, sepIndex);
        const _words = str.slice(sepIndex + 1);
        if (_words.length < 6) throw new Error("Data must be at least 6 characters long");
        const words = BECH_ALPHABET.decode(_words).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!_words.endsWith(sum)) throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return {
            prefix,
            words
        };
    }
    const decodeUnsafe = unsafeWrapper(decode);
    function decodeToBytes(str) {
        const { prefix , words  } = decode(str, false);
        return {
            prefix,
            words,
            bytes: fromWords(words)
        };
    }
    return {
        encode,
        decode,
        decodeToBytes,
        decodeUnsafe,
        fromWords,
        fromWordsUnsafe,
        toWords
    };
}
const bech32 = genBech32("bech32");
const bech32m = genBech32("bech32m");
const utf8 = {
    encode: (data)=>new TextDecoder().decode(data),
    decode: (str)=>new TextEncoder().encode(str)
};
const hex = chain(radix2(4), alphabet("0123456789abcdef"), join(""), normalize((s)=>{
    if (typeof s !== "string" || s.length % 2) throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
    return s.toLowerCase();
}));
const CODERS = {
    utf8,
    hex,
    base16,
    base32,
    base64,
    base64url,
    base58,
    base58xmr
};
const coderTypeError = `Invalid encoding type. Available types: ${Object.keys(CODERS).join(", ")}`;
const bytesToString = (type, bytes)=>{
    if (typeof type !== "string" || !CODERS.hasOwnProperty(type)) throw new TypeError(coderTypeError);
    if (!(bytes instanceof Uint8Array)) throw new TypeError("bytesToString() expects Uint8Array");
    return CODERS[type].encode(bytes);
};
const str = bytesToString;
const stringToBytes = (type, str)=>{
    if (!CODERS.hasOwnProperty(type)) throw new TypeError(coderTypeError);
    if (typeof str !== "string") throw new TypeError("stringToBytes() expects string");
    return CODERS[type].decode(str);
};
const bytes = stringToBytes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Y9rd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wordlist = void 0;
exports.wordlist = `abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split("\n");

},{}],"cFmd4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mnemonicToSeedSync = exports.mnemonicToSeed = exports.validateMnemonic = exports.entropyToMnemonic = exports.mnemonicToEntropy = exports.generateMnemonic = void 0;
/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */ const _assert_1 = require("c1e17a3e7bc7aa26");
const pbkdf2_1 = require("ab324de880988886");
const sha256_1 = require("4faddc1609b8922d");
const sha512_1 = require("3e842ab7052bec6e");
const utils_1 = require("2dcfaf7fa6e7af1d");
const base_1 = require("61d64c081241dfeb");
// Japanese wordlist
const isJapanese = (wordlist)=>wordlist[0] === "あいこくしん";
// Normalization replaces equivalent sequences of characters
// so that any two texts that are equivalent will be reduced
// to the same sequence of code points, called the normal form of the original text.
function nfkd(str) {
    if (typeof str !== "string") throw new TypeError(`Invalid mnemonic type: ${typeof str}`);
    return str.normalize("NFKD");
}
function normalize(str) {
    const norm = nfkd(str);
    const words = norm.split(" ");
    if (![
        12,
        15,
        18,
        21,
        24
    ].includes(words.length)) throw new Error("Invalid mnemonic");
    return {
        nfkd: norm,
        words
    };
}
function assertEntropy(entropy) {
    _assert_1.default.bytes(entropy, 16, 20, 24, 28, 32);
}
/**
 * Generate x random words. Uses Cryptographically-Secure Random Number Generator.
 * @param wordlist imported wordlist for specific language
 * @param strength mnemonic strength 128-256 bits
 * @example
 * generateMnemonic(wordlist, 128)
 * // 'legal winner thank year wave sausage worth useful legal winner thank yellow'
 */ function generateMnemonic(wordlist, strength = 128) {
    _assert_1.default.number(strength);
    if (strength % 32 !== 0 || strength > 256) throw new TypeError("Invalid entropy");
    return entropyToMnemonic((0, utils_1.randomBytes)(strength / 8), wordlist);
}
exports.generateMnemonic = generateMnemonic;
const calcChecksum = (entropy)=>{
    // Checksum is ent.length/4 bits long
    const bitsLeft = 8 - entropy.length / 4;
    // Zero rightmost "bitsLeft" bits in byte
    // For example: bitsLeft=4 val=10111101 -> 10110000
    return new Uint8Array([
        (0, sha256_1.sha256)(entropy)[0] >> bitsLeft << bitsLeft
    ]);
};
function getCoder(wordlist) {
    if (!Array.isArray(wordlist) || wordlist.length !== 2048 || typeof wordlist[0] !== "string") throw new Error("Worlist: expected array of 2048 strings");
    wordlist.forEach((i)=>{
        if (typeof i !== "string") throw new Error(`Wordlist: non-string element: ${i}`);
    });
    return base_1.utils.chain(base_1.utils.checksum(1, calcChecksum), base_1.utils.radix2(11, true), base_1.utils.alphabet(wordlist));
}
/**
 * Reversible: Converts mnemonic string to raw entropy in form of byte array.
 * @param mnemonic 12-24 words
 * @param wordlist imported wordlist for specific language
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * mnemonicToEntropy(mnem, wordlist)
 * // Produces
 * new Uint8Array([
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f,
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f
 * ])
 */ function mnemonicToEntropy(mnemonic, wordlist) {
    const { words  } = normalize(mnemonic);
    const entropy = getCoder(wordlist).decode(words);
    assertEntropy(entropy);
    return entropy;
}
exports.mnemonicToEntropy = mnemonicToEntropy;
/**
 * Reversible: Converts raw entropy in form of byte array to mnemonic string.
 * @param entropy byte array
 * @param wordlist imported wordlist for specific language
 * @returns 12-24 words
 * @example
 * const ent = new Uint8Array([
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f,
 *   0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f
 * ]);
 * entropyToMnemonic(ent, wordlist);
 * // 'legal winner thank year wave sausage worth useful legal winner thank yellow'
 */ function entropyToMnemonic(entropy, wordlist) {
    assertEntropy(entropy);
    const words = getCoder(wordlist).encode(entropy);
    return words.join(isJapanese(wordlist) ? "　" : " ");
}
exports.entropyToMnemonic = entropyToMnemonic;
/**
 * Validates mnemonic for being 12-24 words contained in `wordlist`.
 */ function validateMnemonic(mnemonic, wordlist) {
    try {
        mnemonicToEntropy(mnemonic, wordlist);
    } catch (e) {
        return false;
    }
    return true;
}
exports.validateMnemonic = validateMnemonic;
const salt = (passphrase)=>nfkd(`mnemonic${passphrase}`);
/**
 * Irreversible: Uses KDF to derive 64 bytes of key data from mnemonic + optional password.
 * @param mnemonic 12-24 words
 * @param passphrase string that will additionally protect the key
 * @returns 64 bytes of key data
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * await mnemonicToSeed(mnem, 'password');
 * // new Uint8Array([...64 bytes])
 */ function mnemonicToSeed(mnemonic, passphrase = "") {
    return (0, pbkdf2_1.pbkdf2Async)(sha512_1.sha512, normalize(mnemonic).nfkd, salt(passphrase), {
        c: 2048,
        dkLen: 64
    });
}
exports.mnemonicToSeed = mnemonicToSeed;
/**
 * Irreversible: Uses KDF to derive 64 bytes of key data from mnemonic + optional password.
 * @param mnemonic 12-24 words
 * @param passphrase string that will additionally protect the key
 * @returns 64 bytes of key data
 * @example
 * const mnem = 'legal winner thank year wave sausage worth useful legal winner thank yellow';
 * mnemonicToSeedSync(mnem, 'password');
 * // new Uint8Array([...64 bytes])
 */ function mnemonicToSeedSync(mnemonic, passphrase = "") {
    return (0, pbkdf2_1.pbkdf2)(sha512_1.sha512, normalize(mnemonic).nfkd, salt(passphrase), {
        c: 2048,
        dkLen: 64
    });
}
exports.mnemonicToSeedSync = mnemonicToSeedSync;

},{"c1e17a3e7bc7aa26":"BFdql","ab324de880988886":"c4hz5","4faddc1609b8922d":"JjjO8","3e842ab7052bec6e":"jlH7E","2dcfaf7fa6e7af1d":"2ehgp","61d64c081241dfeb":"cvmUK"}],"BFdql":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== "boolean") throw new Error(`Expected boolean, not ${b}`);
}
exports.bool = bool;
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(hash) {
    if (typeof hash !== "function" || typeof hash.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash.outputLen);
    number(hash.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"c4hz5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pbkdf2Async = exports.pbkdf2 = void 0;
const _assert_js_1 = require("768eb1021fce060");
const hmac_js_1 = require("9682f01ad3d2d61");
const utils_js_1 = require("af467e60a52bb079");
// Common prologue and epilogue for sync/async functions
function pbkdf2Init(hash, _password, _salt, _opts) {
    _assert_js_1.default.hash(hash);
    const opts = (0, utils_js_1.checkOpts)({
        dkLen: 32,
        asyncTick: 10
    }, _opts);
    const { c , dkLen , asyncTick  } = opts;
    _assert_js_1.default.number(c);
    _assert_js_1.default.number(dkLen);
    _assert_js_1.default.number(asyncTick);
    if (c < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
    const password = (0, utils_js_1.toBytes)(_password);
    const salt = (0, utils_js_1.toBytes)(_salt);
    // DK = PBKDF2(PRF, Password, Salt, c, dkLen);
    const DK = new Uint8Array(dkLen);
    // U1 = PRF(Password, Salt + INT_32_BE(i))
    const PRF = hmac_js_1.hmac.create(hash, password);
    const PRFSalt = PRF._cloneInto().update(salt);
    return {
        c,
        dkLen,
        asyncTick,
        DK,
        PRF,
        PRFSalt
    };
}
function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW) prfW.destroy();
    u.fill(0);
    return DK;
}
/**
 * PBKDF2-HMAC: RFC 2898 key derivation function
 * @param hash - hash function that would be used e.g. sha256
 * @param password - password from which a derived key is generated
 * @param salt - cryptographic salt
 * @param opts - {c, dkLen} where c is work factor and dkLen is output message size
 */ function pbkdf2(hash, password, salt, opts) {
    const { c , dkLen , DK , PRF , PRFSalt  } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, utils_js_1.createView)(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for(let ui = 1; ui < c; ui++){
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        }
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
exports.pbkdf2 = pbkdf2;
async function pbkdf2Async(hash, password, salt, opts) {
    const { c , dkLen , asyncTick , DK , PRF , PRFSalt  } = pbkdf2Init(hash, password, salt, opts);
    let prfW; // Working copy
    const arr = new Uint8Array(4);
    const view = (0, utils_js_1.createView)(arr);
    const u = new Uint8Array(PRF.outputLen);
    // DK = T1 + T2 + ⋯ + Tdklen/hlen
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        // Ti = F(Password, Salt, c, i)
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        // F(Password, Salt, c, i) = U1 ^ U2 ^ ⋯ ^ Uc
        // U1 = PRF(Password, Salt + INT_32_BE(i))
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        await (0, utils_js_1.asyncLoop)(c - 1, asyncTick, (i)=>{
            // Uc = PRF(Password, Uc−1)
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        });
    }
    return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
}
exports.pbkdf2Async = pbkdf2Async;

},{"768eb1021fce060":"BFdql","9682f01ad3d2d61":"3IfCc","af467e60a52bb079":"2ehgp"}],"3IfCc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hmac = void 0;
const _assert_js_1 = require("6224bce973cd257f");
const utils_js_1 = require("b93c86865e60756e");
// HMAC (RFC 2104)
class HMAC extends utils_js_1.Hash {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        _assert_js_1.default.hash(hash);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== "function") throw new TypeError("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 106;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        _assert_js_1.default.exists(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.bytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash , iHash , finished , destroyed , blockLen , outputLen  } = this;
        to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */ const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
exports.hmac = hmac;
exports.hmac.create = (hash, key)=>new HMAC(hash, key);

},{"6224bce973cd257f":"BFdql","b93c86865e60756e":"2ehgp"}],"2ehgp":[function(require,module,exports) {
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
// The import here is via the package name. This is to ensure
// that exports mapping/resolution does fall into place.
const crypto_1 = require("e5579ca10247847f");
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
// There is almost no big endian hardware, but js typed arrays uses platform specific endianness.
// So, just to be sure not to corrupt anything.
if (!exports.isLE) throw new Error("Non little-endian hardware is not supported");
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, "0"));
/**
 * @example bytesToHex(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
 */ function bytesToHex(uint8a) {
    // pre-caching improves the speed 6x
    if (!(uint8a instanceof Uint8Array)) throw new Error("Uint8Array expected");
    let hex = "";
    for(let i = 0; i < uint8a.length; i++)hex += hexes[uint8a[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
/**
 * @example hexToBytes('deadbeef')
 */ function hexToBytes(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    if (hex.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error("Invalid byte sequence");
        array[i] = byte;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// There is no setImmediate in browser and setTimeout is slow. However, call to async function will return Promise
// which will be fullfiled only on next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
function utf8ToBytes(str) {
    if (typeof str !== "string") throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    return new TextEncoder().encode(str);
}
exports.utf8ToBytes = utf8ToBytes;
function toBytes(data) {
    if (typeof data === "string") data = utf8ToBytes(data);
    if (!(data instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
exports.toBytes = toBytes;
/**
 * Concats Uint8Array-s into one; like `Buffer.concat([buf1, buf2])`
 * @example concatBytes(buf1, buf2)
 */ function concatBytes(...arrays) {
    if (!arrays.every((a)=>a instanceof Uint8Array)) throw new Error("Uint8Array list expected");
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
exports.concatBytes = concatBytes;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
// Check if object doens't have custom constructor (like Uint8Array/Array)
const isPlainObject = (obj)=>Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
function checkOpts(defaults, opts) {
    if (opts !== undefined && (typeof opts !== "object" || !isPlainObject(opts))) throw new TypeError("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashConstructor) {
    const hashC = (message)=>hashConstructor().update(toBytes(message)).digest();
    const tmp = hashConstructor();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashConstructor();
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
/**
 * Secure PRNG
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto.web) return crypto_1.crypto.web.getRandomValues(new Uint8Array(bytesLength));
    else if (crypto_1.crypto.node) return new Uint8Array(crypto_1.crypto.node.randomBytes(bytesLength).buffer);
    else throw new Error("The environment doesn't have randomBytes function");
}
exports.randomBytes = randomBytes;

},{"e5579ca10247847f":"7XNEy"}],"7XNEy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = {
    node: undefined,
    web: typeof self === "object" && "crypto" in self ? self.crypto : undefined
};

},{}],"JjjO8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha224 = exports.sha256 = void 0;
const _sha2_js_1 = require("ec8b0344018aed94");
const utils_js_1 = require("2761fe2a66bf700e");
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = new Uint32Array(64);
class SHA256 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A , B , C , D , E , F , G , H  } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A , B , C , D , E , F , G , H  } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = -1056596264;
        this.B = 914150663;
        this.C = 812702999;
        this.D = -150054599;
        this.E = -4191439;
        this.F = 1750603025;
        this.G = 1694076839;
        this.H = -1090891868;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */ exports.sha256 = (0, utils_js_1.wrapConstructor)(()=>new SHA256());
exports.sha224 = (0, utils_js_1.wrapConstructor)(()=>new SHA224());

},{"ec8b0344018aed94":"6HKeB","2761fe2a66bf700e":"2ehgp"}],"6HKeB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHA2 = void 0;
const _assert_js_1 = require("fc96fa8b39f04e");
const utils_js_1 = require("e50a50fd515cedc6");
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends utils_js_1.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
    }
    update(data) {
        _assert_js_1.default.exists(this);
        const { view , buffer , blockLen  } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.output(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer , view , blockLen , isLE  } = this;
        let { pos  } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer , outputLen  } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen , buffer , length , finished , destroyed , pos  } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
exports.SHA2 = SHA2;

},{"fc96fa8b39f04e":"BFdql","e50a50fd515cedc6":"2ehgp"}],"jlH7E":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha384 = exports.sha512_256 = exports.sha512_224 = exports.sha512 = exports.SHA512 = void 0;
const _sha2_js_1 = require("c9d75bdf156cfa5e");
const _u64_js_1 = require("5e09a3f4a22d2ce9");
const utils_js_1 = require("bdaf6874ba6b5ef3");
// Round contants (first 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409):
// prettier-ignore
const [SHA512_Kh, SHA512_Kl] = _u64_js_1.default.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
].map((n)=>BigInt(n)));
// Temporary buffer, not used to store anything between runs
const SHA512_W_H = new Uint32Array(80);
const SHA512_W_L = new Uint32Array(80);
class SHA512 extends _sha2_js_1.SHA2 {
    constructor(){
        super(128, 64, 16, false);
        // We cannot use array here since array allows indexing by variable which means optimizer/compiler cannot use registers.
        // Also looks cleaner and easier to verify with spec.
        // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 1779033703;
        this.Al = -205731576;
        this.Bh = -1150833019;
        this.Bl = -2067093701;
        this.Ch = 1013904242;
        this.Cl = -23791573;
        this.Dh = -1521486534;
        this.Dl = 1595750129;
        this.Eh = 1359893119;
        this.El = -1377402159;
        this.Fh = -1694144372;
        this.Fl = 725511199;
        this.Gh = 528734635;
        this.Gl = -79577749;
        this.Hh = 1541459225;
        this.Hl = 327033209;
    }
    // prettier-ignore
    get() {
        const { Ah , Al , Bh , Bl , Ch , Cl , Dh , Dl , Eh , El , Fh , Fl , Gh , Gl , Hh , Hl  } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = _u64_js_1.default.rotrSH(W15h, W15l, 1) ^ _u64_js_1.default.rotrSH(W15h, W15l, 8) ^ _u64_js_1.default.shrSH(W15h, W15l, 7);
            const s0l = _u64_js_1.default.rotrSL(W15h, W15l, 1) ^ _u64_js_1.default.rotrSL(W15h, W15l, 8) ^ _u64_js_1.default.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = _u64_js_1.default.rotrSH(W2h, W2l, 19) ^ _u64_js_1.default.rotrBH(W2h, W2l, 61) ^ _u64_js_1.default.shrSH(W2h, W2l, 6);
            const s1l = _u64_js_1.default.rotrSL(W2h, W2l, 19) ^ _u64_js_1.default.rotrBL(W2h, W2l, 61) ^ _u64_js_1.default.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = _u64_js_1.default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = _u64_js_1.default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah , Al , Bh , Bl , Ch , Cl , Dh , Dl , Eh , El , Fh , Fl , Gh , Gl , Hh , Hl  } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = _u64_js_1.default.rotrSH(Eh, El, 14) ^ _u64_js_1.default.rotrSH(Eh, El, 18) ^ _u64_js_1.default.rotrBH(Eh, El, 41);
            const sigma1l = _u64_js_1.default.rotrSL(Eh, El, 14) ^ _u64_js_1.default.rotrSL(Eh, El, 18) ^ _u64_js_1.default.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = _u64_js_1.default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = _u64_js_1.default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = _u64_js_1.default.rotrSH(Ah, Al, 28) ^ _u64_js_1.default.rotrBH(Ah, Al, 34) ^ _u64_js_1.default.rotrBH(Ah, Al, 39);
            const sigma0l = _u64_js_1.default.rotrSL(Ah, Al, 28) ^ _u64_js_1.default.rotrBL(Ah, Al, 34) ^ _u64_js_1.default.rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh , l: El  } = _u64_js_1.default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = _u64_js_1.default.add3L(T1l, sigma0l, MAJl);
            Ah = _u64_js_1.default.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah , l: Al  } = _u64_js_1.default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh , l: Bl  } = _u64_js_1.default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch , l: Cl  } = _u64_js_1.default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh , l: Dl  } = _u64_js_1.default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh , l: El  } = _u64_js_1.default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh , l: Fl  } = _u64_js_1.default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh , l: Gl  } = _u64_js_1.default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh , l: Hl  } = _u64_js_1.default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        SHA512_W_H.fill(0);
        SHA512_W_L.fill(0);
    }
    destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
exports.SHA512 = SHA512;
class SHA512_224 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -1942145080;
        this.Al = 424955298;
        this.Bh = 1944164710;
        this.Bl = -1982016298;
        this.Ch = 502970286;
        this.Cl = 855612546;
        this.Dh = 1738396948;
        this.Dl = 1479516111;
        this.Eh = 258812777;
        this.El = 2077511080;
        this.Fh = 2011393907;
        this.Fl = 79989058;
        this.Gh = 1067287976;
        this.Gl = 1780299464;
        this.Hh = 286451373;
        this.Hl = -1848208735;
        this.outputLen = 28;
    }
}
class SHA512_256 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 573645204;
        this.Al = -64227540;
        this.Bh = -1621794909;
        this.Bl = -934517566;
        this.Ch = 596883563;
        this.Cl = 1867755857;
        this.Dh = -1774684391;
        this.Dl = 1497426621;
        this.Eh = -1775747358;
        this.El = -1467023389;
        this.Fh = -1101128155;
        this.Fl = 1401305490;
        this.Gh = 721525244;
        this.Gl = 746961066;
        this.Hh = 246885852;
        this.Hl = -2117784414;
        this.outputLen = 32;
    }
}
class SHA384 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -876896931;
        this.Al = -1056596264;
        this.Bh = 1654270250;
        this.Bl = 914150663;
        this.Ch = -1856437926;
        this.Cl = 812702999;
        this.Dh = 355462360;
        this.Dl = -150054599;
        this.Eh = 1731405415;
        this.El = -4191439;
        this.Fh = -1900787065;
        this.Fl = 1750603025;
        this.Gh = -619958771;
        this.Gl = 1694076839;
        this.Hh = 1203062813;
        this.Hl = -1090891868;
        this.outputLen = 48;
    }
}
exports.sha512 = (0, utils_js_1.wrapConstructor)(()=>new SHA512());
exports.sha512_224 = (0, utils_js_1.wrapConstructor)(()=>new SHA512_224());
exports.sha512_256 = (0, utils_js_1.wrapConstructor)(()=>new SHA512_256());
exports.sha384 = (0, utils_js_1.wrapConstructor)(()=>new SHA384());

},{"c9d75bdf156cfa5e":"6HKeB","5e09a3f4a22d2ce9":"8TbxJ","bdaf6874ba6b5ef3":"2ehgp"}],"8TbxJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = exports.toBig = exports.split = exports.fromBig = void 0;
const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
exports.fromBig = fromBig;
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h , l  } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
exports.split = split;
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
exports.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (h, l)=>l;
const rotr32L = (h, l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
// Removing "export" has 5% perf penalty -_-
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
exports.add = add;
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig: exports.toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
exports.default = u64;

},{}],"hVSVx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HARDENED_OFFSET", ()=>HARDENED_OFFSET);
parcelHelpers.export(exports, "HDKey", ()=>HDKey);
var _hmac = require("@noble/hashes/hmac");
var _ripemd160 = require("@noble/hashes/ripemd160");
var _sha256 = require("@noble/hashes/sha256");
var _sha512 = require("@noble/hashes/sha512");
var _assert = require("@noble/hashes/_assert");
var _utils = require("@noble/hashes/utils");
var _secp256K1 = require("@noble/secp256k1");
var _base = require("@scure/base");
_secp256K1.utils.hmacSha256Sync = (key, ...msgs)=>(0, _hmac.hmac)((0, _sha256.sha256), key, _secp256K1.utils.concatBytes(...msgs));
const base58check = (0, _base.base58check)((0, _sha256.sha256));
function bytesToNumber(bytes) {
    return BigInt(`0x${(0, _utils.bytesToHex)(bytes)}`);
}
function numberToBytes(num) {
    return (0, _utils.hexToBytes)(num.toString(16).padStart(64, "0"));
}
const MASTER_SECRET = (0, _utils.utf8ToBytes)("Bitcoin seed");
const BITCOIN_VERSIONS = {
    private: 0x0488ade4,
    public: 0x0488b21e
};
const HARDENED_OFFSET = 0x80000000;
const hash160 = (data)=>(0, _ripemd160.ripemd160)((0, _sha256.sha256)(data));
const fromU32 = (data)=>(0, _utils.createView)(data).getUint32(0, false);
const toU32 = (n)=>{
    if (!Number.isSafeInteger(n) || n < 0 || n > 2 ** 32 - 1) throw new Error(`Invalid number=${n}. Should be from 0 to 2 ** 32 - 1`);
    const buf = new Uint8Array(4);
    (0, _utils.createView)(buf).setUint32(0, n, false);
    return buf;
};
class HDKey {
    constructor(opt){
        this.depth = 0;
        this.index = 0;
        this.chainCode = null;
        this.parentFingerprint = 0;
        if (!opt || typeof opt !== "object") throw new Error("HDKey.constructor must not be called directly");
        this.versions = opt.versions || BITCOIN_VERSIONS;
        this.depth = opt.depth || 0;
        this.chainCode = opt.chainCode;
        this.index = opt.index || 0;
        this.parentFingerprint = opt.parentFingerprint || 0;
        if (!this.depth) {
            if (this.parentFingerprint || this.index) throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");
        }
        if (opt.publicKey && opt.privateKey) throw new Error("HDKey: publicKey and privateKey at same time.");
        if (opt.privateKey) {
            if (!_secp256K1.utils.isValidPrivateKey(opt.privateKey)) throw new Error("Invalid private key");
            this.privKey = typeof opt.privateKey === "bigint" ? opt.privateKey : bytesToNumber(opt.privateKey);
            this.privKeyBytes = numberToBytes(this.privKey);
            this.pubKey = _secp256K1.getPublicKey(opt.privateKey, true);
        } else if (opt.publicKey) this.pubKey = _secp256K1.Point.fromHex(opt.publicKey).toRawBytes(true);
        else throw new Error("HDKey: no public or private key provided");
        this.pubHash = hash160(this.pubKey);
    }
    get fingerprint() {
        if (!this.pubHash) throw new Error("No publicKey set!");
        return fromU32(this.pubHash);
    }
    get identifier() {
        return this.pubHash;
    }
    get pubKeyHash() {
        return this.pubHash;
    }
    get privateKey() {
        return this.privKeyBytes || null;
    }
    get publicKey() {
        return this.pubKey || null;
    }
    get privateExtendedKey() {
        const priv = this.privateKey;
        if (!priv) throw new Error("No private key");
        return base58check.encode(this.serialize(this.versions.private, (0, _utils.concatBytes)(new Uint8Array([
            0
        ]), priv)));
    }
    get publicExtendedKey() {
        if (!this.pubKey) throw new Error("No public key");
        return base58check.encode(this.serialize(this.versions.public, this.pubKey));
    }
    static fromMasterSeed(seed, versions = BITCOIN_VERSIONS) {
        (0, _assert.bytes)(seed);
        if (8 * seed.length < 128 || 8 * seed.length > 512) throw new Error(`HDKey: wrong seed length=${seed.length}. Should be between 128 and 512 bits; 256 bits is advised)`);
        const I = (0, _hmac.hmac)((0, _sha512.sha512), MASTER_SECRET, seed);
        return new HDKey({
            versions,
            chainCode: I.slice(32),
            privateKey: I.slice(0, 32)
        });
    }
    static fromExtendedKey(base58key, versions = BITCOIN_VERSIONS) {
        const keyBuffer = base58check.decode(base58key);
        const keyView = (0, _utils.createView)(keyBuffer);
        const version = keyView.getUint32(0, false);
        const opt = {
            versions,
            depth: keyBuffer[4],
            parentFingerprint: keyView.getUint32(5, false),
            index: keyView.getUint32(9, false),
            chainCode: keyBuffer.slice(13, 45)
        };
        const key = keyBuffer.slice(45);
        const isPriv = key[0] === 0;
        if (version !== versions[isPriv ? "private" : "public"]) throw new Error("Version mismatch");
        if (isPriv) return new HDKey({
            ...opt,
            privateKey: key.slice(1)
        });
        else return new HDKey({
            ...opt,
            publicKey: key
        });
    }
    static fromJSON(json) {
        return HDKey.fromExtendedKey(json.xpriv);
    }
    derive(path) {
        if (!/^[mM]'?/.test(path)) throw new Error('Path must start with "m" or "M"');
        if (/^[mM]'?$/.test(path)) return this;
        const parts = path.replace(/^[mM]'?\//, "").split("/");
        let child = this;
        for (const c of parts){
            const m = /^(\d+)('?)$/.exec(c);
            if (!m || m.length !== 3) throw new Error(`Invalid child index: ${c}`);
            let idx = +m[1];
            if (!Number.isSafeInteger(idx) || idx >= HARDENED_OFFSET) throw new Error("Invalid index");
            if (m[2] === "'") idx += HARDENED_OFFSET;
            child = child.deriveChild(idx);
        }
        return child;
    }
    deriveChild(index) {
        if (!this.pubKey || !this.chainCode) throw new Error("No publicKey or chainCode set");
        let data = toU32(index);
        if (index >= HARDENED_OFFSET) {
            const priv = this.privateKey;
            if (!priv) throw new Error("Could not derive hardened child key");
            data = (0, _utils.concatBytes)(new Uint8Array([
                0
            ]), priv, data);
        } else data = (0, _utils.concatBytes)(this.pubKey, data);
        const I = (0, _hmac.hmac)((0, _sha512.sha512), this.chainCode, data);
        const childTweak = bytesToNumber(I.slice(0, 32));
        const chainCode = I.slice(32);
        if (!_secp256K1.utils.isValidPrivateKey(childTweak)) throw new Error("Tweak bigger than curve order");
        const opt = {
            versions: this.versions,
            chainCode,
            depth: this.depth + 1,
            parentFingerprint: this.fingerprint,
            index
        };
        try {
            if (this.privateKey) {
                const added = _secp256K1.utils.mod(this.privKey + childTweak, _secp256K1.CURVE.n);
                if (!_secp256K1.utils.isValidPrivateKey(added)) throw new Error("The tweak was out of range or the resulted private key is invalid");
                opt.privateKey = added;
            } else {
                const added = _secp256K1.Point.fromHex(this.pubKey).add(_secp256K1.Point.fromPrivateKey(childTweak));
                if (added.equals(_secp256K1.Point.ZERO)) throw new Error("The tweak was equal to negative P, which made the result key invalid");
                opt.publicKey = added.toRawBytes(true);
            }
            return new HDKey(opt);
        } catch (err) {
            return this.deriveChild(index + 1);
        }
    }
    sign(hash) {
        if (!this.privateKey) throw new Error("No privateKey set!");
        (0, _assert.bytes)(hash, 32);
        return _secp256K1.signSync(hash, this.privKey, {
            canonical: true,
            der: false
        });
    }
    verify(hash, signature) {
        (0, _assert.bytes)(hash, 32);
        (0, _assert.bytes)(signature, 64);
        if (!this.publicKey) throw new Error("No publicKey set!");
        let sig;
        try {
            sig = _secp256K1.Signature.fromCompact(signature);
        } catch (error) {
            return false;
        }
        return _secp256K1.verify(sig, hash, this.publicKey);
    }
    wipePrivateData() {
        this.privKey = undefined;
        if (this.privKeyBytes) {
            this.privKeyBytes.fill(0);
            this.privKeyBytes = undefined;
        }
        return this;
    }
    toJSON() {
        return {
            xpriv: this.privateExtendedKey,
            xpub: this.publicExtendedKey
        };
    }
    serialize(version, key) {
        if (!this.chainCode) throw new Error("No chainCode set");
        (0, _assert.bytes)(key, 33);
        return (0, _utils.concatBytes)(toU32(version), new Uint8Array([
            this.depth
        ]), toU32(this.parentFingerprint), toU32(this.index), this.chainCode, key);
    }
}

},{"@noble/hashes/hmac":"3IfCc","@noble/hashes/ripemd160":"hb7Go","@noble/hashes/sha256":"JjjO8","@noble/hashes/sha512":"jlH7E","@noble/hashes/_assert":"BFdql","@noble/hashes/utils":"2ehgp","@noble/secp256k1":"eyYsH","@scure/base":"cvmUK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hb7Go":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = exports.RIPEMD160 = void 0;
const _sha2_js_1 = require("d99e281eff7597a3");
const utils_js_1 = require("e41061ad375906d5");
// https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
const Rho = new Uint8Array([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
]);
const Id = Uint8Array.from({
    length: 16
}, (_, i)=>i);
const Pi = Id.map((i)=>(9 * i + 5) % 16);
let idxL = [
    Id
];
let idxR = [
    Pi
];
for(let i = 0; i < 4; i++)for (let j of [
    idxL,
    idxR
])j.push(j[i].map((k)=>Rho[k]));
const shifts = [
    [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
    ],
    [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
    ],
    [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
    ],
    [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
    ],
    [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
    ]
].map((i)=>new Uint8Array(i));
const shiftsL = idxL.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const shiftsR = idxR.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const Kl = new Uint32Array([
    0x00000000,
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc,
    0xa953fd4e
]);
const Kr = new Uint32Array([
    0x50a28be6,
    0x5c4dd124,
    0x6d703ef3,
    0x7a6d76e9,
    0x00000000
]);
// The rotate left (circular left shift) operation for uint32
const rotl = (word, shift)=>word << shift | word >>> 32 - shift;
// It's called f() in spec.
function f(group, x, y, z) {
    if (group === 0) return x ^ y ^ z;
    else if (group === 1) return x & y | ~x & z;
    else if (group === 2) return (x | ~y) ^ z;
    else if (group === 3) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const BUF = new Uint32Array(16);
class RIPEMD160 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 20, 8, true);
        this.h0 = 1732584193;
        this.h1 = -271733879;
        this.h2 = -1732584194;
        this.h3 = 271733878;
        this.h4 = -1009589776;
    }
    get() {
        const { h0 , h1 , h2 , h3 , h4  } = this;
        return [
            h0,
            h1,
            h2,
            h3,
            h4
        ];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)BUF[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for(let group = 0; group < 5; group++){
            const rGroup = 4 - group;
            const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
            for(let i = 0; i < 16; i++){
                const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
                al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for(let i = 0; i < 16; i++){
                const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
                ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
        BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
    }
}
exports.RIPEMD160 = RIPEMD160;
/**
 * RIPEMD-160 - a hash function from 1990s.
 * @param message - msg that would be hashed
 */ exports.ripemd160 = (0, utils_js_1.wrapConstructor)(()=>new RIPEMD160());

},{"d99e281eff7597a3":"6HKeB","e41061ad375906d5":"2ehgp"}],"b3lnM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hmac = void 0;
const utils_js_1 = require("a76fc007b27925f3");
// HMAC (RFC 2104)
class HMAC extends utils_js_1.Hash {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        (0, utils_js_1.assertHash)(hash);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash.create();
        if (!(this.iHash instanceof utils_js_1.Hash)) throw new TypeError("Expected instance of class which extends utils.Hash");
        const blockLen = this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > this.iHash.blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 106;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        if (this.destroyed) throw new Error("instance is destroyed");
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        if (this.destroyed) throw new Error("instance is destroyed");
        if (!(out instanceof Uint8Array) || out.length !== this.outputLen) throw new Error("HMAC: Invalid output buffer");
        if (this.finished) throw new Error("digest() was already called");
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash , iHash , finished , destroyed , blockLen , outputLen  } = this;
        to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
exports.hmac = hmac;
exports.hmac.create = (hash, key)=>new HMAC(hash, key);
exports.hmac.init = exports.hmac.create;

},{"a76fc007b27925f3":"4eGYF"}],"45DZp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PRIVATE_KEY_STORAGE_KEY", ()=>PRIVATE_KEY_STORAGE_KEY);
parcelHelpers.export(exports, "RELAYS_STORAGE_KEY", ()=>RELAYS_STORAGE_KEY);
parcelHelpers.export(exports, "PLUS_CODE_TAG_KEY", ()=>PLUS_CODE_TAG_KEY);
parcelHelpers.export(exports, "MAP_NOTE_KIND", ()=>MAP_NOTE_KIND);
parcelHelpers.export(exports, "DEFAULT_RELAYS", ()=>DEFAULT_RELAYS);
const PRIVATE_KEY_STORAGE_KEY = "__nostrPrivateKey";
const RELAYS_STORAGE_KEY = "__nostrRelays";
const PLUS_CODE_TAG_KEY = "l";
const MAP_NOTE_KIND = 397;
const DEFAULT_RELAYS = [
    "wss://nostr.massmux.com",
    "wss://public.nostr.swissrouting.com",
    "wss://nostr.slothy.win"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYUmf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPrivateKey", ()=>getPrivateKey);
parcelHelpers.export(exports, "getNsecPrivateKey", ()=>getNsecPrivateKey);
parcelHelpers.export(exports, "hasPrivateKey", ()=>hasPrivateKey);
parcelHelpers.export(exports, "getPublicKey", ()=>getPublicKey);
parcelHelpers.export(exports, "getNpubPublicKey", ()=>getNpubPublicKey);
parcelHelpers.export(exports, "setPrivateKey", ()=>setPrivateKey);
parcelHelpers.export(exports, "createPrivateKey", ()=>createPrivateKey);
var _nostrTools = require("nostr-tools");
var _constants = require("../constants");
const getPrivateKey = async ({ localStorage =globalThis.localStorage  } = {})=>{
    const privateKeyMaybe = localStorage.getItem((0, _constants.PRIVATE_KEY_STORAGE_KEY));
    if (privateKeyMaybe === null || privateKeyMaybe.length !== 64) throw new Error("#lvYBhM Cannot find private key");
    return privateKeyMaybe;
};
const getNsecPrivateKey = async ({ localStorage =globalThis.localStorage  } = {})=>{
    const privateKey = await getPrivateKey();
    const nsecPrivateKey = (0, _nostrTools.nip19).nsecEncode(privateKey);
    return nsecPrivateKey;
};
const hasPrivateKey = async ({ localStorage =globalThis.localStorage  } = {})=>{
    try {
        await getPrivateKey();
        return true;
    } catch  {}
    return false;
};
const getPublicKey = async ({ localStorage =globalThis.localStorage  } = {})=>{
    const privateKey = await getPrivateKey({
        localStorage
    });
    const publicKey = (0, _nostrTools.getPublicKey)(privateKey);
    return publicKey;
};
const getNpubPublicKey = async ({ localStorage =globalThis.localStorage  } = {})=>{
    const publicKey = await getPublicKey();
    const npubPublicKey = (0, _nostrTools.nip19).npubEncode(publicKey);
    return npubPublicKey;
};
const setPrivateKey = async ({ privateKey , localStorage =globalThis.localStorage  })=>{
    if (privateKey.length !== 64) throw new Error("#irpzXh Private key is not 64 characters");
    localStorage.setItem((0, _constants.PRIVATE_KEY_STORAGE_KEY), privateKey);
};
const createPrivateKey = async ()=>{
    const privateKey = (0, _nostrTools.generatePrivateKey)();
    await setPrivateKey({
        privateKey
    });
    return privateKey;
};

},{"nostr-tools":"9f1gR","../constants":"45DZp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlkir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNote", ()=>createNote);
var _constants = require("../constants");
var _keys = require("./keys");
var _relays = require("./relays");
var _utils = require("./utils");
const createNote = async ({ content , plusCode , privateKey  })=>{
    const key = typeof privateKey === "undefined" ? await (0, _keys.getPrivateKey)() : privateKey;
    const unsignedEvent = {
        kind: (0, _constants.MAP_NOTE_KIND),
        content,
        tags: [
            [
                (0, _constants.PLUS_CODE_TAG_KEY),
                plusCode
            ]
        ]
    };
    const signedEvent = (0, _utils.signEventWithPrivateKey)({
        unsignedEvent,
        privateKey: key
    });
    (0, _relays._publish)(signedEvent);
// TODO - How do we wait for the SEEN here?
};
globalThis.createNote = createNote;

},{"../constants":"45DZp","./keys":"bYUmf","./relays":"le10m","./utils":"fcvaj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fcvaj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dateToUnix", ()=>dateToUnix);
parcelHelpers.export(exports, "getPublicKeyFromEvent", ()=>getPublicKeyFromEvent);
parcelHelpers.export(exports, "getProfileFromEvent", ()=>getProfileFromEvent);
parcelHelpers.export(exports, "filterForTag", ()=>filterForTag);
parcelHelpers.export(exports, "getTagFirstValueFromEvent", ()=>getTagFirstValueFromEvent);
parcelHelpers.export(exports, "getTagValuesFromEvent", ()=>getTagValuesFromEvent);
parcelHelpers.export(exports, "signEventWithPrivateKey", ()=>signEventWithPrivateKey);
parcelHelpers.export(exports, "uniq", ()=>uniq);
var _nostrTools = require("nostr-tools");
const dateToUnix = (_date)=>{
    const date = _date || new Date();
    return Math.floor(date.getTime() / 1000);
};
const getPublicKeyFromEvent = ({ event  })=>{
    const maybeDelegator = (0, _nostrTools.nip26).getDelegator(event);
    return maybeDelegator || event.pubkey;
};
const getProfileFromEvent = ({ event  })=>{
    if (event.kind !== (0, _nostrTools.Kind).Metadata) throw new Error("#pC5T6P Trying to get profile from non metadata event");
    const profileJson = event.content;
    const publicKey = getPublicKeyFromEvent({
        event
    });
    const npubPublicKey = (0, _nostrTools.nip19).npubEncode(publicKey);
    try {
        const profile = JSON.parse(profileJson);
        return {
            ...profile,
            publicKey,
            npubPublicKey
        };
    } catch (e) {
        const message = "#j2o1vH Failed to get profile from event";
        console.error(message, e);
        throw new Error(message);
    }
};
const filterForTag = (key)=>(tags)=>tags[0] === key;
const getTagFirstValueFromEvent = ({ event , tag  })=>{
    const tagArray = event.tags.find(filterForTag(tag));
    if (typeof tagArray === "undefined") return;
    // The value is the second element in the array
    return tagArray[1];
};
const getTagValuesFromEvent = ({ event , tag  })=>{
    const tagArrays = event.tags.filter(filterForTag(tag));
    const tagValues = tagArrays.map((tag)=>tag[1]);
    return tagValues;
};
const signEventWithPrivateKey = ({ unsignedEvent , privateKey  })=>{
    const pubkey = (0, _nostrTools.getPublicKey)(privateKey);
    const base = {
        ...unsignedEvent,
        created_at: dateToUnix(),
        pubkey
    };
    const id = (0, _nostrTools.getEventHash)(base);
    const toSign = {
        ...base,
        id
    };
    const sig = (0, _nostrTools.signEvent)(toSign, privateKey);
    const signed = {
        ...toSign,
        sig
    };
    return signed;
};
const uniq = (input)=>{
    return input.filter((val, index, input)=>index === input.indexOf(val));
};

},{"nostr-tools":"9f1gR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Bolr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setProfile", ()=>setProfile);
parcelHelpers.export(exports, "subscribeAndGetProfile", ()=>subscribeAndGetProfile);
var _nostrTools = require("nostr-tools");
var _keys = require("./keys");
var _relays = require("./relays");
var _utils = require("./utils");
const setProfile = async ({ name , about , privateKey , localStorage  })=>{
    const key = typeof privateKey !== "undefined" ? privateKey : await (0, _keys.getPrivateKey)({
        localStorage
    });
    const content = JSON.stringify({
        name,
        about
    });
    const unsignedEvent = {
        kind: (0, _nostrTools.Kind).Metadata,
        content,
        tags: []
    };
    const signedEvent = (0, _utils.signEventWithPrivateKey)({
        unsignedEvent,
        privateKey: key
    });
    try {
        const publishPromises = (0, _relays._publish)(signedEvent);
        await Promise.all(publishPromises);
    } catch (error) {
        const message = "#mkox3R Error saving profile";
        console.error(message, error);
        throw error;
    }
};
const subscribeAndGetProfile = async ({ publicKey  })=>{
    return new Promise((resolve, reject)=>{
        const subscriptions = (0, _relays._subscribe)({
            filters: [
                {
                    kinds: [
                        (0, _nostrTools.Kind).Metadata
                    ],
                    authors: [
                        publicKey
                    ]
                }
            ],
            onEvent: (event)=>{
                try {
                    const profile = (0, _utils.getProfileFromEvent)({
                        event
                    });
                    // NOTE: This will be called multiple times, but any calls after the
                    // first are ignored
                    resolve(profile);
                } catch (error) {
                    console.error("#P0haKt Failed to get profile from event", error);
                }
            }
        });
        // Timeout after 2s. This is a no-op if the promise already resolved above.
        setTimeout(()=>{
            const npubPublicKey = (0, _nostrTools.nip19).npubEncode(publicKey);
            resolve({
                publicKey,
                npubPublicKey,
                name: "",
                about: "",
                picture: ""
            });
        }, 2e3);
    });
};

},{"nostr-tools":"9f1gR","./keys":"bYUmf","./relays":"le10m","./utils":"fcvaj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b20xP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribe", ()=>subscribe);
var _nostrTools = require("nostr-tools");
var _constants = require("../constants");
var _relays = require("./relays");
var _utils = require("./utils");
const eventToNoteMinusProfile = ({ event  })=>{
    // NOTE: We need to cast `note.kind` here because the `NostrEvent` type has a
    // enum for Kinds, which doesn't include our custom kind.
    if (event.kind !== (0, _constants.MAP_NOTE_KIND)) throw new Error("#w27ijD Cannot convert event of wrong kind to note");
    const plusCode = (0, _utils.getTagFirstValueFromEvent)({
        event,
        tag: (0, _constants.PLUS_CODE_TAG_KEY)
    });
    if (typeof plusCode === "undefined") throw new Error("#C7a4Ck Cannot convert invalid event to note");
    const publicKey = (0, _utils.getPublicKeyFromEvent)({
        event
    });
    const authorNpubPublicKey = (0, _nostrTools.nip19).npubEncode(publicKey);
    const { content  } = event;
    return {
        authorPublicKey: publicKey,
        authorNpubPublicKey,
        content,
        plusCode
    };
};
const eventToNote = ({ event , profiles  })=>{
    const baseNote = eventToNoteMinusProfile({
        event
    });
    const profile = profiles[baseNote.authorPublicKey];
    const authorName = profile?.name || "";
    return {
        ...baseNote,
        authorName
    };
};
const subscribe = async ({ publicKey , onNoteReceived , limit =200  })=>{
    console.log("#qnvvsm nostr/subscribe", publicKey);
    let gotNotesEose = false;
    let gotPromiseEose = false;
    const profiles = {};
    const getEventsForSpecificAuthor = typeof publicKey !== "undefined";
    const eventsBaseFilter = {
        kinds: [
            (0, _constants.MAP_NOTE_KIND)
        ]
    };
    const eventsFilter = getEventsForSpecificAuthor ? {
        ...eventsBaseFilter,
        authors: [
            publicKey
        ]
    } : eventsBaseFilter;
    const eventsFilterWithLimit = {
        ...eventsFilter,
        limit
    };
    const noteEventsQueue = [];
    const onNoteEvent = (event)=>{
        if (!gotNotesEose || !gotPromiseEose) {
            noteEventsQueue.push(event);
            return;
        }
        const note = eventToNote({
            event,
            profiles
        });
        onNoteReceived(note);
    };
    const noteSubscriptions = (0, _relays._subscribe)({
        filters: [
            eventsFilterWithLimit
        ],
        onEvent: onNoteEvent
    });
    await Promise.race(await noteSubscriptions);
    gotNotesEose = true;
    const authorsWithDuplicates = noteEventsQueue.map((event)=>(0, _utils.getPublicKeyFromEvent)({
            event
        }));
    const authors = (0, _utils.uniq)(authorsWithDuplicates);
    const profileFilter = {
        kinds: [
            (0, _nostrTools.Kind).Metadata
        ],
        authors
    };
    const profileEvents = [];
    const onProfileEvent = (event)=>{
        const profile = (0, _utils.getProfileFromEvent)({
            event
        });
        const publicKey = (0, _utils.getPublicKeyFromEvent)({
            event
        });
        profiles[publicKey] = profile;
    };
    const profileSubscriptions = (0, _relays._subscribe)({
        filters: [
            profileFilter
        ],
        onEvent: onProfileEvent
    });
    await Promise.race(await profileSubscriptions);
    gotPromiseEose = true;
    // NOTE: At this point we should have fetched all the stored events, and all
    // the profiles of the authors of all of those events
    const notes = noteEventsQueue.map((event)=>eventToNote({
            event,
            profiles
        }));
    notes.forEach((note)=>onNoteReceived(note));
};

},{"nostr-tools":"9f1gR","../constants":"45DZp","./relays":"le10m","./utils":"fcvaj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1oCNm","hEBz2"], "hEBz2", "parcelRequire31ee")

//# sourceMappingURL=index.5d1a7ea0.js.map
