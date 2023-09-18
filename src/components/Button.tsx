import { FunctionalComponent, JSX } from 'preact'

export const Button: FunctionalComponent<JSX.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      className="rounded-lg border border-transparent bg-button-bg px-4 py-2 font-medium transition-[border-color] duration-200
                 hover:border-indigo-500
                 dark:bg-dark-button-bg"
    />
  )
}
