/* eslint-disable react/prop-types */

function ProductDetailReviews({ product }) {
  const reviews = product.reviews;

  return (
    <section className="relative py-24">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <div className="w-full">
          <h2 className="font-manrope mb-2 text-center text-4xl font-bold text-black">
            Customer reviews
          </h2>

          {reviews.map((review, key) => (
            <section key={key}>
              <div className="border-b border-gray-100 pb-2 pt-4 max-xl:mx-auto max-xl:max-w-2xl">
                <div className="mb-4 flex flex-col justify-between gap-5 min-[400px]:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <h6 className="text-lg font-semibold leading-8 text-indigo-600">
                      {review.reviewerName}
                    </h6>
                  </div>
                  <p className="text-lg font-normal leading-8 text-gray-400">
                    {new Date(review.date).toLocaleDateString("en-US")}
                  </p>
                </div>
                <div className="mb-2">Rating: {review.rating}</div>

                <p className="text-lg font-normal leading-8 text-gray-400 max-xl:text-justify">
                  {review.comment}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductDetailReviews;
