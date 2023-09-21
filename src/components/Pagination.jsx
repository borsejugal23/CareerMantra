import React from "react";

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}


function Pagination({totalPages, currentPage,handlePageChange}) {

  let pages = createArrayOfSize(totalPages).map((_, i) => {
    return <button key={i}  disabled={currentPage===i+1} style={{width:"4%",borderRadius:"4px",backgroundColor:"lightblue",border:currentPage===i+1?"none":"1.5px solid black",color:currentPage===i+1?"white":"black"}}onClick= {()=>handlePageChange(i+1)}>{i+1}</button>;
  });
  return <div style={{display:"flex",justifyContent:"center", columnGap:"10px"}}>
      {pages} 
  </div>;
}

export default Pagination;