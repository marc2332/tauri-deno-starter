import React, { useState } from "https://esm.sh/react@18";
import { dialog } from "https://esm.sh/@tauri-apps/api";
import { tw } from 'https://cdn.skypack.dev/twind'

export default function App(){

    const [state, setState] = useState("Click the button!")

    function askUser(){
        dialog.ask("Are you ok? :)", "Hey!").then((res: boolean) => {
            if(res){
                setState("You are good!")
            } else {
                setState("You are not good D:")
            }
        })
    }

    return (
        <div className={tw`mx-10 my-5 `}>
            <h1 className={tw`text-xl`}>{state}</h1>
            <button className={tw`my-2 px-3 py-2 rounded-lg bg-gray-900 text-white transition duration-150 ease-in-out`} onClick={askUser}>Click me :)</button>
        </div>
    )
}