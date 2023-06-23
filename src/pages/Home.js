import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 20000);

    return () => clearTimeout(fadeOutTimeout);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #FFFFFF, #E3FCE9, #BEF7CC)' }}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ background: '#E3FCE9' }}>
        <img
          src={process.env.PUBLIC_URL + '/ecomercado-logo.png'}
          width="240"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
          style={{ marginLeft: "50px" }}
        />
        <div className="container">
          <form className="d-flex justify-content-center" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "600px", borderColor: "#05652D" }}
            />
            <button className="btn" type="submit" style={{ borderColor: "#05652D" }}>
              <img
                src={process.env.PUBLIC_URL + "/search-icon.png"}
                alt="Search"
                className="nav-icon"
                style={{
                  transform: hoveredIndex === 4 ? "scale(1.1)" : "scale(1)",
                }}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
              />
            </button>
          </form>
          <button className="btn" type="submit" style={{ borderColor: "transparent" }}>
            <img
              src={process.env.PUBLIC_URL + "/shopping-cart.png"}
              alt="Cart"
              className="nav-icon"
              style={{
                transform: hoveredIndex === 3 ? "scale(1.1)" : "scale(1)",
              }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            />
          </button>
          <div className="d-flex justify-content-end align-items-center w-100">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={process.env.PUBLIC_URL + "/home.png"}
                      alt="Home"
                      className="nav-icon"
                      style={{
                        transform: hoveredIndex === 0 ? "scale(1.1)" : "scale(1)",
                      }}
                      onMouseEnter={() => handleMouseEnter(0)}
                      onMouseLeave={handleMouseLeave}
                    />
                    Home
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={process.env.PUBLIC_URL + "/notification.png"}
                      alt="notif"
                      className="nav-icon"
                      style={{
                        transform: hoveredIndex === 1 ? "scale(1.1)" : "scale(1)",
                      }}
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    />
                    Notification
                  </div>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/home">
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={process.env.PUBLIC_URL + "/settings.png"}
                      alt="Option"
                      className="nav-icon"
                      style={{
                        transform: hoveredIndex === 2 ? "scale(1.1)" : "scale(1)",
                      }}
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                    />
                    Settings
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr style={{ backgroundColor: '#05652D', height: '2px', margin: '0' }} />

      {showWelcomeMessage && (
        <p className="welcome-message" style={{ color: "#726A8A", fontSize: "21px" }}>
          Hello {location.state?.id} and welcome to ECOMercado!
        </p>
      )}

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card" style={{ backgroundColor: "transparent", border: "none" }}>
              <div className="card-body">
                <div className="carousel-wrapper">
                  <h2 className="sale-alert" style={{ color: "#05652D", textAlign: "center" }}>
                    HUGE SALE ALERT
                  </h2>
                  <Carousel showThumbs={false} autoPlay renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                      return (
                        <li
                          style={{ background: "#05652D", borderRadius: "50%", width: "10px", height: "10px", display: "inline-block", margin: "0 4px", cursor: "pointer" }}
                          onClick={onClickHandler}
                          key={index}
                          role="button"
                          tabIndex={0}
                          aria-label={`${label} ${index + 1}`}
                        />
                      );
                    }
                    return (
                      <li
                        style={{ background: "#05652D", borderRadius: "50%", width: "6px", height: "6px", display: "inline-block", margin: "0 4px", cursor: "pointer" }}
                        onClick={onClickHandler}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                      />
                    );
                  }}>
                    <div>
                      <img src="Sale1.jpg" alt="Sale 1" style={{ width: "100%", height: "auto" }} />
                      <p className="sale-label" style={{ color: "#05652D" }}>
                        It is 60% off than the original
                      </p>
                    </div>
                    <div>
                      <img src="Sale2.jpg" alt="Sale 2" style={{ width: "100%", height: "auto" }} />
                      <p className="sale-label" style={{ color: "#05652D" }}>
                        It is 70% off than the original
                      </p>
                    </div>
                    <div>
                      <img src="Sale3.jpg" alt="Sale 3" style={{ width: "100%", height: "auto" }} />
                      <p className="sale-label" style={{ color: "#05652D" }}>
                        It is 50% off than the original
                      </p>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendation-card" style={{ background: "#FFFFFF", borderRadius: "20px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginTop: "10px", marginLeft: "400px", marginRight: "400px"}}>
        <div className="recommendation-links" style={{ display: "flex", justifyContent: "center", padding: "10px" }}> 
          <Link
            className="nav-link"
            to="/donate"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              transform: hoveredIndex === 11 ? "scale(1.1)" : "scale(1)",
              margin: "0 10px",
            }}
            onMouseEnter={() => handleMouseEnter(11)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={process.env.PUBLIC_URL + "/donate.png"}
              alt="Donate"
              style={{ width: "30px", height: "30px", marginBottom: "5px" }}
            />
            Donate
          </Link>
          <Link
            className="nav-link"
            to="/campaign"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              transform: hoveredIndex === 12 ? "scale(1.1)" : "scale(1)",
              margin: "0 10px",
            }}
            onMouseEnter={() => handleMouseEnter(12)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={process.env.PUBLIC_URL + "/campaign.png"}
              alt="Campaign"
              style={{ width: "30px", height: "30px", marginBottom: "5px" }}
            />
            Campaign
          </Link>
          <Link
            className="nav-link"
            to="/become-seller"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              transform: hoveredIndex === 13 ? "scale(1.1)" : "scale(1)",
              margin: "0 10px",
            }}
            onMouseEnter={() => handleMouseEnter(13)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={process.env.PUBLIC_URL + "/become-seller.png"}
              alt="Become a Seller"
              style={{ width: "30px", height: "30px", marginBottom: "5px" }}
            />
            Become a Seller
          </Link>
          <Link
            className="nav-link"
            to="/eco-lover-rewards"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              transform: hoveredIndex === 14 ? "scale(1.1)" : "scale(1)",
              margin: "0 10px",
            }}
            onMouseEnter={() => handleMouseEnter(14)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={process.env.PUBLIC_URL + "/eco-lover-rewards.png"}
              alt="ECO-lover Rewards"
              style={{ width: "30px", height: "30px", marginBottom: "5px" }}
            />
            ECO-lover Rewards
          </Link>
          <Link
            className="nav-link"
            to="/wishlist"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              transform: hoveredIndex === 15 ? "scale(1.1)" : "scale(1)",
              margin: "0 10px",
            }}
            onMouseEnter={() => handleMouseEnter(15)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={process.env.PUBLIC_URL + "/wishlist.png"}
              alt="Wishlist"
              style={{ width: "30px", height: "30px", marginBottom: "5px" }}
            />
            Wishlist
          </Link>
          <Link
            className="nav-link"
            to="/order-history"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              transform: hoveredIndex === 16 ? "scale(1.1)" : "scale(1)",
              margin: "0 10px",
            }}
            onMouseEnter={() => handleMouseEnter(16)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={process.env.PUBLIC_URL + "/order-history.png"}
              alt="Order History"
              style={{ width: "30px", height: "30px", marginBottom: "5px" }}
            />
            Order History
          </Link>
        </div>
      </div>
      <div className="recommendation-wrapper" style={{ marginTop: "20px" }}>
        <h2 className="recommendation-title" style={{ color: "#05652D", textAlign: "center" }}>
          RECOMMENDED FOR YOU
        </h2>
        <div className="recommendation-images" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <div
            className="recommendation-item"
            style={{
              margin: "10px",
              textAlign: "center",
              transition: "transform 0.3s",
              transform: hoveredIndex === 6 ? "scale(1.1)" : "scale(1)",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <img src="shoes.png" alt="Shoes" style={{ width: "180px", height: "120px" }} />
            <p className="recommendation-label" style={{ color: "#05652D", fontSize: "16px", marginTop: "10px" }}>
              Shoes
            </p>
          </div>
          <div
            className="recommendation-item"
            style={{
              margin: "10px",
              textAlign: "center",
              transition: "transform 0.3s",
              transform: hoveredIndex === 7 ? "scale(1.1)" : "scale(1)",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            <img src="artworks.png" alt="Artworks" style={{ width: "180px", height: "120px" }} />
            <p className="recommendation-label" style={{ color: "#05652D", fontSize: "16px", marginTop: "10px" }}>
              Artworks
            </p>
          </div>
          <div
            className="recommendation-item"
            style={{
              margin: "10px",
              textAlign: "center",
              transition: "transform 0.3s",
              transform: hoveredIndex === 8 ? "scale(1.1)" : "scale(1)",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={handleMouseLeave}
          >
            <img src="homedecors.png" alt="Home Decors" style={{ width: "180px", height: "120px" }} />
            <p className="recommendation-label" style={{ color: "#05652D", fontSize: "16px", marginTop: "10px" }}>
              Home Decors
            </p>
          </div>
          <div
            className="recommendation-item"
            style={{
              margin: "10px",
              textAlign: "center",
              transition: "transform 0.3s",
              transform: hoveredIndex === 9 ? "scale(1.1)" : "scale(1)",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={handleMouseLeave}
          >
            <img src="collectibles.png" alt="Collectibles" style={{ width: "180px", height: "120px" }} />
            <p className="recommendation-label" style={{ color: "#05652D", fontSize: "16px", marginTop: "10px" }}>
              Collectibles
            </p>
          </div>
          <div
            className="recommendation-item"
            style={{
              margin: "10px",
              textAlign: "center",
              transition: "transform 0.3s",
              transform: hoveredIndex === 10 ? "scale(1.1)" : "scale(1)",
              borderRadius: "50%",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
            onMouseEnter={() => handleMouseEnter(10)}
            onMouseLeave={handleMouseLeave}
          >
            <img src="furnitures.png" alt="Furnitures" style={{ width: "180px", height: "120px" }} />
            <p className="recommendation-label" style={{ color: "#05652D", fontSize: "16px", marginTop: "10px" }}>
              Furnitures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;