import React from "react";
import { Avatar } from "../common";
import "./TutorRow.scss";
import { AiFillStar } from "react-icons/ai";
export const TutorRow: React.FC<ITutorRow> = ({
  index,
  name,
  email,
  phone,
  avatar,
  onClick,
  rating,
}) => {
  return (
    <tr className="tutor-row" key={index} onClick={onClick}>
      <td>{index}</td>
      <td>
        <div className="tutor-row__name">
          <Avatar
            image={
              avatar === ""
                ? "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                : avatar
            }
            height={50}
            width={50}
            marginRight={12}
          />
          {name}
        </div>
      </td>
      <td>{phone}</td>
      <td className="tutor-row__email"> {email}</td>
      <td>
        <span className="course-row__rating">
          <AiFillStar size={22} style={{ marginRight: 8, color: "orange" }} />
          {rating}
        </span>
      </td>
      {/* <td
        onClick={(e) => {
          e.stopPropagation();
          return onClickDelete();
        }}
      >
        <MdBlock size={24} />
      </td> */}
    </tr>
  );
};
