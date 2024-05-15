
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import WishlistCard from "./WishlistCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const WishLists = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [wishlists, setWishlists] = useState([])


    const getWishlist = async () => {
        const { data } = await axiosSecure.get(`/wishlists/${user?.email}`)
        // console.log(data);
        setWishlists(data)
    }

    useEffect(() => {
        getWishlist()
    }, [])


    // console.log(wishlists);
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7">
            {
                wishlists.map(wishlist => <WishlistCard
                    key={wishlist._id}
                    wishlist={wishlist}
                    getWishlist={getWishlist}
                ></WishlistCard>)
            }
        </div>
    );
};

export default WishLists;