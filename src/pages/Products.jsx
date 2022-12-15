function Products() {
  return (
    <>
      <h1 class="text-center text-3xl font-bold">Products</h1>
      <div className="item-center cards">
        <div className="s-card card">
          <img
            className="img"
            src={`/merch1.png`}
            alt="merch"
            width="200"
            height="100"
          />
          <div className="name">Merch</div>
        </div>
        <div className="s-card card">
          <img
            className="img"
            src={`/merch2.png`}
            alt="merch"
            width="200"
            height="100"
          />
          <div className="name">Merch</div>
        </div>
      </div>
    </>
  );
}

export default Products;
