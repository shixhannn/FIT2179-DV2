var vg_map = "json/domestic_visitors_choropleth_map.vg.json";

vegaEmbed("#domestic_visitors_choropleth_map", vg_map)
  .then(function(result) {})
  .catch(console.error);