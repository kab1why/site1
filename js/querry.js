window.onload = () => {
  $("#btn").click(() => {
    if ($("#list").css("display") === "none") {
      $("#list").fadeIn();
    } else {
      $("#list").fadeOut();
    }
  });
};
