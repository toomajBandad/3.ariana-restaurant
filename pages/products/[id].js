import Comments from "@/components/templates/Product/Comments";
import ProductsDetails from "@/components/templates/Product/ProductDetails";

const Product = ({ product, comments }) => {
  return (
    <main className="bg-white text-gray-800">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductsDetails data={product} />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <Comments data={comments} />
      </section>
    </main>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const productResponse = await fetch(
    `http://localhost:4000/menu/${params.id}`
  );
  const productData = await productResponse.json();

  const commentsResponse = await fetch(`http://localhost:4000/comments`);
  const comments = await commentsResponse.json();

  const productComments = comments.filter(
    (comment) => comment.productID === +params.id
  );

  return {
    props: {
      product: productData,
      comments: productComments,
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Product;