import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import Link from "react-router-dom";

export default function Restaurant(props) {
  const initialRestaurantState = {
    id: null,
    name: "",
    address: {},
    cuisine: "",
    reviews: [],
  };

  const [restaurant, setRestaurant] = useState(initialRestaurantState);

  const getRestaurant = (id) => {
    RestaurantDataService.get(id)
      .then((res) => {
        setRestaurant(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRestaurant(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Restaurant Reviews</h1>
      <br />
      {restaurant ? (
        <div>
          <h5>{restaurant.name}</h5>
          <p>
            <strong>Cuisine : </strong>
            {restaurant.cuisine}
            <br />
            <strong>Address : </strong>
            {restaurant.address.building} {restaurant.address.street} ,
            {restaurant.address.zipcode}
          </p>
          <div className="row">
            {restaurant.reviews.length > 0 ? (
              restaurant.reviews.map((review, index) => {
                return (
                  <div className="col-lg-4 pb-1" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                          {review.text}
                          <br />
                          <strong>User: </strong>
                          {review.name}
                          <br />
                          <strong>Date: </strong>
                          {review.data}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-sm-12 pt-3" style={{ textAlign: "center" }}>
                <p>No reviews yet!</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>No restaurant selected</p>
        </div>
      )}
    </div>
  );
}
