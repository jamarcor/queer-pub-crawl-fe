import React, { useEffect, useState } from "react";
import BarCard from "./BarCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

 function BarList() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bar-listing")
      .then((r) => r.json())
      .then((r) => {
        console.log("response is: ", r);
        setBars(r);
        console.log("bars is: ", bars);
      });
  }, []);

  return (
    <>

<Container>
        <Row xs={10} className="g-4" className="d-flex justify-content-center">
        { bars.length > 0 ? (
          bars.map(bar => {
            return (
              <>
            <BarCard key={bar.bar_id} bar={bar} neighborhood={bar.neighborhood.name} />
            </>
            )
          })
        ) : null }
        </Row>
      </Container>


        
    </>
    )
        }

export default BarList

// {/* {bars.length > 0 ? (
//           <p>We have bars</p>
//         ) : (
//           { bars.map(bar => {
//             return (
//               <>
//                 <p>bar</p>
//               {/* <BarCard bar={bar}/> */}
//               {/* </> */}
//                {/* : null
//         //     )
//         //   }
//         //   ) }

//         //   <p>something is wrong</p>
//         // )} */} 