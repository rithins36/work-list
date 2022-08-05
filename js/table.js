function loadScoresGSheet() {

  let sheetUrl = "https://docs.google.com/spreadsheets/d/1IBrHZ5zt5EP9TILd-YTCbHVipz6A8dnXheZsF_VcmVc/edit#gid=0";

  $('#scores').sheetrock(
    {
      url: sheetUrl,
      query: `SELECT A, B WHERE B >= 20 order by B desc`,
      labels: ["NAME", "POINTS"],
      callback: () => {},
    }
  );
};


$(document).ready(loadScoresGSheet);
