import React, { useEffect, useState } from "react";
import { actionMovie } from "../../redux/action/actionMovie";
import Qualification from "../qualification/Qualification";
import imgNotFound from "../../assets/img/imgNotFound.png";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { request } from "../../axios";
import "./series.sass";
import Button from "../util/button/Button";

function Series(props) {
  const [series, setSeries] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    request("you", "series").then((response) => setSeries(response));
  }, []);

  const filterHandler = async (serie) => {
    const response = await request(serie, "series");
    return setSeries(response);
  };

  const reDirectHandler = (serie) => {
    dispatch(actionMovie(serie));
    return props.history.push(`/content`);
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div>
        <h2 className="series__title">Series</h2>
        <Button filterHandler={filterHandler} />
      </div>
      <div className="series">
        {series && series.length > 0
          ? series.map((serie, index) => {
              return (
                <div
                  onClick={() => reDirectHandler(serie)}
                  className="series__item"
                  key={index}
                >
                  <img
                    alt="img_series"
                    src={serie.Poster !== "N/A" ? serie.Poster : imgNotFound}
                  ></img>
                  <h5>{serie.Title}</h5>
                  <Qualification id={serie.imdbID} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default withRouter(Series);
