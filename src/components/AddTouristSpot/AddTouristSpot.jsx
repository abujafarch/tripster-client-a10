import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";

const AddTouristSpot = () => {

    const { user } = useContext(AuthContext)

    const handleAddTouristSpot = (e) => {
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
        const user_email = form.email.value
        const user_name = form.userName.value

        const newSpot = { image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorPerYear, user_email, user_name }
        console.log(newSpot)

        fetch('http://localhost:5000/add-spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="relative">
            <Helmet>
                <title>Add Tourist Spot | Tripster</title>
            </Helmet>
            <div className="md:h-[400px] h-[300px] relative">
                <img className="h-full w-full object-cover object-center" src="https://i.ibb.co/CPkhyJJ/vietnam-f.jpg" />
                <h1 className="sm:text-5xl text-3xl w-full z-20 text-center font-kaushan absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#e2e2e2]">Add Tourist Spot</h1>
                <div className="absolute w-full h-full left-0 bottom-0 bg-[#00000075]"></div>
            </div>
            <div className="max-w-[1200px] mx-auto">
                <form onSubmit={handleAddTouristSpot} className="mx-5 relative px-3 p-5 rounded-md bg-white -top-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Tour Spot Name</p>
                            <input type="text" required name="spotName" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Tour Spot Name" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Image URL</p>
                            <input type="text" required name="image" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Image URL" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Country Name</p>
                            <input type="text" required name="country" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Country Name" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Location</p>
                            <input type="text" required name="location" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Location" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Average Cost</p>
                            <input type="text" required name="cost" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Average Cost" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Seasonality</p>
                            <input type="text" required name="seasonality" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Seasonality" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Tavel Time</p>
                            <input type="text" required name="travelTime" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Travel Time" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">Total Visitor Per Year</p>
                            <input type="text" required name="visitor" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Total Visitor Per Year" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">User Email</p>
                            <input type="email" required name="email" defaultValue={user?.email} disabled className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="User Email" />
                        </div>
                        <div >
                            <p className="text-lg mb-1 font-macondo text-light-blue">User Name</p>
                            <input type="text" required name="userName" defaultValue={user?.displayName} disabled className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="User Name" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg mb-1 font-macondo text-light-blue">Short Description</p>
                        <input type="text" required name="description" className="pr-2 text-lg font-macondo w-full pl-1 py-2 rounded-sm outline-none border border-light-blue" placeholder="Short Description" />
                    </div>
                    <button className="py-2 w-full text-center text-white text-lg font-semibold font-macondo my-10 px-4 bg-light-blue">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;