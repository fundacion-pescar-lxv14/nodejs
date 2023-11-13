const os = require('os');

const deviceInfo = () =>`
Device Info:
    EQUIPO: ${os.hostname()}
    SISTEMA OPERATIVO:
    - Tipo: ${os.type()}
    - Version: ${os.release()}
    - Plataforma: ${os.platform()}
    - Arquitectura: ${os.arch()}
    - Tiempo de actividad: ${Math.round(os.uptime() / 60**2)}hs
    - MEMORIA RAM: ${Math.round(os.totalmem() / 1024**3)}GB
    - DISPONIBLE: ${Math.round(os.freemem() / 1024**3)}GB
`

module.exports = deviceInfo;
