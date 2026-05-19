var vg_source_bar = "json/top_countries_bar_chart.vg.json";

vegaEmbed("#top_countries_bar_chart", vg_source_bar)
  .then(function(result) {})
  .catch(console.error);