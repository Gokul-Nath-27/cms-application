import { AddToCollection, ClipboardIcon, DeleteIcon, FontIcon } from "@/Icons"
import { css } from "../../styled-system/css"
import IconButton from "./ui/IconButton"
import Button from "./ui/Button"
import TooltipWrapper from "./ui/Tooltip"

const ActionButtons = () => {
  return (
    <div className={css({ display: { base: 'none', md: 'flex' }, alignItems: 'center', gap: '2.5' })}>
      <TooltipWrapper content="Change Font" side="top">
        <IconButton
          visual='outline'
          icon={<FontIcon />}
        />
      </TooltipWrapper>

      <TooltipWrapper content="Delete" side="top">
        <IconButton
          visual='outline'
          icon={<DeleteIcon />}
        />
      </TooltipWrapper>

      <TooltipWrapper content="Clipboard" side="top">
        <IconButton
          visual='outline'
          icon={<ClipboardIcon />}
        />
      </TooltipWrapper>

      {/* Create new collection button */}
      <Button
        variant="outline"
        className={css({
          border: '1px solid #DBDBDB',
          display: 'flex',
          alignItems: 'center',
          gap: '2.5',
          borderRadius: 'lg !important',
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