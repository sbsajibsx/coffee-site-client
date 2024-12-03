import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    // add data to server

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "user added successfully",
            icon: "success",
            confirmButtonText: "Next",
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
            Add New Coffee
          </h1>
          <p className="text-gray-600">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div>
          <form onSubmit={handleAddCoffee}>
            <div className="md:grid grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Add Coffee"
                className="btn bg-[#D2B48C]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
