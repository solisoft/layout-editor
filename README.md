# layoutEditor

This plugin was extracted from FastyCMS core code. It allow you to edit complex
layouts for your web pages. Nested columns, drag & drop, picture upload, etc...

https://player.vimeo.com/video/446930997

# Getting started

```html
<!DOCTYPE html>
<html>
  <head>
    <title>LayoutEditor</title>

    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-VhBcF/php0Z/P5ZxlxaEx1GwqTQVIBu4G4giRWxTKOCjTxsPFETUDdVL5B6vYvOt" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.21.0/ui/trumbowyg.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/solisoft/layout-editor@master/public/editor.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-html.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-html.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.21.0/trumbowyg.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/trumbowyg@2.21.0/plugins/colors/trumbowyg.colors.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/solisoft/layout-editor@master/public/bundle.js"></script>
  </head>
  <body>
    <input type="hidden" name="editorjs" ref="html" value="" />
    <div id="editorjs" data-name="editorjs"></div>
    <script>
      $(function() {
        $('#editorjs').contentEditor({})
      })
    </script>
  </body>
</html>
```

# Compile

```bash
npm install
./node_modules/webpack/bin/webpack.js
```

# Demo

https://jsfiddle.net/96kgo8tr/

