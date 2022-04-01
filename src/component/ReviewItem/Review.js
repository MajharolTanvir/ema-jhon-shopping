import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Review.css'
import React from 'react';

const Review = ({ review, remove }) => {
    return (
        <div className='row border mx-5 border-1 p-2 align-items-center mb-3'>
            <div className="col-xl-2 col-lg-2  col-md-2 col-sm-2 col-4">
                <img className='w-100' src={review.img} alt="" />
            </div>
            <div className="col-xl-8 col-lg-8  col-md-8 col-sm-8 col-5">
                <h6 className='m-0'>{review.name}</h6>
                <p className='m-0'>Price: ${review.price}</p>
                <p className='m-0'>Shipping charge: ${review.shipping}</p>
                <p className='m-0'>Quantity: {review.quantity}</p>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
                <FontAwesomeIcon onClick={() => remove(review)} className='delete' icon={faTrash}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Review;