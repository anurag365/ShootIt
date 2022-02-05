import { useEffect } from "react";

const Home = () => {
  let name = "Mohd Mubassir";
  let laptop = { brand: "Asus", price: 65999.99, processor: "i5", ram: "8 GB" };

  useEffect(() => {
    console.log("From Use Effect");
  }, []);

  return (
    <div className="container">
      <h1>Home Component</h1>
      <p>{name}</p>

      <div className="row mt-5">
        <div className="col-md">
          <ul className="list-group" style={{ fontWeight: "600" }}>
            <li className="list-group-item">Brand</li>
            <li className="list-group-item">Price</li>
            <li className="list-group-item">Processor</li>
            <li className="list-group-item">Ram</li>
          </ul>
        </div>
        <div className="col-md">
          <ul className="list-group">
            <li className="list-group-item">{laptop.brand}</li>
            <li className="list-group-item">{laptop.price}</li>
            <li className="list-group-item">{laptop.processor}</li>
            <li className="list-group-item">{laptop.ram}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;