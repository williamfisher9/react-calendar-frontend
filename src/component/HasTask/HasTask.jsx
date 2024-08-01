import "./HasTask.css";
function HasTask(props) {
  if (props.showIcon) return <div className="has-task"></div>;
  else return null;
}

export default HasTask;
