!function(e){var t={};function a(i){if(t[i])return t[i].exports;var d=t[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,a),d.l=!0,d.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)a.d(i,d,function(t){return e[t]}.bind(null,d));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);a(1);a(2)},function(e,t,a){},function(e,t){var a;(a=jQuery).trumbowyg.svgPath="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.21.0/ui/icons.svg",a.fn.contentEditor=function(e){var t=a(this).attr("data-name")||"fasty",i=this,d=a("input[name="+t+"]").val();d=""!=d?JSON.parse(d):"{}";var o,s,r,c,l=a.extend({widgets:[{id:"h1",icon:"fas fa-heading",title:"h1"},{id:"h2",icon:"fas fa-heading",title:"h2"},{id:"h3",icon:"fas fa-heading",title:"h3"},{id:"h4",icon:"fas fa-heading",title:"h4"},{id:"h5",icon:"fas fa-heading",title:"h5"},{id:"h6",icon:"fas fa-heading",title:"h6"},{id:"col2",icon:"fas fa-columns",title:"2"},{id:"col3",icon:"fas fa-columns",title:"3"},{id:"col4",icon:"fas fa-columns",title:"4"},{id:"col363",icon:"fas fa-columns",title:"3-6-3"},{id:"col48",icon:"fas fa-columns",title:"4-8"},{id:"col84",icon:"fas fa-columns",title:"8-4"},{id:"col10-2",icon:"fas fa-columns",title:"10-2"},{id:"col2-10",icon:"fas fa-columns",title:"2-10"},{id:"text",icon:"fas fa-align-left",title:"text"},{id:"img",icon:"fas fa-image",title:"img"},{id:"code",icon:"fas fa-code",title:"code"},{id:"video",icon:"fas fa-video",title:"video"},{id:"html5",icon:"fab fa-html5",title:"html5"}],grid:{"col-12":"col-12","col-10":"col-10","col-8":"col-8","col-6":"col-6","col-4":"col-4","col-3":"col-3","col-2":"col-2",container:"container"},input:"uk-input",value:d.html,trumbowyg:{btns:[["viewHTML"],["undo","redo"],["formatting"],["strong","em","del"],["superscript","subscript"],["foreColor","backColor"],["link"],["insertImage"],["justifyLeft","justifyCenter","justifyRight","justifyFull"],["unorderedList","orderedList"],["horizontalRule"],["removeformat"],["fullscreen"]],resetCss:!0,removeformatPasted:!0}},e),n=0,m=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},p=function(e,t){var i,d,o,s;switch(n%=3,e){case"h1":i='<div class="sg-row cms_row" data-type="h1"><div class="'+l.grid["col-12"]+' cms_col">',d='<h1 data-type="h1" class="drag drop" data-editable="true">Macaroon donut tiramisu sweet roll.</h1>',o="</div></div>";break;case"h2":i='<div class="sg-row cms_row" data-type="h2"><div class="'+l.grid["col-12"]+' cms_col">',d='<h2 data-type="h2" class="drag drop" data-editable="true">Macaroon donut tiramisu sweet roll.</h2>',o="</div></div>";break;case"h3":i='<div class="sg-row cms_row" data-type="h3"><div class="'+l.grid["col-12"]+' cms_col">',d='<h3 data-type="h3" class="drag drop" data-editable="true">Macaroon donut tiramisu sweet roll.</h3>',o="</div></div>";break;case"h4":i='<div class="sg-row cms_row" data-type="h4"><div class="'+l.grid["col-12"]+' cms_col">',d='<h4 data-type="h4" class="drag drop" data-editable="true">Macaroon donut tiramisu sweet roll.</h4>',o="</div></div>";break;case"h5":i='<div class="sg-row cms_row" data-type="h5"><div class="'+l.grid["col-12"]+' cms_col">',d='<h5 data-type="h5" class="drag drop" data-editable="true">Macaroon donut tiramisu sweet roll.</h5>',o="</div></div>";break;case"h6":i='<div class="sg-row cms_row" data-type="h6"><div class="'+l.grid["col-12"]+' cms_col">',d='<h6 data-type="h6" class="drag drop" data-editable="true">Macaroon donut tiramisu sweet roll.</h6>',o="</div></div>";break;case"img":i='<div class="sg-row cms_row" data-type="img"><div class="'+l.grid["col-12"]+' cms_col">',d='<div data-type="img" class="drag drop" data-editable="true"><img src="https://via.placeholder.com/1200x600" alt=""></div>',o="</div></div>";break;case"text":i='<div class="sg-row cms_row" data-type="text"><div class="'+l.grid["col-12"]+' cms_col">',d='<div data-type="text" class="drag drop" data-editable="true"><p style="text-align: justify;">'+function(e){for(var t="Chocolate lollipop pastry tiramisu. Chocolate cake sweet roll dragée. Cookie halvah tootsie roll cupcake candy canes pie oat cake danish chocolate cake. Cheesecake biscuit powder sweet powder. Chocolate bar lollipop jelly-o chocolate cake. Sweet roll sweet roll cupcake topping chocolate cake. Fruitcake chocolate cake jelly-o. Marzipan candy canes jujubes. Cotton candy candy canes icing sesame snaps chocolate cake toffee liquorice jelly-o. Pastry pastry bear claw toffee. Liquorice biscuit dessert chocolate bar gummies. Carrot cake danish cookie croissant toffee gingerbread sweet roll. Icing danish muffin cheesecake jelly-o sugar plum pastry cotton candy. Chocolate bar pie apple pie chocolate bar cupcake lollipop.".split("."),a=[],i=0;i<e;i++)a.push(t[parseInt(1e3*Math.random()%t.length)]);return a.join(". ")+"."}(5)+"</p></div>",o="</div></div>";break;case"code":var r=[];r.push('<code class="language-html">'+m("<h1>Some html code</h1>")+"</code>"),r.push('<code class="language-javascript">console.log("JS ... really ? ")</code>'),r.push('<code class="language-ruby">puts "I Love Ruby"</code>'),i='<div class="sg-row cms_row" data-type="code"><div class="'+l.grid["col-12"]+' cms_col">',d='<div data-type="code" class="drag drop" data-editable="true"><pre>'+r[n]+"</pre></div>",o="</div></div>";break;case"video":s='<div style="position:relative;padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/'+["AWKEWqx8OyA","TmDKbUrSYxQ","X8zLJlU_-60"][n]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',i='<div class="sg-row cms_row" data-type="embed"><div class="'+l.grid["col-12"]+' cms_col">',d='<div data-type="embed" class="drag drop" data-editable="true" data-html="'+s.replace(/"/g,"&quot;")+'">'+s+"</div>",o="</div></div>";break;case"html5":i='<div class="sg-row cms_row" data-type="embed"><div class="'+l.grid["col-12"]+' cms_col">',d='<div data-type="embed" class="drag drop" data-editable="true" data-html="'+(s="<p>HTML5 Code here</p>").replace(/"/g,"&quot;")+'">'+s+"</div>",o="</div></div>";break;case"col2":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col2"><div class="'+l.grid["col-6"]+' cms_col"></div><div class="'+l.grid["col-6"]+' cms_col"></div></div>',o="";break;case"col3":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col3"><div class="col-4 cms_col"></div><div class="'+l.grid["col-4"]+' cms_col"></div><div class="'+l.grid["col-4"]+' cms_col"></div></div>',o="";break;case"col4":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col4"><div class="'+l.grid["col-3"]+' cms_col"></div><div class="'+l.grid["col-3"]+' cms_col"></div><div class="'+l.grid["col-3"]+' cms_col"></div><div class="'+l.grid["col-3"]+' cms_col"></div></div>',o="";break;case"col282":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col282"><div class="col-2 cms_col"></div><div class="'+l.grid["col-8"]+' cms_col"></div><div class="col-2 cms_col"></div><div class="'+l.grid["col-3"]+' cms_col"></div></div>',o="";break;case"col363":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col363"><div class="'+l.grid["col-3"]+' cms_col"></div><div class="'+l.grid["col-6"]+' cms_col"></div><div class="'+l.grid["col-3"]+' cms_col"></div></div></div>',o="";break;case"col48":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col48"><div class="'+l.grid["col-4"]+' cms_col"></div><div class="'+l.grid["col-8"]+' cms_col"></div></div></div>',o="";break;case"col84":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col84"><div class="col-8 cms_col"></div><div class="'+l.grid["col-4"]+' cms_col"></div></div></div>',o="";break;case"col10-2":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col10-2"><div class="col-10 cms_col"></div><div class="'+l.grid["col-2"]+' cms_col"></div></div></div>',o="";break;case"col2-10":i="",d='<div class="sg-row cms_row sub_row drag" data-type="col2-10"><div class="col-2 cms_col"></div><div class="'+l.grid["col-10"]+' cms_col"></div></div></div>',o=""}return n++,a(t?i+d+o:d)},v=function(){a(i).find(".cms_row").removeClass("empty_row"),a(i).find(".cms_row").each((function(e,t){""===a(t).text().trim()&&a(t).addClass("empty_row")}))},f=function(){w();var e='<div class="sg-row cms_row" data-type="full"><div class="col-12 cms_col"><div class="drop drop_empty row_empty"></div></div></div>',t='<div class="drop drop_empty col_empty"><div></div></div>';a(i).find(".edit-mode .cms_editor .sub_row .cms_col .drop").each((function(e,i){(a(i).parent().hasClass("cms_col")||a(i).parent().hasClass("cms_row"))&&a(i).after(t)})),a(i).find(".edit-mode .page-content > .cms_row").each((function(t,i){a(i).before(e)})),a(i).find(".edit-mode .cms_col").each((function(e,i){a(i).hasClass("col-12")||a(i).prepend(t)})),a(i).find(".edit-mode .cms_editor .page-content").append(e),a(i).find(".edit-mode .drop_empty").attr("ondragover","allow_drop(event)"),a(i).find(".edit-mode .drop_empty").attr("ondrop","drop(event)")},g=function(e,t){e=e[0];const d=(t=t[0]).nextElementSibling,o=t.parentNode;if(a(e).data("menuitem")){var s=p(a(e).data("menuitem"),!1);a(t).hasClass("row_empty")?(a(s).hasClass("sub_row")?a(o).parent():a(o)).html(s[0].outerHTML):a(t).hasClass("col_empty")?(a(t).html(s[0].outerHTML),a(t).removeClass("row_empty"),a(t).removeClass("col_empty"),a(t).addClass("drag")):a(o).hasClass("sg-container")||a(o).html(s[0].outerHTML),u(a(".drag")),h(a(".drop"))}else{try{e.replaceWith(t),o.insertBefore(e,d)}catch(e){o.appendChild(tmp)}w()}a(i).find("[data-type=full] .col-12").each((function(e,t){if(a(t).find(".sg-row").length>0){var i=a(t).html();a(t).parent()[0].outerHTML=i}}))},u=function(e){e.attr("draggable",!0),e.attr("ondragstart","drag(event)"),e.attr("ondragend","drag_end(event)")},h=function(e){e.addClass("drop"),e.attr("ondragover","allow_drop(event)"),e.attr("ondrop","drop(event)")},w=function(){a(i).find(".edit-mode .drop").each((function(e,t){var i=a(t).parents().map((function(e,t){return t.className.split(" ")})).filter((function(e,t){return"cms_col"==t})).length>=1;0!=a(t).find(".cms_col").length||i||""!=a(t).text().trim()||"img"==a(t).data("type")||"embed"==a(t).data("type")||a(t).remove(),a(t).hasClass("drop")&&!a(t).hasClass("drag")&&a(t).remove()})),a(i).find(".edit-mode .drag").each((function(e,t){a(t).parents().map((function(e,t){return t.className.split(" ")})).filter((function(e,t){return"cms_col"==t})).length>=1&&a(t).parent().find(".drag").length>1&&(""==a(t).html().trim()||"<div></div>"==a(t).html().trim())&&!a(t).is("img")&&a(t).remove()})),a(i).find(".edit-mode .cms_row > *").each((function(e,t){a(t).parents().map((function(e,t){return t.className.split(" ")})).filter((function(e,t){return"cms_col"==t})).length,(!a(t).hasClass("cms_col")&&""==a(t).html().trim()||"<div></div>"==a(t).html().trim())&&a(t).remove()})),a(i).find(".edit-mode .cms_row").each((function(e,t){""!=a(t).html().trim()&&"<div></div>"!=a(t).html().trim()&&'<div class="col-12 cms_col"></div>'!=a(t).html().trim()||a(t).remove()}))},_=function(e){var t=[];return a(e).find("> .cms_row").each((function(e,i){"full"==a(i).data("type")&&(a(i).find("div:first").hasClass("cms_col")?a(i).data("type",a(i).find("[data-type]").data("type")):i=a(i).children()[0]);var d={data:[],type:a(i).data("type")};a(i).find("> .cms_col").each((function(e,t){var i=[];a(t).find("[data-type]").each((function(e,t){if(null==a(t).data("exported")){a(t).data("exported",!0);var d={};d.type=a(t).data("type"),d.attr=a(t).data("attr"),a(t).data("type").indexOf("col")>=0?d.content=_(a(t).parent()):d.content=a(t).data("html")||a(t).html(),i.push(d)}})),d.data.push(i)})),t.push(d)})),a(e).find("[data-exported]").removeAttr("data-exported"),t},b=function(){a(i).find(".edit-mode .cms_editor").on("mouseenter",".cms_row",(function(){a(i).find(".edit-mode .row_editor").css("margin-left","-99999px");var e=0-a(i).find(".cms_editor").offset().top+a(this).offset().top+a(this).height()-a(i).find(".row_editor").height(),t=a(this).offset().left+16-100;a(i).find(".edit-mode .row_editor").css("margin-left",t+"px"),a(i).find(".edit-mode .row_editor").css("margin-top",e+"px"),s=a(this)})),a(i).find(".edit-mode .cms_editor").on("mouseenter",".cms_col > *",(function(){a(this).offset().top,a(this).offset().left,a(i).find("aside").width(),s=a(this)})),a(i).find(".edit-mode .cms_row_delete").on("click",(function(){return s.closest(".edit-mode .sg-row").remove(),!1})),a(i).find(".edit-mode .page-content").on("click","[data-type]",(function(){if(r=a(this),raw_object=a(this.outerHTML),raw_object.data("attr")?(a(i).find("input[data-name=col-class]").val(raw_object.data("attr")["col-class"]),a(i).find("input[data-name=row-class]").val(raw_object.data("attr")["row-class"]),a(i).find("input[data-name=container-class]").val(raw_object.data("attr")["container-class"])):(a(i).find("input[data-name=col-class]").val(""),a(i).find("input[data-name=row-class]").val(""),a(i).find("input[data-name=container-class]").val("")),a(i).find(".editor-code").hide(),a(i).find(".editor-simplecode").hide(),a(i).find(".editor-img-code").hide(),raw_object.data("editable")){a(i).find(".trumbowyg").hide(),a(i).find("#ace-editor-"+t).hide();var e=a(this).html().trim();if(a(i).find(".edit-mode .cms_editor").addClass("editmode"),"text"==raw_object.data("type")&&(a("#trumbowyg-"+t).trumbowyg("html",e),a(i).find(".trumbowyg").show()),"code"==raw_object.data("type")&&(a(i).find(".editor-code").show(),a(i).find("#ace-editor-"+t).show(),a(i).find("input[data-name=lang]").val(raw_object.find("code:first")[0].className.replace("language-","")),c.session.setMode("ace/mode/"+mode),c.setOptions({maxLines:1/0,tabSize:2,useSoftTabs:!0}),c.getSession().setValue(a(this).text())),["embed","h1","h2","h3","h4","h5","h6"].indexOf(raw_object.data("type"))>=0&&(a(i).find(".editor-simplecode").show(),a("#ace-editor-"+t).show(),c.session.setMode("ace/mode/html"),c.setOptions({maxLines:1/0,tabSize:2,useSoftTabs:!0}),e=a(this).html(),"embed"==raw_object.data("type")&&(e=a(this).attr("data-html").replace(/&quot;/g,'"')),c.getSession().setValue(e)),["img"].indexOf(r.data("type"))>=0){var d=a(this).find(".img-div").length>0?a(this).find(".img-div"):a(this).find("img").parent();a(i).find(".editor-simplecode").show(),a(i).find(".editor-img-code").show(),a("#ace-editor-"+t).show(),a(i).find("input[data-name=img-width").val(d.attr("data-img-width")),a(i).find("select[data-name=img-alignment").val(d[0].style["text-align"]),c.session.setMode("ace/mode/html"),c.setOptions({maxLines:1/0,tabSize:2,useSoftTabs:!0}),c.getSession().setValue(d[0].innerHTML)}}return!1})),a(i).find(".edit-mode .sg-editcontent").on("click",".fa-times-circle",(function(){return a(".edit-mode .cms_editor").removeClass("editmode"),C(),!1})),a(i).find(".edit-mode .addwidget").on("click",(function(e){e.preventDefault();var t=p(a(this).data("id"),!0);return a(i).find(".edit-mode .page-content").append(t),a(i).find(".edit-mode .drag").attr("draggable",!0),a(i).find(".edit-mode .drag").attr("ondragstart","drag(event)"),a(i).find(".edit-mode .drag").attr("ondragover","allow_drop(event)"),a(i).find(".edit-mode .drag").attr("ondrop","drop(event)"),a(i).find(".edit-mode .drag").attr("ondragend","drag_end(event)"),v(),!1})),a(i).find(".toggle-layout").on("click",(function(e){e.preventDefault(),window.drag=function(e){var t=a(e.target).hasClass("drag")?a(e.target):a(e.target).closest(".drag");t.addClass("dragging"),e.stopPropagation(),o=t,e.dataTransfer.setData("text",""),setTimeout((function(){f()}),0)},window.drop=function(e){var t=document.location.host.split(".")[0];e.stopPropagation(),e.preventDefault();var i=a(e.target).hasClass("drop")?a(e.target):a(e.target).closest(".drop");if(e.dataTransfer.items){var d=!1,s=e.dataTransfer.items.length;s>1&&(s=1);for(var r=0;r<e.dataTransfer.items.length;r++)if("file"===e.dataTransfer.items[r].kind){d=!0;var c=e.dataTransfer.items[r].getAsFile();if(c.type.indexOf("image")>=0){var l=new FileReader;l.readAsDataURL(c),l.onloadend=function(){l.result;var e=new FormData;e.append("files",c),e.append("key",localStorage.getItem("resize_api_key")),a.ajax({xhr:function(){var e=new window.XMLHttpRequest;return e.upload.addEventListener("progress",(function(e){if(e.lengthComputable){var t=e.loaded/e.total;a(i).html(parseInt(100*t)+"%")}}),!1),e},type:"POST",url:"/file/upload",data:e,processData:!1,contentType:!1,success:function(e){e=JSON.parse(e),setTimeout((function(){var d="<picture>";d+='<source media="(max-width: 480px)" srcset="/asset/r/'+e.filename+"/480.webp?_from="+btoa(t)+'" type="image/webp">',d+='<source media="(max-width: 480px)" srcset="/asset/r/'+e.filename+"/480?_from="+btoa(t)+'">',d+='<source media="(max-width: 799px)" srcset="/asset/r/'+e.filename+"/799.webp?_from="+btoa(t)+'" type="image/webp">',d+='<source media="(max-width: 799px)" srcset="/asset/r/'+e.filename+"/799?_from="+btoa(t)+'">',d+='<source media="(min-width: 800px)" srcset="/asset/o/'+e.filename+".webp?_from="+btoa(t)+'" type="image/webp">',d+='<source media="(min-width: 800px)" srcset="/asset/o/'+e.filename+"?_from="+btoa(t)+'">',d+='<img src="/asset/o/'+e.filename+'">',d+="</picture>",a(i).html(d)}),100),w()}})}}}d||(a(".active").removeClass("active"),o.hasClass("cms_col")?i.hasClass("cms_col")?g(o,i):g(o,0==i.children().length?i:i.children().first()):i.hasClass("cms_col")?g(o.children().first(),i):g(o,i),i.removeClass("drop_empty"),i.hasClass("drag")||(u(i),h(i)),a(".drop_empty").remove(),w(),v())}},window.drag_end=function(e){e.stopPropagation(),a(".row_editor").css("margin-left","-99999px"),a(".dragging").removeClass("dragging"),a(".active").removeClass("active"),a(".drop_empty").remove(),w()},window.allow_drop=function(e){e.stopPropagation(),e.preventDefault();var t=a(e.target).hasClass("drop")?a(e.target):a(e.target).closest(".drag");a(".active").removeClass("active"),t.addClass("active")},a(i).find(".view-mode").toggleClass("isactive"),a(i).find(".edit-mode").toggleClass("isactive"),a(i).toggleClass("fullscreen"),a("[data-exported]").removeAttr("data-exported");var d={html:a(i).find(".edit-mode .page-content").html(),json:_(a(i).find(".edit-mode .page-content"))};return a('input[name="'+t+'"]').val(JSON.stringify(d)),a(i).find(".page-content").html(d.html||""),y(),a(i).find("[data-html]").each((function(e,t){a(t).html(a(t).attr("data-html"))})),!1}))},y=function(){a(i).find(".view-mode .drag, .view-mode .drop").removeAttr("ondragend").removeAttr("ondragstart").removeAttr("ondragover").removeAttr("ondrop")};a(i).append('<a href="" class="toggle-layout view-mode isactive">                      Edit content</a><section class="view-mode isactive">                        <div class="page-content"></div></section>'),a(i).append('<aside class="edit-mode">                  <div class="sg-container toolbox"><h1>Page tools</h1>                   <div class="sg-row"></div>                  <div class="sg-row"><a href="" class="toggle-layout">Exit</a></div></div>                </aside>'),a(i).addClass("editor-cms"),l.widgets.forEach((function(e){a(i).find(".toolbox .sg-row:first").append('      <div class="col-4 drag" dragdraggable="true" data-menuitem="'+e.id+'">        <a href="#" class="addwidget" data-id="'+e.id+'">          <i class="'+e.icon+'"></i>          <div class="small">'+e.title+"</div></a>      </div>")}));var x='<section class="edit-mode">      <div class="cms_editor">        <div class="row_editor">          <div class="cms_toolbar">            <ul>              <li><a href="#" class="cms_row_delete"><i class="fas fa-trash-alt"></i></a></li>            </ul>          </div>        </div>        <div class="sg-container page-content"></div>        <div class="sg-editcontent">          <i class="far fa-times-circle" style="float: right;padding: 10px"></i>          <div class="content">            <div id="trumbowyg-'+t+'"></div>            <div><label>Container Class</label><input type="text" data-name="container-class" class="'+l.input+'"></div>            <div><label>Row Class</label><input type="text" data-name="row-class" class="'+l.input+'"></div>            <div><label>Col Class</label><input type="text" data-name="col-class" class="'+l.input+'"></div>            <div class="editor-code"><label>Language</label><input type="text" data-name="lang" class="'+l.input+'"></div>            <div class="uk-grid"><div class="uk-width-1-2 editor-img-code"><label>Image Width</label><input type="text" data-name="img-width" class="'+l.input+'"></div>            <div class="uk-width-1-2 editor-img-code"><label>Image Alignment</label>            <select class="uk-select" data-name="img-alignment">            <option>left</option><option>center</option><option>right</option></select></div></div>            <div class="editor-code editor-simplecode"><label>Code</label><div id="ace-editor-'+t+'" class="ace-editor"></div></div>          </div>        </div>      </div>    </section>';a(i).append(x),function(e){a(i).find(".page-content").html(e||""),w(),v(),u(a(i).find(".drag")),u(a(i).find(".drop")),b(),y(),a(i).find("[data-html]").each((function(e,t){a(t).html(a(t).data("html"))}))}(l.value),a("#trumbowyg-"+t).trumbowyg(l.trumbowyg).on("tbwchange",(function(){r.html(a("#trumbowyg-"+t).trumbowyg("html"))})),(c=ace.edit("ace-editor-"+t)).getSession().setUseWrapMode(!0),c.session.setMode("ace/mode/html");var C=function(){if(r){var e={"col-class":a("input[data-name=col-class]").val(),"row-class":a("input[data-name=row-class]").val(),"container-class":a("input[data-name=container-class]").val()},d=c.getSession().getValue();if("code"==r.data("type")){var o="language-"+a(i).find("input[data-name=lang]").val();r.html('<pre><code class="'+o+'">'+m(d)+"</code></pre>")}if(["h1","h2","h3","h4","h5","h6"].indexOf(r.data("type"))>=0&&r.html(d),["embed"].indexOf(r.data("type"))>=0&&(r.html(d),r.attr("data-html",d)),["text"].indexOf(r.data("type"))>=0&&r.html(a("#trumbowyg-"+t).trumbowyg("html")),["img"].indexOf(r.data("type"))>=0){var s=a(i).find("input[data-name=img-width").val()?a(i).find("input[data-name=img-width").val():"100%",l=a(i).find("select[data-name=img-alignment").val()?a(i).find("select[data-name=img-alignment").val():"left",n=a("<div>").append(a.parseHTML(d));n.each((function(){for(var e=a(this).find("img"),t=0;t<e.length;t++)e[t].style.width=s})),r.html('<div class="img-div" style="text-align: '+l+'" data-img-width="'+s+'">'+n[0].innerHTML+"</div>")}r.attr("data-attr",JSON.stringify(e))}};return this}}]);