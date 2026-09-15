import { useRef } from 'react';
import { ChevronDown, Briefcase, GraduationCap, Code2, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Overlay() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.panel');
    const totalZ = (panels.length - 1) * 2000;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    tl.to('.tunnel-scene', {
      z: totalZ,
      ease: "none",
      duration: 1
    }, 0);

    panels.forEach((panel, i) => {
      if (i === 0) {
        tl.to(panel, { opacity: 0, ease: "power2.inOut", duration: 1000 / totalZ }, 0);
      } else {
        const appearStart = (i * 2000 - 1500) / totalZ;
        const appearEnd = (i * 2000 - 500) / totalZ;
        const disappearStart = (i * 2000 - 200) / totalZ;
        const disappearEnd = (i * 2000 + 800) / totalZ;

        gsap.set(panel, { opacity: 0 });

        tl.to(panel, { opacity: 1, ease: "power2.inOut", duration: appearEnd - appearStart }, appearStart);
        
        if (i < panels.length - 1) {
          tl.to(panel, { opacity: 0, ease: "power2.inOut", duration: disappearEnd - disappearStart }, disappearStart);
        }
      }
    });
  }, { scope: containerRef });

  return (
    <div id="overlay-container" ref={containerRef} className="w-full text-slate-800 h-[500vh] font-sans">
      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none" style={{ perspective: '1200px' }}>
        <div className="tunnel-scene w-full h-full absolute top-0 left-0" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Panel 0: Hero Section */}
          <section className="panel absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start px-6 md:px-32 pointer-events-auto" style={{ transform: 'translateZ(0px)' }}>
            <div className="bg-white/70 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] max-w-3xl z-10 text-center md:text-left transition-transform hover:scale-[1.01] duration-500">
              <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight text-slate-900 tracking-tight">
                Angel Eliud <br/> Saenz Torres
              </h1>
              <div className="mb-6 flex justify-center md:justify-start">
                <span className="flex items-center gap-2 text-sm md:text-base font-bold bg-white/80 text-brand px-5 py-2.5 rounded-2xl border border-white shadow-sm">
                  <Terminal size={18} />
                  Ing. Tecnologías de la Información
                </span>
              </div>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Profesional proactivo y organizado, con una profunda pasión por la tecnología y la innovación digital. Me caracterizo por mi responsabilidad y constante actualización con las últimas tendencias del sector.
              </p>
            </div>
            <div className="absolute bottom-10 left-1/2 md:left-40 -translate-x-1/2 md:translate-x-0 animate-bounce bg-white/50 p-4 rounded-full backdrop-blur-md">
              <ChevronDown className="text-brand" size={28} />
            </div>
          </section>

          {/* Panel 1: Experiencia Principal */}
          <section className="panel absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-end px-6 md:px-32 pointer-events-auto" style={{ transform: 'translateZ(-2000px)' }}>
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] max-w-2xl z-10 w-full">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-200/50 pb-6">
                <div className="p-4 bg-brand/10 rounded-2xl text-brand"><Briefcase size={28} /></div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Experiencia</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-slate-800">Desarrollador</h3>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold">Dic 2025 - Actual</span>
                </div>
                <p className="text-brand font-semibold text-lg mb-4">Eagle Importación</p>
                
                <ul className="space-y-3 text-slate-600 font-medium">
                  <li className="flex items-start gap-3"><span className="text-brand mt-1">•</span>Sistemas para el área de finanzas y desarrollo de página publicitaria.</li>
                  <li className="flex items-start gap-3"><span className="text-brand mt-1">•</span>Actualizaciones del sistema interino (ERP).</li>
                  <li className="flex items-start gap-3"><span className="text-brand mt-1">•</span>Consultas, reportes, creación de Tablas y Stored Procedures en SQL Server.</li>
                  <li className="flex items-start gap-3"><span className="text-brand mt-1">•</span>Personal a cargo (Practicantes) para desarrollo e incidencias.</li>
                  <li className="flex items-start gap-3"><span className="text-brand mt-1">•</span>Mantenimiento a red, administración de usuarios y configuración de equipos.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Panel 2: Trayectoria */}
          <section className="panel absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start px-6 md:px-32 pointer-events-auto" style={{ transform: 'translateZ(-4000px)' }}>
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] max-w-2xl z-10 w-full">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-200/50 pb-6">
                <div className="p-4 bg-brand/10 rounded-2xl text-brand"><Briefcase size={28} /></div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Trayectoria</h2>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-brand shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-9px] md:ml-0"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:text-right md:group-odd:pr-6 md:group-even:pl-6">
                    <h3 className="font-bold text-lg text-slate-800">Desarrollador Web (Estadías)</h3>
                    <p className="text-brand text-sm font-semibold mb-1">ALIRU | Ago 2024 - Dic 2024</p>
                    <p className="text-slate-600 text-sm">Plataforma web con catálogo de productos para agilizar cotizaciones.</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-9px] md:ml-0"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:text-right md:group-odd:pr-6 md:group-even:pl-6">
                    <h3 className="font-bold text-lg text-slate-800">Auxiliar Sistemas - Logística</h3>
                    <p className="text-brand text-sm font-semibold mb-1">UPGP | Ago 2023 - Dic 2023</p>
                    <p className="text-slate-600 text-sm">Geolocalización cartográfica e inventario de escuelas en la región.</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-9px] md:ml-0"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:text-right md:group-odd:pr-6 md:group-even:pl-6">
                    <h3 className="font-bold text-lg text-slate-800">Aux. Mantenimiento</h3>
                    <p className="text-brand text-sm font-semibold mb-1">UPGP | Ago 2022 - Dic 2022</p>
                    <p className="text-slate-600 text-sm">Soporte, mantenimiento a equipos y atención al personal.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </section>

          {/* Panel 3: Educación y Habilidades */}
          <section className="panel absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-end px-6 md:px-32 pointer-events-auto" style={{ transform: 'translateZ(-6000px)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full z-10">
              
              <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand/10 rounded-2xl text-brand"><GraduationCap size={24} /></div>
                  <h2 className="text-2xl font-bold text-slate-900">Educación</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Maestría en Gestión de TI (Ciencia de Datos)</h3>
                    <p className="text-slate-500 text-sm">Tecmilenio</p>
                    <span className="inline-block mt-2 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-bold">2026 - Actual</span>
                  </div>
                  <div className="h-px bg-slate-200/60 w-full"></div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Ing. en Tecnologías de la Información</h3>
                    <p className="text-slate-500 text-sm">Univ. Politécnica de Gómez Palacio</p>
                    <span className="inline-block mt-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">2021 - 2024</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand/10 rounded-2xl text-brand"><Terminal size={24} /></div>
                  <h2 className="text-2xl font-bold text-slate-900">Soft Skills</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Líder de equipo', 'IA Tools', 'Pensamiento crítico', 'Colaboración', 'Comunicación', 'Buen criterio', 'Rápido aprendizaje'].map(skill => (
                    <span key={skill} className="bg-white text-slate-700 px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Idiomas</h3>
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
                    <span className="font-medium text-slate-700">Inglés</span>
                    <span className="text-brand font-bold text-sm">Nivel Básico</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Panel 4: Stack Técnico */}
          <section className="panel absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start px-6 md:px-32 pointer-events-auto" style={{ transform: 'translateZ(-8000px)' }}>
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] max-w-3xl z-10 w-full">
              <div className="flex items-center gap-4 mb-8 border-b border-slate-200/50 pb-6">
                <div className="p-4 bg-brand/10 rounded-2xl text-brand"><Code2 size={28} /></div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Stack Tecnológico</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {['GitHub/Git', 'React & Vite', 'TypeScript', 'JavaScript', 'Node.js', 'C# (.NET)', 'SQL Server', 'MySQL', 'PHP', 'HTML5/CSS3', 'Visual Basic', 'Android Studio', 'WordPress', 'AppSheet', 'ERPs', 'Infraestructura de redes'].map(tech => (
                  <span key={tech} className="px-5 py-2.5 bg-white text-slate-700 rounded-2xl border border-slate-100 shadow-sm font-medium hover:-translate-y-1 hover:shadow-md hover:text-brand transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
