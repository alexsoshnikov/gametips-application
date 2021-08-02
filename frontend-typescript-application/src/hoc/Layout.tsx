import React from 'react'

export const Layout: React.FC = ({children}) => {
    return (
        <>
            <main className="container">
                <div className="row g-5">
                    <div className="col-md-8">
                        {children}
                    </div>
                    <div className="col-md-4">
                        Infos
                    </div>
                </div>
            </main>
        </>
    )
}
