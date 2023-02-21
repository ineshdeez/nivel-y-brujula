let x = 0
let y = 0
let luz_x = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    led.plot(luz_x, 0)
    led.unplot(0, 0)
    if (x < 700) {
        luz_x = 0
    } else if (x < -200) {
    	
    } else if (x < 0) {
    	
    } else if (x < 200) {
    	
    } else if (x < 700) {
    	
    } else if (y < -700) {
    	
    } else if (y < -200) {
    	
    } else if (y < 0) {
    	
    } else if (y < 200) {
    	
    } else if (y < 700) {
    	
    }
})
