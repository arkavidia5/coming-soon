function blueing() {
    for (var i=0;i<4;i++) {
        $(".st"+i).addClass('active')
    }

    $("#logo4").removeClass('hidden')
    $("#logo5").addClass('hidden')
    $("#num5").addClass('hidden')
    $("#num4").removeClass('hidden')
    $(".coming-soon").addClass('hidden')

}

function redding() {
    for (var i=0;i<4;i++) {
        $(".st"+i).removeClass('active')
    }
    $("#logo4").addClass('hidden')
    $("#logo5").removeClass('hidden')
    $("#num5").removeClass('hidden')
    $("#num4").addClass('hidden')
    $(".coming-soon").removeClass('hidden')
}
