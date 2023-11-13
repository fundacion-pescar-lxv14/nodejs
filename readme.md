# NodeJS

Esto es una guia para los alumnos de la capacitacion de Introduccion a NodeJS que cursan los dias _lunes, miercoles y viernes de 15hs a 17hs_, donde podran acceder a los ejemplos realizados en clase y a la recopilacion de dicho entorno de ejecucion de JS.

## Herramientas

* [Node JS: Entorno de Ejecucion de JS](https://nodejs.org/)
* [npm: Gestor de Paquetes](https://npmjs.com)
* [VS Code: Editor de Codigo](https://code.visualstudio.com)

### REPL

NodeJS nos ofrece una _pseudoconsola_ que puede ser ejecutada directamente, o desde alguna __CLI (Command Line Interface)__, donde podemos ejercutar intrucciones utilizando el bucle de JS, o abrir y ejecutar archivos de cualquier directorio. Esto es posible gracias a las caractericas conocidas como REPL.

* __Read__: Atiende a las lineas de codigo, instrucciones.
* __Eval__: Verifica y corrobora la sintaxis, ejecucion.
* __Print__: Muestra el resultado de la operacion, imprime.
* __Loop__: Una vez finalizado el ciclo, vuelve a empezar.

## PROCESS

Modulo que provee informacion sobre el proceso de NodeJS que se esta ejecutando actualmente y permite tener cierto control sobre el mismo

| Propiedad | Tipo | Descripcion |
|--|--|--|
| __arch__ | String | Propiedad que devuelve la arquitectura del sistema operativo actual |
| __argv__ | _Array_ | Propiedad que almacena los _argumentos_ pasados a la aplicacion que se esta ejecutando actualmente. |
| __cpuUsage__ | _Function_ | Metodo que devuelve un objeto que indica el consumo de memoria del procesador |
| __cwd__ | _Function_ | Metodo que devuelve un string con la ruta absoluta del directorio de trabajo actual |
| __env__ | _Object_ | Propiedad que contiene las _variables de entorno_ de la sistema operativo en el que se esta ejecutando. |
| __memoryUsage__ | _Function_ | Metodo de devuelve un objeto que detalla el uso de la memoria |
| __release__| _Object_ | Propiedad que contiene informacion relacionada con el version actual de NodeJS |
| __versions__ | _Object_ | Propiedad que almacena las versiones de los _modulos instalados_ y sus respectivas dependencias. | 