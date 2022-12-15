function Home() {
  return (
    <>
      <div className="about mx-20">
        <h1 class="text-center text-3xl font-bold">Rev</h1>
        <div className="text-center text-xl">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </div>
      </div>
      <div className="showcase">
        <h2 class="text-2xl font-bold m-10">Showcase</h2>
        <div className="cards">
          <div className="s-card showcase-card">
            <img
              className="showcase-card"
              src={`/car.png`}
              alt="merch"
              width="300"
              height="200"
            />
          </div>
          <div className="s-card showcase-card">
            <img
              className="img"
              src={`/car2.png`}
              alt="merch"
              width="300"
              height="200"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
