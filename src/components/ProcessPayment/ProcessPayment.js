import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SpliteCardForm from './SpliteCardForm';

const stripePromise = loadStripe('pk_test_51IeB2PG0TeHPknFCZ6SteZiT37XSJqGzweIs58amAFjsX9RhcmVHRwqp4QkTUk1KqT3Hf6V0OAWsVLdaD7rYvWts00xaUwFHLp');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment ={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;