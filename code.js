const apiUrl = 'https://swapi.dev/api/'
const personUrl = 'people/:id'

// $.get(`${apiUrl}${personUrl.replace(':id',1)}`, { crossDomain: true },
//     function(data) {
//         console.log(`Hi, i'm ${data.name}`);
//     });

const opts = { crossDomain: true };

function getPeople(id) {
    return new Promise(function(resolve, reject) {
        const url = `${apiUrl}${personUrl.replace(':id',id)}`;

        $.get(url, opts, function(data) {
            resolve(data);
        }).fail(() => reject(id));
    })
}

function onError(id) {
    console.log(`No se pudo encontrar al personaje ${id}`);
}

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7];

    var promesas = ids.map(id => getPeople(id))
    try {
        var personajes = await Promise.all(promesas);
        console.log(personajes)
    } catch (id) {
        onError(id);
    }
}

obtenerPersonajes();