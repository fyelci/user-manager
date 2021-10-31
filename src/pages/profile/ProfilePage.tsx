import React from 'react';
import {useAuth} from "../../context/authContext";

const ProfilePage: React.FC = () => {
    const { user } = useAuth();
    const updateProfile = (e: React.SyntheticEvent) => {
        e.preventDefault();
        alert('Updating profile not implemented yet.')
    }

    return (
        <form onSubmit={(e) => updateProfile(e)}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Username</label>
                <input value={user?.username} type="text" disabled className="form-control" id="exampleFormControlInput1"
                       placeholder="Your username"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput2">First Name</label>
                <input value={user?.firstName} type="text" className="form-control" id="exampleFormControlInput2"
                       placeholder="First name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput3">Last Name</label>
                <input value={user?.lastName} type="text" className="form-control" id="exampleFormControlInput3"
                       placeholder="Last Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput4">User Group</label>
                <input disabled value={user?.userGroup} type="text" className="form-control" id="exampleFormControlInput4"/>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block" id="profileSubmit">
                Update
            </button>
        </form>
    );
};

export { ProfilePage };
