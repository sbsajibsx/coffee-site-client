import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  console.log(coffee);
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount>0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Album" />
        </figure>
        <div className="flex items-center w-full justify-around">
          <div>
            <h2 className="flex">
              <span className="w-1/2">Name:</span> <span>{name}</span>
            </h2>
            <p className="flex">
              <span className="w-1/2">Category:</span> <span>{category}</span>
            </p>
            <p>Taste: {taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
              <button className="btn join-item">View</button>
              <button onClick={()=> handleDelete(_id)} className="btn join-item">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
