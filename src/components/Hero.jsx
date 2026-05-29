import pfp from "../assets/pfp.png"
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-32 pb-16 lg:py-0 gap-12 lg:gap-8 bg-zinc-950 text-white">

      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight text-zinc-100">
          Hi, I'm <span className="text-white">Hazel Lakshmana</span>
        </h1>

        {/* Role & Core Focus */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-6">
          <span className="text-base md:text-lg font-medium text-zinc-300">
            First-Year CS Student
          </span>
          <span className="text-zinc-700">|</span>
          <span className="text-base md:text-lg font-medium text-zinc-300">
            Frontend Builder
          </span>
        </div>

        {/* Short Tagline */}
        <p className="text-sm md:text-base text-zinc-400 max-w-lg mb-8 leading-relaxed">
          Building responsive web interfaces and exploring backend automation with Python, while studying the principles of computer science.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="group flex items-center justify-center bg-zinc-100 hover:bg-white text-zinc-950 font-semibold px-6 py-2.5 rounded-md transition duration-200 text-sm shadow-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Projects
          </a>

          {/* ✅ FIXED HERE */}
          <a
            href={resume}
            download="Hazel_Lakshmana_Resume.pdf"
            className="group flex items-center justify-center border border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-zinc-300 hover:text-white font-medium px-6 py-2.5 rounded-md transition duration-200 text-sm"
          >
            <svg className="w-4 h-4 mr-2 text-zinc-400 group-hover:text-zinc-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-center w-full max-w-sm lg:max-w-none relative">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative flex items-center justify-center p-6 md:p-10 select-none">

          <div className="relative w-[300px] h-[380px] md:w-[340px] md:h-[430px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl transition-all duration-300">
            <img
              src={pfp}
              alt="Hazel Lakshmana"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  )
}
