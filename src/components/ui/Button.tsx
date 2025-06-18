import { cva, cx } from '../../../styled-system/css';

export const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 'full',
    fontSize: '.75rem',
    padding: '.75rem .7813rem',
    transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out',
    _focusVisible: {
      outline: 'none',
      boxShadow: '0 0 0 2px hsla(340, 87%, 58%, 0.3)',
    },
  },

  variants: {
    variant: {
      solid: {
        backgroundColor: 'var(--primary)', // Using the --primary CSS variable
        color: 'white',
        borderWidth: '1px',
        borderColor: 'var(--primary)', // Using the --primary CSS variable
        _hover: {
          backgroundColor: 'var(--primary-hover)',
          borderColor: 'var(--primary-hover)',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--foreground)',
        border: '1px solid hsl(0, 0%, 86%)',
        _hover: {
          backgroundColor: 'gray.100',
          borderColor: 'gray.400',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
});

type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'solid' | 'outline';
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, variant = 'solid', className, ...props }: ButtonProps) {
  return (
    <button
      className={cx(buttonRecipe({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};