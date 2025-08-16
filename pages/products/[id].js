import Comments from "@/components/templates/Product/Comments";
import ProductsDetails from "@/components/templates/Product/ProductDetails";
import PageHeader from "@/components/modules/PageHeader/PageHeader";

const Product = ({ product, comments }) => {
  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Page Header */}
      <PageHeader route="Dish Details" bg="/images/darkTop.png" />

      {/* Product Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <ProductsDetails data={product} />
      </section>

      {/* Comments Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-300">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Customer Reviews
          </h2>
          {comments.length === 0 ? (
            <p className="text-gray-600">
              No reviews yet. Be the first to comment!
            </p>
          ) : (
            <Comments data={comments} />
          )}
        </div>
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
