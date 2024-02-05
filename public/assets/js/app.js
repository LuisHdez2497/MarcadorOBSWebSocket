const obs = new OBSWebSocket();

const credentials = {
    address: $('#ip_address').val()
};
const data = {
    game_id: $('#game_id').val()
};

const connect = () => {
    obs.connect(credentials);
};

// Eventos de conexión
obs.on('ConnectionOpened', () => {
    console.log('Connection Opened');
    $('#connection_container').addClass('hidden');
    $('#score_container').removeClass('hidden');
});

obs.on('ConnectionClosed', () => {
    console.log('Connection Closed');
    $('#connection_container').removeClass('hidden');
    $('#score_container').addClass('hidden');
});

obs.on('ConnectionError', (err) => {
    console.log('Connection Error', err);
    $('#connection_container').removeClass('hidden');
    $('#score_container').addClass('hidden');
});
// Eventos de conexión

$(document).ready(() => {
    $('#address_button').on('click', () => {
        console.log('Connecting to OBS');
        connect();
    });
});