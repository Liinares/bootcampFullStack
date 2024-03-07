import { useState } from "react";

export const Togglable = ({children, labelButton}) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'}

    return(
        <div>
            <div style={hideWhenVisible}>
                <button onClick={() => setVisible(true)}>
                    Show {labelButton} 
                </button>
            </div>

            <div style={showWhenVisible}>
                {children}
                <div>
                    <button onClick={() => setVisible(false)}>
                        Hide {labelButton} 
                    </button>
                </div>
            </div>
        </div>
    )
}