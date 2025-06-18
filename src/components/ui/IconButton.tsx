import { cva, cx } from '../../../styled-system/css'
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
    transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out',
    _focusVisible: {
      outline: 'none',
      boxShadow: '0 0 0 2px hsla(340, 87%, 58%, 0.3)',
    },
  },
  variants: {
    visual: {
      solid: {
        backgroundColor: 'transparent',
        padding: '.6rem',
        borderRadius: '.625rem',
        _hover: {
          backgroundColor: 'gray.200',
        },
      },
      outline: {
        padding: '.8125rem',
        border: '1px solid #DBDBDB',
        borderRadius: '.625rem',
        _hover: {
          backgroundColor: 'gray.100',
          borderColor: 'gray.400',
        },
      }
    },
  },
  defaultVariants: {
    visual: 'outline',
  }
})


const IconButton = ({ visual = 'solid', icon, className, ...props }: IconButtonProps) => {
  return (
    <button
      className={cx(button({ visual }), className)}
      {...props}
    >
      {icon}
    </button>
  )
}


export default IconButton
