
import React from 'react';
import bg from '../../../assets/bg-shadow.png';   
import bannerImage from '../../../assets/banner-main.png';

function Banner() {
  return (
    <section className="  relative flex h-[90vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})`, backgroundColor: '#131313' }}>
      <div className="mx-auto w-full max-w-5xl text-center">
        <img
          src={bannerImage}
          alt="Banner"
          className="mx-auto mt-10 overflow-hidden  "
        />

        <h2 className="mt-8 text-2xl font-bold text-[#f4f5f4] md:text-3xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>

        <p className="mt-3 leading-8 text-gray-600">
          Beyond Boundaries Beyond Limits
          
        </p>

        <a
          href="#collection"
          className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#E7FE29] px-9 py-4 font-semibold text-black shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#D8ef1e] border border-[#E7FE29] "
        >
          Claim Free Credit
          
        </a>
      </div>
    </section>
  );
}

export default Banner;
