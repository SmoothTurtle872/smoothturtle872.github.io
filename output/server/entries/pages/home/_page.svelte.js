import "clsx";
import { H as Header, F as Footer } from "../../../chunks/footer.js";
function Project($$renderer) {
  $$renderer.push(`<div class="outer svelte-1cy6r7l"><h3>UNDER DEVELOPMENT</h3> <p>Sorry for the inconveinience but I haven't got around to making this
        yet...</p></div>`);
}
function _page($$renderer) {
  Header($$renderer, { page: "home" });
  $$renderer.push(`<!----> <div class="svelte-1j6ictg"><h2>Welcome!</h2> <p>This website is the home of all of my projects and games!</p></div> <br/> <div class="svelte-1j6ictg"><h2>Random Project</h2> <ul class="projects svelte-1j6ictg"><li>`);
  Project($$renderer);
  $$renderer.push(`<!----></li> <li>`);
  Project($$renderer);
  $$renderer.push(`<!----></li></ul> <br/> <a href="/projects"><button class="link">View All Projects</button></a></div> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
