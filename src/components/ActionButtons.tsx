import { AddToCollection, ClipboardIcon, DeleteIcon, FontIcon } from "@/Icons"
import { css } from "../../styled-system/css"
import IconButton from "./ui/IconButton"
import Button from "./ui/Button"

const ActionButtons = () => {
  return (
    <div className={css({ display: 'flex', alignItems: 'center', gap: '1rem' })}>
      <IconButton
        visual='outline'
        icon={<FontIcon />}
      />
      <IconButton
        visual='outline'
        icon={<DeleteIcon />}
      />
      <IconButton
        visual='outline'
        icon={<ClipboardIcon />}
      />
      {/* Create new collection button */}
      <Button
        variant="outline"
        className={css({
          border: '1px solid #DBDBDB',
          display: 'flex',
          alignItems: 'center',
          gap: '.375rem',
          borderRadius: '10px',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 })}>
          <AddToCollection color="#E51058" />
        </div>
        <span className={css({ fontSize: '.75rem', fontWeight: 'medium', width: "fit-content" })}>
          Create a new collection
        </span>
      </Button>
    </div>
  )
}


export default ActionButtons