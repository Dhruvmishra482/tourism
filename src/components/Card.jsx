import { useState } from "react";

function Card({ id, name, info, image, price ,removeTour}) {
  const [readmore, setReadmore] = useState(false);
  const description = `${info.substring(0, 200)}....`;

  function readmorehandler() {
    setReadmore(!readmore);
  }
 
  return (
    <div className="card">
      <img src={image}  className="image" />
        <div className="tour-info">
          <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span   className="read-more" onClick={readmorehandler}>
            {readmore ? `show less` : `show more`}
          </span>
        </div>
      </div>
      <button className="btn-red"  type="submit" onClick={()=>(removeTour(id))}>Not Intersted</button>
      </div>
  );
} 
export default Card;
