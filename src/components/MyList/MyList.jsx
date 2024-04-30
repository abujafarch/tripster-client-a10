import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = ({ myList, setNewMyLists, newMyLists }) => {
    const { _id, average_cost, image, seasonality, totalVisitorPerYear, tourists_spot_name, travel_time } = myList

    const handleDelete = () => {
        Swal.fire({
            title: `Are you sure to delete ${tourists_spot_name}`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tripster-server-a10.vercel.app/my-lists/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const filteredLists = newMyLists.filter(myList => _id !== myList._id)
                            setNewMyLists(filteredLists)
                            Swal.fire({
                                title: "Deleted!",
                                text: `${tourists_spot_name} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="border flex sm:flex-row flex-col sm:gap-0 gap-y-4 justify-between py-2 border-[#dadada]">
            <div>
                {/* <div className="relative">
                    <img className="h-[350px] w-full object-cover object-center" src={image} />
                    <div className="absolute left-3 bottom-3 text-white p-3 bg-[#00000050]">
                        <h2 className="font-platypi text-3xl">${average_cost}</h2>
                        <p className="font-raleway text-lg font-medium">best for <span className="font-platypi font-semibold">{seasonality}</span></p>
                    </div>
                </div> */}
                <h2 className="sm:text-2xl font-bold text-[#474747] px-2 text-xl mt-1 font-poppins">{tourists_spot_name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 px-2 gap-x-10 justify-between text-[#8f8f8f] text-base font-poppins">
                    <p>Visitor: {totalVisitorPerYear}/yr</p>
                    <p>Time: {travel_time}Days</p>
                    <p>Cost: ${average_cost}</p>
                    <p>best for {seasonality}</p>
                </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2 mx-2 ">
                <Link to={`/update-spot/${_id}`}>
                    <button className="py-2 px-5 bg-light-blue rounded-sm text-white font-macondo text-lg">Update</button>
                </Link>
                <button onClick={handleDelete} className="py-2 px-5 bg-orange rounded-sm text-white font-macondo text-lg">Delete</button>
            </div>
        </div>
    );
};

export default MyList;