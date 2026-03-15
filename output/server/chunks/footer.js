import { a1 as ensure_array_like, a2 as attr_class, a3 as clsx, a4 as attr, e as escape_html, a5 as await_block } from "./index2.js";
import "clsx";
function Navbar($$renderer, $$props) {
  let { selected, options = [] } = $$props;
  $$renderer.push(`<ul class="svelte-1qrzhyq"><!--[-->`);
  const each_array = ensure_array_like(options);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$renderer.push(`<li${attr_class(clsx(selected === option ? "selected" : ""), "svelte-1qrzhyq")}><a${attr("href", option)} class="svelte-1qrzhyq">${escape_html(option)}</a></li>`);
  }
  $$renderer.push(`<!--]--></ul>`);
}
function Header($$renderer, $$props) {
  let { page, tagline = "Welcome to My Website" } = $$props;
  $$renderer.push(`<div class="svelte-1apv8g3"><h1>SmoothTurtle872.github.io/${escape_html(page)}</h1> <strong>${escape_html(tagline)}</strong> `);
  Navbar($$renderer, { options: ["home", "about", "projects"], selected: page });
  $$renderer.push(`<!----></div>`);
}
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
function External_site($$renderer, $$props) {
  let { site, name } = $$props;
  await_block($$renderer, __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../assets/github.svg": () => import("./github.js"), "../assets/itchio.svg": () => import("./itchio.js") }), `../assets/${name}.svg`, 3), () => {
  }, ({ default: src }) => {
    $$renderer.push(`<a${attr("href", site)}${attr("title", name)} class="svelte-1nl47y3"><img${attr("src", src)}${attr("alt", name)} class="svelte-1nl47y3"/></a>`);
  });
  $$renderer.push(`<!--]-->`);
}
function Footer($$renderer) {
  $$renderer.push(`<ul class="svelte-1wlmi2p"><li class="svelte-1wlmi2p">`);
  External_site($$renderer, { name: "github", site: "https://github.com/SmoothTurtle872" });
  $$renderer.push(`<!----></li> <li class="svelte-1wlmi2p">`);
  External_site($$renderer, { name: "itchio", site: "https://smoothturtle872.itch.io/" });
  $$renderer.push(`<!----></li> <li class="svelte-1wlmi2p"><p class="mini svelte-1wlmi2p">This website is a personal project to show off all of my projects in
            one easy to access location</p></li></ul>`);
}
export {
  Footer as F,
  Header as H
};
