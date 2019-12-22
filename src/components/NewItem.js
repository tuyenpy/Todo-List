import React, {Component} from 'react';
import '../style/NewItem.css';

class NewItem extends Component {
    render() {
        let {onKeyUp} = this.props;
        return(
            <div className="NewItem">
                {/* <img src={src}></img> */}
                <input type="text" 
                placeholder="What needs to be done?" 
                onKeyUp={onKeyUp}
                ></input>
            </div>
        )
    }
}

export default NewItem;