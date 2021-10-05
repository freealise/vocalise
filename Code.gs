function doGet(e) {
  if (e.parameter.a == "languages") {
    return ContentService.createTextOutput(languages(e.parameter.tl));
  } else if (e.parameter.a == "translate") {
    return ContentService.createTextOutput(translate(e.parameter.w, e.parameter.tl, e.parameter.sl));
  } else if (e.parameter.a == "translate_beta") {
    return ContentService.createTextOutput(translate_beta(e.parameter.w, e.parameter.tl, e.parameter.sl));
  } else if (e.parameter.a == "correct") {
    return ContentService.createTextOutput(correct(e.parameter.w, e.parameter.tl, e.parameter.sl));
  } else if (e.parameter.a == "phrases") {
    return ContentService.createTextOutput(phrases(e.parameter.w, e.parameter.tl));
  } else if (e.parameter.a == "syntax") {
    return ContentService.createTextOutput(syntax(e.parameter.w, e.parameter.tl, e.parameter.tl_, e.parameter.c));
  }
}
