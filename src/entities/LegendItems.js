import LegendItem from "./LengendItem";

var legendItems = [
  new LegendItem(
    "1,000,000 +",
    "#741f1f",
    // "#8b0000",
    (cases) => cases >= 1_000_000,
    "white"
  ),

  new LegendItem(
    "500,000 - 999,999",
    // "#741f1f",
    "#9c2929",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "White"
  ),

  new LegendItem(
    "200,000 - 499,999",
    "#c57f7f",
    (cases) => cases >= 200_000 && cases < 500_000
  ),

  new LegendItem(
    "50,000 - 199,999",
    "#d8aaaa",
    (cases) => cases >= 50_000 && cases < 200_000
  ),

  new LegendItem(
    "0 - 49,999",
    "#ebd4d4",
    (cases) => cases > 0 && cases < 50_000
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;

/**
 * 7 > 1 million                        #8b0000
 * 6 >= 500 thousand < 1 million        #9e2a2a
 * 5 >= 200 thousand < 500 thousand     #b15555
 * 4 >= 100 thousand  < 200 Thousand    #c57f7f
 * 3 > 50 thousand < 100 thousand       #d8aaaa
 * 2 >= 0 < 50 thousand                 #ebd4d4
 * 1 NO DATA                            #ffffff
 */

/*

#741f1f // Really red
#9c2929 // more red
#c57f7f // red
#d8aaaa //more pink
#ebd4d4 //pink
#ffffff //white
*/
