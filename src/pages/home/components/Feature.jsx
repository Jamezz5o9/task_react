import React from 'react';
import '../styles/Feature.scss';
import {GiPolarStar, GiCarKey, GiPayMoney} from 'react-icons/gi';

const Feature = () => {
  return (
    <section className='feature_container'>
        <div className="feature_container_1">
            <div className="feature_parent">
                <div className='feature_first_child'>
                        <div className="feature_first_child_1">
                            <GiPayMoney size='50px'/>
                            <p>Easy Peasy Picing</p>
                        </div>
                        <p>Stop going cross-eyed Our pricing plans are so easy a Kindergarten can understand them.</p>
                </div>
                <div className='feature_second_child'>                    
                        <div className='feature_second_child_1'>
                            <GiCarKey size='50px'/>
                            <p>You Get the Keys</p>
                        </div>
                        <p>Other companies will hold your website hostage Not with us! you paid for it, it's yours.</p>
                </div>
                <div className='feature_third_child'>
                        <div className='feature_third_child_1'>
                            <GiPolarStar size='50px'/>
                            <p>Wicked Fast Delivery</p>
                        </div>
                        <p>Waiting? In this economy? other companies take months to deliver -  we only take days</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Feature