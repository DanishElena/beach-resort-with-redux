import React from 'react'

export const Background = ({children, hero}) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

Background.defaultProps = {
    hero: "defaultHero"
}