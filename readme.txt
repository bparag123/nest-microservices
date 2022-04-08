This repository consist two nest projects.
1) Main
2) Service1

Here, I have used service1 as a client (listener) for the events.
The service1 module is a standalone api and also a listener for the events which will be fired
over the channel using token.

Main is endpoint for the api and the controller of the main module is firing the event over the
channel with a token.