import { Star } from 'lucide-react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../../data/siteData';

export function Testimonials() {
  return (
    <section id="testimonials" className="section bg-[#04130f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">Trusted by families, companies, schools and tour planners.</h2>
        </div>
        <div data-reveal className="mt-9">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }} loop spaceBetween={18} breakpoints={{ 0: { slidesPerView: 1.05 }, 760: { slidesPerView: 2 }, 1120: { slidesPerView: 3 } }}>
            {testimonials.map((item, index) => (
              <SwiperSlide key={item.name}>
                <article className="min-h-80 rounded-[8px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-accent to-brand-accent-light text-xl font-black text-white">{item.name.charAt(0)}</div>
                    <div>
                      <h3 className="font-black">{item.name}</h3>
                      <p className="text-sm text-white/52">{item.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-1 text-brand-accent" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, starIndex) => <Star key={`${index}-${starIndex}`} size={18} fill="currentColor" />)}
                  </div>
                  <p className="mt-5 text-lg leading-8 text-white/74">"{item.quote}"</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
