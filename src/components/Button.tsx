import { FunctionalComponent, JSX } from 'preact'
import './Button.scss'

export const Button: FunctionalComponent<JSX.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} className="preact-btn" />
}
