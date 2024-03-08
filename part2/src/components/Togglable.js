import { useState, forwardRef, useImperativeHandle } from "react";

export const Togglable = forwardRef(({children, labelButton}, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'}

    const toggleVisibility = () => setVisible(!visible)

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    return(
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>
                    Show {labelButton} 
                </button>
            </div>

            <div style={showWhenVisible}>
                {children}
                <div>
                    <button onClick={toggleVisibility}>
                        Hide {labelButton}
                    </button>
                </div>
            </div>
        </div>
    )
})