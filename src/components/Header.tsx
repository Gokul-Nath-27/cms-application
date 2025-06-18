import { css } from "../../styled-system/css"
import Controls from "./Controls"

const Header = () => {
  return (
    <header className={css({
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '11px',
    })}>
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
      })}>
        <h1
          className={css({
            fontSize: '2rem',
            lineHeight: '2.2rem',
          })}
        >
          collections
        </h1>
        <p
          className={css({
            color: '#717274',
            fontSize: '1rem',
            fontWeight: 'medium',
          })}
        >
          personalized content storyboards
        </p>
      </div>
      <Controls />
    </header >
  )
}

export default Header
