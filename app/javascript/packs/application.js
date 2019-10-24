// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

const FroalaEditor = require('froala-editor');
 
// // Load a plugin.
require('froala-editor/js/plugins/align.min.js')
require("froala-editor/js/plugins/video.min.js")
require("froala-editor/js/plugins//align.min.js")
require("froala-editor/js/plugins//char_counter.min.js")
require("froala-editor/js/plugins//code_beautifier.min.js")
require("froala-editor/js/plugins//code_view.min.js")
require("froala-editor/js/plugins//colors.min.js")
require("froala-editor/js/plugins//emoticons.min.js")
require("froala-editor/js/plugins//entities.min.js")
require("froala-editor/js/plugins//file.min.js")
require("froala-editor/js/plugins//font_family.min.js")
require("froala-editor/js/plugins//font_size.min.js")
require("froala-editor/js/plugins//fullscreen.min.js")
require("froala-editor/js/plugins//help.min.js")
require("froala-editor/js/plugins//image.min.js")
require("froala-editor/js/plugins//image_manager.min.js")
require("froala-editor/js/plugins//inline_style.min.js")
require("froala-editor/js/plugins//line_breaker.min.js")
require("froala-editor/js/plugins//link.min.js")
require("froala-editor/js/plugins//lists.min.js")
require("froala-editor/js/plugins//paragraph_format.min.js")
require("froala-editor/js/plugins//paragraph_style.min.js")
require("froala-editor/js/plugins//print.min.js")
require("froala-editor/js/plugins//quick_insert.min.js")
require("froala-editor/js/plugins//quote.min.js")
require("froala-editor/js/plugins//save.min.js")
require("froala-editor/js/plugins//table.min.js")
require("froala-editor/js/plugins//special_characters.min.js")
require("froala-editor/js/plugins//url.min.js")

document.addEventListener('turbolinks:load', () => {
  // $('#project_description').FroalaEditor();
  new FroalaEditor('#project_description');
});