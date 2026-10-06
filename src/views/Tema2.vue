<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de mercadeo

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.bg-terciario-t20.rounded-3
      .col-lg-9.p-3.p-xl-0
        p.mb-4.mb-lg-0 Hay diversos tipos de mercadeo, que se direccionan y se mezclan según la intención de la estrategia de las organizaciones. A continuación, se detallan los mas conocidos. #[strong ¿Cuáles son? ¿Qué características tienen? ¿Cuál de todos elegir para la vida laboral?] Las siguientes descripciones servirán como referencia para identificar y analizar las características de cada tipo de mercadeo.
      .col-8.col-sm-6.col-lg-2
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa" data-aos="fade-left")
    
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .d-none.d-xl-block.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/2.png", alt="")
      .col-xl-8
        SlyderF(columnas="col-lg-6")
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/tema2/3.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Directo
            p.mb-4.mb-5.text-center Basado en la comunicación directa y bidireccional. Además, #[strong una audiencia determinada y bien segmentada].
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/tema2/4.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 #[em Online]
            p.mb-4.mb-5.text-center Basado en las acciones y #[strong contenidos a través del internet].
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/tema2/5.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 De nicho
            p.mb-4.mb-5.text-center Basado en la satisfacción y resolución de problemas de #[strong un grupo poblacional específico].
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/tema2/6.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 De influencia
            p.mb-4.mb-5.text-center Basado en #[strong las redes sociales y las celebridades para incidir en la toma de decisiones] de las compras de las personas.
          .tarjeta.tarjeta--blanca.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-7
                img.factores-slider__icon(src='@/assets/curso/tema2/7.svg' alt='Ilustacion de acompañamiento')
            .factores-slider__title-wrapper  
              h4.factores-slider__title.mb-4 Masivo
            p.mb-4.mb-5.text-center Busca y logra alcanzar grupos grandes #[strong poblacionales sin tener en cuenta el nicho].
</template>

<script>
export default {
  name: 'Tema2',
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
