<template>
  <h2>Units</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Code</th>
        <th>Description</th>
        <th>cp</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="unit in units" :key="unit.code">
        <td>{{ unit.code }}</td>
        <td>{{ unit.desc }}</td>
        <td>{{ unit.cp }}</td>
        <td>{{ unit.type }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      units: [
        {
          code: "ICT10001",
          desc: "Problem Solving with ICT",
          cp: "12.5",
          type: "Core",
        },
        { code: "COS10005", desc: "Web Development", cp: "12.5", type: "Core" },
        {
          code: "INF10002",
          desc: "Database Analysis and Design",
          cp: "12.5",
          type: "Core",
        },
        {
          code: "COS10009",
          desc: "Introduction to Programming",
          cp: "12.5",
          type: "Core",
        },
        {
          code: "COS20001",
          desc: "User-Centred Design",
          cp: "12.5",
          type: "Software Development",
        },
        {
          code: "TNE10005",
          desc: "Network Administration",
          cp: "12.5",
          type: "Software Development",
        },
        {
          code: "COS20016",
          desc: "Operating System Configuration",
          cp: "12.5",
          type: "Software Development",
        },
        {
          code: "INF20012",
          desc: "Enterprise Systems",
          cp: "12.5",
          type: "Systems Analysis",
        },
        {
          code: "ACC10007",
          desc: "Financial Information for Decision Making",
          cp: "12.5",
          type: "Systems Analysis",
        },
        {
          code: "INF20003",
          desc: "Requirements Analysis and Modelling",
          cp: "12.5",
          type: "Systems Analysis",
        },
        {
          code: "ACC20014",
          desc: "Management Decision Making",
          cp: "12.5",
          type: "Systems Analysis",
        },
        {
          code: "INF30001",
          desc: "Systems Acquisition & Implementation Management",
          cp: "12.5",
          type: "Systems Analysis",
        },
      ],
    };
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  margin: 0 auto;
}
</style>
