const UpdateSpot = () => {
    return (
        <div className="relative">
            <div className="md:h-[400px] h-[300px] relative">
                <img className="h-full w-full object-cover object-center" src="https://i.ibb.co/nLkwCxy/malaysia-f.jpg" />
                <h1 className="sm:text-5xl text-3xl w-full z-20 text-center font-kaushan absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#e2e2e2]">Update Spot</h1>
                <div className="absolute w-full h-full left-0 bottom-0 bg-[#00000075]"></div>
            </div>
            <div className="max-w-[1200px] mx-auto">
                <form className="mx-5 relative px-3 p-5 rounded-md bg-white -top-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div >
                            <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Tour Spot Name</p>
                            <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Tour Spot Name" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Image URL</p>
                            <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Image URL" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Country Name</p>
                            <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Country Name" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Location</p>
                            <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Location" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Average Cost</p>
                            <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Average Cost" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Seasonality</p>
                            <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Seasonality" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Tavel Time</p>
                            <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Travel Time" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Total Visitor Per Year</p>
                            <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Total Visitor Per Year" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg mb-1 font-macondo font-semibold text-dark-blue">Short Description</p>
                        <input type="text" className="pr-2 font-semibold text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border-2 border-dark-blue" placeholder="Short Description" />
                    </div>
                    <button className="py-2 w-full text-center text-white text-lg font-semibold font-macondo my-10 px-4 bg-dark-blue">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;