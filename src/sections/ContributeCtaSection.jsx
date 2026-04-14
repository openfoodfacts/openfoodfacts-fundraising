function ContributeCtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 text-center bg-[#341100] text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold">Ready to make an impact?</h2>
        <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">
          Whether you have 5 minutes or 5 hours, your contribution makes the food system more transparent for everyone.
        </p>
        <div className="pt-8">
          <a
            href="https://world.openfoodfacts.org/cgi/user.pl"
            target="_blank"
            rel="noreferrer"
            className="bg-[#f2e9e4] text-[#341100] px-10 py-5 rounded-full font-extrabold text-xl hover:bg-white transition-all transform hover:scale-105 shadow-xl inline-block"
          >
            Create your account now
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContributeCtaSection;
