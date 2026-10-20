
export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#263b35]">
      <header className="flex flex-wrap items-center justify-between gap-4 px-4 py-5 md:flex-nowrap md:px-16">
        <a href="#" className="text-xl font-semibold tracking-wide">
          Maya Reynolds<span className="text-[#b77b60]">.</span>
        </a>

        <nav className="flex flex-wrap items-center gap-3 text-sm md:gap-8">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#office">Our Office</a>
          <a href="#faq">FAQs</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#40594d] px-5 py-3 text-sm text-white"
        >
          Book a Consultation
        </a>
      </header>

      <section className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#a66f55]">
            A space to feel understood
          </p>
          <h1 className="max-w-xl text-5xl leading-tight md:text-6xl">
            Find your way back to yourself.
          </h1>
          <p className="mt-6 max-w-lg leading-7 text-[#65736c]">
            Therapy can be a place to slow down, explore what you are
            experiencing, and take meaningful steps toward a more balanced life.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#40594d] px-6 py-3 text-white"
            >
              Schedule a Consultation
            </a>
            <a href="#about" className="rounded-full border border-[#40594d] px-6 py-3">
              Get to Know Me
            </a>
          </div>
        </div>

        
<div className="overflow-hidden rounded-[45%_45%_12px_12px] md:min-h-[480px]">
  <img
    src="/images/maya-reynolds.png"
    alt="Dr. Maya Reynolds, clinical psychologist"
    className="h-[400px] w-full object-cover object-top md:h-[520px]"
  />
</div>

      </section>

      
<section id="about" className="bg-white px-6 py-16 md:px-16 md:py-24">
  <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#a66f55]">
        Meet Your Therapist
      </p>

      <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
        About Dr. Maya Reynolds, PsyD
      </h2>

      <p className="mt-6 leading-7 text-[#65736c]">
        I’m a licensed clinical psychologist based in Santa Monica, California,
        offering therapy for adults who feel overwhelmed by anxiety, stress,
        or the lingering effects of past experiences.
      </p>

      <p className="mt-4 leading-7 text-[#65736c]">
        My approach is warm, collaborative, and grounded. I integrate
        evidence-based methods such as cognitive-behavioral therapy (CBT),
        EMDR, mindfulness-based practices, and body-oriented techniques.
      </p>

      <p className="mt-4 leading-7 text-[#65736c]">
        Together, we can work toward greater insight, resilience, and a
        stronger relationship with yourself.
      </p>

      <a
        href="#contact"
        className="mt-7 inline-block rounded-full bg-[#40594d] px-6 py-3 text-white"
      >
        Let's Connect
      </a>
    </div>

    <div className="overflow-hidden rounded-2xl bg-[#e9e2d8]">
      <img
        src="/images/maya-reynolds.png"
        alt="Dr. Maya Reynolds, PsyD"
        className="h-[380px] w-full object-cover object-top md:h-[500px]"
      />
    </div>
  </div>
</section>


      <section id="services" className="px-6 py-16 md:px-16 md:py-20">
        <p className="text-sm uppercase tracking-widest text-[#a66f55]">How I can help</p>
        <h2 className="mt-4 text-3xl md:text-4xl">Therapy for your journey</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Anxiety & Stress",
              description: "Explore patterns, manage stress, and build practical coping skills.",
            },
            {
              title: "Life Transitions",
              description: "Navigate change with greater clarity, confidence, and support.",
            },
            {
              title: "Self-Understanding",
              description: "Make space for your feelings, needs, and personal growth.",
            },
          ].map((service) => (
            <article key={service.title} className="rounded-2xl bg-white p-7">
              <h3 className="text-xl">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#65736c]">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="office" className="bg-[#e9e2d8] px-6 py-16 md:px-16 md:py-20">
        <p className="text-sm uppercase tracking-widest text-[#a66f55]">Our Office</p>
        <h2 className="mt-4 text-3xl md:text-4xl">A welcoming place to pause.</h2>
        
<p className="mt-5 max-w-2xl leading-7 text-[#56665d]">
  Your surroundings should help you feel at ease. My Santa Monica office
  is a quiet, private space filled with natural light and comfortable
  seating, designed to help you slow down, feel grounded, and settle
  into each session. I also offer secure telehealth sessions for clients
  located in California.
</p>

      </section>

      
<div className="mt-8 grid gap-5 md:grid-cols-2">
  <img
    src="/images/office1.jpeg"
    alt="Sunlit therapy office with comfortable seating"
    className="h-72 w-full rounded-2xl object-cover"
  />
  <img
    src="/images/office2.jpeg"
    alt="Private counseling office with seating and bookshelves"
    className="h-72 w-full rounded-2xl object-cover"
  />
</div>


      <section id="faq" className="bg-white px-6 py-16 md:px-16 md:py-20">
        <p className="text-sm uppercase tracking-widest text-[#a66f55]">FAQs</p>
        <h2 className="mt-4 text-3xl md:text-4xl">Questions are welcome.</h2>
        <details className="mt-6 max-w-2xl border-b py-5">
          <summary className="cursor-pointer font-medium">What can I expect from a first session?</summary>
          <p className="mt-3 leading-7 text-[#65736c]">
            
          A first session is a chance to share what brings you to therapy,
          discuss your concerns, and explore your goals at a comfortable
          pace. I will answer your questions and work collaboratively with
          you to understand what support may be helpful.

          </p>
        </details>
        <details className="max-w-2xl border-b py-5">
          <summary className="cursor-pointer font-medium">How do I get started?</summary>
          <p className="mt-3 leading-7 text-[#65736c]">
            
            You can get started by reaching out to arrange an initial
            consultation. We can discuss your needs, explore whether my
            approach feels like a good fit, and talk about in-person sessions
            in Santa Monica or secure telehealth sessions for clients in
            California.

          </p>
        </details>
      </section>

      <section id="contact" className="px-6 py-16 text-center md:px-16 md:py-20">
        <h2 className="text-3xl md:text-4xl">Ready to take the next step?</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#65736c]">
          Get in touch to learn more about the therapy process and available appointments.
        </p>
        <a
          href="#about"
          className="mt-7 inline-block rounded-full bg-[#40594d] px-7 py-3 text-white"
        >
          Get in Touch
        </a>
      </section>

<footer className="border-t border-[#e5ddd3] px-6 py-7 text-center text-sm text-[#65736c]">
  © 2026 Maya Reynolds · Therapy & Well-being
</footer>
    </main>
  );
}
