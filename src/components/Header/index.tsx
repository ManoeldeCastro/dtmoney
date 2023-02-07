import logoImg from "../../assets/logo.svg"

export const Header= () => {
  return (
    <header>
      <img src={logoImg} alt="Dt Money" />
      <button type="button">
        Nova transação
      </button>
    </header>
  )
}
