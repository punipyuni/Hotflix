import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderLeader({ leader }) {
  return (
    <div key={leader.id} className="col-12 mt-5">
      <Media tag="li">
        <Media left middle>
          <Media object src={leader.image} alt={leader.name} />
        </Media>
        <Media body className="ml-5">
          <Media heading>{leader.name}</Media>
          <p>{leader.designation}</p>
          <p>{leader.description}</p>
        </Media>
      </Media>
    </div>
  );
}

function About(props) {
  const leaders = props.leaders.map((leader) => {
    return <RenderLeader leader={leader} />;
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Me</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Me</h3>
          <div className="row row-content">
            <div className="col-12">
              <Media list>{leaders}</Media>
            </div>
          </div>
          <hr />
        </div>
      </div>
      
    </div>
  );
}

export default About;
