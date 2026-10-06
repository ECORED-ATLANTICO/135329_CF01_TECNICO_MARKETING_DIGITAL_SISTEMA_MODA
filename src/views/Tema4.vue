<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Variables del mercado

    .fullwidth-bg.fullwidth-bg--2
    img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El #[em marketing] mezclado es uno de los elementos clásicos del #[em marketing], el cual engloba los cuatros componentes básicos: #[strong precio, producto, comunicación y distribución]. Estas variables son conocidas como las 4P por su acepción anglosajona (#[em product, price, place y promotion]). 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-6.col-lg-4
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Variables conocidas como las 4P
        img.mb-2(data-aos="fade-down-right", src="@/assets/curso/tema4/2.png", alt="En la figura se describen las variables conocidas como las 4P, donde se detalla: producto, precio, distribución y comunicación.")
        figcaption Nota. SENA, (2026).
          
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-primario-p20")
          .row(titulo="¿Cuál es su producto o servicio?").justify-content-center.align-items-center
            .col-12
              p El producto podría definirse como #[strong todo lo que se pone a disposición del consumidor, y puede comprender bienes y servicios]. Según Lam, Hair & McDaniel (2011), el producto es la gran pieza clave dentro del #[em marketing mix] (producto, precio, promoción y distribución); además, consideran al #[strong producto como elemento primordial dentro del proceso de producción], debido a que es el punto de partida de toda comercialización.
              p.mb-0 Dichos productos se deben diferenciar de otros y postularse como únicos a través de las cualidades o atributos que se les ponga. Es posible hablar de variedad, diseño, características, marcas, servicios, garantías.
          .row(titulo="¿Cuánto cobra? / ¿Cómo afecta esto su marca?").justify-content-center.align-items-center
            .col-12
              p Es la variable relacionada con los ingresos, o la suma de valores que se requiere para  realizar un intercambio, es decir, #[strong la cantidad de dinero que se requiere para adquirir un producto y/o servicio]. 
              p Para Baena y Moreno (2010), es el costo que debe desembolsar o pagar el consumidor (cliente) para obtener la mercancía en un momento dado, ya sea en el mercado o en el lugar específico de venta (p.97). 
              p.mb-0 Como indicadores del precio, se podrían plantear el precio del valor para el cliente y los precios según la competencia.
          .row(titulo="¿Cómo se enteran los clientes de sus productos? ¿Qué estrategias utiliza?").justify-content-center.align-items-center
            .col-12
              p Son las técnicas de publicidad  para dar a conocer el servicio o producto en un mercado determinado. Podemos dar cuenta de medios, canales y técnicas  que nos posibilitan dar a conocer nuestro producto.
              p.mb-0 Kotler y Armstrong (2013) definen la promoción como #[strong el conjunto de actividades sistemáticas que promueven información y datos sobre las cualidades de un producto o servicio para inculcar y promover la adquisición por parte del comprador].
          .row(titulo="¿Dónde promociona su producto o servicio? ¿Dónde lo encuentran los clientes?").justify-content-center.align-items-center
            .col-12
              p.mb-0 Hace referencia  a los #[strong lugares de venta y a los canales de distribución].

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/3.png", alt="")
      .col-lg-8
        .p-4.bg-amarillo-claro.rounded-3.mb-3
          p.mb-0 El avance más significativo, sin duda, fue el paso del #[em marketing] al mundo digital; sin embargo, a pesar de que han sido significativas en las estrategias de #[em marketing] por muchos años, las 4P han evolucionado con las necesidades del mercado y han sido sustituidas por las 4C.
        p.mb-0 Con las 4C, se distinguen cuatro importantes aspectos a tener en cuenta para entender y desplegar una estrategia. Ellos son: consumidor, costo, conveniencia y comunicación. Este modelo fue propuesto por Robert F. Lauterborn, en 1990, quien vio la necesidad de actualizar, al entorno digital, el modelo del mercadeo tradicional de 4P (producto, precio, plaza y promoción), sin perder su esencia (Shum Xie, 2019). Observe a continuación sus cualidades en el recurso educativo.

    TabsB.color-acento-contenido
      .py-4.py-md-5.px-3(titulo="Consumidor" :icono="require('@/assets/curso/tema4/4.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-9.col-xl-8
            h5 Consumidor
            p.mb-4.mb-lg-0 Todas las estrategias para promocionar y vender un producto se basan en #[strong los gustos, deseos y necesidades de los consumidores], por ello, el #[em marketing] digital está tan enfocado en conocer y analizar su público a través de diversas técnicas para lograr efectividad en sus procesos.
          .col-10.col-sm-8.col-lg-3
            figure
              img.img-265(src='@/assets/curso/tema4/8.png', alt='')
      .py-4.py-md-5.px-3(titulo="Costo" :icono="require('@/assets/curso/tema4/5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-9.col-xl-8
            h5 Costo
            p.mb-4.mb-lg-0 Este se entiende como el precio a pagar por un bien o servicio, el cual puede depender de distintos factores, como la producción, la calidad o el poder adquisitivo del público objetivo. Esta información será usada por el consumidor para #[strong decidir si adquiere o no dicho elemento].
          .col-10.col-sm-8.col-lg-3
            figure
              img.img-265(src='@/assets/curso/tema4/9.png', alt='')
      .py-4.py-md-5.px-3(titulo="Conveniencia" :icono="require('@/assets/curso/tema4/6.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-9.col-xl-8
            h5 Conveniencia
            p.mb-4.mb-lg-0 Supone el proceso de compra, teniendo en cuenta el servicio al cliente, #[strong la comodidad del consumidor y claridad de información del producto] o servicio que va a adquirir, lo que permite fidelizar a un público.
          .col-10.col-sm-8.col-lg-3
            figure
              img.img-265(src='@/assets/curso/tema4/10.png', alt='')
      .py-4.py-md-5.px-3(titulo="Comunicación" :icono="require('@/assets/curso/tema4/7.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-9.col-xl-8
            h5 Comunicación
            p.mb-4.mb-lg-0 Los procesos comunicativos dentro del #[em marketing] digital juegan un papel muy importante, estos pueden definir la personalidad, interacción y conexión de la marca con su público; además, #[strong permiten realizar una entrega de información coherente] que logre una capitalización del tiempo invertido en lograr estos lazos de unión.
          .col-10.col-sm-8.col-lg-3
            figure
              img.img-265(src='@/assets/curso/tema4/11.png', alt='')
         
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
