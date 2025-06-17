import { cva } from '../../../styled-system/css'
import React from 'react'

type IconButtonProps = {
  visual: 'solid' | 'outline'
  icon: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>


export const button = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'inherit',
    cursor: 'pointer',
  },
  variants: {
    visual: {
      solid: {},
      outline: { border: '1px solid #DBDBDB', padding: '.8125rem' }
    },
  },
  defaultVariants: {
    visual: 'outline',
  }
})


const IconButton = ({ visual = 'solid', icon, ...props }: IconButtonProps) => {
  return (

    <button
      className={button({ visual })}
      {...props}
    >
      {icon}
    </button>
  )
}


export default IconButton
