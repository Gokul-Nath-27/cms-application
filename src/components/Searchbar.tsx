import { AgentIcon, SearchIcon } from '@/Icons'
import { css } from '../../styled-system/css'
import IconButton from './ui/IconButton'
import SearchInput from './SearchInput'

const SearchBar = () => {
  return (
    <div className={css({ display: 'flex', alignItems: 'center', gap: 2, w: 'full' })}>
      <div className={css({
        position: 'relative',
        flexGrow: 1,
        border: "1px solid",
        borderColor: "hsl(220, 1%, 85%)",
        borderRadius: "lg",
        flex: 1,
      })}>
        <SearchInput />
        <SearchIcon
          className={css({
            position: 'absolute',
            top: '3.5',
            left: '3.5',
          })}
          size={14}
          color='#717274'
        />
      </div>
      <IconButton visual='outline' icon={<AgentIcon size={14} />} />
    </div>
  )
}

export default SearchBar