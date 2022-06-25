import { HTMLProps } from 'react'
import { IconType } from 'react-icons'
import classNames from 'classnames'

interface Props extends HTMLProps<HTMLInputElement> {
  icon?: IconType
  error?: string
}

export const Input = ({ icon: Icon, error, ...props }: Props) => (
  <div className="w-full flex flex-col py-1">
    <div
      className={classNames(
        error
          ? 'outline-red-600 text-red-600'
          : 'focus-within:outline-blue-700 focus-within:text-blue-700',
        'w-full flex relative bg-white px-2 rounded-lg outline outline-2 outline-gray-300 transition-colors transition-[outline]',
      )}
    >
      {Icon && (
        <div className="p-1 self-stretch flex items-center justify-center text-xl">
          <Icon />
        </div>
      )}
      <input
        {...props}
        className="w-full flex-1 p-2 bg-transparent outline-0 text-gray-600"
      />
    </div>
    {error && <div className="text-red-600 mt-1">{error}</div>}
  </div>
)
