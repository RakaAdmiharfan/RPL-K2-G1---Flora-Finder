"use client";
import React from "react";

interface NotificationBoxProps {
    packageId: string;
    statusText: string;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({ packageId, statusText }) => {
    return (
        <div className='flex justify-center items-center mb-3 '>
            <div className="w-[306px] h-[53px] bg-slate-600 rounded-[5px] drop-shadow-2xl">
                <div className="flex flex-row">
                    <div className="py-[15px] pl-[10px]">
                        <img src="bell.svg" className="relative" alt="bell"></img>
                    </div>
                    <div className="pl-[10px] py-[12px] font-bold font-montserrat text-[10px]">
                        <h1>Status Changed</h1>
                        <b className="text-[8px] font-normal font-montserrat">
                            Paket dengan ID {packageId} {statusText}
                        </b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationBox;

