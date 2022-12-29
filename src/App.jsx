import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";


const App = () => (
    <>
<h1 className="heading">List of Top Netflix and Amazon Tv Series</h1>
<div className="container">
    {Sdata.map((val) => {
    return(
     <Cards
     Image= {val.Image}
     Name= {val.Name}
     Title= {val.Title}
     Link= {val.Link}
     />
     );
    })}
</div>
</>
);
export default App;