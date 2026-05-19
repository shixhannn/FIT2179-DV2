var vg_state_map = "json/international_arrivals_symbol_map.vg.json";

vegaEmbed("#international_arrivals_symbol_map", vg_state_map)
  .then(function(result) {})
  .catch(console.error);