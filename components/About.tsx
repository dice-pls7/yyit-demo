import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 lg:p-16 animate-fadeInUp">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image — vervang de src met je eigen afbeelding */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-700/30">
                <Image src="/amyyon.webp" alt="Het Amyyon team" fill className="object-cover" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Over ons
              </h2>

              <p className="text-slate-300 leading-relaxed text-lg">
                <span className="font-semibold text-white">Bij Amyyon</span> vind je enthousiaste en gedreven
                professionals met meer dan 20 jaar ervaring in het leveren van IT-oplossingen op maat.
              </p>

              <p className="text-slate-400 leading-relaxed">
                We zijn gespecialiseerd in CRM-systemen, IT-beheer en foodmanagement en bedienen klanten
                in zowel de profit- als de non-profitsector. Met persoonlijk contact, een hoog serviceniveau
                en een focus op topkwaliteit helpen we je organisatie groeien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
