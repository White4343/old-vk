import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: true
    }

    toggleEditMode() {
        if (!this.state.editMode) {
            this.setState({
                editMode: true
            })
        } else {
            this.setState({
                editMode: false
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.toggleEditMode.bind(this)}> {this.props.status} </span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.toggleEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;