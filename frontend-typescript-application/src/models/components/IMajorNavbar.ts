import React from "react";

export interface IMajorNavbar {
    email: string,
    isAuth: boolean,
    id: string
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}