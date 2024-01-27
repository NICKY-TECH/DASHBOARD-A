import "../styles/destination.css";
import CardWrapper from "./CardWrapper";
import Chart from "./Chart";
import Platform from "./Platform";
import Table from "./Table";
import { Link } from "react-router-dom";

function MainBody() {
  return (
    <section className="main-body">
      <div className="main-top-section">
        <Chart />
        <CardWrapper />
      </div>
      <div className="main-bottom-section">
        <div className="table-container">
        <div className="platform-top-section">
      <p className="text-[#26282C] font-extrabold text-xl">Last Orders</p>
      <a href="/" className="text-[#34CAA5] font-bold">See All</a>
      </div>
          <Table />
        </div>
        <div className="top-platform">
      <div className="platform-top-section">
      <p className="text-[#26282C] font-extrabold text-xl">Top Platform</p>
      <a href="/" className="text-[#34CAA5] font-semibold">See All</a>
      </div>
          <Platform
            color="#6160DC"
            percentage={55}
            amount="$2,500,000"
            name="Book Bazaar"
            percentPlus="+15%"
          />
          <Platform
            color="#54C5EB"
            percentage={27.5}
            amount="$1,800,000"
            name="Artisan Aisle"
            percentPlus="+10%"
          />
          <Platform
            color="#FFB74A"
            percentage={13.75}
            amount="$1,200,000"
            name="Toy Troop"
            percentPlus="+8%"
          />
          <Platform
            color="#FF4A55"
            percentage={13.75}
            amount="$1,200,000"
            name="XStore"
            percentPlus="+8%"
          />
        </div>
      </div>
    </section>
  );
}

export default MainBody;
