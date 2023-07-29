import React from "react";
import notpic from "../sources/404.png"; 

const Page404 = () => {
    return(
        <div className="container notfound">
            <div className="fof">
                <h1>Oops..!</h1>
                <h2>4<span>0</span>4</h2>
                <img src={notpic} alt={notpic}/>
                <h3>Sorry! We Couldnt Find that Page ...</h3>
            </div>
        </div>
    )
}

export default Page404;