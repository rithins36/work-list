function loadScoresGSheet() {

  let sheetUrl = "https://docs.google.com/spreadsheets/d/1IBrHZ5zt5EP9TILd-YTCbHVipz6A8dnXheZsF_VcmVc/edit#gid=0";

  $('#scores').sheetrock(
    {
      url: sheetUrl,
      query: `SELECT A, B WHERE B IS NOT NULL order by B desc`,
      fetchSize: 10,
      labels: ["NAME", "POINTS"],
      callback: () => {},
    }
  );
}


$(document).ready(loadScoresGSheet);