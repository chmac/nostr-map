var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=e.parcelRequire31ee;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var a=l[e];delete l[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},e.parcelRequire31ee=a);var i=a("8JYDX"),o=a("F1Hgz"),n=a("lsWS8"),s=a("8JDfT"),r=a("a5GLL");(async()=>{const e=await(0,n.hasPrivateKey)(),t=i.DomUtil.get("loggedIn"),l=i.DomUtil.get("loggedOut");if(e){i.DomUtil.addClass(t,"show"),i.DomUtil.addClass(l,"hide");const e=await(0,n.getPublicKey)(),a=await(0,n.getNpubPublicKey)();globalThis.document.getElementById("publicKey").innerText=a;const d=(0,r.getUrlFromNpubPublicKey)({npubPublicKey:a}),u=globalThis.document.getElementById("yourUrl");u.href=d,u.innerText=d;const c=document.getElementById("profile_name"),b=document.getElementById("profile_about"),g=await(0,s.getProfile)({publicKey:e});c.value=g.name,b.value=g.about;const m=document.getElementById("profile_submit");m.onclick=async e=>{e.preventDefault(),m.setAttribute("disabled","disabled");const t=c.value,l=b.value;try{await(0,s.setProfile)({name:t,about:l}),globalThis.alert("Your profile was updated."),globalThis.document.location.reload()}catch{globalThis.alert("There was an error. Please try again."),m.removeAttribute("disabled")}};const y=document.getElementById("relays");(0,o.getRelays)().then((e=>{const t=JSON.stringify(e);y.value=t}));const f=document.getElementById("relays_submit");f.onclick=async e=>{e.preventDefault(),f.setAttribute("disabled","disabled");const t=y.value;try{const e=JSON.parse(t);if(!Array.isArray(e)||0===e.length)return f.removeAttribute("disabled"),void globalThis.alert("Invalid relays submitted. Please try again.");await(0,o.setRelays)({relays:e}),globalThis.alert("Relays saved."),globalThis.document.location.reload()}catch(e){f.removeAttribute("disabled"),globalThis.alert(`#vRuf1N Error saving relays\n${e.toString()}`)}}}else{i.DomUtil.addClass(t,"hide"),i.DomUtil.addClass(l,"show");const e=document.getElementById("signup_submit");e.onclick=async t=>{t.preventDefault(),e.setAttribute("disabled","disabled");const l=document.getElementById("signup_name").value,i=document.getElementById("signup_about").value;try{await(0,o.createNostrAccount)(),(0,s.setProfile)({name:l,about:i}).then((()=>{globalThis.alert("Your account was created."),globalThis.document.location.reload()}))}catch{a.removeAttribute("disabled")}};const a=document.getElementById("signin_submit");a.onclick=async t=>{t.preventDefault(),e.setAttribute("disabled","disabled");const l=document.getElementById("signin_privateKey").value;try{(0,n.setPrivateKey)({privateKey:l}),globalThis.alert("You were signed in successfully."),globalThis.document.location.reload()}catch{a.removeAttribute("disabled")}}}})();
//# sourceMappingURL=index.cafef528.js.map