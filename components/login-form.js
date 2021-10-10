import { useState } from "react";

export default function LoginForm() {

    return (
        <form className="items-center m-auto mt-5 border-2 border-green-500 rounded-lg w-3/4">
            <div className="w-100 bg-green-200 rounded-lg text-center">
            <label className="font-bold text-lg" htmlFor="username"><p className="pt-5">USER NAME</p></label>
                <br></br>
                <input className="w-3/4 mb-4" type="text" name="username" id="username" placeholder="User Name" />
                <br></br>
                <label className="font-bold text-lg " htmlFor="password">PASSWORD</label>
                <br></br>
                <input className="w-3/4 mb-8" type="password" placeholder="password" name="password" id="password"/>
                <br></br>
                <button className="mb-10 w-3/4 ml-5 mr-5 py-4 bg-green-600 font-bold rounded-md hover:bg-blue-500 " type="submit">SIGN IN</button>
            </div>
        </form>
    )
}