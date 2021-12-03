import React from "react";

const ObLayout = ({imgLeftTop, imgRightBottom, imgDarkLeftTop, imgDarkRightBottom, imgRightTop, imgDarkRightTop, imgLeftBottom, imgDarkLeftBottom, children}) => {
    return (
        <div className="flex flex-col lg:flex-row w-full p-5 py-8 min-h-screen justify-between">
            <div className="flex flex-col flex-grow justify-between mt-10 lg:mt-0">
                <div className="self-start">
                    <img className="no_dark" src={imgLeftTop} alt=""/>

                    <img className="no_light" src={imgDarkLeftTop} alt=""/>
                </div>

                <div className="self-start">
                    <img className="no_dark" src={imgLeftBottom} alt=""/>

                    <img className="no_light" src={imgDarkLeftBottom} alt=""/>
                </div>
            </div>

            <div className="self-center max-w-card">
                {children}
            </div>

            <div className="flex flex-col flex-grow justify-between">
                <div className="self-end">
                    <img className="no_dark mt-8" src={imgRightTop} alt=""/>

                    <img className="no_light mt-8" src={imgDarkRightTop} alt=""/>
                </div>

                <div className="self-end">
                    <img className="no_dark" src={imgRightBottom} alt=""/>

                    <img className="no_light" src={imgDarkRightBottom} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ObLayout;