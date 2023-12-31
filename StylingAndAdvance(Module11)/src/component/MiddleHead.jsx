import { Badge } from '@mui/base';
import React from 'react'
import Select_Menu from '../MuiComp/Select__Menu';
import './MidHead.css'


// import Badge from '@mui/icons-material/Badge';
// Icons
// import MailIcon from '@mui/icons-material/Mail';
// import CompareArrowsIcon from '@m    ui/icons-material/CompareArrows';
import RecyclingIcon from '@mui/icons-material/Recycling';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import MainBody from './MainBody';
function MidHead() {

    return (

        <div>

            <div className="container-fluid bg-light border border-bottom-0">
                <div className="container">

                    <div className="row">

                        <div className="col-md-2 pt-3 pb-2">
                            <h1> NEST </h1>
                        </div>

                        <div className="col-md-5">
                            <div className="searchbox col-md-12 d-flex">
                                <div className="all_cate col-md-3 ps-2">
                                    search
                                </div>
                                <div className="col-md-9">
                                    <input type="search" className='search_bar'  />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 d-flex">
                            <div className="col-md-4" style={{ marginTop: "12px" }}>
                                <Select_Menu />
                            </div>
                            <div className="mx-5 col-md-2 mt-4 pt-1 me-3 d-flex">
                                <Badge color="success">
                                    <RecyclingIcon color="action" />
                                </Badge> Compare
                            </div>
                            <div className="col-md-2 mt-4 pt-1 me-3 d-flex">
                                <Badge color="success">
                                    <FavoriteBorderIcon color="action" />
                                </Badge> Wishlist
                            </div>
                            <div className="col-md-2 mt-4 pt-1  d-flex">
                                <Badge color="success">
                                    <ShoppingCartIcon color="action" />
                                </Badge> Cart
                            </div>
                            <div className="col-md-2 mt-4 pt-1 d-flex">
                                <Person2Icon color="action" />
                                Account
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <MainBody />
        </div>

    )
}

export default MidHead;

{/* <div className="col-md-5 pt-3 pb-2 d-flex justify-content-around">
<div><Select_Menu/></div> 
<div className='p-3'><a href="" className='text-decoration-none  link-secondary'>Compare</a></div>
<div className='p-3'><a href="" className='text-decoration-none  link-secondary'>Wishlist</a></div>
<div className='p-3'><a href="" className='text-decoration-none  link-secondary'>Cart</a></div>
<div className='p-3'><a href="" className='text-decoration-none  link-secondary'>Account</a></div>
</div>
</div> */}