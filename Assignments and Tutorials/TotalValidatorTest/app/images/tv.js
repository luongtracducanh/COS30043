/*
  Copyright (c) Total Validator.
  All Rights Reserved.
  Use is subject to the terms of the licence.
*/
var pageName = "." + $(location).attr("pathname").split("/").pop();
var sentCheck = false;

//Corrected spelling mistakes
function correctSpelling(word) {
  $("span.addword").each(function() {
    var gparent;
    if ($(this).attr("data-word").toLowerCase() == word.toLowerCase()) {
      $(this).off("click").removeClass("addword").parent().removeClass("error");
      $(this).next().remove();

      //Remove the "spelling mistake" error if there are no more spelling mistakes in this text
      gparent = $(this).parent().parent();
      if (gparent.children(".error").length === 0) {
        gparent.children(".hoverparent").children().children(".problem").removeClass("problem")
          .text("Spelling mistakes (corrected): ").next(".hoverblock").remove();
      }
      //Same as above for attribute spelling mistakes
      gparent = $(this).parent().parent(".problem");
      if (gparent.children(".error").length === 0) {
        gparent.removeClass("problem")
          .text("Spelling mistakes (corrected): ").next(".hoverblock").remove();
      }
    }
  });
}

//Save to sessionStorage (capture errors with IE using local files)
function saveSetting(setting, value) {
  try {
    sessionStorage.setItem(setting, value);
  } catch(e) {}
}
function getSetting(setting) {
  var value = null;
  try {
    value = sessionStorage.getItem(setting);
  } catch(e) {}
  return value;
}

//Respond to 'More Info' radio button
function showMoreInfoEvt() {
  showMoreInfo($(this));
}
function showMoreInfo(button) {
  //Remove 'moreInfo' functions
  $("span.hoverparent").off();
  var value = button.prop("value");
  if (value == "show") {
    saveSetting("moreinfo" + pageName, "show");
    //Show all 'more info' blocks
    $("span.hoverparent span.hoverblock").css({
      "display": "inline-block",
      "position": "relative",
      "border": "1px solid",
      "max-width": "54em",
      "padding": "5px",
      "text-indent": "0"
    });
    //Add click to 'problem' text to show/hide more info
    $("span.hoverparent").on("click", moreInfo);
  }
  else if (value == "hover") {
    saveSetting("moreinfo" + pageName, "hover");
    //Make all 'more info' blocks hoverable, by defaulting to common.css settings
    $("span.hoverparent span.hoverblock").css({
      "display": "",
      "position": "",
      "border": "",
      "max-width": "",
      "padding": "",
      "text-indent": ""
    });
  }
  else if (value == "hide") {
    saveSetting("moreinfo" + pageName, "hide");
    //Hide all 'more info' blocks
    $("span.hoverparent span.hoverblock").css({
      "display": "none",
      "position": "relative",
      "border": "1px solid",
      "max-width": "54em",
      "padding": "5px",
      "text-indent": "0"
    });
    //Add click to 'problem' text to show/hide more info
    $("span.hoverparent").on("click", moreInfo);
  }
  //Make shortPage match longPage
  $("#s"+value).prop("checked", true)
  $("#"+value).prop("checked", true)
}

//Toggle 'More Info' on problems
function moreInfo() {
  var hoverBlock = $(this).children().children(".hoverblock");
  if ($(hoverBlock).is(":visible")) {
    $(hoverBlock).css("display", "none");
  }
  else {
    $(hoverBlock).css("display", "inline-block");
  }
}

//Run at document load
$(document).ready(function(){
  //START: Tabs --------------------------------------------------------
  $("#summarytabs").tabs({
    activate: function(event, ui) {
      ui.oldTab.prop('aria-selected', false);
      ui.newTab.prop('aria-selected', true);
    }
  });
  $("#pagetabs").tabs({
    activate: function(event, ui) {
      ui.oldTab.prop('aria-selected', false);
      ui.newTab.prop('aria-selected', true);
    }
  });
  //END: Tabs ----------------------------------------------------------

  //START: Page load confirmation --------------------------------------
  if (!sentCheck) {
    $.support.cors = true;  //This makes it work on IE10/11
    var port = $("#top").attr("data-port");
    if (!port) port = "9889";
    if (port != "nocheck") {
      var href = "http://127.0.0.1:" + port + "/?loaded=true";
      //Uninterested in response
      jQuery.get(href, function(responseText) {});
      sentCheck = true;
    }
  }
  //END: Page load confirmation ----------------------------------------

  //START: Summary page result sorting functions -----------------------
  //Respond to 'Sort By' radio button
  function sortResultsEvt() {
    //Check if anything to do
    if (getSetting("sortby") != $(this).prop("value"))
      sortResults($(this));
  }
  function sortResults(button) {
    //Sort the results by path
    if (button.prop("value") == "srtpath") {
      sortByPath();
      saveSetting("sortby", "srtpath");
    }
    //Sort with most issues at the top
    else if (button.prop("value") == "srtmost") {
      sortByIssues(true);
      saveSetting("sortby", "srtmost");
    }
    //Sort with most issues at the bottom
    else if (button.prop("value") == "srtleast") {
      sortByIssues(false);
      saveSetting("sortby", "srtleast");
    }
    //Unsort them (ie original order)
    else {
      $("#results").append(origOrder);
      saveSetting("sortby", "srtlinks");
    }
  }

  //Sort By Path function
  function sortByPath() {
    var results = $("#results").children("li");
    results.sort(function(a, b) {
      var at = $(a).text(),
          bt = $(b).text();

      if (at > bt) return 1;
      else if (at < bt) return -1;
      return 0;
    });
    $("#results").append(results);
  }

  //Sort By Issues function
  function sortByIssues(desc) {
    var results = $("#results").children("li");
    results.sort(function(a, b) {
      var at = $(a).text(),
          bt = $(b).text(),
          ac = -1,
          bc = -1;

      if ($(a).attr("data-issues") && $(b).attr("data-issues")) {
        ac = parseInt($(a).attr("data-issues"));
        bc = parseInt($(b).attr("data-issues"));
        if (desc) {
          if (ac < bc) return 1;
          else if (ac > bc) return -1;
        }
        else {
          if (ac > bc) return 1;
          else if (ac < bc) return -1;
        }
      }
      //Secondary Sort by Path
      if (at > bt) return 1;
      else if (at < bt) return -1;
      return 0;
    });
    $("#results").append(results);
  }
  //END: Summary page result sorting functions -------------------------

  //START: Alert Dialog stuff ------------------------------------------
  $("#alert").hide();
  $("#alert").dialog({
    autoOpen: false,
    title: "Alert",
    modal: true,
    dialogClass: "no-close",
    buttons : [{
      text : "OK",
      click : function() {
        $(this).dialog("close");
      }
    }]
  });
  //END: Alert Dialog stuff --------------------------------------------

  //START: Spellcheck stuff --------------------------------------------
  //For all browsers, except IE <10
  $("body:not([class])").each(function() {
    //Build up a list of words on the page, so can check them all at once
    var wordList = "",
        port = 9889,
        href;

    //Rewrite the old link into a span, so can add words with a click
    $("a.addword").each(function() {
      var word,
         text,
         addWordSpan;

      port = $(this).attr("data-port");
      word = $(this).attr("data-word");
      wordList += word + " ";
      text = $(this).text();
      addWordSpan = "<span class='addword' title='Add word to dictionary' data-port='" + port + "' data-word='" + word + "'>" + text + "</span>";
      $(this).replaceWith(addWordSpan);
    });

    //Send all the existing words at once, and disable any that are already saved
    if (wordList.length > 0) {
      href = "http://127.0.0.1:" + port + "/?wordlist=" + wordList + "&js=true";
      $.support.cors = true;  //This makes it work on IE10/11
      jQuery.get(href, function(responseText) {
        var words;
        if (responseText.length > 0) {
          words = responseText.split(" ");
          jQuery.each(words, function (i, word) {
            correctSpelling(word);
          });
        }
      })
      .fail(function() {
        //Fail silently
      });
    }

    //Process the new spans to add words by clicking them
    $("span.addword").on( "click", function(e){
      //Send word to Pro Tool
      var word = $(this).attr("data-word"),
          href = "http://127.0.0.1:" + $(this).attr("data-port") + "/?word=" + word + "&js=true";

      $.support.cors = true;  //This makes it work on IE10/11
      jQuery.get(href, function(responseText) {
        if (responseText.indexOf("Word") !== 0) {
          $("#alert").html(responseText).dialog("open");
        }
        else if (responseText.indexOf("Word") === 0) {
            correctSpelling(word);
        }
      })
      .fail(function() {
          $("#alert").html("Check that the Pro application is running").dialog("open");
      });
    });
  });
  //END: Spellcheck stuff ----------------------------------------------

  //START: Collapsible sections ----------------------------------------
  $(".nct").each(function() {
    //Restore state of collapsible sections, when redisplay page
    var altText,
        subClass = $(this).attr("class").split(" ")[1];
    var defaultCollapsed = subClass.indexOf("Col") != -1,
        thisBlock = ".ncb." + subClass;

    if (getSetting(thisBlock + pageName) == "collapsed" ||
        (defaultCollapsed && getSetting(thisBlock + pageName) != "expanded"))
    {
      var input = $(this).children('input').first();
      if (input.attr("alt")) {
        input.attr("alt", input.attr("alt").replace("Hide", "Show"));
        input.attr("src", "../images/right.gif");
      }
      $(thisBlock).hide();
      saveSetting(thisBlock + pageName, "collapsed");
    }
    else {
      var input = $(this).children('input').first();
      if (input.attr("alt")) {
        input.attr("alt", input.attr("alt").replace("Show", "Hide"));
        input.attr("src", "../images/down.gif");
      }
      saveSetting(thisBlock + pageName, "expanded");
    }
  }).on("click", function(e){
    //Show/Hide collapsible sections
    var thisToggle = $(this);
    if (thisToggle.attr("alt")) e.preventDefault();  //Prevent any href firing

    //Get the second class name as the unique 'block' to collapse
    var subClass = thisToggle.attr("class").split(" ")[1];
    var thisBlock = ".ncb." + subClass;

    //Toggle the matching element
    var allExpanded;
    if (getSetting(thisBlock + pageName) == "collapsed") {
      var input = $(this).children('input').first();
      if (input.attr("alt")) {
        input.attr("alt", input.attr("alt").replace("Show", "Hide"));
        input.attr("src", "../images/down.gif");
      }
      saveSetting(thisBlock + pageName, "expanded");
      allExpanded = true;
    }
    else {
      var input = $(this).children('input').first();
      if (input.attr("alt")) {
        input.attr("alt", input.attr("alt").replace("Hide", "Show"));
        input.attr("src", "../images/right.gif");
      }
      saveSetting(thisBlock + pageName, "collapsed");
      allExpanded = false;
    }

    //With single issue type letter (EPWI) you must also force all the other controls to match
    if (subClass == "ColE" || subClass == "ColP" || subClass == "ColW" || subClass == "ColI" || 
        subClass == "E" || subClass == "P" || subClass == "W" || subClass == "I") {
     $(".nct").each(function() {
        var thisToggle = $(this);
        var thisSubClass = thisToggle.attr("class").split(" ")[1];
        var thisBlock = ".ncb." + thisSubClass;

        //Ignore same one of course
        if (thisSubClass.startsWith(subClass) && thisSubClass != "ColE" && thisSubClass != "ColP" && thisSubClass != "ColW" && thisSubClass != "ColI") {
          //If expanded, make everything else expanded
          if (allExpanded) {
            if (getSetting(thisBlock + pageName) == "collapsed") {
                thisToggle.click();
            }
          }
          //Make everything else collapsed
          else {
            if (getSetting(thisBlock + pageName) == "expanded") {
                thisToggle.click();
            }
          }
        }
      });
    }
    //Normal use
    else {
      //Toggle the block between visible and hidden
      $(thisBlock).toggle(0, function() {
        var altText;
        if ($(this).is(":visible")) {
          if ($(thisToggle).attr("alt")) {
            altText = $(thisToggle).attr("alt").replace("Show", "Hide");
            $(thisToggle).attr("alt", altText);
            $(thisToggle).attr("src", "../images/down.gif");
          }
          else {
            var input = $(this).children('input').first();
            if (input.attr("alt")) {
              input.attr("alt", input.attr("alt").replace("Show", "Hide"));
              input.attr("src", "../images/down.gif");
            }
          }
          saveSetting(thisBlock + pageName, "expanded");
        }
        else {
          if ($(thisToggle).attr("alt")) {
            altText = $(thisToggle).attr("alt").replace("Hide", "Show");
            $(thisToggle).attr("alt", altText);
            $(thisToggle).attr("src", "../images/right.gif");
          }
          else {
            var input = $(this).children('input').first();
            if (input.attr("alt")) {
              input.attr("alt", input.attr("alt").replace("Hide", "Show"));
              input.attr("src", "../images/right.gif");
            }
          }
          saveSetting(thisBlock + pageName, "collapsed");
        }
      });
  }
  });
  //END: Collapsible sections ------------------------------------------

  //START: Old collapsible sections ----------------------------------------
  $(".collToggle").each(function() {
    //Restore state of collapsible sections, when redisplay page
    var altText,
        subClass = $(this).attr("class").split(" ")[1];
    var defaultCollapsed = subClass.indexOf("Col") != -1,
        thisBlock = ".collBlock." + subClass;

    if (getSetting(thisBlock + pageName) == "collapsed" ||
        (defaultCollapsed && getSetting(thisBlock + pageName) != "expanded"))
    {
      if ($(this).attr("alt")) {
        altText = $(this).attr("alt").replace("Hide", "Show");
        $(this).attr("alt", altText);
        $(this).attr("src", "../images/expand.gif");
      }
      else if (!($(this).prop("checked"))) {
        $(this).prop("checked", true);
      }
      $(thisBlock).hide();
    }
    else {
      if ($(this).attr("alt")) {
        altText = $(this).attr("alt").replace("Show", "Hide");
        $(this).attr("alt", altText);
        $(this).attr("src", "../images/contract.gif");
      }
      else if ($(this).prop("checked")) {
        $(this).prop("checked", false);
      }
    }
  }).on( "click", function(e){
    //Show/Hide collapsible sections
    var thisToggle = $(this);
    if (thisToggle.attr("alt")) e.preventDefault();  //Prevent any href firing

    //Get the second class name as the unique 'block' to collapse
    var subClass = thisToggle.attr("class").split(" ")[1];
    var thisBlock = ".collBlock." + subClass;

    $(thisBlock).toggle(0, function() {
      var altText;
      if ($(this).is(":visible")) {
        if ($(thisToggle).attr("alt")) {
          altText = $(thisToggle).attr("alt").replace("Show", "Hide");
          $(thisToggle).attr("alt", altText);
          $(thisToggle).attr("src", "../images/contract.gif");
        }
        saveSetting(thisBlock + pageName, "expanded");
      }
      else {
        if ($(thisToggle).attr("alt")) {
          altText = $(thisToggle).attr("alt").replace("Hide", "Show");
          $(thisToggle).attr("alt", altText);
          $(thisToggle).attr("src", "../images/expand.gif");
        }
        saveSetting(thisBlock + pageName, "collapsed");
      }
    });
  });
  //END: Old collapsible sections ------------------------------------------

  //START: Summary page result sorting ---------------------------------
  //Save the original order and button for 'unsorting' later
  var origOrder = $("#results").children("li"),
      sortby = getSetting("sortby");

  $("[type=radio][name=sortby]").each(function() {
    //If no session stored then default to whatever the Tool set
    if (!sortby) {
      if ($(this).prop("checked")) {
        saveSetting("sortby", $(this).prop("value"));
        sortResults($(this));
      }
    }
    //Restore session settings
    else if ($(this).prop("value") == sortby) {
      $(this).prop("checked", true);
      sortResults($(this));
    }
  }).on( "click", sortResultsEvt);
  //END: Summary page result sorting -----------------------------------

  //START: More information toggles ------------------------------------
  //Global stuff
  var globalmi = getSetting("globalmi"),
      moreInfoSetting = getSetting("moreinfo" + pageName),
      lastglobal = getSetting("globalmi" + pageName);

  if (globalmi && (!moreInfoSetting || globalmi != lastglobal)) {
    moreInfoSetting = globalmi;
    saveSetting("globalmi" + pageName, globalmi);
  }

  $("[type=radio][name=globalmi]").each(function() {
    //If no session stored then default to whatever the Tool set
    if (!globalmi) {
      if ($(this).prop("checked")) {
        saveSetting("globalmi", $(this).prop("value"));
      }
    }
    //Restore session settings
    else if ($(this).prop("value") == globalmi) {
      $(this).prop("checked", true);
    }
  }).on( "click", function() {
    if ($(this).prop("value") == "hover") {
      saveSetting("globalmi", "hover");
    }
    else if ($(this).prop("value") == "show") {
      saveSetting("globalmi", "show");
    }
    else if ($(this).prop("value") == "hide") {
      saveSetting("globalmi", "hide");
    }
  });

  //Page level stuff
  $("[type=radio][name*=moreinfo]").each(function() {
    //If no session stored then default to whatever the Tool set
    if (!moreInfoSetting) {
      if ($(this).prop("checked")) {
        saveSetting("globalmi" + pageName, $(this).prop("value"));
        showMoreInfo($(this));
      }
    }
    //Restore session settings
    else if ($(this).prop("value") == moreInfoSetting) {
      $(this).prop("checked", true);
      showMoreInfo($(this));
    }
  }).on( "click", showMoreInfoEvt);
  //END: More information toggle ---------------------------------------
});
