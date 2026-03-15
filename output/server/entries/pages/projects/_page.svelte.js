import "clsx";
import { H as Header, F as Footer } from "../../../chunks/footer.js";
function _page($$renderer) {
  Header($$renderer, { page: "projects", tagline: "My Projects" });
  $$renderer.push(`<!----> <div class="svelte-rqn88j"><h1>THIS PAGE IS STILL UNDER CONSTRUCTION</h1> <p>Sorry for the inconvinience, but check the footer for links to my github
        and itch.io page</p></div> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
