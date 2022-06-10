import React from "react";

const ProductSpecial = () => {
    return (
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Todays Special</h1>
                        <p className="text-base lg:text-xl text-gray-800 mt-2">
                            Hot Chips & gray <span className="font-bold">$4.00</span>
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end h-28">
                        <img src="https://thumbs.dreamstime.com/b/bowl-hot-chips-9002384.jpg" alt="" />
                    </div>
                </div>
                <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div className="flex flex-col justify-center z-10">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Tomorrows Special</h1>
                        <p className="text-base lg:text-xl text-gray-800">
                            Aussie Meat Pie <span className="font-bold">$3.50</span>
                        </p>
                    </div>
                    <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0 h-28 z-0">
                        <img src="https://www.kindpng.com/picc/m/544-5444255_mince-pie-png-image-meat-pie-transparent-background.png" alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSpecial;
