import Head from 'next/head';
import React from 'react';
import HomeMeeting from '../containers/HomeMeeting';

const Home = () => {
    return (
        <div className={'flex relative w-full flex-col justify-start bg-background'}>

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <img alt='' className={'absolute object-cover w-full h-full z-0'} src='/images/bg-home-section-1.png'/>

            <div className={'container mx-auto px-8 z-10'}>

                <div className={'text-8xl text-gray font-serif font-semibold my-20'}>
                    Lifestyle & rencontres <span className={'whitespace-nowrap italic'}>éco-friendly</span>
                </div>

                <div className={'grid grid-cols-2 gap-10 h-1/3'}>

                    <div className={'relative flex h-full overflow-hidden'}>
                        <img alt="Ops" className={'object-cover w-full h-full'}
                             src={'https://images.unsplash.com/photo-1597512987382-205996a6abd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}/>
                    </div>

                    <div className={'flex items-start justify-between flex-col'}>
                        <span className={'text-primary font-sans font-medium uppercase text-xl'}>Rencontre</span>
                        <span className={'font-semibold font-serif text-gray text-6xl max-w-xl leading-tight'}>Fondatrice de Digital for the Planet & Preserve Paris</span>
                        <span
                            className={'text-primary font-sans font-medium uppercase text-xl opacity-80'}>02/03/21</span>
                    </div>

                </div>

                <div className={'flex items-center justify-between mt-20 mb-28'}>
                    <img alt={''} src={'/images/left.svg'}/>
                    <img alt={''} src={'/images/right.svg'}/>
                </div>

                <div className={'flex items-center justify-between'}>
                    <div className={'text-8xl text-primary font-serif font-semibold my-10 leading-tighter'}>Rencontres
                    </div>
                    <button
                        className={'py-5 px-10 border border-primary rounded-half text-primary font-sans font-medium text-xl'}>Voir
                        +
                    </button>
                </div>

                <div className={'text-gray font-sans font-medium text-xl'}>
                    Découvrez des personnalités inspirantes et leurs projets.
                </div>

                <div className={'grid grid-cols-7 gap-16 mt-20 mb-28'}>

                    <div className={'col-span-2 pt-40'}>
                        <HomeMeeting
                            createdAt={'02/03/21'}
                            categories={['Rencontre']}
                            title={'Fondatrice de Digital for the Planet & Preserve Paris'}
                            imageUrl={'https://images.unsplash.com/photo-1468011749792-10026eb12caf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTg4fHx3b21hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        />
                    </div>

                    <div className={'col-span-2 pt-20'}>
                        <HomeMeeting
                            createdAt={'02/03/21'}
                            categories={['Rencontre']}
                            title={'Fondatrice de Digital for the Planet & Preserve Paris'}
                            imageUrl={'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODZ8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        />
                    </div>

                    <div className={'col-span-3'}>
                        <HomeMeeting
                            createdAt={'02/03/21'}
                            categories={['Rencontre']}
                            title={'Fondatrice de Digital for the Planet & Preserve Paris'}
                            imageUrl={'https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTF8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                        />
                    </div>

                </div>

            </div>

            <div className={'container mx-auto px-8 z-10'}>
                <img alt={''} className={'max-w-6xl'} src={'/images/instant-top.png'}/>
            </div>

            <div className={'bg-primary z-0'}>

                <div className={'container mx-auto px-8 z-10'}>

                    <img alt={''} className={'max-w-6xl'} src={'/images/instant-bottom.png'}/>

                    <div className={'flex items-center justify-between mt-20'}>
                        <span className={'text-white font-sans text-xl max-w-md'}>
                            Inspirations joyeusement durables pour mieux vivre au quotidien !
                        </span>
                        <button
                            className={'py-5 px-10 border border-white rounded-half text-white font-sans font-medium text-xl'}>Voir
                            +
                        </button>
                    </div>

                    <div className={'grid grid-cols-2 gap-16 mt-64 mb-28'}>

                        <div className={'relative group cursor-pointer'}>
                            <span
                                className={'relative font-semibold z-10 font-serif text-white text-6xl max-w-sm leading-tight'}>Voyage</span>
                            <div
                                className={'absolute z-0 left-0 bottom-0 flex w-80 h-96 transform translate-x-16 translate-y-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity'}>
                                <img alt={''} className={'absolute object-cover w-full h-full'}
                                     src={'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}/>
                            </div>
                            <div
                                className={'bg-white w-16 h-2-px transform -translate-x-20 -translate-y-7 opacity-0 group-hover:opacity-100 transition-opacity'}/>
                        </div>

                        <div className={'relative group cursor-pointer'}>
                            <span
                                className={'relative font-semibold z-10 font-serif text-white text-6xl max-w-sm leading-tight'}>Beauté</span>
                            <div
                                className={'absolute z-0 left-0 bottom-0 flex w-80 h-96 transform translate-x-16 translate-y-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity'}>
                                <img alt={''} className={'absolute object-cover w-full h-full'}
                                     src={'https://images.unsplash.com/photo-1555820585-c5ae44394b79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}/>
                            </div>
                            <div
                                className={'bg-white w-16 h-2-px transform -translate-x-20 -translate-y-7 opacity-0 group-hover:opacity-100 transition-opacity'}/>
                        </div>

                        <div className={'relative group cursor-pointer ml-auto'}>
                            <span
                                className={'relative font-semibold z-10 font-serif text-white text-6xl max-w-sm leading-tight'}>Au quotidien</span>
                            <div
                                className={'absolute z-0 right-0 bottom-0 flex w-80 h-96 transform -translate-x-16 translate-y-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity'}>
                                <img alt={''} className={'absolute object-cover w-full h-full'}
                                     src={'https://images.unsplash.com/photo-1502651492682-6c7b46d75d85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGxpZmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}/>
                            </div>
                            <div
                                className={'bg-white w-16 h-2-px transform -translate-x-20 -translate-y-7 opacity-0 group-hover:opacity-100 transition-opacity'}/>
                        </div>

                        <div className={'relative group cursor-pointer ml-auto'}>
                            <span
                                className={'relative font-semibold z-10 font-serif text-white text-6xl max-w-sm leading-tight'}>Santé</span>
                            <div
                                className={'absolute z-0 right-0 bottom-0 flex w-80 h-96 transform -translate-x-16 translate-y-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity'}>
                                <img alt={''} className={'absolute object-cover w-full h-full'}
                                     src={'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}/>
                            </div>
                            <div
                                className={'bg-white w-16 h-2-px transform -translate-x-20 -translate-y-7 opacity-0 group-hover:opacity-100 transition-opacity'}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;
