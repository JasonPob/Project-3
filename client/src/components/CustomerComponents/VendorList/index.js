import React from 'react';
import VendorCard from '../VendorCard';
import './style.css';


class VendorList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadBarbers();
    }

    render() {
        return (
            <>
                <div className='vendor-list col-md-9 col-12'>
                    {/* <VendorCard 
                        HandleModalOpen={props.HandleModalOpen}
                        handleModalClose={props.handleModalClose}
                    />
                    <VendorCard 
                        HandleModalOpen={props.HandleModalOpen}
                        handleModalClose={props.handleModalClose}
                    />
                    <VendorCard 
                        HandleModalOpen={props.HandleModalOpen}
                        handleModalClose={props.handleModalClose}
                    />
                    <VendorCard 
                        HandleModalOpen={props.HandleModalOpen}
                        handleModalClose={props.handleModalClose}
                    />
                    <VendorCard 
                        HandleModalOpen={props.HandleModalOpen}
                        handleModalClose={props.handleModalClose}
                    />
                    <VendorCard 
                        HandleModalOpen={props.HandleModalOpen}
                        handleModalClose={props.handleModalClose}
                    />
                    <VendorCard 
                        HandleModalOpen={props.HandleModalOpen}
                        handleModalClose={props.handleModalClose}
                    />
                    <VendorCard 
                        HandleModalOpen={props.HandleModalOpen}
                        handleModalClose={props.handleModalClose}
                    /> */}

                </div>
            </>
        )
    }
}

export default VendorList;