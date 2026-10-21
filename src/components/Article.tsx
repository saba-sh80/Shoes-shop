import Gallery from "./Gallery";
import Introduction from "./Introduction";

function Article() {
  return (
    <section className="h-138 grid grid-cols-2 grid-rows-1 items-center justify-items-center pt-16">
      <Gallery />
      <Introduction/>
    </section>
  );
}

export default Article;
