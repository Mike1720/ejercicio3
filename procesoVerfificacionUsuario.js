const db = ["ana", "luis", "miguel", "alan"];
//! ana tiene acceso completo
//! luis no tiene acceso pero esta registrado
//! pedro no existe

const verificarUsuario = (usuario, callback) => {
    setTimeout(() => {
        let nombreBuscado = db.find(nombre => nombre === usuario);
        callback(nombreBuscado)
    }, 1000);
};
const comprobarCuentaActiva = (usuario, callback) => {
    setTimeout(() => {
        let usuarioActivo = usuario !== "luis"
        callback(usuarioActivo)
    }, 2000);
};
const verificarPermisos = (usuario, callback) => {
    setTimeout(() => {
        let usuarioConPermisos = usuario === "ana"
        callback(usuarioConPermisos)
    }, 3000);
};

const procesoDeVerificacion = (usuario) => {
    console.log(`Iniciando verificación para el usuario ${usuario}`);
    verificarUsuario(usuario, (existe) => {
        if (existe) {
            console.log(`Usuario ${usuario} verificado exitosamente`);
        } else {
            return console.log(`El usuario ${usuario} no existe`);
        };

        comprobarCuentaActiva(usuario, (activa) => {
            if (activa) {
                console.log(`la cuenta del usuario ${usuario} esta activa`);
            } else {
                return console.log(`la cuenta del usuario ${usuario} no esta activa`);
            };

            verificarPermisos(usuario, (permisos) => {
                if (permisos) {
                    console.log(`El usuario ${usuario} tiene permisos. Acceso concedido`);
                } else {
                    return console.log(`El usuario ${usuario} no tiene permisos. Acceso denegado`);
                };
            });
        });
    });
};

procesoDeVerificacion('ana');   // Usuario con acceso completo
procesoDeVerificacion('luis');  // Usuario sin cuenta activa
procesoDeVerificacion('pedro'); // Usuario que no existe
procesoDeVerificacion("alan") // Usuario sin acceso