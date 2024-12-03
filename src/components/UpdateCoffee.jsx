import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(UpdateCoffee);

    // add data to server

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="min-h-screen p-4 md:space-y-8 md:py-16 md:px-32 bg-[#F4F3F0]">
        <div className="space-y-3">
          <h1 className="md:text-5xl text-3xl font-semibold text-center md:font-black">
            Update Coffee
          </h1>
        </div>
        <div>
          <form onSubmit={handleUpdateCoffee}>
            <div className="md:grid grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  defaultValue={name}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  defaultValue={chef}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="md:grid grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  defaultValue={supplier}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  defaultValue={taste}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="md:grid grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  defaultValue={category}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  defaultValue={details}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                defaultValue={photo}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Update Coffee"
                className="btn bg-[#D2B48C]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
