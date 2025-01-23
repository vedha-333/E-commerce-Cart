import { useState } from "react";
import Card from "../components/ProductCard/Card";

function HomePage (){
    const[data, ] = useState(
        new Array(20).fill({title: 'product Title'})
    );
    console.log(data);

    return(
        <>
        <h1 className="text-center">Home page for follow along </h1>
        <div className="grid grid-cols-3">
            {data.map((ele,index)=>{
                return (
                    <div style={{margin: 'auto'}}>
                <Card title={ele.title} Index={index}/>

            </div>

                );
            })}
            
        </div>
        </>
    )
}
export default HomePage;