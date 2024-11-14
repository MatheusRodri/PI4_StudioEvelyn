// Este componente é responsável por renderizar o formulário de pagamento.

// Importa o React e a função loadStripe do pacote @stripe/stripe-js e o componente Elements do pacote @stripe/react-stripe-js.
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51MamyuC0lDyj1OT4TtC4FDlqkDEKSFlXyEBGa954i7W5Un0YcjW047cxdM6GOTM25gd87knJnme16zMb8VNY62WT00Kbw0MZem');

function PaymentForm() {
    return (
        <Elements stripe={stripePromise}>
            <form>
                <div>
                    <label htmlFor="card-element">Credit or Debit Card</label>
                    <div id="card-element">
                        {/* O Stripe Elements irá gerar o input aqui */}
                    </div>
                </div>
                <button>Submit Payment</button>
            </form>
        </Elements>
    );
}

export default PaymentForm;
