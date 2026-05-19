var vg_income_map = "json/visitors_income_symbol_map.vg.json";

vegaEmbed("#visitors_income_symbol_map", vg_income_map)
  .then(function(result) {})
  .catch(console.error);