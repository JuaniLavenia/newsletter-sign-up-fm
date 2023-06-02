import imgC from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="mainContainer">
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-463">
              <img src={imgC} className="img-fluid imgCard" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">Stay updated!</h1>
                <p className="card-text">
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
                <div className="d-flex">
                  <img src={iconList} className="imgIcon img-fluid" />
                  <h6>Product discovery and building what matters</h6>
                </div>
                <div className="d-flex">
                  <img src={iconList} className="imgIcon img-fluid" />
                  <h6>Measuring to ensure updates are a success</h6>
                </div>
                <div className="d-flex">
                  <img src={iconList} className="imgIcon img-fluid" />
                  <h6>And much more!</h6>
                </div>

                <form>
                  <div className="formC d-flex">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="email@company.com"
                      className="inputE"
                    />
                  </div>
                  <button className="btn">
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
