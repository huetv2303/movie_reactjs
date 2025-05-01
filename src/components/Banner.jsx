import rating from "../assets/rating.png"
import ratinghalf from "../assets/rating-half.png"
import temp1 from "../assets/temp-1.jpeg"
import iconPlay from "../assets/play-button.png"
const Banner = () => {
    return <div className="w-full h-[700px] bg-banner bg-center bg-cover bg-no-repeat relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
        <div className="w-full h-full flex items-center justify-center space-x-[30px] relative z-20 p-10">
            <div className="flex flex-col space-y-5 items-baseline w-[50%] ">
                <p className="text-white bg-gradient-to-r from-red-600 to-red-200 py-2 px-5 text-md ">TV Show</p>
                <div className="flex flex-col space-y-4 ">
                    <h1 className="text-white text-5xl font-bold" >Nghe nói em thích tôi</h1>
                    <div className="flex items-center space-x-3">
                        <img src={rating} alt="" className="w-[30px] h-[30px]" />
                        <img src={rating} alt="" className="w-[30px] h-[30px]" />
                        <img src={rating} alt="" className="w-[30px] h-[30px]" />
                        <img src={rating} alt="" className="w-[30px] h-[30px]" />
                        <img src={ratinghalf} alt="" className="w-[30px] h-[30px]" />
                    </div>
                    <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic
                        typesetting, </p>
                    <div className="flex items-center space-x-4">
                        <button className="bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700">More Info</button>
                        <button className="bg-red-700 text-white p-3 rounded-md hover:bg-red-500">Watch Now</button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
                <div className="w-[300px] h-[400px]  relative ">
                    <img src={temp1} alt="" className="w-full h-full object-cover " />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center
                     backdrop-blur-sm opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                        <img src={iconPlay} alt="" className="w-16 h-16 relative z-20" />
                    </div>

                </div>


            </div>
        </div>



    </div>
}

export default Banner
