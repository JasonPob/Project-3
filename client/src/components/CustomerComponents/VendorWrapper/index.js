import React from 'react';
import VendorList from '../VendorList';
import FilterWrapper from '../FilterWrapper';
import './style.css';
import BookingModalWrapper from '../BookingModalWrapper';


const VendorWrapper = props => {
    // console.log('vw', props)
    if (props.displayVendors === true) {
        return (
            <>
                <div className='vendor-wrapper container d-flex flex-wrap'>
                    <FilterWrapper 
                        sundayIsChecked={props.sundayIsChecked}
                        mondayIsChecked={props.mondayIsChecked}
                        tuesdayIsChecked={props.tuesdayIsChecked}
                        wednesdayIsChecked={props.wednesdayIsChecked}
                        thursdayIsChecked={props.thursdayIsChecked}
                        fridayIsChecked={props.fridayIsChecked}
                        saturdayIsChecked={props.saturdayIsChecked}
                        handleFilterChange={props.handleFilterChange}
                    />
                    <VendorList
                        HandleModalOpen={props.HandleModalOpen}
                    />
                </div>
                <div>
                    <BookingModalWrapper
                        showBookingModal={props.showBookingModal}
                        handleModalClose={props.handleModalClose}
                    />
                </div>
            </>
        )
    } else {
        return null
    }
}

export default VendorWrapper;