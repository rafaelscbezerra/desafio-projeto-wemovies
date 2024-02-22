function Header() {
  return (
    <>
      <a className="company-name" href="/">
        WeMovies
      </a>

      <a href="/" className="cart--infos">
        <div className="cart--infos--text">
          <p className="cart--infos--text__title">Meu Carrinho</p>
          <span className="cart--infos--text__description">0 itens</span>
        </div>

        <img
          className="cart--infos__icon"
          src="/src/assets/cart-icon.svg"
          alt="ícone de sacola"
        />
      </a>
    </>
  );
}

export default Header;
