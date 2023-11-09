import "./App.css";
import logo from "./assets/logo.png";
import programme from "./assets/programme.json";
function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="{logo}" />
        <h1>M6</h1>
      </header>

      <section>
        {programme.map((elem) => {
          return (
            <div key={programme.title} className="detail">
              <h3>{elem.time}</h3>
              <img src={elem.image} alt={elem.image} />
              <div className="more-information">
                <h2> {elem.title}</h2>
                <p>{elem.type}</p>
                <div className="duration">
                  <h4>{elem.duration}</h4>
                  <p>{elem.direct && " • Direct"}</p>
                  <p>{elem.isUnseen && " • Inédit"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
