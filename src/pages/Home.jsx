import React from 'react'
import Banner from '../components/Banner.jsx'
import Cards from '../components/Cards.jsx'

function Home() {
    return (
        <div role="main">
                <Banner>
                    <div className="banner banner_commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <Cards />
        </div>
    )
}

export default Home