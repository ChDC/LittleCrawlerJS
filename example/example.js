var lc = new LittleCrawler();

var config = {
  request: "http://www.weather.com.cn/weather1d/101010100.shtml",
  response: {
    city: "body > div.con.today.clearfix > div.left.fl > div.ctop.clearfix > div.crumbs.fl > a",
    day: {
      temp: "#today > div.t > ul > li:nth-child(1) > p.tem > span",
      weather: "#today > div.t > ul > li:nth-child(1) > p.wea"
    },
    night: {
      temp: "#today > div.t > ul > li:nth-child(2) > p.tem > span",
      weather: "#today > div.t > ul > li:nth-child(2) > p.wea"
    },
    lifeHTML: "body > div.con.today.clearfix > div.left.fl > div.livezs"
  }
}

let $ = document.getElementById.bind(document);

lc.get(config)
  .then(result => {
    $('city').textContent = result.city;
    $('life').innerHTML = result.lifeHTML;
    for(let when of ["day", "night"]){
      let info = result[when];
      for(let item in info)
        $(`${when}.${item}`).textContent = info[item];
    }
  })
