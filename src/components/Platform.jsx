import "../styles/destination.css";
import ProgressBar from "@ramonak/react-progress-bar";

function Platform({color,percentage,name,amount, percentPlus}) {
  return <div className="specific-platform">
  <p className="text-[
#22242C] font-semibold">{name}</p>
  <ProgressBar completed={percentage} maxCompleted={100} animateOnRender={true} bgColor={color}
   isLabelVisible={false}/>
  <div className="platform-footer">
  <p className="text-neutral">{amount}</p>
  <p>{percentPlus}</p>

  </div>

  </div>;
}

export default Platform;
