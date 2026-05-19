var vg_world_map = "json/international_arrivals_world_map.vg.json";

vegaEmbed("#international_arrivals_world_map", vg_world_map)
  .then(function(result) {})
  .catch(console.error);