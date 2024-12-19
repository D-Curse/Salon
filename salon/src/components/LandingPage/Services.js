import { services } from "../constant/Data";

const Services = () => {
  return (
    <section id="services" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <p className="font-custom2 text-lg">Indulge Yourself</p>
          <h1 className="font-custom1 font-semibold text-5xl mb-4">Your Palace of Beauty</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
            <div key={service.id} className="p-4 md:w-1/3 w-full">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-[#efefef] mb-4 flex-shrink-0">
                  <img src={service.src} alt={service.name} className="w-16 h-16" />
                </div>
                <div className="">
                  <h2 className="text-xl title-font font-custom2 font-bold mb-2">{service.name}</h2>
                  <p className="leading-relaxed text-base font-custom2 w-[70%] mx-auto">
                    {service.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
