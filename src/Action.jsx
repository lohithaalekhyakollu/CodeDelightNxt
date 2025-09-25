import React from "react";
import "./Action.css";
import reactcoin from "./assets/react_coin.png"
const Action = () => {
    return (
              <div className="action_bar">
            <div className="action_container1">
                <img 
                    src={reactcoin}
                    alt="Coin" 
                    className="icon_coin" 
                />
                <span className="action_name1">0</span>
            </div>

            <div className="action_container">
                <i 
                    className="fa-solid fa-circle-user fa-xl" 
                    style={{ color: "white" }} 
                ></i>
                <span className="action_name">
                    <a 
                        href="../html/signin.html" 
                        style={{
                            color: "white", 
                            textDecoration: "none", 
                            fontWeight: 500
                        }}
                    >
                        Login
                    </a>
                </span>
            </div>
        </div>
    )
};

export default Action;