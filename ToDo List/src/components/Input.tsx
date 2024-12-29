import styles from './Input.module.css'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function Input( { ...props}: Props){
    return (
        <input className={styles.input} type="text" {...props} />
    )
}