class Player{
    constructor(){

    }
    //how many players
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }
    //update number of player
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    //update name of player in database
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }
}