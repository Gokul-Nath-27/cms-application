import { css } from "../../styled-system/css"
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <div
      className={css({
        display: "flex",
        height: "100vh",
      })}
    >
      <Sidebar />
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
