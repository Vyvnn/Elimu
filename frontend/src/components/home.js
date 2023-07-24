import "../index.css";

import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <div className="homepage">
      <div id="welcome">
        <h3>Elimu</h3>
        <br />
        <h3>
          A one stop shop bringing together parents, teachers and students.{" "}
        </h3>
        <Link to={"/profile"} id="welcomesignin">
          <button id="welcomesignin">SIGN I</button>
        </Link>
      </div>
      <section className="work-section section" >
        <div className="column">
          <div className="containerposition">
            <div className="item col-md-4">
              <div className="tm-work-item-inner">
                <h3>Student</h3>
                <img src="images/icon.jpg" alt="" width="50" height="50" />
                <p>
                  The student is able to view his grades and teachers remark.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="containerposition">
          <div className="column">
            <div className="item col-md-4">
              <div className="tm-work-item-inner">
                <h3>Parent</h3>
                <img src="images/parent.png" alt="" width="50" height="50" />
                <p>
                  The parent is able to view specific student performance as
                  well as the teachers remarks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="containerposition">
          <div className="column">
            <div className="item col-md-4">
              <div className="tm-work-item-inner">
                <h3>Teacher</h3>
                <img src="images/teacher.jpg" alt="" width="50" height="50" />
                <p>
                  The teacher is able to give student grade and remarks per
                  subject taken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="aboutus">
        <h2>About Us</h2>
        <p>
          Elimu is a classroom management tool that enables schools to bring
          <br />
          parents,teachers and students into classroom communities
          <br />
          so they can track and enhance classroom behavior in real-time.
        </p>
      </div>
    </div>
  );
};

export default Home;
