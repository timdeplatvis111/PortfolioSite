//Om de tekst achter elkaar in te laden faden van Blok4
        
$('#Blok4-container').waypoint(function(down) 
{
    $("#Blok4-container h1" ).addClass("show");
}, {offset: 100});
    
$('#Blok4-container').waypoint(function(up) 
{
    $("#Blok4-container h1" ).addClass("show");
}, {offset: -100});
    
// Om te zorgen dat het ook weer uit fade als je naarboven scrolled
$('#Blok3').waypoint(function(down) 
{
    $("#Blok4-container h1" ).removeClass("show");
}, {offset: 100});
    
$('#Blok3').waypoint(function(up) 
{
    $("#Blok4-container h1" ).removeClass("show");
}, {offset: -100});
    
// Voor Blok1
$('#Blok1-container').waypoint(function(down) 
{
    $("#css-typing-blok1 p").addClass("show");
    $("#css-typing-blok1 p:nth-child(1)").addClass("animate");
    $("#css-typing-blok1 p:nth-child(2)").addClass("animate");
    $("#css-typing-blok2 p:nth-child(1)").addClass("animate");
}, {offset: 50});
    
$('#Blok1-container').waypoint(function(up) 
{
    $("#css-typing-blok1 p").addClass("show");
    $("#css-typing-blok1 p:nth-child(1)").addClass("animate");
    $("#css-typing-blok1 p:nth-child(2)").addClass("animate");
    $("#css-typing-blok2 p:nth-child(1)").addClass("animate");
}, {offset: -50});

//Scrollify

$(".css-typing").delay(2000).hide(500);
$(".css-typing2").delay(8000).hide(500);

$(function() 
{
    $.scrollify
    (
    {
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
    });
});

$(document).ready(function() 
{
    $("#Blok2-container-code-main-indexhtml").hide();
    $("#Blok2-container-code-main-indexcss").hide();
    $("#Blok2-container-code-main-discordbot").hide();
});
    
//Als je klikt op Portfolio final dan hide het de andere elementen
$("#Blok2-container-code-sidebar-beneden h1#PortfolioFinal").click(function()
{
    $("#Blok2-container-code-sidebar-boven-portfolio").show();
    
    $("#Blok2-container-code-sidebar-boven-discordbot").hide();
    $("#Blok2-container-code-sidebar-boven-java").hide();
});
    
//Als je klikt op Discordbot dan hide het de andere elementen
$("#Blok2-container-code-sidebar-beneden h1#DiscordBot").click(function()
{
    $("#Blok2-container-code-sidebar-boven-discordbot").show();
    
    $("#Blok2-container-code-sidebar-boven-portfolio").hide();
    $("#Blok2-container-code-sidebar-boven-java").hide();
});
    
//Als je klikt op Java dan hide het de andere elementen
$("#Blok2-container-code-sidebar-beneden h1#Java").click(function()
{
    $("#Blok2-container-code-sidebar-boven-java").show();
    
    $("#Blok2-container-code-sidebar-boven-portfolio").hide();
    $("#Blok2-container-code-sidebar-boven-discordbot").hide();
});
    
$("#Blok2-container-code-sidebar-boven-portfolio h1#Indexhtml").click(function()
{
    $("#Blok2-container-code-main-indexcss").hide();
    $("#Blok2-container-code-main-indexhtml").show();
    $("#Blok2-container-code-main-discordbot").hide();
});
    
$("#Blok2-container-code-sidebar-boven-portfolio h1#Indexcss").click(function()
{
    $("#Blok2-container-code-main-indexhtml").hide();
    $("#Blok2-container-code-main-indexcss").show();
    $("#Blok2-container-code-main-discordbot").hide();
});
    
$("#Blok2-container-code-sidebar-boven-discordbot h1#discordbot").click(function()
{
    $("#Blok2-container-code-main-discordbot").show();
    $("#Blok2-container-code-main-indexhtml").hide();
    $("#Blok2-container-code-main-indexcss").hide();
});
    
$(function() 
{
$('#dropdown-content').hide();
$('#Blok2-container-code-bovenbar-help #File').hover( function() 
{ $('#dropdown-content').toggle(); } );
});
    
$(function() 
{
$('#dropdown-content2').hide();
$('#Blok2-container-code-bovenbar-help #Edit').hover( function() 
{ $('#dropdown-content2').toggle(); } );
});
    
$(function() 
{
$('#dropdown-content3').hide();
$('#Blok2-container-code-bovenbar-help #Find').hover( function() 
{ $('#dropdown-content3').toggle(); } );
});
    
$(function() 
{
$('#dropdown-content4').hide();
$('#Blok2-container-code-bovenbar-help #View').hover( function() 
{ $('#dropdown-content4').toggle(); } );
});
    
$(function() 
{
$('#dropdown-content5').hide();
$('#Blok2-container-code-bovenbar-help #Navigate').hover( function() 
{ $('#dropdown-content5').toggle(); } );
});
    
$(function() 
{
$('#dropdown-content6').hide();
$('#Blok2-container-code-bovenbar-help #Debug').hover( function() 
{ $('#dropdown-content6').toggle(); } );
});

