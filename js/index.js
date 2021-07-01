new WOW({
  offset: 200,
}).init();
$(".Nav_MetaPay").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#MetaPay_anchor").offset().top,
    },
    { duration: 500, easing: "swing" }
  );
});
$(".Nav_MetaNFT").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#MetaNFT_anchor").offset().top,
    },
    { duration: 500, easing: "swing" }
  );
});
$(".Nav_MetaDAO").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#MetaDAO_anchor").offset().top,
    },
    { duration: 500, easing: "swing" }
  );
});
$(".submit_btn").on("click", function () {
  var username = $(".username_input").val();
  var email = $(".email_input").val();
  if (username == "") {
    alert("姓名不能为空");
    return;
  }
  if (email == "") {
    alert("邮箱不能为空");
    return;
  }

  alert("提交成功");
});
let backtop = $(".backtop").hide();
$(window).scroll(function () {
  let sTop = $(window).scrollTop();
  if (sTop > 800) {
    backtop.show().addClass("bounceInRight").removeClass("bounceOutRight");
  } else {
    backtop.removeClass("bounceInRight").addClass("bounceOutRight");
  }
});
backtop.click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

/*
 *存cookie(cookieName--字段名   cookieValue--字段值   cookieDates--有效时间)
 * */
function saveCookie(cookieName, cookieValue, cookieDates) {
  var d = new Date();
  d.setDate(d.getDate() + cookieDates);
  document.cookie =
    cookieName + "=" + cookieValue + ";expires=" + d.toGMTString();
}
//取cookie
function getCookie(cookieName) {
  var cookieStr = unescape(document.cookie);
  var arr = cookieStr.split("; ");
  var cookieValue = "";
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split("=");
    if (temp[0] == cookieName) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
}
function lang(language) {
	if(language == 'en'){
		$('.MetaPayWhitepaper').attr('href','pdf/MetaPayWhitepaper1.0_en.pdf')
		$('.entk,.cccc1,.Roaden').show()
		$('.chtk,.cccc2,.Roadcn').hide()
		
	}else{
		$('.MetaPayWhitepaper').attr('href','pdf/MetaPayWhitepaper1.0_zh.pdf')
		$('.chtk,.cccc2,Roadcn').show()
		$('.entk,.cccc1,Roaden').hide()
		
	}
  $.i18n.init(
    {
      lng: language, //指定语言
      resGetPath: "locales/" + language + "/translation.json", //语言文件的路径
      ns: {
        namespaces: ["translation", "message"],
        defaultNs: "translation", //默认使用的，不指定namespace时
      },
    },
    function (err, t) {
      $("[data-i18n]").i18n(); // 通过选择器集体翻译
      $("[data-i18n-html]").each(function () {
        var date_name = $(this).attr("data-i18n-html");
        $(this).html($.t(date_name));
      });
      $.t("message:app.child", {
        count: "1",
      }); //使用namespace，并将count替换成1，其值为1 child
      $.t("message:app.child_plural", {
        count: "2",
      }); //将count替换成2，其值为2 children
    }
  );
}
var langType = getCookie("language") || "en";
lang(langType);
$(".chinese").click(function () {
  lang("zh");
  saveCookie("language", "zh", 1);
  location.reload(); //刷新页面
});
$(".english").click(function () {
  lang("en");
  saveCookie("language", "en", 1);
  location.reload();//刷新页面
 
});

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 2) {
      $(".navbar-default").removeClass("sticky");
  } else {
      $(".navbar-default").addClass("sticky");
  }
});