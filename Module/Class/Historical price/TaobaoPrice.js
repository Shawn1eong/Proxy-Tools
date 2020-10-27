let body = JSON.parse($response.body)
let item = body.data.item
let shareUrl = `https://item.taobao.com/item.htm?id=${item.itemId}`
requestPrice(shareUrl, function(data) {
  if (data) {
    if (body.data.apiStack) {
      let apiStack = body.data.apiStack[0]
      let value = JSON.parse(apiStack.value)
      let tradeConsumerProtection = null
      let consumerProtection = null
      let trade = null
      let vertical = null
      if (value.global) {
        tradeConsumerProtection = value.global.data.tradeConsumerProtection
        consumerProtection = value.global.data.consumerProtection
        trade = value.global.data.trade
        vertical = value.global.data.vertical
      } else {
        tradeConsumerProtection = value.tradeConsumerProtection
        consumerProtection = value.consumerProtection
        trade = value.trade
        vertical = value.vertical
      }
      if (trade && trade.useWap == "true") {
        $done({
          body
        })
        sendNotify(data, shareUrl)
      } else {
        if (vertical && vertical.hasOwnProperty("tmallhkDirectSale")) {
          $done({
            body
          })
          sendNotify(data, shareUrl)
        } else if (tradeConsumerProtection) {
          tradeConsumerProtection = setTradeConsumerProtection(data, tradeConsumerProtection)
        } else {
          consumerProtection = setConsumerProtection(data, consumerProtection)
        }
        apiStack.value = JSON.stringify(value)
        $done({
          body: JSON.stringify(body)
        })
      }
    } else {
      $done({
        body
      })
      sendNotify(data, shareUrl)
    }
  } else {
    $done({
      body
    })
  }
})

function sendNotify(data, shareUrl) {
  if (data.ok == 1 && data.single) {
    const lower = lowerMsgs(data.single)[0]
    const detail = priceSummary(data)[1]
    const tip = data.PriceRemark.Tip + "（仅供参考）"
    $notification.post("", "", `〽️历史${lower} ${tip}\n${detail}\n\n👉查看详情：http://tool.manmanbuy.com/historyLowest.aspx?url=${encodeURI(shareUrl)}`)
  }
  if (data.ok == 0 && data.msg.length > 0) {
    $notification.post("", "", `⚠️ ${data.msg}`)
  }
}

function setConsumerProtection(data, consumerProtection) {
  let basicService = consumerProtection.serviceProtection.basicService
  let items = consumerProtection.items
  if (data.ok == 1 && data.single) {
    const lower = lowerMsgs(data.single)
    const tip = data.PriceRemark.Tip
    const summary = priceSummary(data)[1]
    const item = customItem(lower[1], [`${lower[0]} ${tip}（仅供参考）\n${summary}`])
    basicService.services.unshift(item)
    items.unshift(item)
  }
  if (data.ok == 0 && data.msg.length > 0) {
    let item = customItem("暂无历史价格", [data.msg])
    basicService.services.unshift(item)
    items.unshift(item)
  }
  return consumerProtection
}

function setTradeConsumerProtection(data, tradeConsumerProtection) {
  let service = tradeConsumerProtection.tradeConsumerService.service
  if (data.ok == 1 && data.single) {
    const lower = lowerMsgs(data.single)
    const tip = data.PriceRemark.Tip
    const tbitems = priceSummary(data)[0]
    const item = customItem(lower[1], `${lower[0]} ${tip}（仅供参考）`)
    let nonService = tradeConsumerProtection.tradeConsumerService.nonService
    service.items = service.items.concat(nonService.items)
    nonService.title = "价格详情"
    nonService.items = tbitems
    service.items.unshift(item)
  }
  if (data.ok == 0 && data.msg.length > 0) {
    service.items.unshift(customItem("暂无历史价格", data.msg))
  }
  return tradeConsumerProtection
}

function lowerMsgs(data) {
  const lower = data.lowerPriceyh
  const lowerDate = dateFormat(data.lowerDateyh)
  const lowerMsg = "最低到手价：¥" + String(lower) + `（${lowerDate}）`
  const lowerMsg1 = "历史最低¥" + String(lower)
  return [lowerMsg, lowerMsg1]
}

function priceSummary(data) {
  let tbitems = []
  let summary = ""
  let listPriceDetail = data.PriceRemark.ListPriceDetail
  listPriceDetail.pop()
  let list = listPriceDetail.concat(historySummary(data.single))
  list.forEach((item, index) => {
    if (item.Name == "双11价格") {
      item.Name = "双十一价格"
    } else if (item.Name == "618价格") {
      item.Name = "六一八价格"
    } else if (item.Name == "30天最低价") {
      item.Name = "三十天最低"
    }
    summary += `\n${item.Name}${getSpace(4)}${item.Price}${getSpace(4)}${item.Date}${getSpace(4)}${item.Difference}`
    let summaryItem = `${item.Name}${getSpace(4)}${item.Price}${getSpace(4)}${item.Date}${getSpace(4)}${item.Difference}`
    tbitems.push(customItem(summaryItem))
  })
  return [tbitems, summary]
}

function historySummary(single) {
  const rexMatch = /\[.*?\]/g;
  const rexExec = /\[(.*),(.*),"(.*)".*\]/;
  let currentPrice, lowest60, lowest180, lowest360
  let list = single.jiagequshiyh.match(rexMatch);
  list = list.reverse().slice(0, 360);
  list.forEach((item, index) => {
    if (item.length > 0) {
      const result = rexExec.exec(item);
      const dateUTC = new Date(eval(result[1]));
      const date = dateUTC.format("yyyy-MM-dd");
      let price = parseFloat(result[2]);
      if (index == 0) {
        currentPrice = price
        lowest60 = {
          Name: "六十天最低",
          Price: `¥${String(price)}`,
          Date: date,
          Difference: difference(currentPrice, price),
          price
        }
        lowest180 = {
          Name: "一百八最低",
          Price: `¥${String(price)}`,
          Date: date,
          Difference: difference(currentPrice, price),
          price
        }
        lowest360 = {
          Name: "三百六最低",
          Price: `¥${String(price)}`,
          Date: date,
          Difference: difference(currentPrice, price),
          price
        }
      }
      if (index < 60 && price <= lowest60.price) {
        lowest60.price = price
        lowest60.Price = `¥${String(price)}`
        lowest60.Date = date
        lowest60.Difference = difference(currentPrice, price)
      }
      if (index < 180 && price <= lowest180.price) {
        lowest180.price = price
        lowest180.Price = `¥${String(price)}`
        lowest180.Date = date
        lowest180.Difference = difference(currentPrice, price)
      }
      if (index < 360 && price <= lowest360.price) {
        lowest360.price = price
        lowest360.Price = `¥${String(price)}`
        lowest360.Date = date
        lowest360.Difference = difference(currentPrice, price)
      }
    }
  });
  return [lowest60, lowest180, lowest360];
}

function difference(currentPrice, price) {
  let difference = sub(currentPrice, price)
  if (difference == 0) {
    return "-"
  } else {
    return `${difference > 0 ? "↑" : "↓"}${String(difference)}`
  }
}

function sub(arg1, arg2) {
  return add(arg1, -Number(arg2), arguments[2]);
}

function add(arg1, arg2) {
  arg1 = arg1.toString(), arg2 = arg2.toString();
  let arg1Arr = arg1.split("."),
    arg2Arr = arg2.split("."),
    d1 = arg1Arr.length == 2 ? arg1Arr[1] : "",
    d2 = arg2Arr.length == 2 ? arg2Arr[1] : "";
  let maxLen = Math.max(d1.length, d2.length);
  let m = Math.pow(10, maxLen);
  let result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen));
  let d = arguments[2];
  return typeof d === "number" ? Number((result).toFixed(d)) : result;
}

function requestPrice(share_url, callback) {
  const options = {
    url: "https://apapia-history.manmanbuy.com/ChromeWidgetServices/WidgetServices.ashx",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 - mmbWebBrowse - ios"
    },
    body: "methodName=getHistoryTrend&p_url=" + encodeURIComponent(share_url)
  }
  $httpClient.post(options, function(error, response, data) {
    if (!error) {
      callback(JSON.parse(data));
    } else {
      callback(null, null);
    }
  })
}

function dateFormat(cellval) {
  const date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));
  const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return date.getFullYear() + "-" + month + "-" + currentDate;
}

function getSpace(length) {
  let blank = "";
  for (let index = 0; index < length; index++) {
    blank += " ";
  }
  return blank;
}

function customItem(title, desc) {
  return {
    icon: "https://s2.ax1x.com/2020/02/16/3STeIJ.png",
    title: title,
    name: title,
    desc: desc
  }
}

function customTradeConsumerProtection() {
  return {
    "tradeConsumerService": {
      "service": {
        "items": [],
        "icon": "",
        "title": "基础服务"
      },
      "nonService": {
        "items": [],
        "title": "其他"
      }
    },
    "passValue": "all",
    "url": "https://h5.m.taobao.com/app/detailsubpage/consumer/index.js",
    "type": "0"
  }
}

Array.prototype.insert = function(index, item) {
  this.splice(index, 0, item);
};

Date.prototype.format = function(fmt) {
  let o = {
    "y+": this.getFullYear(),
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      if (k == "y+") {
        fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
      } else if (k == "S+") {
        let lens = RegExp.$1.length;
        lens = lens == 1 ? 3 : lens;
        fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens));
      } else {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
  }
  return fmt;
}
