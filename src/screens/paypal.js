import {} from 'react';

import PayPal from 'react-native-paypal-wrapper';


PayPal.initialize(PayPal.NO_NETWORK, "Adg5qqM4C6MzhZSkKt3hktnIW5DW8IwTDKB1DaMFWoGn5I7knG6Yq-IzG8MwDiAZ9U542N3fSZoYq9n6");
PayPal.pay({
  price: '1',
  currency: 'INR',
  description: 'Your description goes here',
      }).then(confirm => console.log(confirm))
  .catch(error => console.log(error));
