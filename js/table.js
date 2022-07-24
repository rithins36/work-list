function loadScores() {

let sheetUrl = "https://docs.google.com/spreadsheets/d/1wVi6fbOC1ugtZkUvZY1eaKwXvm5y33FQSOdPjUm4UOk/edit#gid=0";

$('#scores').sheetrock({
    url: sheetUrl,
    query: "SELECT B, C WHERE C IS NOT NULL order by C desc",
    fetchSize: 20,
    callback: () => {},
  });

}

window.onload = loadScores;