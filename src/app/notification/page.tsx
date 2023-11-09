import NotificationBox from "./component/notificationBox"

export default function notification(){
    return(
        <div className= 'relative overflow-hidden flex flex-col md:flex-col lg:flex-col bg-blue-50 w-full h-screen pb-36 lg:pb-300'>
            <h1 className='flex justify-center items-center text-[#3D688E] font-montserrat text-2xl lg:text-[48px] font-bold leading-normal tracking-wide mb-[30px] mt-[108px] lg:mt-[52px]'>
                Notification
            </h1>
            <NotificationBox packageId="1" statusText="sudah diantar" />
            <NotificationBox packageId="1" statusText="sudah diantar" />
        </div>
    );
}
