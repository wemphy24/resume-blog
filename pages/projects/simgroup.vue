<template>
  <section class="px-4 md:px-[200px] xl:px-[325px]">
    <DetailProject
      imgProject="/img/sgproject.jpg"
      titleProject="SIM Group (Private Project)"
      subTitleProject="Manufacturing Information System"
      titleStackOne="Web App"
      titleStackTwo="Laravel"
      introProject="SIM Group is a manufacturing information system designed to assist the operational production business processes in a manufacturing company specializing in the production of electrical panels. SIM Group facilitates employees in creating product quotes, designing bill of materials, calculating selling prices based on production costs, preliminary costs, and desired profits. SIM Group can also automatically generate purchase orders if the availability of master stock reaches the minimum stock level. All departments become more efficient in collaboration through this system, which can accelerate business processes in the company."
      roleProject="My role in this project is as system analyst and also fullstack developer."
      problemProject="The increased demand for products is making it difficult for the company to manage records of production offers and requests. The processes of creating, recording, and approving documents are done manually using Excel and handwritten signatures, leading to inefficiencies. The manual nature of production processes and inventory management is prone to data input errors, such as incorrect recording of material stock. The lack of data integration between departments also causes inefficiencies in the company's operations."
      imgOne="/img/sg1.jpg"
      imgTwo="/img/sg2.jpg"
      imgThree="/img/sg3.jpg"
      imgFour="/img/sg4.jpg"
      linkFigma="https://github.com/"
    />
  </section>
</template>

<script setup>
useHead({
  title: `Projects - SIM Group`,
});
</script>
