import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import BarCard from "./BarCard";
import { Row, Container, Button } from "react-bootstrap";

 function BarList() {
  const [bars, setBars] = useState([]);
  const { id } = useParams();
  const[currentBar, setCurrentBar] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/bar-listing")
      .then((r) => r.json())
      .then((r) => {
        // console.log("response is: ", r);
        setBars(r);
        // console.log("bars is: ", bars);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/bars/${id}`)
    .then((r) => r.json())
    .then((bar) => {
      console.log(bar);
      setCurrentBar(bar);
    }) 
    .catch((error) => {console.log(error)})
  }, []);

  return (
    <>

<Container>
        <Row xs={10} className="g-4" className="d-flex justify-content-center">
        { bars.length > 0 ? (
          bars.map(bar => {
            return (
              <div key={bar.id}>
              <Link to={`/bars/${bar.id}`}>
            <BarCard bar={bar} neighborhood={bar.neighborhood.name} />
            </Link>
            </div>
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