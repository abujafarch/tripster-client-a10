import { Helmet } from "react-helmet-async";
import MyList from "./MyList";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const MyLists = () => {

    const myLists = useLoaderData()
    const [newMyLists, setNewMyLists] = useState(myLists)

    return (
        <div className="mb-12">
            <Helmet>
                <title>My Lists | Tripster</title>
            </Helmet>
            <div className="h-[400px] relative">
                <img className="h-full w-full object-cover object-center" src="https://i.ibb.co/YZjth5K/mangrove-forest-in-phang-nga-bay-4k-thailand-b-Wtoa2a-Um-Zqara-Wkp-JRob-Wllr-Wdma2-U.jpg" />
                <div className="z-20 w-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="font-kaushan w-full text-center sm:text-5xl text-3xl font-bold text-[#e2e2e2]">My Lists</h1>
                </div>
                <div className="absolute w-full h-full left-0 bottom-0 bg-[#00000075]"></div>
            </div>

            <div className="relative -top-24 bg-white p-3 rounded-md  mt-5 max-w-[1480px] mx-auto px-3">
                <div className="grid  md-lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-5">
                    {
                        newMyLists.map(myList => <MyList key={myList._id} newMyLists={newMyLists} setNewMyLists={setNewMyLists} myList={myList}></MyList>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyLists;