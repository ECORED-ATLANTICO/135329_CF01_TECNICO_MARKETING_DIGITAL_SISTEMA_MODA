<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción al mercadeo

    img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Este concepto ha tenido múltiples definiciones, por lo cual esta ruta formativa se inicia abordando el concepto de mercadeo desde la postura de diferentes autores, #[strong con el propósito de describir la evolución del concepto, su importancia para las organizaciones y cómo se ha llegado al concepto de #[em marketing] que hoy prevalece.] A continuación se puede encontrar definiciones de mercadeo.
 
    .row.align-items-center.mb-5.justify-content-center
      .col-lg-8(data-aos="fade-right").custom-tabs
        TabsA.color-acento-botones.mb-4.mb-lg-0
          .tarjeta.p-4.h-100.d-flex.align-items-center.bg-terciario-t20(titulo="Concepto 1")
            p.mb-4.mb-lg-0 La mercadotecnia (#[em marketing] o mercadeo) es #[strong la actividad, conjunto de instituciones y procesos para crear, comunicar, entregar e intercambiar ofertas que tienen valor para los consumidores, clientes y socios]. Cabe mencionar que antes se concebía el mercadeo solo en el marco de las ventas (American Marketing Association, 2017).

          .tarjeta.p-4.h-100.d-flex.align-items-center.bg-terciario-t20(titulo="Concepto 2")
            p.mb-4.mb-lg-0 Según  Philip Kotler y Gary Armstrong (2013), #[strong "el #[em marketing] es un proceso social y directivo mediante el que los individuos y las organizaciones obtienen lo que necesitan y desean a través de la creación y el intercambio de valor con los demás”] (p.5).

          .tarjeta.p-4.h-100.d-flex.align-items-center.bg-terciario-t20(titulo="Concepto 3")
            p.mb-4.mb-lg-0 Stanton, Etzel y Walker, (2007), #[strong "un sistema total de actividades de negocios ideado para planear productos satisfactores de necesidades, asignarles precios, promoverlos y distribuirlos a los mercados meta, a fin de lograr los objetivos de la organización"] (p.6).

          .tarjeta.p-4.h-100.d-flex.align-items-center.bg-terciario-t20(titulo="Concepto 4")
            p.mb-4.mb-lg-0 De acuerdo con Solomon y Stuart (como se citó en Rosenstiehl, 2016 ), #[strong “el concepto de #[em marketing] implica que, al identificar las necesidades de los consumidores y al suministrar productos que satisfagan estas necesidades, la organización asegura su rentabilidad a largo plazo”] (2001,p.7).

      .col-10.col-lg-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/2.png", alt="Imagen decorativa")

    .cajon.color-acento-contenido.p-4.mb-4.mb-lg-5
      p.mb-0 Las últimas definiciones tienen elementos comunes en relación con la importancia organizacional, comercial, y se amplía a la esfera social, explicitando el papel cada vez más preponderante que el #[em marketing] representa en la sociedad.

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h5.mb-0.d-block Evolución del concepto de mercadeo
        p.mb-0.d-block Este somero recorrido por el concepto de mercadeo, que se puede apreciar en el video, ayudará a entender su evolución desde un contexto histórico, entendiendo que existen una serie de acontecimientos, como la Revolución Industrial, algunas guerras mundiales y las situaciones económicas vividas durante largos años, que han tenido protagonismo en el surgimiento del concepto y su evolución.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1lZ0BBcM-SE" title="Evolución del concepto de mercadeo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: evolución del concepto de mercadeo

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
