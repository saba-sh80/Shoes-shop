import Form from "./Form";
import Gallery from "./Gallery";

function Article() {
  return (
    <section className="h-138 grid grid-cols-2 grid-rows-1 items-center justify-items-center">
      <Gallery />
      <Form />
    </section>
  );
}

export default Article;
