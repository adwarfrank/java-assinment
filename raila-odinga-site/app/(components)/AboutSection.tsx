export default function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold">About Raila Odinga</h2>
          <p className="mt-4 text-textDark/85">
            Born on 7 January 1945, Raila Amolo Odinga is the son of Jaramogi Oginga Odinga. Educated in East Germany, he
            pursued engineering and later established a successful business with East African Spectre. A central figure in
            Kenya&apos;s fight for multiparty democracy, he endured detentions during the 1980s. He served as Prime Minister of
            Kenya (2008–2013) and has continued to champion regional development as an AU envoy.
          </p>
          <a href="/files/raila-biography.pdf" className="button-secondary mt-5 inline-block">Download Biography</a>
        </div>
        <div className="p-4 rounded-xl border border-black/5 bg-white shadow-sm">
          <dl className="grid grid-cols-2 gap-2 text-sm">
            <dt className="text-textDark/60">Born</dt>
            <dd>7 Jan 1945</dd>
            <dt className="text-textDark/60">Role</dt>
            <dd>Former Prime Minister (2008–2013)</dd>
            <dt className="text-textDark/60">Business</dt>
            <dd>East African Spectre</dd>
            <dt className="text-textDark/60">Focus</dt>
            <dd>Unity & Development</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
