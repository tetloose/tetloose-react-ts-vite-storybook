import { useStateContext } from '@context'
import { EXPORT_NAMEProps } from './COMPONENT_NAME.types'
import cs from 'classnames'
import styles from './COMPONENT_NAME.module.scss'

export const EXPORT_NAME = ({
    variants,
    modifiers,
    ...rest
}: EXPORT_NAMEProps) => {
    const { state, updateState } = useStateContext()

    console.log(state)
    console.log(updateState)

    return (
        <div
            className={cs(
                styles['CLASS_NAME'],
                variants && variants.map(variant => styles[variant]),
                ...(modifiers || [])
            )}
            {...rest}
        >
            Happy editing
        </div>
    )
}
