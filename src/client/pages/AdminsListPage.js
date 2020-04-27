import React,{ Component } from "react";
import {fetchAdmins} from '../actions'
import { connect } from "react-redux";
class AdminsListPage extends Component{
    componentDidMount(){
        this.props.fetchAdmins()
    }
    renderAdmins(){
        return this.props.admins.map(admin=>{
            return(<li key={admin.id}>{admin.name}</li>)
        })
    }
render(){
    return(
        <div>
        <h3>Protected List</h3>
<ul>{this.renderAdmins()}</ul>
</div>
    )
}
}
function mapStateToProps({admins}){
    return{admins}
}

export default {
    component:connect(mapStateToProps,{fetchAdmins})(AdminsListPage),
    loadDate:({dispatch})=>dispatch(fetchAdmins())
}