import React, { ReactElement } from "react";
import styles from './UI.module.scss'

type Props = {
    children: ReactElement,
    background: string,
    padding: string,
    borderRadius?: string,
}

const WrapperContent = (props: Props) => {
    return(
        <div className={styles.WrapperContent} style={{background: props.background, padding: props.padding, borderRadius: props.borderRadius}}>
            {props.children}
        </div>
    )
}

export default WrapperContent;