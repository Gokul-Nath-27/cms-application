import { css } from "../../styled-system/css"

const Header = () => {
  return (
    <header>
      <div className={css({
        display: css({ "display": "flex" }),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
      })}>
        <p className={css({

        })}
        >
          personalized content storyboards
        </p>
      </div>
    </header >
  )
}