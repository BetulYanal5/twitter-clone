import React from 'react'

const Container = ({children}) => {
    return (
        <div className="flex min-h-screen max-w-5xl mx-auto">
            {children}
        </div>
    )
}

export default Container