import { Fragment, useState, useEffect } from "react";
const Tutorial = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setData(response);
      });
  }, []); 
  return (<div>
    {
        data.map((value) => {
            return <div>
                <p>{value.id}</p>
                <p>{value.title}</p>
            </div>
        })
    }
  </div>);
};

export default Tutorial;
