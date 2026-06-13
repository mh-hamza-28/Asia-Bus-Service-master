export function GoogleReviews() {
  return (
    <section id="reviews" className="section bg-brand-light text-brand-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 sm:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Google Reviews</p>
          <h2 className="section-title text-center text-brand-deep">
            What Our Clients<br /> <span className="highlight-text">Say About Us</span>
          </h2>
        </div>
        {/* Constrained container for mobile to display ~2 reviews at once */}
        <div data-reveal className="mt-6 sm:mt-8">
          <div className="mobile-reviews-constrain">
            <div
              className="elfsight-app-4e2a01ca-5a7c-4384-afb5-c83ed2a9838f"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    </section>
  );
}
