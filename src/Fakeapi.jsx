import React, { useState, useEffect } from "react";
import "./Fakeapi.css";
function FakeApi() {
  let [users, setUsers] = useState([]);

  let [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <div className="body">
        <div className="main">
          <h1>Fake Api</h1>
          <input
            placeholder=" Search item"
            type="text"
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="item">
          {users
            .filter(res => res.title.toLowerCase().includes(search))
            .map(x => {
              return (
                <>
                  <div className="container">
                    <img src={x.image} alt="" />
                    <p>{x.title}</p>
                    <p>Rate :{x.rating.rate}🌟</p>
                    <h2> Price:$ {x.price}</h2>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default FakeApi;
