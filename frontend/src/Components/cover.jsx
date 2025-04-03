import abcover from "../assets/imgs/abcover.png";
const Cover = ({ title, sub1 ,sub2 }) => {
    return (
        <div className="relative  mb-30 p-2">
            {/* Background Image */}
            <img 
                src={abcover} 
                className="w-full h-[300px] sm:h-[400px] md:h-[700px]  object-cover opacity-80" 
                alt="Cover"
            />

            {/* Overlay Text - Modified to align at bottom */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-white ">
              <div>  <p className="text-2xl  sm:text-3xl md:text-4xl lg:text-7xl font-bold poppins-font">
                    {title}  {/* Dynamic Title */}
                </p>
                </div>
                <div className="flex items-center space-x-3 text-lg sm:text-xl md:text-2xl mb-20 font-bold">
                    <p className="text-orange-500">{sub1}</p>
                    <p className="">{'/'}</p>
                    <p>{sub2}</p> 
                </div>
            </div>
        </div>
    );
};

export default Cover;
