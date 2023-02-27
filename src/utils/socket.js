import VueSocketio from 'vue-socket.io';

// const w_url = window.location.hostname;
const w_url = '192.168.1.4';

const socket = new VueSocketio( {
  debug: false,
  connection: `ws://${w_url}/websocket`,
})

export const registerSockets = (sockets, proxy) => {
  sockets &&
    Object.keys(sockets).forEach((t) => {
      "subscribe" !== t &&
        "unsubscribe" !== t &&
        proxy.$socket.emitter.addListener(t, sockets[t], proxy);
    });
};


export const destroySockets = (sockets, proxy) => {
  sockets &&
    Object.keys(sockets).forEach((t) => {
      proxy.$socket.emitter.removeListener(t, proxy);
    });
};

export default socket