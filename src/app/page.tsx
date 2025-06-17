import { css } from "../../styled-system/css"

export default function Home() {
  return (
    <div
      className={css({
        display: "flex",
        height: "100vh",
      })}
    >
      <nav className={css({ display: "flex", flexDirection: "column", width: "60px" })}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <main className={css({
        flex: 1,
        margin: "0.5rem 0.5rem 0.5rem 0",
        backgroundColor: "white",
        padding: '2.5rem',
        borderRadius: '1.25rem',
      })}>
        <h1>Home</h1>
        <p>This is the home page</p>
      </main>
    </div>
  )
}
