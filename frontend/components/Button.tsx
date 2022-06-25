import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'light'
  block?: boolean
}

export const Button = ({
  variant = 'primary',
  block,
  children,
  ...props
}: Props) => (
  <button
    className={classNames('py-2 px-4 rounded-lg my-1 transition-colors', {
      'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white':
        variant === 'primary',
      'bg-gray-900 bg-opacity-0 hover:bg-opacity-10 focus:bg-opacity-10':
        variant === 'light',
      'w-full': block,
    })}
    {...props}
  >
    {children}
  </button>
)
