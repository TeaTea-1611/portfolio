export const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Nam Pham, a passionate Fullstack Developer specializing
            in building scalable, high-performance web applications. With
            expertise in both frontend and backend technologies, I craft
            seamless user experiences and robust server-side architectures. I
            thrive on optimizing workflows, designing efficient database
            structures, and leveraging modern frameworks to create intuitive and
            powerful applications. My tech stack includes TypeScript, Node.js,
            React, PostgreSQL, and more. As a lifelong learner, I’m always
            exploring new tools and techniques to push the boundaries of web
            development. My goal is to build impactful digital solutions that
            enhance user experiences and streamline development processes.
          </p>
        </div>
        <img
          src={"/profile.png"}
          alt="Profile"
          className="size-72 rounded-lg object-cover shadow-lg"
        />
      </div>
    </section>
  );
};
