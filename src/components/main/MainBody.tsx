import React, { Component, Dispatch } from "react";
import Accordion from '../accordion/Accordion'
import TableTest from "../table/TableTest";
import ScanQRCode from "../../components/scan/ScanQRCode";
import IList from "../../Utils/collections/List";
import { IMainBodyState } from "../../models/states/IMainBodyState";
import { IMainBodyProps } from "../../models/props/IMainBodyProps";
import { connect } from 'react-redux'


export interface ComponentsToDiplay {
    components: IList<Component>
}

class MainBody extends Component {

    render() {
        // const justPrint = this.props.justPrint
        return (

            <div className="content">
                {this.props.children}
                {/* <Accordion />
                <TableTest /> */}
            </div>

        )
    }
}


export default MainBody