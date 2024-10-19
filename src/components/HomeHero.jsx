function HomeHero() {
  return (
    <section className="bg-neutral-100 px-3 py-5 lg:py-10">
      <div className="grid items-center justify-items-center gap-5 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-center justify-center lg:order-1">
          <p className="text-4xl font-bold text-orange-600 md:text-7xl">
            25% OFF
          </p>
          <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
          <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
          <button className="mt-10 bg-black px-5 py-2 text-lg text-white hover:bg-zinc-800 md:text-2xl">
            Shop Now
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="h-80 w-80 object-cover lg:h-[500px] lg:w-[500px]"
            src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
