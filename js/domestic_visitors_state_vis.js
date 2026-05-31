var vg_map = "json/domestic_visitors_choropleth_map.vg.json";

vegaEmbed("#domestic_visitors_choropleth_map", vg_map, {
  actions: false
})
  .then(function(result) {})
  .catch(console.error);