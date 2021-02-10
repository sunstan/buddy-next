import React from 'react';

const Header = () => {
    return (
        <div className={'sticky top-0 z-30 w-full h-24 flex items-center bg-background shadow-header'}>
            <div className={'container mx-auto px-8 flex items-center justify-between'}>
                <img alt="" src="/images/Ops.svg"/>
                <nav className={'flex-grow mr-28'}>
                    <ol className={'flex gap-20 items-center justify-end font-sans font-medium uppercase'}>
                        <li><a href="#">rencontres</a></li>
                        <li><a href="#">l'instant ops</a></li>
                        <li><a href="#">à propos</a></li>
                    </ol>
                </nav>
                <div className="search">
                    <img alt="Search" src="/images/search.svg"/>
                </div>
            </div>
        </div>
    )
}

export default Header;