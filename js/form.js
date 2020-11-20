class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(170,0);

        var input = createInput("name");
        input.position(200,200);

        var button = createButton("play");
        button.position(260,300)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            
            var greeting = createElement("h3");
            greeting.html("HELLO "+name)
            greeting.position(200,200)
        })

    }
}
