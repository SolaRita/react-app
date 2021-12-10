import React, { Component } from "react";
import del from "../assets/ico/delete.svg";
import edit from "../assets/ico/edit.svg";
import eye from "../assets/ico/eye.svg";
import heart from "../assets/ico/heart.svg";
import star from "../assets/ico/star.svg";


class Card extends Component {
  render() {
    return (
      <div>
        <div className="ct-card">
          <div className="ct-card-img">
            <img className="img-card" src={require(`../assets/img/${this.props.imgURL}.jpg`).default} alt={this.props.imgURL} srcset="" />
          </div>
          <div className="info">
            <div className="iconos">
              <div className="reaccion">
                  <button ><img className="icono" src={star} alt="star" /></button>
                  <button ><img className="icono" src={heart} alt="heart" /></button>
                  <button ><img className="icono" src={eye} alt="eye" /></button>
              </div>
              <div className="edicion">
                    <button ><img className="icono" src={edit} alt="edit" /></button>
                    <button ><img className="icono" src={del} alt="delete" /></button>
              </div>
            </div>
            <div className="texto">
              <h3 className="textotiulo"> Aqui va el Name {this.props.imgName}</h3>
              <p className="user">Aqui va el user {this.props.imgUser}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
