$(document).ready(function () {
    // Task 0: Setup
    console.log("jQuery is ready!");

    // Task 1: Tag, ID and class selectors
    $("h2").css("border-bottom", "2px solid #87a6c0");
    $("#headline").text("Hi, I am Akshit. Welcome to my portfolio!");
    $(".intro").css("font-size", "18px");
    $("#lightTheme").click(function () { $("body").removeClass("dark"); });
    $("#darkTheme").click(function () { $("body").addClass("dark"); });

    // Task 2: Visibility
    $("#hideFacts").click(function () { $("#facts").hide(); });
    $("#showFacts").click(function () { $("#facts").show(); });
    $("#toggleFacts").click(function () { $("#facts").toggle(); });

    // Task 3: Fade effects
    $("#fadeIn").click(function () { $(".gallery img").stop(true, true).fadeIn(500); });
    $("#fadeOut").click(function () { $(".gallery img").stop(true, true).fadeOut(500); });
    $("#fadeToggle").click(function () { $(".gallery img").stop(true, true).fadeToggle(500); });

    // Task 4: Slide effects
    $(".panelHeading").click(function () {
        $(this).parent().next(".panel").stop(true, true).slideToggle(400);
    });
    $("#openPanels").click(function () { $(".panel").stop(true, true).slideDown(400); });
    $("#closePanels").click(function () { $(".panel").stop(true, true).slideUp(400); });

    // Task 5: Add and remove skills
    function addSkill(atStart) {
        var skill = $("#newSkill").val().trim();
        if (skill === "") {
            $("#skillMessage").text("Please enter a skill first.");
            return;
        }
        var item = $("<li>").text(skill);
        if (atStart) { $("#skillList").prepend(item); }
        else { $("#skillList").append(item); }
        $("#newSkill").val("");
        $("#skillMessage").text("Skill added.");
    }
    $("#addSkill").click(function () { addSkill(false); });
    $("#prependSkill").click(function () { addSkill(true); });
    $("#removeSkill").click(function () {
        if ($("#skillList li").length === 0) {
            $("#skillMessage").text("There are no skills to remove.");
        } else {
            $("#skillList li:last").remove();
            $("#skillMessage").text("Last skill removed.");
        }
    });

    // Task 6: Change the link destination
    var showingProfile = true;
    $("#changeLink").click(function () {
        if (showingProfile) {
            $("#socialLink").attr("href", "https://github.com/akshitkhokher2007?tab=repositories").text("My GitHub Repositories");
        } else {
            $("#socialLink").attr("href", "https://github.com/akshitkhokher2007").text("My GitHub Profile");
        }
        showingProfile = !showingProfile;
    });

    // Task 7: Display input live
    $("#name, #email").on("input", function () {
        $("#liveName").text($("#name").val());
        $("#liveEmail").text($("#email").val());
    });
    $("#contactForm").on("submit", function (event) { event.preventDefault(); });

    // Task 8: Animate different skill levels and reset on the next click
    var skillsOpen = false;
    $("#animateSkills").click(function () {
        skillsOpen = !skillsOpen;
        $(".bar").each(function () {
            var target = skillsOpen ? $(this).attr("data-width") : "0%";
            $(this).stop(true).animate({ width: target }, 800);
        });
    });
});
