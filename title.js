 function getPic()
 {
console.log("hi");
let fetchRes = fetch(
    "http://localhost:3000/download");
      
            // fetchRes is the promise to resolve
            // it by using.then() method
            fetchRes.then(res =>
                res.json()).then(d => {

                    console.log("api data          ");
                    console.log(d)
                })
            }