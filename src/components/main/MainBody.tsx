import { Component } from "react";
import IList from "../../Utils/collections/List";

export interface ComponentsToDiplay {
    components: IList<Component>
}

class MainBody extends Component {

    render() {

        return (

            <div className="content">
                {this.props.children}

            </div>

        )
    }
}


export default MainBody