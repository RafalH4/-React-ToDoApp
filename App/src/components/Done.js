import React from "react";
import ReactDOM from "react-dom";

class DonePart extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const doneItems = this.props.items.map((item) => 
            (
                item.isDone ? <div key={item.id}>{item.title}</div>:null
            )
    );
    return (
      <div>
        <h2>Elementy wykonane</h2>
        {doneItems}
      </div>
    );
  }
}
export default DonePart;
