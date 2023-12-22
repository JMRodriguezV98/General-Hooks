import { useLayoutEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch"

const Layout = () => {

    const [ boxSize,setBoxSize ] = useState({
        width: 0,
        height: 0
    });
    const { data,isLoading } = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/` );
    const { author,quote } = !!data && data[0];

    const pRef = useRef();

    useLayoutEffect(() => {
        const { height,width } = pRef.current.getBoundingClientRect();
        setBoxSize({
            width,
            height
        })
    }, [])

    return(
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading 
                ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
                )
                : (
                    <>
                        <blockquote className="blockquote text-end" style={ { display: 'flex' } }>
                            <p ref={ pRef } className="mb-1">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                        <code>{ JSON.stringify(boxSize) }</code>
                    </>
                )
            }

            <button className="btn btn-primary mt2" >Next quote</button>

        </>
    )
}

export default Layout