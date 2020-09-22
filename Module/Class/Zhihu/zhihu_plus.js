const scriptName = '知乎助手';
const blocked_users_key = 'zhihu_blocked_users';
const current_userinfo_key = 'zhihu_current_userinfo';
let magicJS = MagicJS(scriptName, "INFO");

async function main(){
  if (magicJS.isResponse){
    switch (true){
      // 付费内容提醒
      case /^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/[0-9]*/.test(magicJS.request.url):
        try{
          let html = magicJS.response.body;
          if ((html.indexOf('查看完整内容') >= 0 || html.indexOf('查看全部章节') >= 0) && html.indexOf('paid') >= 0){
            let matchStr = html.match(/(richText[^<]*>)(.)/)[1];
            let start = html.lastIndexOf(matchStr) + matchStr.length;
            let insertText = '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(247 104 104 / 8%);display: block;text-decoration: none;" href="https://github.com/blackmatrix7/ios_rule_script/blob/master/script/zhihu/README.md#知乎助手"><div style="color: #f36;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1957"><path d="M821.333333 138.666667c64.8 0 117.333333 52.533333 117.333334 117.333333v149.333333a32 32 0 0 1-32 32 74.666667 74.666667 0 0 0 0 149.333334 32 32 0 0 1 32 32v149.333333c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V618.666667a32 32 0 0 1 32-32 74.666667 74.666667 0 0 0 0-149.333334 32 32 0 0 1-32-32V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666zM428.576 329.994667a32 32 0 0 0-43.733333-2.581334l-1.514667 1.344a32 32 0 0 0-2.581333 43.733334L452.565333 458.666667H405.333333l-1.877333 0.053333A32 32 0 0 0 373.333333 490.666667l0.053334 1.877333A32 32 0 0 0 405.333333 522.666667h80v42.666666H405.333333l-1.877333 0.053334A32 32 0 0 0 373.333333 597.333333l0.053334 1.877334A32 32 0 0 0 405.333333 629.333333h80v42.666667l0.053334 1.877333A32 32 0 0 0 517.333333 704l1.877334-0.053333A32 32 0 0 0 549.333333 672v-42.666667H618.666667l1.877333-0.053333A32 32 0 0 0 650.666667 597.333333l-0.053334-1.877333A32 32 0 0 0 618.666667 565.333333h-69.333334v-42.666666H618.666667l1.877333-0.053334A32 32 0 0 0 650.666667 490.666667l-0.053334-1.877334A32 32 0 0 0 618.666667 458.666667h-47.253334l71.84-86.186667 1.248-1.589333a32 32 0 0 0-50.421333-39.381334L512 430.016l-82.08-98.506667z" p-id="1958"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #f36;white-space: nowrap;font-weight: 600;">知乎助手 · 本文为付费内容</span></div><div><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;color: #f36;line-height: normal;display: flex;-webkit-box-align: center;align-items: center;"><svg style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;color: #f36;line-height: normal;fill: currentcolor;width: 24px;height: 24px;margin: -2px;" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd"></path></svg></span></div></div></a>'
            html = html.slice(0, start) + insertText + html.slice(start);
            magicJS.done({body: html});
          }
          // 彩蛋
          else if (Math.floor(Math.random()*200) == 7){
            let matchStr = html.match(/(richText[^<]*>)(.)/)[1];
            let start = html.lastIndexOf(matchStr) + matchStr.length;
            let insertText = '<a style="height: 42px;padding: 0 12px;border-radius: 6px;background-color: rgb(74 162 56 / 8%);display: block;text-decoration: none;" href="https://github.com/blackmatrix7/ios_rule_script/blob/master/script/zhihu/README.md#知乎助手"><div style="color: #619201;display: flex;-webkit-box-align: center;align-items: center;height: 100%;"><svg class="icon" style="width: 1.2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1465"><path d="M512 85.333333c71.477333 0 159.68 57.546667 229.258667 147.018667C817.845333 330.826667 864 455.978667 864 586.666667c0 211.808-148.501333 352-352 352S160 798.474667 160 586.666667c0-130.688 46.144-255.84 122.741333-354.314667C352.32 142.88 440.522667 85.333333 512 85.333333z m0 64c-48.213333 0-120.096 46.912-178.741333 122.314667C265.109333 359.253333 224 470.762667 224 586.666667c0 175.616 119.050667 288 288 288s288-112.384 288-288c0-115.904-41.109333-227.402667-109.258667-315.018667C632.096 196.234667 560.213333 149.333333 512 149.333333z m-74.666667 522.666667a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667z m-96-128a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z" p-id="1466"></path></svg><div style="flex: 1 1;white-space: nowrap;text-overflow: ellipsis;padding-left:4px"><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;line-height: 20px;color: #619201;white-space: nowrap;font-weight: 600;">知乎助手 · 本文为免费内容</span></div><div><span style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;color: #619201;line-height: normal;display: flex;-webkit-box-align: center;align-items: center;"><svg style="font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;-webkit-tap-highlight-color: rgba(26,26,26,0);font-size: 14px;color: #619201;line-height: normal;fill: currentcolor;width: 24px;height: 24px;margin: -2px;" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd"></path></svg></span></div></div></a>'
            html = html.slice(0, start) + insertText + html.slice(start);
            magicJS.done({body: html});
          }
          else{
            magicJS.done();
          }
          break;
        }
        catch(err){
          magicJS.logError(`知乎付费内容提醒出现异常：${err}`);
          magicJS.done();
        }
        break;
      // 获取当前用户信息
      case /^https:\/\/api\.zhihu\.com\/people\/self/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          let user_info = {
            id: obj['id'],
            is_vip: obj['vip_info']['is_vip']
          }
          magicJS.logDebug(`当前用户id：${obj['id']}，是否为VIP：${obj['vip_info']['is_vip']}`);
          magicJS.write(current_userinfo_key, user_info);
          let body=JSON.stringify(obj);
          magicJS.done({body});
        }
        catch(err){
          magicJS.logError(`知乎获取当前用户信息出现异常：${err}`);
          magicJS.done();
        }
        break;
      // 去除MCN信息
      case /^https?:\/\/api\.zhihu\.com\/people\/((?!self).)*$/.test(magicJS.request.url):
        try{
          let body = JSON.parse(magicJS.response.body);
          delete body['mcn_user_info']
          body=JSON.stringify(body);
          magicJS.done({body});
        }
        catch(err){
          magicJS.logError(`知乎去除MCN信息出现异常：${err}`);
          magicJS.done();
        }
        break;
      // 推荐去广告与黑名单增强
      case /^https:\/\/api\.zhihu\.com\/topstory\/recommend\?/.test(magicJS.request.url):
        try{
          let user_info = GetUserInfo();
          let custom_blocked_users = magicJS.read(blocked_users_key, user_info.id);
          custom_blocked_users = typeof custom_blocked_users === 'object' && !!custom_blocked_users ? custom_blocked_users : {};
          magicJS.logDebug(`当前黑名单列表: ${JSON.stringify(custom_blocked_users)}`);
          body = JSON.parse(magicJS.response.body);
          let data = body['data'].filter((element) =>{
            // 增加此条件，屏蔽推荐内视频 && element['extra']['type'] !== 'zvideo'
            return element['card_type'] != 'slot_event_card' && !element['ad'] && (!element.hasOwnProperty('extra') || element['extra']['type'] !== 'drama') && 
            (!element['common_card'] || !custom_blocked_users[element['common_card']['feed_content']['source_line']['elements'][1]['text']['panel_text']])
          });
          body['data'] = data;
          body=JSON.stringify(body);
          magicJS.done({body});
        }
        catch(err){
          magicJS.logError(`知乎推荐列表去广告出现异常：${err}`);
          magicJS.done();
        }
        break;
      // 关注列表去广告
      case /^https?:\/\/api\.zhihu\.com\/moments(\/|\?)?(recommend|action=|feed_type=)/.test(magicJS.request.url):
        try{
          let body = JSON.parse(magicJS.response.body);
          let data = body['data'].filter((element) =>{return !element['ad']});
          body['data'] = data;
          body=JSON.stringify(body);
          magicJS.done({body});
        }
        catch(err){
          magicJS.logError(`知乎关注列表去广告出现异常：${err}`);
          magicJS.done();
        }
        break;
      // 回答列表去广告及黑名单增强
      case /^https?:\/\/api\.zhihu\.com\/v4\/questions/.test(magicJS.request.url):
        try{
          let user_info = GetUserInfo();
          let custom_blocked_users = magicJS.read(blocked_users_key, user_info.id);
          custom_blocked_users = typeof custom_blocked_users === 'object' && !!custom_blocked_users ? custom_blocked_users : {};
          body = JSON.parse(magicJS.response.body);
          magicJS.logDebug(`当前黑名单列表: ${JSON.stringify(custom_blocked_users)}`);
          delete body['ad_info'];
          delete body['roundtable_info'];
          let data = body['data'].filter((element) =>{return !custom_blocked_users[element['author']['name']]})
          body['data'] = data;
          body=JSON.stringify(body);
          magicJS.done({body});
        }
        catch(err){
          magicJS.logError(`知乎回答列表去广告出现异常：${err}`);
          magicJS.done();
        }
        break;
      // 拦截官方账号推广消息
      case /^https?:\/\/api\.zhihu\.com\/notifications\/v3\/timeline\/entry\/system_message/.test(magicJS.request.url):
        try{
          const sysmsg_blacklist = ['知乎小伙伴', '知乎视频', '知乎团队', '知乎礼券', '知乎读书会团队'];
          let body = JSON.parse(magicJS.response.body);
          let data = body['data'].filter((element) =>{return sysmsg_blacklist.indexOf(element['content']['title']) < 0})
          body['data'] = data;
          body=JSON.stringify(body);
          magicJS.done({body});
        }
        catch (err){
          magicJS.logError(`知乎拦截官方账号推广消息出现异常：${err}`);
          magicJS.done();
        }
        break;
      // 屏蔽官方营销消息
      case /^https?:\/\/api\.zhihu\.com\/notifications\/v3\/message\?/.test(magicJS.request.url):
        try{
          let body = JSON.parse(magicJS.response.body);
          body['data'].forEach((element, index)=> {
            if(element['detail_title'] === '官方帐号消息'){
              let unread_count = body['data'][index]['unread_count'];
              if (unread_count > 0){
                body['data'][index]['content']['text'] = '未读消息' + unread_count + '条';
              }
              else{
                body['data'][index]['content']['text'] = '全部消息已读';
              }
              body['data'][index]['is_read'] = true;
              body['data'][index]['unread_count'] = 0;
            }
          })
          body=JSON.stringify(body);
          magicJS.done({body});
        }
        catch(err){
          magicJS.logError(`知乎屏蔽官方营销消息出现异常：${err}`);
          magicJS.done();
        }
        break;
      // 黑名单管理
      case /^https?:\/\/api\.zhihu\.com\/settings\/blocked_users/.test(magicJS.request.url):
        let userInfo = GetUserInfo();
        const answer_blocked_users = ['会员推荐','知乎付费咨询'];
        let custom_blocked_users = magicJS.read(blocked_users_key, userInfo.id);
        custom_blocked_users = typeof custom_blocked_users === 'object' && !!custom_blocked_users ? custom_blocked_users : {};
        answer_blocked_users.forEach(element => {
          custom_blocked_users[element] = '00000000000000000000000000000000';
        });
        magicJS.logInfo(`当前用户id：${userInfo.id}，脚本黑名单：${JSON.stringify(custom_blocked_users)}`);
        // 获取黑名单
        if (magicJS.request.method == 'GET'){
          try{
            let obj = JSON.parse(magicJS.response.body);
            if (!!obj['data']){
              magicJS.logDebug(`本次滑动获取的黑名单信息：${JSON.stringify(obj['data'])}`);
              obj['data'].forEach(element => {
                if (element['name'] != '[已重置]'){
                  custom_blocked_users[element['name']] = element['id'];
                }
              });
              magicJS.write(blocked_users_key, custom_blocked_users, userInfo.id);
              if (obj['paging']['is_end'] == true){
                magicJS.notify(`获取脚本黑名单结束，当前黑名单共${Object.keys(custom_blocked_users).length}人！`);
                magicJS.logInfo(`脚本黑名单内容：${JSON.stringify(custom_blocked_users)}。`);
              }
            }
            else{
              magicJS.logWarning(`获取黑名单失败，接口响应不合法：${magicJS.response.body}`);
            }
          }
          catch(err){
            magicJS.del(blocked_users_key);
            magicJS.logError(`获取黑名单失败，异常信息：${err}`);
            magicJS.notify('获取黑名单失败，执行异常，已清空黑名单。');
          }
        }
        // 写入黑名单
        else if (magicJS.request.method == 'POST'){
          try{
            let obj = JSON.parse(magicJS.response.body);
            if (obj.hasOwnProperty('name') && obj.hasOwnProperty('id')){
              magicJS.logDebug(`当前需要加入黑名单的用户Id：${obj['id']}，用户名：${obj['name']}`);
              custom_blocked_users[obj['name']] = obj['id'];
              magicJS.write(blocked_users_key, custom_blocked_users, userInfo.id);
              magicJS.logInfo(`${obj['name']}写入脚本黑名单成功，当前脚本黑名单数据：${JSON.stringify(custom_blocked_users)}`);
              magicJS.notify(`已将用户 ${obj['name']} 写入脚本黑名单。`);
            }
            else{
              magicJS.logWarning(`写入黑名单失败，接口响应不合法：${magicJS.response.body}`);
              magicJS.notify('写入脚本黑名单失败，接口返回不合法。');
            }
          }
          catch (err){
            magicJS.logError(`写入黑名单失败，异常信息：${err}`);
            magicJS.notify('写入脚本黑名单失败，执行异常，请查阅日志。');
          }
        }
        // 移出黑名单
        else if (magicJS.request.method == 'DELETE'){
          try{
            let obj = JSON.parse(magicJS.response.body);
            if (obj.success){
              let user_id = magicJS.request.url.match(/https?:\/\/api\.zhihu\.com\/settings\/blocked_users\/([0-9a-zA-Z]*)/)[1];
              magicJS.logDebug(`当前需要移出黑名单的用户Id：${user_id}`);
              for (let username in custom_blocked_users){
                if (custom_blocked_users[username] == user_id){
                  delete custom_blocked_users[username];
                  magicJS.write(blocked_users_key, custom_blocked_users, userInfo.id)
                  magicJS.logInfo(`${username}移出脚本黑名单成功，当前脚本黑名单数据：${JSON.stringify(custom_blocked_users)}`);
                  magicJS.notify(`已将用户 ${username} 移出脚本黑名单！`);
                  break;
                }
              }
            }
            else{
              magicJS.logWarning(`移出黑名单失败，接口响应不合法：${magicJS.response.body}`);
              magicJS.notify('移出脚本黑名单失败，接口返回不合法。');
            }
          }
          catch (err){
            magicJS.logError(`移出黑名单失败，异常信息：${err}`);
            magicJS.notify('移出脚本黑名单失败，执行异常，请查阅日志。');
          }
        }
        magicJS.done();
        break;
      // 去除预置关键字广告
      case /^https?:\/\/api\.zhihu\.com\/search\/preset_words\?/.test(magicJS.request.url):
        try{
          magicJS.logDebug(`预置关键字返回：${magicJS.response.body}`);
          let obj = JSON.parse(magicJS.response.body);
          if (obj.hasOwnProperty('preset_words') && obj['preset_words']['words']){
            let words = obj['preset_words']['words'].filter((element)=>{
              return element['type'] !== 'ad';
            })
            obj['preset_words']['words'] = words;
            let body = JSON.stringify(obj);
            magicJS.done({body});
          }
          else{
            magicJS.done();
          }
        }
        catch(err){
          magicJS.logError(`知乎去除预置关键字广告出现异常：${err}`);
          magicJS.done();
        }
        break;
      default: 
        magicJS.done(); 
        break;
    }
  }
  // 兜底
  magicJS.done();
} 

main();

function GetUserInfo(){
  try{
    let user_info = magicJS.read(current_userinfo_key);
    if (typeof user_info === 'string') user_info = JSON.parse(user_info);
    return user_info;
  }
  catch(err){
    magicJS.logError(`获取用户信息出现异常：${err}`);
    return {id: 'default', is_vip: false};
  }
}

function MagicJS(scriptName='MagicJS', logLevel='INFO'){

  return new class{

    constructor(){
      this.version = '2.2.2'
      this.scriptName = scriptName;
      this.logLevels = {
        DEBUG: 5,
        INFO: 4,
        NOTIFY: 3,
        WARNING: 2,
        ERROR: 1,
        CRITICAL: 0,
        NONE: -1
      };
      this.isLoon = typeof $loon !== 'undefined';
      this.isQuanX = typeof $task !== 'undefined';
      this.isJSBox = typeof $drive !== 'undefined';
      this.isNode = typeof module !== 'undefined' && !this.isJSBox;
      this.isSurge = typeof $httpClient !== 'undefined' && !this.isLoon;
      this.node = {'request': undefined, 'fs': undefined, 'data': {}};
      this.iOSUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1';
      this.pcUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36 Edg/84.0.522.59';
      this.logLevel = logLevel;
      if (this.isNode){
        this.node.fs = require('fs');
        this.node.request = require('request');
        try{
          this.node.fs.accessSync('./magic.json', this.node.fs.constants.R_OK | this.node.fs.constants.W_OK);
        }
        catch(err){
          this.node.fs.writeFileSync('./magic.json', '{}', {encoding: 'utf8'})
        }
        this.node.data = require('./magic.json');
      }
      else if (this.isJSBox){
        if (!$file.exists('drive://MagicJS')){
          $file.mkdir('drive://MagicJS');
        }
        if (!$file.exists('drive://MagicJS/magic.json')){
          $file.write({
            data: $data({string: '{}'}),
            path: 'drive://MagicJS/magic.json'
          })
        }
      }
    }

    set logLevel(level) {this._logLevel = typeof level === 'string'? level.toUpperCase(): 'DEBUG'};
    get logLevel() {return this._logLevel};
    get isRequest() { return typeof $request !== 'undefined' && typeof $response === 'undefined'}
    get isResponse() { return typeof $response !== 'undefined' }
    get request() { return typeof $request !== 'undefined' ? $request : undefined }
    get response() { 
      if (typeof $response !== 'undefined'){
        if ($response.hasOwnProperty('status')) $response['statusCode'] = $response['status']
        if ($response.hasOwnProperty('statusCode')) $response['status'] = $response['statusCode']
        return $response;
      }
      else{
        return undefined;
      }
    }
    get platform(){
      if (this.isSurge) return "Surge"
      else if (this.isQuanX) return "Quantumult X"
      else if (this.isLoon) return "Loon"
      else if (this.isJSBox) return "JSBox"
      else if (this.isNode) return "Node.js"
      else return "unknown"
    }

    read(key, session=''){
      let val = '';
      // 读取原始数据
      if (this.isSurge || this.isLoon) {
        val = $persistentStore.read(key);
      }
      else if (this.isQuanX) {
        val = $prefs.valueForKey(key);
      }
      else if (this.isNode){
        val = this.node.data;
      }
      else if (this.isJSBox){
        val = $file.read('drive://MagicJS/magic.json').string;
      }
      try {
        // Node 和 JSBox数据处理
        if (this.isNode) val = val[key]
        if (this.isJSBox) val = JSON.parse(val)[key];
        // 带Session的情况
        if (!!session){
          if(typeof val === 'string') val = JSON.parse(val);
          val = !!val && typeof val === 'object' ? val[session]: null;
        }
      } 
      catch (err){ 
        this.logError(err);
        val = !!session? {} : null;
        this.del(key);
      }
      if (typeof val === 'undefined') val = null;
      try {if(!!val && typeof val === 'string') val = JSON.parse(val)} catch(err) {}
      this.logDebug(`READ DATA [${key}]${!!session? `[${session}]`: ''}(${typeof val})\n${JSON.stringify(val)}`);
      return val;
    };

    write(key, val, session=''){
      let data = !!session ? {} : '';
      // 读取原先存储的JSON格式数据
      if (!!session && (this.isSurge || this.isLoon)) {
        data = $persistentStore.read(key);
      }
      else if (!!session && this.isQuanX) {
        data = $prefs.valueForKey(key);
      }
      else if (this.isNode){
        data = this.node.data;
      }
      else if (this.isJSBox){
        data = JSON.parse($file.read('drive://MagicJS/magic.json').string);
      }
      if (!!session){
        // 有Session，所有数据都是Object
        try {
          if (typeof data === 'string') data = JSON.parse(data)
          data = typeof data === 'object' && !!data ? data : {};
        }
        catch(err){
          this.logError(err);
          this.del(key); 
          data = {};
        };
        if (this.isJSBox || this.isNode){
          // 构造数据
          if (!data.hasOwnProperty(key) || typeof data[key] != 'object'){
            data[key] = {};
          }
          if (!data[key].hasOwnProperty(session)){
            data[key][session] = null;
          }
          // 写入或删除数据
          if (typeof val === 'undefined'){
            delete data[key][session];
          }
          else{
            data[key][session] = val;
          }
        }
        else {
          // 写入或删除数据      
          if (typeof val === 'undefined'){
            delete data[session];
          }
          else{
            data[session] = val;
          }
        }
      }
      // 没有Session时
      else{
        if (this.isNode || this.isJSBox){
          // 删除数据
          if (typeof val === 'undefined'){
            delete data[key];
          }
          else{
            data[key] = val;
          }
        }        
        else{    
          // 删除数据      
          if (typeof val === 'undefined'){
            data = null;
          }
          else{
            data = val;
          }
        }
      }
      // 数据回写
      if (typeof data === 'object') data = JSON.stringify(data);
      if (this.isSurge || this.isLoon) {
        $persistentStore.write(data, key);
      }
      else if (this.isQuanX) {
        $prefs.setValueForKey(data, key);
      }
      else if (this.isNode){
        this.node.fs.writeFileSync('./magic.json', data)
      }
      else if (this.isJSBox){
        $file.write({data: $data({string: data}), path: 'drive://MagicJS/magic.json'});
      }
      this.logDebug(`WRITE DATA [${key}]${!!session? `[${session}]`: ''}(${typeof val})\n${JSON.stringify(val)}`);
    };

    del(key, session=''){
      this.logDebug(`DELETE KEY [${key}]${!!session ? `[${session}]`:''}`);
      this.write(key, undefined, session);
    }

    /**
     * iOS系统通知
     * @param {*} title 通知标题
     * @param {*} subTitle 通知副标题
     * @param {*} body 通知内容
     * @param {*} options 通知选项，目前支持传入超链接或Object
     * Surge不支持通知选项，Loon仅支持打开URL，QuantumultX支持打开URL和多媒体通知
     * options "applestore://" 打开Apple Store
     * options "https://www.apple.com.cn/" 打开Apple.com.cn
     * options {'open-url': 'https://www.apple.com.cn/'} 打开Apple.com.cn
     * options {'open-url': 'https://www.apple.com.cn/', 'media-url': 'https://raw.githubusercontent.com/Orz-3/mini/master/Apple.png'} 打开Apple.com.cn，显示一个苹果Logo
     */ 
    notify(title=this.scriptName, subTitle='', body='', options=''){
      this.logNotify(`title:${title}\nsubTitle:${subTitle}\nbody:${body}\noptions:${typeof options === 'object'? JSON.stringify(options) : options}`);
      let convertOptions = (_options) =>{
        let newOptions = '';
        if (typeof _options === 'string'){
          if (this.isLoon) newOptions = _options;
          else if (this.isQuanX) newOptions = {'open-url': _options};
        }
        else if (typeof _options === 'object'){
          if (this.isLoon) newOptions = !!_options['open-url'] ? _options['open-url'] : '';
          else if (this.isQuanX) newOptions = !!_options['open-url'] || !!_options['media-url'] ? _options : {};
        }
        return newOptions;
      }
      options = convertOptions(options);
      // 支持单个参数通知
      if (arguments.length == 1){
        title = this.scriptName;
        subTitle = '',
        body = arguments[0];
      }
      if (this.isSurge){
        $notification.post(title, subTitle, body);
      }
      else if (this.isLoon){
        if (!!options) $notification.post(title, subTitle, body, options);
        else $notification.post(title, subTitle, body);
      }
      else if (this.isQuanX) {
         $notify(title, subTitle, body, options);
      }
      else if (this.isNode) {}
      else if (this.isJSBox){
        let push = {
          title: title,
          body: !!subTitle ? `${subTitle}\n${body}` : body,
        }
        $push.schedule(push);
      } 
    }
    
    log(msg, level="INFO"){
      if (!(this.logLevels[this._logLevel] < this.logLevels[level.toUpperCase()])) console.log(`[${level}] [${this.scriptName}]\n${msg}\n`);
    }

    logDebug(msg){
      this.log(msg, "DEBUG");
    }

    logInfo(msg){
      this.log(msg, "INFO");
    }

    logNotify(msg){
      this.log(msg, "NOTIFY");
    }

    logWarning(msg){
      this.log(msg, "WARNING");
    }

    logError(msg){
      this.log(msg, "ERROR");
    }

    /**
     * 对传入的Http Options根据不同环境进行适配
     * @param {*} options 
     */
    adapterHttpOptions(options, method){
      let _options = typeof options === 'object'? Object.assign({}, options): {'url': options, 'headers': {}};
      
      if (_options.hasOwnProperty('header') && !_options.hasOwnProperty('headers')){
        _options['headers'] = _options['header'];
        delete _options['header'];
      }

      // 规范化的headers
      const headersMap = {
        'accept': 'Accept',
        'accept-ch': 'Accept-CH',
        'accept-charset': 'Accept-Charset',
        'accept-features': 'Accept-Features',
        'accept-encoding': 'Accept-Encoding',
        'accept-language': 'Accept-Language',
        'accept-ranges': 'Accept-Ranges',
        'access-control-allow-credentials': 'Access-Control-Allow-Credentials',
        'access-control-allow-origin': 'Access-Control-Allow-Origin',
        'access-control-allow-methods': 'Access-Control-Allow-Methods',
        'access-control-allow-headers': 'Access-Control-Allow-Headers',
        'access-control-max-age': 'Access-Control-Max-Age',
        'access-control-expose-headers': 'Access-Control-Expose-Headers',
        'access-control-request-method': 'Access-Control-Request-Method',
        'access-control-request-headers': 'Access-Control-Request-Headers',
        'age': 'Age',
        'allow': 'Allow',
        'alternates': 'Alternates',
        'authorization': 'Authorization',
        'cache-control': 'Cache-Control',
        'connection': 'Connection',
        'content-encoding': 'Content-Encoding',
        'content-language': 'Content-Language',
        'content-length': 'Content-Length',
        'content-location': 'Content-Location',
        'content-md5': 'Content-MD5',
        'content-range': 'Content-Range',
        'content-security-policy': 'Content-Security-Policy',
        'content-type': 'Content-Type',
        'cookie': 'Cookie',
        'dnt': 'DNT',
        'date': 'Date',
        'etag': 'ETag',
        'expect': 'Expect',
        'expires': 'Expires',
        'from': 'From',
        'host': 'Host',
        'if-match': 'If-Match',
        'if-modified-since': 'If-Modified-Since',
        'if-none-match': 'If-None-Match',
        'if-range': 'If-Range',
        'if-unmodified-since': 'If-Unmodified-Since',
        'last-event-id': 'Last-Event-ID',
        'last-modified': 'Last-Modified',
        'link': 'Link',
        'location': 'Location',
        'max-forwards': 'Max-Forwards',
        'negotiate': 'Negotiate',
        'origin': 'Origin',
        'pragma': 'Pragma',
        'proxy-authenticate': 'Proxy-Authenticate',
        'proxy-authorization': 'Proxy-Authorization',
        'range': 'Range',
        'referer': 'Referer',
        'retry-after': 'Retry-After',
        'sec-websocket-extensions': 'Sec-Websocket-Extensions',
        'sec-websocket-key': 'Sec-Websocket-Key',
        'sec-websocket-origin': 'Sec-Websocket-Origin',
        'sec-websocket-protocol': 'Sec-Websocket-Protocol',
        'sec-websocket-version': 'Sec-Websocket-Version',
        'server': 'Server',
        'set-cookie': 'Set-Cookie',
        'set-cookie2': 'Set-Cookie2',
        'strict-transport-security': 'Strict-Transport-Security',
        'tcn': 'TCN',
        'te': 'TE',
        'trailer': 'Trailer',
        'transfer-encoding': 'Transfer-Encoding',
        'upgrade': 'Upgrade',
        'user-agent': 'User-Agent',
        'variant-vary': 'Variant-Vary',
        'vary': 'Vary',
        'via': 'Via',
        'warning': 'Warning',
        'www-authenticate': 'WWW-Authenticate',
        'x-content-duration': 'X-Content-Duration',
        'x-content-security-policy': 'X-Content-Security-Policy',
        'x-dnsprefetch-control': 'X-DNSPrefetch-Control',
        'x-frame-options': 'X-Frame-Options',
        'x-requested-with': 'X-Requested-With',
        'x-surge-skip-scripting':'X-Surge-Skip-Scripting'
      }
      if (typeof _options.headers === 'object'){
        for (let key in _options.headers){
          if (headersMap[key]) {
            _options.headers[headersMap[key]] = _options.headers[key];
            delete _options.headers[key];
          }
        }
      }

      // 自动补完User-Agent，减少请求特征
      if (!!!_options.headers || typeof _options.headers !== 'object' || !!!_options.headers['User-Agent']){
        if (!!!_options.headers || typeof _options.headers !== 'object') _options.headers = {};
        if (this.isNode) _options.headers['User-Agent'] = this.pcUserAgent;
        else  _options.headers['User-Agent'] = this.iOSUserAgent
      }

      // 判断是否跳过脚本处理
      let skipScripting = false;
      if ((typeof _options['opts'] === 'object' && (_options['opts']['hints'] === true || _options['opts']['Skip-Scripting'] === true)) || 
          (typeof _options['headers'] === 'object' && _options['headers']['X-Surge-Skip-Scripting'] === true)){
        skipScripting = true;
      }
      if (!skipScripting){
        if (this.isSurge) _options.headers['X-Surge-Skip-Scripting'] = false;
        // 目前对Loon的处理暂时无用，会被强制覆盖掉，等待作者更新
        else if (this.isLoon) _options.headers['X-Requested-With'] = 'XMLHttpRequest'; 
        else if (this.isQuanX){
          if (typeof _options['opts'] !== 'object') _options.opts = {};
          _options.opts['hints'] = false;
        }
      }

      // 对请求数据做清理
      if (!this.isSurge || skipScripting) delete _options.headers['X-Surge-Skip-Scripting'];
      if (!this.isQuanX && _options.hasOwnProperty('opts')) delete _options['opts'];
      if (this.isQuanX && _options.hasOwnProperty('opts')) delete _options['opts']['Skip-Scripting'];
      
      // GET请求将body转换成QueryString(beta)
      if (method === 'GET' && !this.isNode && !!_options.body){
        let qs = Object.keys(_options.body).map(key=>{
          if (typeof _options.body === 'undefined') return ''
          return `${encodeURIComponent(key)}=${encodeURIComponent(_options.body[key])}`
        }).join('&');
        if (_options.url.indexOf('?') < 0) _options.url += '?'
        if (_options.url.lastIndexOf('&')+1 != _options.url.length && _options.url.lastIndexOf('?')+1 != _options.url.length) _options.url += '&'
        _options.url += qs;
        delete _options.body;
      }

      // 适配多环境
      if (this.isQuanX){
        if (_options.hasOwnProperty('body') && typeof _options['body'] !== 'string') _options['body'] = JSON.stringify(_options['body']);
        _options['method'] = method;
      }
      else if (this.isNode){
        delete _options.headers['Accept-Encoding'];
        if (typeof _options.body === 'object'){
          if (method === 'GET'){
            _options.qs = _options.body;
            delete _options.body
          }
          else if (method === 'POST'){
            _options['json'] = true;
            _options.body = _options.body;
          }
        }
      }
      else if (this.isJSBox){
        _options['header'] = _options['headers'];
        delete _options['headers']
      }

      return _options;
    }
    
    /**
     * Http客户端发起GET请求
     * @param {*} options 
     * @param {*} callback 
     * options可配置参数headers和opts，用于判断由脚本发起的http请求是否跳过脚本处理。
     * 支持Surge和Quantumult X两种配置方式。
     * 以下几种配置会跳过脚本处理，options没有opts或opts的值不匹配，则不跳过脚本处理
     * {opts:{"hints": true}}
     * {opts:{"Skip-Scripting": true}}
     * {headers: {"X-Surge-Skip-Scripting": true}}
     */
    get(options, callback){
      let _options = this.adapterHttpOptions(options, 'GET');
      this.logDebug(`HTTP GET: ${JSON.stringify(_options)}`);
      if (this.isSurge || this.isLoon) {
        $httpClient.get(_options, callback);
      }
      else if (this.isQuanX) {
        $task.fetch(_options).then(
          resp => {
            resp['status'] = resp.statusCode
            callback(null, resp, resp.body)
          },
          reason => callback(reason.error, null, null),
        )
      }
      else if(this.isNode){
        return this.node.request.get(_options, callback);
      }
      else if(this.isJSBox){
        _options['handler'] = (resp)=>{
          let err = resp.error? JSON.stringify(resp.error) : undefined;
          let data = typeof resp.data === 'object' ? JSON.stringify(resp.data) : resp.data;
          callback(err, resp.response, data);
        }
        $http.get(_options);
      }
    }

    /**
     * Http客户端发起POST请求
     * @param {*} options 
     * @param {*} callback 
     * options可配置参数headers和opts，用于判断由脚本发起的http请求是否跳过脚本处理。
     * 支持Surge和Quantumult X两种配置方式。
     * 以下几种配置会跳过脚本处理，options没有opts或opts的值不匹配，则不跳过脚本处理
     * {opts:{"hints": true}}
     * {opts:{"Skip-Scripting": true}}
     * {headers: {"X-Surge-Skip-Scripting": true}}
     */
    post(options, callback){
      let _options = this.adapterHttpOptions(options, 'POST');
      this.logDebug(`HTTP POST: ${JSON.stringify(_options)}`);
      if (this.isSurge || this.isLoon) {
        $httpClient.post(_options, callback);
      }
      else if (this.isQuanX) {
        $task.fetch(_options).then(
          resp => {
            resp['status'] = resp.statusCode
            callback(null, resp, resp.body)
          },
          reason => {callback(reason.error, null, null)}
        )
      }
      else if(this.isNode){
        return this.node.request.post(_options, callback);
      }
      else if(this.isJSBox){
        _options['handler'] = (resp)=>{
          let err = resp.error? JSON.stringify(resp.error) : undefined;
          let data = typeof resp.data === 'object' ? JSON.stringify(resp.data) : resp.data;
          callback(err, resp.response, data);
        }
        $http.post(_options);
      }
    }

    done(value = {}){
      if (typeof $done !== 'undefined'){
        $done(value);
      }
    }

    isToday(day){
      if (day == null){
          return false;
      }
      else{
        let today = new Date();
        if (typeof day == 'string'){
            day = new Date(day);
        }
        if (today.getFullYear() == day.getFullYear() && today.getMonth() == day.getMonth() && today.getDay() == day.getDay()){
            return true;
        }
        else{
            return false;
        }
      }
    }

    isNumber(val) {
      return parseFloat(val).toString() === "NaN"? false: true;
    }

    /**
     * 对await执行中出现的异常进行捕获并返回，避免写过多的try catch语句
     * 示例：let [err,val] = await magicJS.attempt(func(), 'defaultvalue');
     * 或者：let [err, [val1,val2]] = await magicJS.attempt(func(), ['defaultvalue1', 'defaultvalue2']);
     * @param {*} promise Promise 对象
     * @param {*} defaultValue 出现异常时返回的默认值
     * @returns 返回两个值，第一个值为异常，第二个值为执行结果
     */
    attempt(promise, defaultValue=null){ return promise.then((args)=>{return [null, args]}).catch(ex=>{this.logError(ex); return [ex, defaultValue]})};

    /**
     * 重试方法
     * @param {*} fn 需要重试的函数
     * @param {number} [retries=5] 重试次数
     * @param {number} [interval=0] 每次重试间隔
     * @param {function} [callback=null] 函数没有异常时的回调，会将函数执行结果result传入callback，根据result的值进行判断，如果需要再次重试，在callback中throw一个异常，适用于函数本身没有异常但仍需重试的情况。
     * @returns 返回一个Promise对象
     */
    retry(fn, retries=5, interval=0, callback=null) {
      return (...args)=>{
        return new Promise((resolve, reject) =>{
          function _retry(...args){
            Promise.resolve().then(()=>fn.apply(this,args)).then(
              result => {
                if (typeof callback === 'function'){
                  Promise.resolve().then(()=>callback(result)).then(()=>{resolve(result)}).catch(ex=>{
                    this.logError(ex);
                    if (retries >= 1 && interval > 0){
                      setTimeout(() => _retry.apply(this, args), interval);
                    }
                    else if (retries >= 1) {
                      _retry.apply(this, args);
                    }
                    else{
                      reject(ex);
                    }
                    retries --;
                  });
                }
                else{
                  resolve(result);
                }
              }
              ).catch(ex=>{
              this.logError(ex);
              if (retries >= 1 && interval > 0){
                setTimeout(() => _retry.apply(this, args), interval);
              }
              else if (retries >= 1) {
                _retry.apply(this, args);
              }
              else{
                reject(ex);
              }
              retries --;
            })
          }
          _retry.apply(this, args);
        });
      };
    }

    formatTime(time, fmt="yyyy-MM-dd hh:mm:ss") {
      var o = {
        "M+": time.getMonth() + 1,
        "d+": time.getDate(),
        "h+": time.getHours(),
        "m+": time.getMinutes(),
        "s+": time.getSeconds(),
        "q+": Math.floor((time.getMonth() + 3) / 3),
        "S": time.getMilliseconds()
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (let k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    };

    now(){
      return this.formatTime(new Date(), "yyyy-MM-dd hh:mm:ss");
    }

    sleep(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
    
  }(scriptName);
}
