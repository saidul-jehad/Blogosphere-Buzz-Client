import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const AddBlog = () => {

    const { user } = useAuth()

    const handleAddBlog = event => {
        event.preventDefault()
        const form = event.target;

        const title = form.title.value
        const short_description = form.shortDescription.value
        const long_description = form.longDescription.value
        const image = form.photoURL.value
        const bloggerEmail = form.email.value
        const category = form.category.value


        const blog = { title, short_description, long_description, image, bloggerEmail, category }
        console.log(blog);

        // send data to the server

        axios.post('http://localhost:5000/add-blog', blog)
            .then(res => {
                const data = res.data
                console.log(data);
                if (data.insertedId) {
                    toast.success("Blog Successfully added! ")
                }
            })
        // fetch('https://tour-ease-server.vercel.app/tourists', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newTourists)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);

        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: ' Add Success!',
        //                 icon: 'success'
        //             })
        //         }
        //     })


    }

    return (
        <div className="bg-slate-600 p-16 md:w-3/4 lg:w-1/2 mt-20 rounded-xl mx-auto">

            <h3 className="text-3xl font-extrabold text-center pb-5 "> Add Your Blog</h3>
            <form onSubmit={handleAddBlog} >

                {/* form Title and Category row */}
                <div className="  mx-auto gap-6 md:flex">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" className="input input-bordered w-full" placeholder="Enter title" required />
                    </div>
                    <div className=" form-control mx-auto">
                        {/* 
                        <input type="text" name="category" className="input input-bordered w-full" placeholder=" Enter Category " required /> */}

                        <label htmlFor=""> Category </label>

                        <select defaultValue='Travel' className=" select  input-bordered md:min-w-[215px] " name="category">
                            <option value='Travel'>Travel</option>
                            <option value='Health'>Health</option>
                            <option value='Food'>Food</option>
                            <option value='Art'>Art</option>
                            {/* <option>React</option> */}
                        </select>

                    </div>
                </div>

                {/* form Short Description  and  Long Description row */}
                <div className="  mx-auto gap-6 md:flex mt-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Short description</label>
                        <input type="text" name="shortDescription" className="input input-bordered w-full" placeholder=" Enter Short description" required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Long Description</label>
                        <input type="text" name="longDescription" className="input input-bordered w-full" placeholder="Enter Long description" required />
                    </div>
                </div>


                {/* form photo  and User Email  row */}
                <div className="  mx-auto gap-6 md:flex my-5">
                    <div className=" form-control mx-auto">
                        <label htmlFor="">Photo URL</label>
                        <input type="text" name="photoURL" className="input input-bordered w-full" placeholder="Enter photoURL" required />
                    </div>
                    <div className=" form-control mx-auto">
                        <label htmlFor="">User Email</label>
                        <input type="text" name="email" className="input input-bordered w-full" defaultValue={user?.email} disabled required />
                    </div>
                </div>

                <input type="submit" value="Add Blog" className="btn btn-outline btn-accent  w-full bg-black mt-4" />
            </form>
        </div>
    );
};

export default AddBlog;