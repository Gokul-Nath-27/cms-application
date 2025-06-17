import { css } from "../../styled-system/css"
import ActionButtons from "./ActionButtons"
import SearchBar from "./Searchbar"
import Button from "./ui/Button"

const Header = () => {
  return (
    <header className={css({
      display: 'flex',
      justifyContent: 'space-between',
    })}>
      <Headings />
      <Controls />
    </header >
  )
}


export default Header

const Headings = () => {
  return (
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
  )
}

const Controls = () => {
  return (
    <div className={css({
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
    })}>
      <SearchBar />
      <ActionButtons />
    </div>
  );
};