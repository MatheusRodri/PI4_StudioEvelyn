import 'dotenv/config';
// Importação das funcionalidades do express, cors e do controller
import express from 'express';
import cors from 'cors';
import agendamentoController from './controller/agendamentosController.js';
import Stripe from 'stripe';

// Criação do servidor
const servidor = express();
servidor.use(cors());
servidor.use(express.json());
servidor.use(agendamentoController);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

servidor.post('/create-checkout-session', async (req, res) => {
  console.log(req.body);

  const { servicos, precos, total, pagamento } = req.body.procedimentos;

  // Mapeia os serviços e os preços em items corretamente
  const items = servicos.map((name, index) => ({
    price_data: {
      currency: 'brl',
      product_data: {
        name: name,
      },
      unit_amount: Math.round(precos[index] * 100), // Converte o preço para centavos e garante que é um número inteiro
    },
    quantity: 1, // Define quantidade padrão como 1
  }));

  console.log(items);

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: items,
      mode: 'payment',
      success_url: `http://localhost:3000/agendamento?success=true`,
      cancel_url: `http://localhost:3000/agendamento?canceled=true`,
    });

    res.send({ url: session.url });
  } catch (error) {
    console.error('Erro ao criar sessão de checkout:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Middleware de tratamento de erros
servidor.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

const port = process.env.PORT || 3000;
servidor.listen(port, () => console.log(`API rodando na porta ${port}`));

export default servidor;
