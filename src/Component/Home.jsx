import "./home.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [title, SetTitle] = useState("spati.At");

  const [inputType, setInputType] = useState("text");

  const [inputPlaceholder, setInputPlaceholder] = useState("Enter Post Code");

  const [inputValue, setInputValue] = useState("");

  const [backgroundColo, setBackgroundColo] = useState({
    BackGroundColor: "",
    Color: "",
  });

  const [addressBackColor, setaddressBackColor] = useState({
    addBackGroundColo: "",
    addColo: "",
  });

  const [postBackColor, setpostBackColor] = useState({
    postBackGroundColo: "",
    postColo: "",
  });

  const [placehold, setPlacehold] = useState("Snacks, Cigarettes, Drinks, etc");

  const [inputTy, setInputTy] = useState("text");

  const [specialProBackColo, setspecialProBackColo] = useState({
    specialBackGroundColor: "",
    specialColo: "",
  });

  const [shopTwentyBackColo, setshopTwentyProBackColo] = useState({
    shopTwentyBackGroundColor: "",
    shopTwentyColo: "",
  });

  const [vendingBackColo, setvendingBackColo] = useState({
    vendingBackGroundColor: "",
    vendingColo: "",
  });

  const [locationIcon, setLocationIcon] = useState("");


  const [filterbitton, setfilterbitton] = useState({
    backGroundColor: "",
    Colo: "",
    borderr: "",
  });

  const [value, setValue] = useState("");

  const buttonReff = useRef(null);

  const inputHandler = (e) => {
    const value = e.target.value;
    setValue(value);

    if (value.trim() !== "") {
      setfilterbitton({
        backGroundColor: "orangered",
        Colo: "white",
        borderr: "none",
      });
    } else {
      setfilterbitton({ backGroundColor: "", Colo: "", borderr: "" });
    }
  };

  const vendingManchine = (e) => {
    e.preventDefault();
    if (inputTy === "text") {
      setInputTy("text");
      setPlacehold("Snacks, Cigarettes, Drinks, etc");
      setspecialProBackColo({ specialBackGroundColor: "", specialColo: "" });
      setshopTwentyProBackColo({
        shopTwentyBackGroundColor: "",
        shopTwentyColo: "",
      });
      setvendingBackColo({
        vendingBackGroundColor: "orangered",
        vendingColo: "white",
      });
      console.log(true);
    }
  };

  const specialProduct = (e) => {
    e.preventDefault();
    if (inputTy === "text") {
      setInputTy("text");
      setPlacehold("Iced Tea Peach, etc");
      setspecialProBackColo({
        specialBackGroundColor: "orangered",
        specialColo: "white",
      });
      setshopTwentyProBackColo({
        shopTwentyBackGroundColor: "",
        shopTwentyColo: "",
      });
      setvendingBackColo({ vendingBackGroundColor: "", vendingColo: "" });
      console.log(true);
    }
  };

  const shopTwentyFourSeven = (e) => {
    e.preventDefault();
    if (inputTy === "text") {
      setInputTy("text");
      setPlacehold("24/7 Store");
      setspecialProBackColo({ specialBackGroundColor: "", specialColo: "" });
      setshopTwentyProBackColo({
        shopTwentyBackGroundColor: "orangered",
        shopTwentyColo: "white",
      });
      setvendingBackColo({ vendingBackGroundColor: "", vendingColo: "" });
    }
  };

  const filterButton = (e) => {
    e.preventDefault();
  };

  const LocationinputHandler = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() !== "") {
      setfilterbitton({
        backGroundColor: "orangered",
        Colo: "white",
        borderr: "none",
      });
    } else {
      setfilterbitton({ backGroundColor: "", Colo: "", borderr: "" });
    }
  };

  const AddressEventHandler = (e) => {
    e.preventDefault();
    if (inputType === "text") {
      setInputPlaceholder("Enter your Address");
      setInputValue("");
      setLocationIcon("");
      setBackgroundColo({ BackGroundColor: "", Color: "" });
      setaddressBackColor({ addBackGroundColo: "orangered", addColo: "white" });
      setpostBackColor({ postBackGroundColo: "", postColo: "" });
      console.log(true);
    } else {
      setInputType("text");
      setInputPlaceholder("Enter your Address");
      setInputValue("");
      setLocationIcon("");
      setBackgroundColo({ BackGroundColor: "", Color: "" });
      setaddressBackColor({ addBackGroundColo: "orangered", addColo: "white" });
      setpostBackColor({ postBackGroundColo: "", postColo: "" });
      console.log(false);
    }
  };

  const getLocationEventHandler = (e) => {
    e.preventDefault();
    if (inputType === "text") {
      setInputType("button");
      setInputPlaceholder((placeholder) => (placeholder = ""));
      setInputValue((value) => (value = "Get My Location"));
      setLocationIcon("fa-location-crosshairs");
      setBackgroundColo({ BackGroundColor: "orangered", Color: "white" });
      setaddressBackColor({ addBackGroundColo: "", addColo: "" });
      setpostBackColor({ postBackGroundColo: "", postColo: "" });
      console.log(true);
      console.log(myInputRef);
    } else {
      setInputType("button");
      setInputPlaceholder("");
      setInputValue((value) => (value = "Get My Location"));
      setLocationIcon("fa-location-crosshairs");
      setBackgroundColo({ BackGroundColor: "orangered", Color: "white" });
      setaddressBackColor({ addBackGroundColo: "", addColo: "" });
      setpostBackColor({ postBackGroundColo: "", postColo: "" });
      console.log(false);
      console.log(myInputRef);
    }
  };

  const postcodeHandler = (e) => {
    e.preventDefault();
    if (inputType === "text") {
      setInputPlaceholder("Enter Post Code");
      setInputValue("");
      setLocationIcon("");
      setBackgroundColo({ BackGroundColor: "", Color: "" });
      setaddressBackColor({ addBackGroundColo: "", addColo: "" });
      setpostBackColor({ postBackGroundColo: "orangered", postColo: "white" });
      console.log(true);
    } else {
      setInputType("text");
      setInputPlaceholder("Enter Post Code");
      setInputValue("");
      setLocationIcon("");
      setBackgroundColo({ BackGroundColor: "", Color: "" });
      setaddressBackColor({ addBackGroundColo: "", addColo: "" });
      setpostBackColor({ postBackGroundColo: "orangered", postColo: "white" });
      console.log(false);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="desc">
        <p className="desc_texts">
          <span>Find the nearest</span>Vending Machine, 24/7 Shop,<br></br>
          or a Special Product
        </p>
      </div>

      <div className="dev_form">
        <form className="frm_searc_location">
          <p className="head_text">Give us your location</p>
          <div className="dev_button">
            <button
              type="submit"
              onClick={postcodeHandler}
              style={{
                backgroundColor: `${postBackColor.postBackGroundColo}`,
                color: `${postBackColor.postColo}`,
              }}
            >
              <i class="fa-solid fa-location-dot"></i> Post Code
            </button>

            <button
              type="submit"
              onClick={AddressEventHandler}
              style={{
                backgroundColor: `${addressBackColor.addBackGroundColo}`,
                color: `${addressBackColor.addColo}`,
              }}
            >
              <i class="fa-solid fa-location-dot"></i> Address
            </button>

            <button
              type="submit"
              onClick={getLocationEventHandler}
              style={{
                backgroundColor: `${backgroundColo.BackGroundColor}`,
                color: `${backgroundColo.Color}`,
              }}
            >
              <i
                className="fa-solid fa-location-crosshairs"
                // onClick={handleLocationIcon}
                // ref={myInputRef}
              ></i>{" "}
              Get Location
            </button>
            <input
              type={inputType}
              placeholder={inputPlaceholder}
              value={inputValue}
              onInput={LocationinputHandler}
            />
            <i className={`fa-solid ${locationIcon}`} id="fa_solid_Icon"></i>
          </div>
          <hr
            style={{
              width: "520px",
              marginRight: "0",
              marginLeft: "70px",
              color: "gainsboro",
              marginTop: "15px",
              marginBottom: "0",
            }}
          ></hr>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            What are you looking for?
          </p>
        </form>
      </div>
      <div className="search_dev_form">
        <form className="formm">
          <div className="button_dev">
            <button
              onClick={vendingManchine}
              type="submit"
              style={{
                backgroundColor: `${vendingBackColo.vendingBackGroundColor}`,
                color: `${vendingBackColo.vendingColo}`,
              }}
            >
              Vending Manchine
            </button>
            <button
              onClick={specialProduct}
              type="submit"
              style={{
                backgroundColor: `${specialProBackColo.specialBackGroundColor}`,
                color: `${specialProBackColo.specialColo}`,
              }}
            >
              Special Product
            </button>
            <button
              onClick={shopTwentyFourSeven}
              type="submit"
              style={{
                backgroundColor: `${shopTwentyBackColo.shopTwentyBackGroundColor}`,
                color: `${shopTwentyBackColo.shopTwentyColo}`,
              }}
            >
              24/7 Shop
            </button>
            <div className="inpu">
              <input
                type={inputTy}
                placeholder={placehold}
                value={value}
                onInput={inputHandler}
              />{" "}
              <button
                onClick={filterButton}
                type="submit"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {" "}
                Filter{" "}
                <i
                  style={{ paddingLeft: "5px" }}
                  class="fa-solid fa-bars"
                ></i>{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
      <br></br>
      <br></br>

      <div className="find_now_bitton">
        <button
          type="submit"
          ref={buttonReff}
          style={{
            backgroundColor: `${filterbitton.backGroundColor}`,
            color: `${filterbitton.Colo}`,
            border: `${filterbitton.borderr}`,
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/results"
          >
            Find
          </Link>
        </button>
      </div>
      <br></br>
      <br></br>

      <div className="dev_contact_form">
        <form className="contact_form">
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            {" "}
            <h2>Contact Us</h2>
          </p>
          <div className="name_input">
            <label>Name</label>
            <br></br>
            <br></br>
            <input type="text" placeholder="Your name here" />
          </div>

          <div className="email_input">
            <label>Email</label>
            <br></br>
            <br></br>
            <input type="email" placeholder="Your email" />
          </div>
          <br></br>
          <label className="textarea_label">Message</label>
          <br></br>
          <br></br>
          <textarea
            placeholder="Write here"
            id=""
            cols="62"
            rows="8"
          ></textarea>
          <br></br>
          <br></br>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* { Button trigger modal } */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

      {/* { Modal } */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-header"
                style={{ border: "none", marginLeft: "120px" }}
              >
                <h1
                  class="modal-title fs-6"
                  style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                  id="exampleModalLabel"
                >
                  Vending machine for
                </h1>
              </div>
              <div class="modal-body">
                <div className="modal_buttons">
                  <button type="submit">Snacks</button>
                  <button type="submit">Cigarettes</button>
                  <button type="submit">Drinks</button>
                  <button type="submit">Sweets</button>
                </div>
                <br></br>
                <div className="modal_buttons">
                  <button type="submit">Coffe</button>
                  <button type="submit">Soda</button>
                  <button type="submit">Bakes</button>
                </div>
                <br></br>
              </div>
              <div class="modall-footer" style={{ border: "none" }}>
                <button type="button">Done</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default Home;
