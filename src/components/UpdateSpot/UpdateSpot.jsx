import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    const updateData = useLoaderData()
    const { average_cost, image, seasonality, totalVisitorPerYear, tourists_spot_name, travel_time, country_name, location, short_description, _id } = updateData

    const handleUpdateSpot = (e) => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const tourists_spot_name = form.spotName.value
        const country_name = form.country.value
        const location = form.location.value
        const short_description = form.description.value
        const average_cost = form.cost.value
        const seasonality = form.seasonality.value
        const travel_time = form.travelTime.value
        const totalVisitorPerYear = form.visitor.value

        const updatedSpot = { image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorPerYear }
        console.log(updatedSpot)

        fetch(`http://localhost:5000/update-spot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: `${tourists_spot_name} Updated Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className="relative">
            <Helmet>
                <title>Update Spot | Tripster</title>
            </Helmet>
            <div className="md:h-[400px] h-[300px] relative">
                <img className="h-full w-full object-cover object-center" src="https://i.ibb.co/nLkwCxy/malaysia-f.jpg" />
                <h1 className="sm:text-5xl text-3xl w-full z-20 text-center font-kaushan absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#e2e2e2]">Update Spot</h1>
                <div className="absolute w-full h-full left-0 bottom-0 bg-[#00000075]"></div>
            </div>
            <div className="max-w-[1200px] mx-auto">
                <form onSubmit={handleUpdateSpot} className="mx-5 relative px-3 p-5 rounded-md bg-white -top-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Tour Spot Name</p>
                            <input type="text" name="spotName" defaultValue={tourists_spot_name} className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Tour Spot Name" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Image URL</p>
                            <input type="text" name="image" defaultValue={image} className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Image URL" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Country Name</p>
                            <select name="country" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue">
                                <option selected={country_name === 'Bangladesh'} value="Bangladesh">Bangladesh</option>
                                <option selected={country_name === 'Thailand'} value="Thailand">Thailand</option>
                                <option selected={country_name === 'Indonesia'} value="Indonesia">Indonesia</option>
                                <option selected={country_name === 'Malaysia'} value="Malaysia">Malaysia</option>
                                <option selected={country_name === 'Cambodia'} value="Cambodia">Cambodia</option>
                                <option selected={country_name === 'Vietnam'} value="Vietnam">Vietnam</option>
                            </select>
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Location</p>
                            <input type="text" name="location" defaultValue={location} className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Location" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Average Cost</p>
                            <input type="text" name="cost" defaultValue={average_cost} className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Average Cost" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Seasonality</p>
                            <input type="text" name="seasonality" defaultValue={seasonality} className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Seasonality" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Tavel Time</p>
                            <input type="text" name="travelTime" defaultValue={travel_time} className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Travel Time" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Total Visitor Per Year</p>
                            <input type="text" name="visitor" defaultValue={totalVisitorPerYear} className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Total Visitor Per Year" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg mb-1 font-macondo text-light-blue">Short Description</p>
                        <input type="text" name="description" defaultValue={short_description} className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Short Description" />
                    </div>
                    <button className="py-2 w-full text-center text-white text-lg font-semibold font-macondo my-10 px-4 bg-light-blue">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;