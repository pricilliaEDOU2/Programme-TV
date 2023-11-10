import programme from "../assets/programme.json";

const Infos = () => {
  return (
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
  );
};
export default Infos;
