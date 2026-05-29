export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-20 border-t border-zinc-900 bg-zinc-950 text-white">

      {/* Section Header - More compact spacing */}
      <div className="max-w-3xl mb-12">
        <h2 className="text-xs uppercase tracking-widest  font-semibold mb-2">
          Learning Journey
        </h2>
        <p className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          Evolving from theory to real-world code.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* CARD 1: CS STUDENT INTRO (7 cols) */}
        <div className="lg:col-span-7 bg-zinc-900/35 border border-zinc-850 hover:border-zinc-800 rounded-lg p-6 md:p-8 transition duration-300 flex flex-col justify-between shadow-xl">

          <div>
            <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">

              Student Profile
            </h3>

            <p className="text-zinc-300 text-sm md:text-base mb-4 leading-relaxed">
              I am a <strong className="text-zinc-100 font-semibold">first-year Computer Science student</strong> building a solid foundation in core computing theory, algorithms, and systems engineering. Alongside my university coursework, I spend my time self-learning modern software architectures.
            </p>

            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              My philosophy is centered on <strong className="text-zinc-200">learning by building</strong>.
              Rather than just reading textbooks, I write code, experiment with tools,
              and build small real-world web apps to understand what goes on under the hood.
              Currently, I am expanding my skills across frontend development, backend systems,
              and database management while exploring modern technologies and clean UI design.

              <br /><br />

              I enjoy turning ideas into interactive experiences and constantly challenging
              myself to learn new frameworks, improve problem-solving abilities, and write
              more efficient code. Every project I create helps me understand not only how
              software works technically, but also how thoughtful design and user experience
              can make applications feel intuitive and impactful.
            </p>
          </div>


        </div>

        {/* CARD 2: LEARNING TIMELINE / WHAT I'M BUILDING (5 cols) */}
        <div className="lg:col-span-5 bg-zinc-900/35 border border-zinc-850 hover:border-zinc-800 rounded-lg p-6 md:p-8 transition duration-300 flex flex-col justify-between shadow-xl">

          <div>
            <h3 className="text-lg font-bold text-zinc-200 mb-5 flex items-center gap-2">

              What I'm Learning & Building
            </h3>

            <div className="space-y-5">

              {/* Milestone 1: Web Tech & React */}
              <div className="relative pl-5 border-l border-zinc-800 hover:border-white transition duration-300">

                <h4 className="font-bold text-zinc-200 text-xs md:text-sm">Modern Frontend & React.js</h4>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  Building interactive user interfaces, styling with clean utility-first CSS, and handling React component states.
                </p>
              </div>

              {/* Milestone 2: Python Scripting */}
              <div className="relative pl-5 border-l border-zinc-800 hover:border-white transition duration-300">

                <h4 className="font-bold text-zinc-200 text-xs md:text-sm">Backend Automation & Python</h4>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  Writing terminal utilities, solving data structures algorithms, and exploring simple AI/ML helper scripts.
                </p>
              </div>

              {/* Milestone 3: Databases & SQL */}
              <div className="relative pl-5 border-l border-zinc-800 hover:border-white transition duration-300">

                <h4 className="font-bold text-zinc-200 text-xs md:text-sm">Relational Databases & MySQL</h4>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  Learning tables normalization, writing basic query joins, and linking simple database endpoints to frontends.
                </p>
              </div>

            </div>
          </div>

          

        </div>

      </div>

    </section>
  )
}
