<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Análisis de competencia

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema6/1.png", alt="")
      .col-lg-8
        p.mb-3 Desde el mercadeo, se plantea que, para el éxito empresarial, #[strong es necesario proporcionar mayor valor y satisfacción al cliente que lo que pueden generar los competidores dentro de una industria o mercado]. Analizar la competencia es el proceso de generar ventaja estratégica competitiva, mediante el proceso de posicionar la propuesta de valor en la mente de los consumidores, destacándose en comparación con la oferta de los competidores.
        .p-4.bg-amarillo-claro.rounded-3.mb-3
          p.mb-0 En el marco de las dinámicas de mercado, #[strong evidenciar y entender las fortalezas y debilidades de la competencia es el mayor reto y brindará elementos para generar propuestas de diferenciación estratégica], entendiendo la posición competitiva de la marca o productos en comparación con los competidores.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Dimensiones en el análisis de la competencia

    img(data-aos="fade-up")(src="@/assets/curso/tema6/2.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El punto de partida para el análisis de la competencia es el análisis comparativo de la propuesta de valor, con sus características y beneficios del producto. Esto posibilita identificar los elementos diferenciadores frente a productos similares de otras empresas, teniendo claro que es importante generar diferencias racionales, como son las características del precio, y emocionales, como el significado de la marca en la vida de los consumidores. Para realizar el análisis de los competidores, hay que tener en cuenta las siguientes dimensiones:

    .row.justify-content-center.align-items-center.mb-0.mb-lg-5.z-2
      .col-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema6/3.png", alt="descripcion")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-primario-p20")
          .row(titulo="Elementos relacionados con el posicionamiento de la marca").justify-content-center.align-items-center
            .col-12
              p.mb-0 Posicionar es generar una imagen de la marca, producto, o servicio en las mentes de los consumidores. Se construye desde la percepción que tiene el consumidor individualmente con respecto a la competencia. Debe estar basado en elementos tales como diferenciación, beneficios relevantes, inversiones rentables, comunicación clara y procesos de perfeccionamiento, con los que se incrementa cada vez más el valor añadido, generando ventajas competitivas.
          .row(titulo="Elementos de las ventas y la participación en el mercado").justify-content-center.align-items-center
            .col-12
              p.mb-0 Consisten en el porcentaje de ventas y comercialización de un producto o servicio, y son el resultado de la estrategia de mercadeo, donde se identifican precios de comercialización, estrategias de publicidad, distribución, descuentos, identificando zonas geográficas fuertes y débiles, en comparación con los competidores.
          .row(titulo="Elementos de visibilidad y publicidad").justify-content-center.align-items-center
            .col-12
              p.mb-0 Se busca identificar la inversión publicitaria y el ruido, es decir, volumen y cantidad de dicha publicidad en términos de frecuencia y alcance del mensaje.
          .row(titulo="Elementos de ventajas y características competitivas").justify-content-center.align-items-center
            .col-12
              p.mb-0 Identificar los beneficios y características de los productos de nuestros competidores, para generar superioridad sobre ellos y que dichas características aíslen a nuestra empresa de dichos competidores.
          .row(titulo="Elementos de costo, rentabilidad y eficiencia logística").justify-content-center.align-items-center
            .col-12
              p.mb-0 Analizar toda la estructura de costos de los competidores, su logística, y la eficiencia. Estos elementos pueden ser ventaja o barrera competitiva.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8.col-xl-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-primario-p20")
          .row(titulo="Elementos de precio").justify-content-center.align-items-center
            .col-12
              p.mb-0 Para la estrategia de precios, es necesario conocer los precios, descuentos y las condiciones de negociación de la competencia.
          .row(titulo="Elementos comunicativos").justify-content-center.align-items-center
            .col-12
              p.mb-0 Identificar la estrategia comunicativa, el #[em target], elementos de la promesa de valor y todos aquellos elementos comunicativos diferenciadores de la marca.
          .row(titulo="Elementos de satisfacción del cliente").justify-content-center.align-items-center
            .col-12
              p.mb-0 Establecer #[em benchmarks] para identificar indicadores de satisfacción de los clientes propios y de la competencia.
          .row(titulo="Elementos de canales de distribución").justify-content-center.align-items-center
            .col-12
              p.mb-0 Conocer la penetración y la presencia en el mercado del competidor.
          .row(titulo="Elementos de marca y actividades de punto de venta").justify-content-center.align-items-center
            .col-12
              p.mb-0 Analizar las acciones de activación e impulso de marcas de la competencia en diferentes puntos de venta y en las estrategias de consumo masivo.
          .row(titulo="Elementos con el nivel de recomendación (NPS)").justify-content-center.align-items-center
            .col-12
              p.mb-4.mb-lg-0 Medir la lealtad y la satisfacción del cliente permite generar mejores prácticas en términos de experiencias.
      .col-8.col-lg-4.col-xl-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/4.png", alt="descripcion")



</template>

<script>
export default {
  name: 'Tema6',
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
