import Link from "next/link";
import React from "react";

type ServiceData = {
  id: string | number;
  icon: string;
  title: string;
  text: string;
};

interface SingleServices1Props {
  data: ServiceData;
}

const SingleServices1: React.FC<SingleServices1Props> = ({ data }) => {
  const { icon, title, text } = data;

  return (
    <div className="services-style-one">
      <i className={icon} style={{ color: "#f4d100" }}></i>
      <h4>
        {/* <Link href={`/services-details/${id}`}>{title}</Link> */}
        <Link href="#">{title}</Link>
      </h4>
      <p>{text}</p>
    </div>
  );
};

export default SingleServices1;
