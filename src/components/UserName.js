import React, { useEffect, useState } from "react";

const GetUsersNames = (props) => {
  const [user, setUser] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    console.log(submitted);
    if (submitted && user.length < 807) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setUser([...user, ...response.results]);
          setUrl(response.next);
        });
    }
  }, [submitted, url]);

  const display = user.map((item, i) => {
    return <div key={i}>{item.name}</div>;
  });
  const onClick = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form>
      <button onClick={onClick}>Fetch Pokemon</button>
      {display}
    </form>
  );
};
export default GetUsersNames;
