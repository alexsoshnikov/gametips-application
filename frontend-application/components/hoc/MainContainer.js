import classes from "../../styles/hoc/MainContainer.module.scss";
import {LinkBtn} from "../UI/LinkBtn";
import {SearchField} from "../UI/SearchField";
import Head from "next/head";
import {AsideInfo} from "../asideinfo/AsideInfo";
import Router, {useRouter} from "next/router";
import {useEffect, useRef} from "react";

export const MainContainer = ({children, title, ...props}) => {
    const {asPath} = useRouter()
    const searchRef = useRef(null);
    const menu = [
        {
            title: "Feed",
            linkTo: '/'
        },
        {
            title: "Feedback",
            isNotify: 'isNotify',
            linkTo: '/feedback'
        },
        {
            title: "Creators",
            linkTo: '/creators'
        }, {
            title: "EQWs",
            linkTo: '/404'
        }
    ]

    useEffect(() => {
        if (asPath === '/search') {
            searchRef.current.focus()
        }
    }, [asPath]);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {/*Navbar*/}
            <header>
                <nav className={"navbar navbar-expand-lg fixed-top " + classes.navbar}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-md-center position-relative">
                            <ul className="navbar-nav">
                                {
                                    menu.map((link, index) => {
                                        return (
                                            <LinkBtn
                                                key={index}
                                                linkTo={link.linkTo}
                                                isNotify={link.isNotify}
                                                tabIndex={index + 1}
                                                asPath={asPath}
                                            >
                                                {link.title}
                                            </LinkBtn>
                                        )
                                    })
                                }
                            </ul>
                            <SearchField
                                searchRef={searchRef}
                                onFocusHandler={() => Router.push('/search')}
                                onBlurHandler={() => Router.back()}
                            />
                        </div>
                    </div>
                </nav>
            </header>


            {/*structure of main section*/}
            <main className="container">
                <div className="row g-5">
                    <div className="col-md-8">
                        {children}
                    </div>

                    <div className="col-md-4">
                        <AsideInfo/>
                    </div>
                </div>
            </main>
        </>
    )
}
