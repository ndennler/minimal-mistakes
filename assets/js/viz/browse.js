
var db = d3.select("#robot-list")

d3.csv('/assets/data/tsne_data/RobotAverages.csv', function (data){
    // console.log(data.ROBOT)
    let imageURL = "/assets/data/stimuli/" + data.ROBOT + ".PNG"
    let item = db.append('li').style('flex', '0 0 20%').append('div')
    item.append('img').attr('href', imageURL).attr("width", "100%").attr("height", "100%")
    item.append('p').text(data.ROBOT)
})