import "./Card.css";

const Card = ({ id, role, organisation, startDate, endDate, location, experiences, imgSrc }) => {
  return (
    <div className="card mt-5 shadow-sm">
      <div className="row no-gutters">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center p-2">
          <img src={imgSrc} className="img-fluid rounded-circle w-75" alt="Company Logo" />
        </div>
        <div className="col-12 col-md-8 pt-5">
          <div className="card-body text-center">
            <h5 className="card-title  text-danger font-weight-bold ">{organisation}</h5>
            <h4 className="card-title  text-dark font-weight-bold ">{role}</h4>
            {/* <h5 className="card-text  font-weight-bold text-muted">{role}</h5> */}
            <div className="row mb-2">
              <div className="col-12 col-sm-4 text-muted font-weight-bold">{startDate}</div>
              <div className="col-12 col-sm-4 text-muted font-weight-bold">{endDate}</div>
              <div className="col-12 col-sm-4 text-muted font-weight-bold">{location}</div>
            </div>
            <div className="row">
              {experiences.map((experience, index) => (
                <div key={index} className="col-12 col-sm-6 text-muted mt-2 font-weight-bold">{experience}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
