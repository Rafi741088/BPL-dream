import bannerImage from '../../../assets/banner-main.png';

function Banner() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-16 flex items-center justify-center">
      <div className="mx-auto w-full max-w-5xl text-center">
        <img
          src={bannerImage}
          alt="Banner"
          className="mx-auto mt-10 overflow-hidden rounded-t-full rounded-b-2xl border-4 border-[#D4AF37] shadow-2xl"
        />

        <h2 className="mt-8 text-2xl font-bold text-[#0B6E4F] md:text-3xl">
          Discover Our Exclusive Collection
        </h2>

        <p className="mt-3 leading-8 text-gray-600">
          Premium Prayer Hijab & Naushin Hijab.
          <br />
          Experience elegance with comfort.
        </p>

        <a
          href="#collection"
          className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#0B6E4F] px-9 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37]"
        >
          Explore Collection
          <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default Banner;
