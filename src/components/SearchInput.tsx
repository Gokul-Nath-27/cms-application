"use client"
import { useSearch, useSearchActions } from "@/store/search"
import { css } from "../../styled-system/css"

const SearchInput = () => {
  const searchTerm = useSearch()
  const { setSearchTerm } = useSearchActions()

  return (
    <input
      type="text"
      placeholder="Type here to search..."
      value={searchTerm}
      className={css({
        width: 'full',
        p: '3',
        paddingInlineStart: '10',
        fontSize: 'sm',
        border: 'none',
        borderRadius: 'lg',
        _focus: {
          "outline": "none",
          boxShadow: '0 0 0 2px hsla(340, 87%, 58%, 0.3)',
        },
        _placeholder: {
          color: 'gray.400',
        }
      })}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}

export default SearchInput