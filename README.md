<div align="center">
<img src="https://i.imgur.com/phR8JsG.png" alt="Mercado Libre" />
 <h1>Mercado libre
  
 <small>Realizado por Danny Rodríguez</small>
 </h1>
</div>

<p>Desafió de frontend para Mercado Libre</p>

<br />

## ¿Cómo correr el proyecto?

Primero, clonarlo con:

```bash
git clone https://github.com/Daedro23/meli-front/tree/master
```

Una vez clonado, abrir el directorio raiz y ejecutar `Server` para entrar al directorio del back. ejecutar `npm install` y una vez que termine, `npm run dev` para iniciar el servidor.

Mismos pasos para el front con la carpeta `Client`

<br />

## ¿En qué se basa este challenge?

Crear una aplicación de frontend que se encargue de mostrar los productos buscados en el cuadro de busqueda, luego listarlos y finalmente poder acceder al detalle del producto seleccionado, ya sea precio, descripción etc...

<br />

## ¿Qué tecnologías se usaron?

Para el back: node, express y axios.
Para el front: react, sass, styled-component, axios y jest para el manejo de testing.

<br />

## Datos de interes

- Se intento reutilizar lo que más pude para una mayor escalabilidad.
- Codigo testeado
- Se utilizo styled-component para un manejo de estado en el SCSS más prolijo
- Se utiliza SASS solo para el archivo root ya que no son compatibles las técnologías por el momento
- Manejo de errores
- Actualización de metatag con el componente `Head`
- Realizado con TS, así que se utiliza el manejo de interfaces
- No vi la necesidad de añadir store ya que es un proyecto chico
- El boton `Comprar` no realiza ninguna acción más simplemnte mostrar un console.log ya que no fue solicitado su funcionamiento

