var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequire31ee;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,l.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequire31ee=l);var i=l("8JYDX"),n=l("F1Hgz"),o=l("lsWS8"),s=l("8JDfT"),r=l("a5GLL");(async()=>{const e=await(0,o.hasPrivateKey)(),t=i.DomUtil.get("loggedIn"),a=i.DomUtil.get("loggedOut");if(e){i.DomUtil.addClass(t,"show"),i.DomUtil.addClass(a,"hide");const e=await(0,o.getPublicKey)(),l=await(0,o.getNpubPublicKey)(),n=await(0,o.getNsecPrivateKey)();globalThis.document.getElementById("npubPublicKey").innerText=l;globalThis.document.getElementById("nsecPrivateKey").innerText=n;const d=(0,r.getUrlFromNpubPublicKey)({npubPublicKey:l}),u=globalThis.document.getElementById("yourUrl");u.href=d,u.innerText=d;const c=document.getElementById("profile_name"),b=document.getElementById("profile_about"),g=await(0,s.subscribeAndGetProfile)({publicKey:e});c.value=g.name,b.value=g.about;const y=document.getElementById("profile_submit");y.onclick=async e=>{e.preventDefault(),y.setAttribute("disabled","disabled");const t=c.value,a=b.value;try{await(0,s.setProfile)({name:t,about:a}),globalThis.alert("Your profile was updated."),globalThis.document.location.reload()}catch{globalThis.alert("There was an error. Please try again."),y.removeAttribute("disabled")}}}else{i.DomUtil.addClass(t,"hide"),i.DomUtil.addClass(a,"show");const e=document.getElementById("signup_submit");e.onclick=async t=>{t.preventDefault(),e.setAttribute("disabled","disabled");const a=document.getElementById("signup_name").value,i=document.getElementById("signup_about").value;try{await(0,o.createPrivateKey)(),(0,s.setProfile)({name:a,about:i}).then((()=>{globalThis.alert("Your account was created."),globalThis.document.location.reload()}))}catch{l.removeAttribute("disabled")}};const l=document.getElementById("signin_submit");l.onclick=async t=>{t.preventDefault(),e.setAttribute("disabled","disabled");const a=document.getElementById("signin_privateKey").value;try{(0,o.setPrivateKey)({privateKey:a}),globalThis.alert("You were signed in successfully."),globalThis.document.location.reload()}catch{l.removeAttribute("disabled")}}}const l=document.getElementById("relays"),d=await(0,n.getRelays)(),u=JSON.stringify(d);l.value=u;const c=document.getElementById("relays_submit");c.onclick=async e=>{e.preventDefault(),c.setAttribute("disabled","disabled");const t=l.value;try{const e=JSON.parse(t);if(!Array.isArray(e)||0===e.length)return c.removeAttribute("disabled"),void globalThis.alert("Invalid relays submitted. Please try again.");await(0,n.setRelays)({relays:e}),globalThis.alert("Relays saved."),globalThis.document.location.reload()}catch(e){c.removeAttribute("disabled"),globalThis.alert(`#vRuf1N Error saving relays\n${e.toString()}`)}}})();
//# sourceMappingURL=index.531cca90.js.map
