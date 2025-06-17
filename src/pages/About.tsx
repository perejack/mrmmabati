
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-sm text-red-600 uppercase font-semibold mb-2">MRM MABATI ROLLING MILLS</div>
                <h2 className="text-3xl md:text-4xl font-bold text-maisha-darknavy mb-6">
                  OUR ROOFING SHEETS ARE DISTINCTLY DIFFERENT
                </h2>
                <p className="text-gray-700 mb-8">
                  It is the vision and commitment of Mr Narendra Raval EBS (Guru) to supply 
                  building and construction materials at affordable costs to the local Kenyan 
                  population. MRM Mabati Rolling Mills began with the product of galvanised and 
                  coloured steel roofing sheets. The products are largely focused on being 
                  durable, functional, strong and cost-effective to enable Kenyans around the 
                  country to build better standard homes.
                </p>
              </div>
              <div>
                <img 
                  src="https://sc04.alicdn.com/kf/Hf995c1b4a4c54c17a7c7ef47693c32b8a.png_350x350.png" 
                  alt="MRM Mabati roofing" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default About;
